'use client'

import { SKILLS_TECH } from '@/components/constants/skills';
import * as React from 'react';

// Enhanced data structure with years of experience and micro-descriptions
// const SKILLS_DATA = [
//     {
//         label: "Programming Languages",
//         summary: "This concise tech stack leverages Python for robust server-side development, while JavaScript and TypeScript provide dynamic, scalable client-side capabilities. HTML forms the structural backbone of web content, and CSS3 paired with LESS ensures modern, responsive, and visually appealing styling.",
//         techs: [
//             { name: "Python", percentage: 100, yearsExp: 6, desc: "Primary language for backend APIs, data scraping pipelines, and AI agent architectures." },
//             { name: "JavaScript (ES10)", percentage: 100, yearsExp: 6, desc: "Core language for interactive UI logic, client-side state, and modern script execution." },
//             { name: "TypeScript", percentage: 80, yearsExp: 3, desc: "Implemented for enterprise-scale type safety, reducing compile-time bugs across frontend apps." },
//             { name: "HTML", percentage: 95, yearsExp: 6, desc: "Semantic, accessible structural markup adhering to modern SEO and screen-reader standards." },
//             { name: "CSS3 / LESS", percentage: 80, yearsExp: 5, desc: "Responsive layout design using flexbox/grid, custom animations, and variables." },
//         ]
//     },
//     {
//         label: "Frontend Technologies & Frameworks",
//         summary: "The frontend stack combines modern and traditional frameworks to build dynamic and responsive web applications. React.js and Next.js deliver a robust, component-driven architecture with server-side rendering, while TailwindCSS and ShadCN provide efficient styling.",
//         techs: [
//             { name: "React.js / ReactJS", percentage: 90, yearsExp: 4, desc: "Component-driven SPA architectures, hooks, custom state management, and lifecycle optimization." },
//             { name: "NextJS", percentage: 85, yearsExp: 3, desc: "Server-side rendering (SSR), static site generation (SSG), and file-based API routing." },
//             { name: "TailwindCSS", percentage: 85, yearsExp: 4, desc: "Utility-first layout building, design tokens, and highly rapid responsive design execution." },
//             { name: "ShadCN", percentage: 80, yearsExp: 2, desc: "Radix UI primitives tailored for custom accessible component libraries and dashboards." },
//             { name: "Jquery", percentage: 80, yearsExp: 5, desc: "Legacy application support, AJAX interactions, and direct DOM manipulation hooks." },
//             { name: "KnockoutJS", percentage: 75, yearsExp: 2, desc: "MVVM framework integration for legacy dynamic data-binding systems." },
//         ]
//     },
//     {
//         label: "Backend Technologies & Frameworks",
//         summary: "The backend stack leverages robust Python frameworks like FastAPI, Flask, and Django to build scalable RESTful applications, with LangServe and LangChain enhancing agent creation and advanced workflows.",
//         techs: [
//             { name: "FastAPI", percentage: 90, yearsExp: 3, desc: "High-performance microservices, automated OpenAPI documentation, and asynchronous handling." },
//             { name: "Flask", percentage: 85, yearsExp: 4, desc: "Lightweight routing and server configurations for quick feature MVPs and tool integrations." },
//             { name: "Django", percentage: 85, yearsExp: 3, desc: "Monolithic business applications utilizing the built-in ORM, admin panel, and session layers." },
//             { name: "LangServe", percentage: 90, yearsExp: 2, desc: "Deploying LangChain runnables and chains directly as highly performant production APIs." },
//             { name: "LangChain", percentage: 80, yearsExp: 2, desc: "Orchestrating complex LLM workflows, context retrieval chains, and autonomous agents." },
//             { name: "Python Requests Module", percentage: 90, yearsExp: 6, desc: "Building resilient third-party API clients with session pooling, retries, and error mapping." },
//             { name: "AWS Lambda (Python)", percentage: 85, yearsExp: 3, desc: "Serverless compute triggers for event-driven backend tasks and background pipelines." },
//         ]
//     },
//     {
//         label: "Database Technologies & Architecture",
//         summary: "This database technology stack embraces both traditional relational systems and modern NoSQL solutions, optimized for relational constraints or high-performance vector retrieval schemas.",
//         techs: [
//             { name: "MySQL", percentage: 90, yearsExp: 5, desc: "Structured indexing, complex joins, and scalable data storage for e-commerce or user platforms." },
//             { name: "PostgreSQL", percentage: 95, yearsExp: 4, desc: "Advanced data integrity models, window functions, and enterprise transactional operations." },
//             { name: "SQLite", percentage: 80, yearsExp: 4, desc: "Embedded structures used for lightweight file persistence, unit testing, and fast localized caching." },
//             { name: "MongoDB", percentage: 80, yearsExp: 3, desc: "Document-store databases utilized for dynamic, schema-less event logs and user profiles." },
//             { name: "Supabase", percentage: 90, yearsExp: 2, desc: "Cloud-hosted Postgres management including Edge functions, real-time sync, and rapid backend scaffolding." },
//             { name: "Pinecone", percentage: 85, yearsExp: 2, desc: "Vector indexing and embedding storage supporting semantic search and long-term agent memory." },
//             { name: "Relational DB Design", percentage: 85, yearsExp: 5, desc: "Designing ERD architectures, third-normal-form (3NF) structures, and explicit foreign key constraints." },
//             { name: "No-SQL Integration", percentage: 80, yearsExp: 3, desc: "Hybrid system architectures blending structured data targets with JSON document schemas." },
//         ]
//     },
//     {
//         label: "API Design, Development, & Security",
//         summary: "This API toolkit emphasizes robust RESTful design paired with strong security measures—leveraging token-based models and automated interactive documentation layers.",
//         techs: [
//             { name: "REST API Development", percentage: 90, yearsExp: 5, desc: "Idempotent resource route structures, predictable JSON contracts, and precise HTTP status signaling." },
//             { name: "JWT & Token Security", percentage: 85, yearsExp: 4, desc: "Stateless security architectures managing cryptographically signed user payloads and refresh rotations." },
//             { name: "OAuth", percentage: 80, yearsExp: 3, desc: "Third-party authorization schemes supporting single sign-on (SSO) handshakes with Google/GitHub." },
//             { name: "CORS Policies", percentage: 80, yearsExp: 4, desc: "Cross-Origin Resource Sharing restrictions configured securely to isolate frontend and backend networks." },
//             { name: "API Documentation", percentage: 80, yearsExp: 4, desc: "Writing machine-readable specifications using Swagger UI, ReDoc templates, and Postman specs." },
//         ]
//     },
//     {
//         label: "Payment, Data Processing & External Integrations",
//         summary: "This integration suite unifies external services to enhance application functionality, enabling secure financial transactions, unstructured file mutations, and foundational LLM integrations.",
//         techs: [
//             { name: "Payment Gateways", percentage: 80, yearsExp: 3, desc: "Handling webhook state changes and secure tokenization with Stripe and PayPal." },
//             { name: "Video Analysis", percentage: 80, yearsExp: 1, desc: "Passing multi-modal video prompts directly through the Gemini API framework for scene evaluation." },
//             { name: "PDF Parsing & OCR", percentage: 85, yearsExp: 3, desc: "Extracting structured data from raw invoices or scans using optical character recognition libraries." },
//             { name: "CSV File Processing", percentage: 85, yearsExp: 3, desc: "Memory-efficient chunked streaming pipelines built to parse extremely large 50GB file limits." },
//             { name: "Chat Completion Models", percentage: 90, yearsExp: 3, desc: "Engineering prompts and tuning temperature metrics for models like Claude 3.5 and GPT-4o." },
//             { name: "Agent Embeddings", percentage: 85, yearsExp: 2, desc: "Converting content strings into dense mathematical arrays to perform lightning-fast similarity matches." },
//         ]
//     },
//     {
//         label: "Deployment & Infrastructure",
//         summary: "This deployment setup leverages cloud-native compute targets alongside process insulation networks, guaranteeing scalable service uptime and rapid deployment intervals.",
//         techs: [
//             { name: "Ubuntu AWS EC2", percentage: 90, yearsExp: 4, desc: "Provisioning Linux virtual instances, secure security groups, and automated cron setups." },
//             { name: "NGINX Reverse Proxy", percentage: 85, yearsExp: 4, desc: "Configuring upstream processes, dynamic route shielding, and strict Certbot SSL certificates." },
//             { name: "Docker & Docker Compose", percentage: 85, yearsExp: 3, desc: "Isolating runtime applications inside clean containers to eliminate production variance bugs." },
//             { name: "CI/CD Pipelines", percentage: 80, yearsExp: 3, desc: "Configuring automated test-runners and continuous release deployments via GitHub Actions." },
//             { name: "TMUX Session Handling", percentage: 80, yearsExp: 4, desc: "Managing multiple long-running background CLI operations securely inside terminal workspaces." },
//         ]
//     }
// ];

