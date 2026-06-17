const SKILLS_TECH = Object.freeze({
    PROGMRAMMING_LANGUAGE: {
        label: "Programming Languages",
        summary: "Programming expertise spans over a decade, combining Python’s versatility in backend systems and AI workflows with JavaScript’s dominance in frontend development. TypeScript further strengthens your ability to build scalable, maintainable applications by introducing type safety. This combination makes you highly effective across the full stack, capable of delivering robust server-side logic and dynamic client-side experiences.",
        techs: [
            { tech: "Python", years: 11, description: "Backend systems, APIs, AI/ML workflows, data pipelines", rate: 1 },
            { tech: "JavaScript", years: 11, description: "Interactive UIs, frontend frameworks, full-stack development", rate: 1 },
            { tech: "TypeScript", years: 8, description: "Type-safe, scalable applications, maintainable large codebases", rate: 0.8 }
        ]
    },

    BACKEND: {
        label: "Backend",
        summary: "Excel at backend architecture, balancing enterprise-grade frameworks with lightweight microservices. Django provides robust, structured applications, while Flask and FastAPI enable modular, high-performance APIs. Your extensive REST API experience ensures standardized communication across distributed systems, complemented by GraphQL for flexible queries. NestJS adds versatility in Node.js environments, showcasing your adaptability across ecosystems.",
        techs: [
            { tech: "Django", years: 3, description: "Enterprise-level applications with ORM, authentication, and admin tools", rate: 0.7 },
            { tech: "Flask", years: 4, description: "Lightweight microservices and REST APIs for modular architectures", rate: 0.8 },
            { tech: "FastAPI", years: 3, description: "Async-ready, high-performance APIs with automatic validation and OpenAPI support", rate: 0.9 },
            { tech: "REST API", years: 9, description: "Designing standardized HTTP APIs, authentication, versioning, and documentation", rate: 1 },
            { tech: "GraphQL", years: 1, description: "Flexible client-driven queries and schema design for efficient data fetching", rate: 0.2 },
            { tech: "NestJS", years: 1, description: "Structured, modular Node.js backend framework for scalable services", rate: 1 }
        ]
    },

    FRONTEND: {
        label: "Frontend",
        summary: "Frontend expertise ensures responsive, accessible, and visually appealing applications. With ReactJS and NextJS, you deliver dynamic, scalable interfaces, while TypeScript enhances reliability. Core web technologies like HTML5 and CSS3 provide a strong foundation, and modern UI libraries such as TailwindCSS, ShadCN, ChakraUI, and MaterialUI allow you to craft polished, reusable components that elevate user experience.",
        techs: [
            { tech: "ReactJS", years: 9, description: "Component-driven UI development, state management, hooks, and ecosystem libraries", rate: 1 },
            { tech: "NextJS", years: 5, description: "Server-side rendering, static generation, routing, and performance optimizations", rate: 1 },
            { tech: "HTML5", years: 11, description: "Semantic markup, accessibility, and modern web standards", rate: 1 },
            { tech: "CSS/CSS3", years: 11, description: "Responsive layouts, cross-browser compatibility, and modern CSS features", rate: 1 },
            { tech: "TailwindCSS", years: 5, description: "Utility-first styling for rapid, consistent UI development", rate: 1 },
            { tech: "ShadCN", years: 3, description: "Composable UI primitives and design-system friendly components", rate: 0.9 },
            { tech: "ChakraUI", years: 3, description: "Accessible, themeable component library for building consistent UIs", rate: 0.7 },
            { tech: "MaterialUI", years: 3, description: "Material Design components for polished, consistent interfaces", rate: 0.7 }
        ]
    },

    DATABASES: {
        label: "Databases",
        summary: "Skilled in both relational and NoSQL databases, ensuring data integrity and scalability. MySQL and PostgreSQL highlight your ability to design normalized schemas and optimize queries, while SQLite demonstrates lightweight solutions for smaller applications. MongoDB and CouchDB showcase your adaptability to schema-less, document-based storage, enabling flexibility in handling unstructured data.",
        techs: [
            { tech: "MySQL", years: 6, description: "Relational schema design, indexing, query optimization, and replication", rate: 0.9 },
            { tech: "PostgreSQL", years: 3, description: "Advanced relational features, complex queries, and data integrity", rate: 0.8 },
            { tech: "SQLite", years: 3, description: "Lightweight, embedded database for small apps and prototypes", rate: 0.7 },
            { tech: "MongoDB", years: 2, description: "Document-based storage for flexible schemas and rapid iteration", rate: 0.8 },
            { tech: "CouchDB", years: 2, description: "Distributed, document-oriented database for offline-first and sync scenarios", rate: 0.5 }
        ]
    },

    CLOUD_SERVICES: {
        label: "Cloud Services",
        summary: "Highly proficient in AWS, designing secure, scalable cloud infrastructures. EC2 and S3 form the backbone of your deployments, while Lambda enables serverless, event-driven workflows. RDS provides managed relational databases, and ECS/ECR demonstrate container orchestration. EventBridge, SQS, and SNS highlight your ability to build event-driven architectures and messaging pipelines, ensuring resilient microservice communication.",
        techs: [
            { tech: "AWS EC2", years: 6, description: "Provisioning and managing virtual machines for application hosting", rate: 0.8 },
            { tech: "AWS S3", years: 5, description: "Object storage for static assets, backups, and data lakes", rate: 0.8 },
            { tech: "AWS Lambda", years: 3, description: "Serverless functions for event-driven processing and microtasks", rate: 0.9 },
            { tech: "AWS RDS", years: 3, description: "Managed relational databases with backups, scaling, and maintenance", rate: 0.7 },
            { tech: "AWS ECS", years: 1, description: "Container orchestration for Docker workloads", rate: 0.7 },
            { tech: "AWS ECR", years: 1, description: "Container image registry and lifecycle management", rate: 0.7 },
            { tech: "AWS EventBridge", years: 1, description: "Event bus for building decoupled, event-driven systems", rate: 0.8 },
            { tech: "AWS SQS", years: 1, description: "Reliable queueing for asynchronous message processing", rate: 0.5 },
            { tech: "AWS SNS", years: 1, description: "Pub/sub notifications and fan-out messaging", rate: 0.5 }
        ]
    },

    TOOLS: {
        label: "Tools",
        summary: "Toolkit covers essential DevOps, deployment, and productivity tools. Nginx ensures secure deployments and load balancing, Git supports collaborative version control, and Docker provides reproducible environments. IDEs like PyCharm, WebStorm, and VS Code enhance productivity, while newer editors such as WindSurf, Cursor, and Claude Code demonstrate your adaptability to emerging technologies.",
        techs: [
            { tech: "Nginx", years: 2, description: "Reverse proxy, load balancing, SSL termination, and static hosting", rate: 0.8 },
            { tech: "Git", years: 9, description: "Source control, branching strategies, and collaborative workflows", rate: 1 },
            { tech: "Docker", years: 2, description: "Containerization for consistent development and deployment environments", rate: 0.8 },
            { tech: "PyCharm", years: 6, description: "Full-featured Python IDE for development and debugging", rate: 0.8 },
            { tech: "WebStorm", years: 6, description: "IDE optimized for JavaScript and TypeScript development", rate: 0.8 },
            { tech: "VS Code", years: 4, description: "Lightweight, extensible editor for multi-language development", rate: 1 },
            { tech: "WindSurf", years: 1, description: "Modern coding environment (editor/IDE)", rate: 0.7},
            { tech: "Cursor", years: 1, description: "AI-assisted coding environment for productivity", rate: 0.8 },
            { tech: "Claude Code", years: 1, description: "AI-powered development tool for code generation and assistance", rate: 1 }
        ]
    },

    GENERATIVE_AI: {
        label: "Generative AI",
        summary: "Deeply engaged in the AI ecosystem, integrating large language models and frameworks into applications. OpenAI/ChatGPT, GeminiAI, and Anthropic Claude power advanced chat completion and generative tasks. LangServe, LangChain, and LangGraph enable AI agent development and orchestration, while HuggingFace provides pretrained models and embeddings. Tools like CoPilot and Claude Code enhance productivity through AI-assisted coding.",
        techs: [
            { tech: "OpenAI/ChatGPT", years: 2, description: "Generative chat models for assistants, summarization, and content generation", rate: 1 },
            { tech: "GeminiAI", years: 2, description: "Advanced AI integration for multimodal and conversational tasks", rate: 0.8 },
            { tech: "Anthropic Claude", years: 1, description: "LLM for safe, context-aware chat completions", rate: 1 },
            { tech: "LangServe", years: 1, description: "Serving and deploying LLM-based agents and APIs", rate: 0.7 },
            { tech: "LangChain", years: 1, description: "Orchestrating LLM workflows, chains, and prompt engineering", rate: 0.7 },
            { tech: "LangGraph", years: 1, description: "Agent-based AI systems and graph-oriented orchestration", rate: 0.6 },
            { tech: "HuggingFace", years: 2, description: "Pretrained models, transformers, and embedding utilities", rate: 0.8 },
            { tech: "CoPilot", years: 2, description: "AI-assisted coding for productivity and code suggestions", rate: 1 }
        ]
    },

    API_DESIGN_DEV_SEC: {
        label: "API Design, Development, & Security",
        summary: "This API toolkit emphasizes robust RESTful design paired with strong security measures—leveraging token-based models and automated interactive documentation layers.",
        techs: [
            { tech: "REST API Development", rate: 0.9, years: 5, description: "Idempotent resource route structures, predictable JSON contracts, and precise HTTP status signaling." },
            { tech: "JWT & Token Security", rate: 0.85, years: 4, description: "Stateless security architectures managing cryptographically signed user payloads and refresh rotations." },
            { tech: "OAuth", rate: 0.8, years: 3, description: "Third-party authorization schemes supporting single sign-on (SSO) handshakes with Google/GitHub." },
            { tech: "CORS Policies", rate: 0.8, years: 4, description: "Cross-Origin Resource Sharing restrictions configured securely to isolate frontend and backend networks." },
            { tech: "API Documentation", rate: 0.8, years: 4, description: "Writing machine-readable specifications using Swagger UI, ReDoc templates, and Postman specs." },
        ]
    },
    PAYMENT_DATA_PROC_EXT_INT: {
        label: "Payment, Data Processing & External Integrations",
        summary: "This integration suite unifies external services to enhance application functionality, enabling secure financial transactions, unstructured file mutations, and foundational LLM integrations.",
        techs: [
            { tech: "Payment Gateways", rate: 0.8, years: 3, description: "Handling webhook state changes and secure tokenization with Stripe and PayPal." },
            { tech: "Video Analysis", rate: 0.8, years: 1, description: "Passing multi-modal video prompts directly through the Gemini API framework for scene evaluation." },
            { tech: "PDF Parsing & OCR", rate: 0.85, years: 3, description: "Extracting structured data from raw invoices or scans using optical character recognition libraries." },
            { tech: "CSV File Processing", rate: 0.85, years: 3, description: "Memory-efficient chunked streaming pipelines built to parse extremely large 50GB file limits." },
            { tech: "Chat Completion Models", rate: 0.9, years: 3, description: "Engineering prompts and tuning temperature metrics for models like Claude 3.5 and GPT-4o." },
            { tech: "Agent Embeddings", rate: 0.85, years: 2, description: "Converting content strings into dense mathematical arrays to perform lightning-fast similarity matches." },
        ]
    },
    DEPLOYMENT_INFRA: {
        label: "Deployment & Infrastructure",
        summary: "This deployment setup leverages cloud-native compute targets alongside process insulation networks, guaranteeing scalable service uptime and rapid deployment intervals.",
        techs: [
            { tech: "Ubuntu AWS EC2", rate: 0.9, years: 4, description: "Provisioning Linux virtual instances, secure security groups, and automated cron setups." },
            { tech: "NGINX Reverse Proxy", rate: 0.85, years: 4, description: "Configuring upstream processes, dynamic route shielding, and strict Certbot SSL certificates." },
            { tech: "Docker & Docker Compose", rate: 0.85, years: 3, description: "Isolating runtime applications inside clean containers to eliminate production variance bugs." },
            { tech: "CI/CD Pipelines", rate: 0.80, years: 3, description: "Configuring automated test-runners and continuous release deployments via GitHub Actions." },
            { tech: "TMUX Session Handling", rate: 0.80, years: 4, description: "Managing multiple long-running background CLI operations securely inside terminal workspaces." },
        ]
    }
});


export {
    SKILLS_TECH
}
