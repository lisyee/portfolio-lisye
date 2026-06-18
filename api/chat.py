# api/chat.py
from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse
import boto3
import json
import os

app = FastAPI()

# Vercel will read this variable automatically from settings dashboard
client = boto3.client(
    'bedrock-agent-runtime',
    region_name='ap-southeast-2',
    aws_access_key_id=os.environ.get('AWS_ACCESS_KEY_ID'),
    aws_secret_access_key=os.environ.get('AWS_SECRET_ACCESS_KEY')
)

async def generate_bedrock_stream(user_message: str):
    try:
        response = client.invoke_agent(
            agentId='GFTJXV4A2X',
            agentAliasId='YQND3POFOH',
            inputText=user_message,
            sessionId='sesi-portfolio-user'
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
async def chat_endpoint(request: Request):
    # Get the input from user
    body = await request.json()
    user_message = body.get("message", "Halo Nova")
    
    # Return the answer or output
    return StreamingResponse(generate_bedrock_stream(user_message), media_type="text/plain")