const Skills = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center pt-12 bg-gray-50/30">
            <div className="text-center relative flex flex-col items-center w-[90%] md:w-[75%] max-w-6xl">
                
                {/* Header Section */}
                <h2 className="!font-raleway text-[#45505b] text-[32px] font-bold pb-2">Skills & Abilities</h2>
                <span className="border-b border-b-solid border-b-gray-300 w-[160px]"></span>
                <span className="border-b-2 border-b-solid border-b-[#0563bb] w-[80px] mb-12"></span>

                {/* Categories Wrapper */}
                {Object.values(SKILLS_TECH).map((section, index) => (
                    <div key={index} className="w-full p-6 md:p-8 shadow-md rounded-xl mb-10 bg-white border border-gray-100 text-left">
                        <h3 className="text-xl pt-2 pb-3 text-[#0563bb] font-bold tracking-wide border-b border-gray-100">
                            {section.label}
                        </h3>
                        <p className="text-sm md:text-base py-4 !font-raleway text-gray-500 leading-relaxed">
                            {section.summary}
                        </p>
                        
                        {/* Interactive Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-4 w-full">
                            {section.techs.map((tech, techIndex) => (
                                <div 
                                    key={techIndex} 
                                    className="w-full flex flex-col gap-y-2 p-4 rounded-xl bg-gray-50/50 border border-gray-100 hover:shadow-sm transition-all duration-300"
                                >
                                    {/* Tech Title Metadata Headers */}
                                    <div className="flex flex-row justify-between items-center">
                                        <div className="flex items-center gap-x-2.5">
                                            <p className="text-sm font-semibold text-gray-700">{tech.tech}</p>
                                            <span className="text-[11px] font-bold text-[#0563bb] bg-blue-50/80 border border-blue-100 px-2 py-0.5 rounded-md whitespace-nowrap">
                                                {tech.years} {tech.years === 1 ? 'yr' : 'yrs'}
                                            </span>
                                        </div>
                                        <p className="text-xs font-bold text-gray-400">{tech.rate * 100}%</p>
                                    </div>
                                    
                                    {/* Graphic Performance Bar */}
                                    <span className="bg-gray-200/60 w-full h-[6px] relative rounded-full overflow-hidden">
                                        <span 
                                            className="bg-[#0563bb] h-full absolute left-0 top-0 z-[2] transition-all duration-500 ease-in-out rounded-full" 
                                            style={{ width: `${tech.rate * 100}%` }}
                                        ></span>
                                    </span>
                                    
                                    {/* Tech Context Description Text */}
                                    <p className="text-xs text-gray-500 mt-1 leading-relaxed font-normal">
                                        {tech.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Skills;
