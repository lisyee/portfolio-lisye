# api/chat.py
from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse
import boto3
import json
import os

app = FastAPI()

async def generate_bedrock_stream(user_message: str, session_id: str):
    try:
        client = boto3.client(
            'bedrock-agent-runtime',
            region_name=os.environ.get('AWS_REGION', 'ap-southeast-2'),
            aws_access_key_id=os.environ.get('AWS_ACCESS_KEY_ID'),
            aws_secret_access_key=os.environ.get('AWS_SECRET_ACCESS_KEY')
        )
        
        response = client.invoke_agent(
            agentId='GFTJXV4A2X',
            agentAliasId='YQND3POFOH',
            inputText=user_message,
            sessionId=session_id
        )
        
        completion = response.get('completion')
        for event in completion:
            chunk = event.get('chunk')
            if chunk:
                text = chunk.get('bytes').decode('utf-8')
                # Send the text that received from AWS
                yield text
    except Exception as e:
        yield f"Error: {str(e)}"

@app.post("/api/chat")
@app.post("/")
async def chat_endpoint(request: Request):
    try:
        body = await request.json()
        user_message = body.get("message", "Hello Nova")
        
        session_id = body.get("sessionId", "portfolio-default-fallback")
        
        return StreamingResponse(generate_bedrock_stream(user_message, session_id), media_type="text/plain")
    except Exception as e:
        logger.error(f"Global Endpoint Crash: {str(e)}")
        return {"error": "Internal Server Error", "details": str(e)}
