# portfolio-lisye

✨ Core Features & Interaction Guide
1. Floating AI Chatbox (RAG & Session Sandbox)

Located discreetly in the bottom-right corner of the viewport, this widget opens an isolated, streaming sandbox conversational window.

    Intent Routing Guardrail: The backend intercepts cold-start requests. If you pass casual greetings like "hi", "hello", or "how are you", the agent bypasses the database to issue a warm, tailored welcome instantly.

    Deep Thesis Querying: If you inquire about advanced engineering concepts, student questionnaires, predictive GPA models, or early academic warning systems, the agent triggers semantic search across the vectorized knowledge base using the Amazon Nova model.

    Real-Time Token Streaming: Implemented using browser-native ReadableStream and TextDecoder APIs to parse binary chunks on the fly, mimicking a human-like typing effect without blocking UI responsiveness.

2. Postgres-Backed Guestbook

Positioned directly below the Awards section, this component handles live user interaction.

    Live Data Persistence: Submitting a comment fires an asynchronous client request executing raw SQL INSERT mutations into a managed cloud database.

    Optimistic / Real-Time Feed: The rolling layout renders newly written records immediately from @vercel/postgres, refreshing the feed state dynamically without executing a full-page browser reload.

3. Adaptive UI Framework

Supports three dynamic, hot-swappable client-side styling themes mapping to different development aesthetics: Corporate, Minimalist, and Brutalist.
