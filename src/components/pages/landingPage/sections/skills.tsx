'use client'

import * as React from 'react';


const Skills = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center pt-12">
            <div className="text-center relative flex flex-col items-center relative w-[85%] md:w-[60%]">
                <p className="!font-raleway text-[#45505b] text-[32px] font-bold pb-4">Skills</p>
                <span className="border-b border-b-solid border-b-black w-[200px]">{}</span>
                <span className="border-b border-b-solid border-b-[#0563bb] w-[100px]">{}</span>

                <div className="w-full p-8 shadow-xl mb-12">
                    <p className="lead text-center md:text-left pt-8 pb-2 underline">Programming Languages</p>
                    <p className="lead pb-8 !font-raleway text-[#45505b] text-center md:text-left text-pretty">
                        This concise tech stack leverages Python for robust server-side development, while JavaScript
                        (ES10) and TypeScript provide dynamic, scalable client-side capabilities. HTML forms the
                        structural backbone of web content, and CSS3 paired with LESS ensures modern, responsive, and
                        visually appealing styling.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 w-full">
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">Python</p>
                                <p className="text-sm leads text-[#45505b]">100%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                            <span className="bg-[#0563bb] h-[10px] w-full absolute left-0 top-0 z-[2]">{}</span>
                        </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">JavaScript (ES10)</p>
                                <p className="text-sm leads text-[#45505b]">100%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                            <span className="bg-[#0563bb] h-[10px] w-full absolute left-0 top-0 z-[2]">{}</span>
                        </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">TypeScript</p>
                                <p className="text-sm leads text-[#45505b]">80%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                            <span className="bg-[#0563bb] h-[10px] w-[80%] absolute left-0 top-0 z-[2]">{}</span>
                        </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">HTML</p>
                                <p className="text-sm leads text-[#45505b]">95%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                            <span className="bg-[#0563bb] h-[10px] w-[95%] absolute left-0 top-0 z-[2]">{}</span>
                        </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">CSS3 / LESS</p>
                                <p className="text-sm leads text-[#45505b]">80%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                            <span className="bg-[#0563bb] h-[10px] w-[85%] absolute left-0 top-0 z-[2]">{}</span>
                        </span>
                        </div>
                    </div>
                </div>

                <div className="w-full p-8 shadow-xl mb-12">
                    <p className="lead text-center md:text-left pt-8 pb-2 underline">Frontend Technologies & Frameworks</p>
                    <p className="lead pb-8 !font-raleway text-[#45505b] text-center md:text-left text-pretty">
                        The frontend stack combines modern and traditional frameworks to build dynamic and responsive web
                        applications. React.js and Next.js deliver a robust, component-driven architecture with server-side
                        rendering, while TailwindCSS and ShadCN provide efficient, utility-first styling for sleek UI
                        designs. Additionally, jQuery and KnockoutJS offer reliable solutions for DOM manipulation and
                        data binding in legacy or lighter-weight applications.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 w-full">
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">React.js / ReactJS</p>
                                <p className="text-sm leads text-[#45505b]">90%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[90%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">NextJS</p>
                                <p className="text-sm leads text-[#45505b]">85%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                            <span className="bg-[#0563bb] h-[10px] w-[85%] absolute left-0 top-0 z-[2]">{}</span>
                        </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">TailwindCSS</p>
                                <p className="text-sm leads text-[#45505b]">85%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                            <span className="bg-[#0563bb] h-[10px] w-[85%] absolute left-0 top-0 z-[2]">{}</span>
                        </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">ShadCN</p>
                                <p className="text-sm leads text-[#45505b]">80%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                            <span className="bg-[#0563bb] h-[10px] w-[80%] absolute left-0 top-0 z-[2]">{}</span>
                        </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">Jquery</p>
                                <p className="text-sm leads text-[#45505b]">80%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                            <span className="bg-[#0563bb] h-[10px] w-[80%] absolute left-0 top-0 z-[2]">{}</span>
                        </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">KnockoutJS</p>
                                <p className="text-sm leads text-[#45505b]">75%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                            <span className="bg-[#0563bb] h-[10px] w-[75%] absolute left-0 top-0 z-[2]">{}</span>
                        </span>
                        </div>
                    </div>
                </div>

                <div className="w-full p-8 shadow-xl mb-12">
                    <p className="lead text-center md:text-left pt-8 pb-2 underline">Backend Technologies & Frameworks</p>
                    <p className="lead pb-8 !font-raleway text-[#45505b] text-center md:text-left text-pretty">
                        The backend stack leverages robust Python frameworks like FastAPI, Flask, and Django to
                        build scalable RESTful applications, with LangServe and LangChain enhancing agent creation
                        and advanced workflows. Complemented by the Python Requests module for seamless HTTP
                        interactions and AWS Lambda for serverless execution, this technology suite delivers a
                        flexible and powerful backend solution.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 w-full">
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">FastAPI</p>
                                <p className="text-sm leads text-[#45505b]">90%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[90%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">Flask</p>
                                <p className="text-sm leads text-[#45505b]">85%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[85%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">Django</p>
                                <p className="text-sm leads text-[#45505b]">85%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[85%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">LangServe (built on FastAPI)</p>
                                <p className="text-sm leads text-[#45505b]">90%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[90%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">LangChain</p>
                                <p className="text-sm leads text-[#45505b]">80%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[80%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">Python Requests Module</p>
                                <p className="text-sm leads text-[#45505b]">90%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[90%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">AWS Lambda (Python)</p>
                                <p className="text-sm leads text-[#45505b]">85%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[85%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full p-8 shadow-xl mb-12">
                    <p className="lead text-center md:text-left pt-8 pb-2 underline">Database Technologies & Architecture</p>
                    <p className="lead pb-8 !font-raleway text-[#45505b] text-center md:text-left text-pretty">
                        This database technology stack embraces both traditional relational systems and modern
                        NoSQL solutions. It includes MySQL, PostgreSQL, and SQLite for structured data management,
                        alongside MongoDB for flexible database needs, enhanced by Supabase for containerized
                        PostgreSQL management. Additionally, Pinecone is utilized for efficient vector storage,
                        while strong relational design practices such as ERD creation and normalization, combined
                        with NoSQL integration, ensure a scalable and versatile data architecture.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 w-full">
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">MySQL</p>
                                <p className="text-sm leads text-[#45505b]">90%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[90%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">PostgreSQL</p>
                                <p className="text-sm leads text-[#45505b]">95%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[95%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">SQLite</p>
                                <p className="text-sm leads text-[#45505b]">80%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[80%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">MongoDB</p>
                                <p className="text-sm leads text-[#45505b]">80%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[80%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-xs md:text-sm leads text-[#45505b]">Supabase (for containerized PostgreSQL management)</p>
                                <p className="text-sm leads text-[#45505b]">90%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[90%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">Pinecone (vector database)</p>
                                <p className="text-sm leads text-[#45505b]">85%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[85%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">Relational Database Design (ERD, normalization)</p>
                                <p className="text-sm leads text-[#45505b]">85%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[85%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">No-SQL Database Integration</p>
                                <p className="text-sm leads text-[#45505b]">80%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[80%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full p-8 shadow-xl mb-12">
                    <p className="lead text-center md:text-left pt-8 pb-2 underline">API Design, Development, & Security</p>
                    <p className="lead pb-8 !font-raleway text-[#45505b] text-center md:text-left text-pretty">
                        This API toolkit emphasizes robust RESTful design paired with strong security
                        measures—leveraging JWT authentication, token-based systems, and OAuth—while enforcing
                        CORS policies to manage cross-domain interactions. Comprehensive documentation through
                        tools like Swagger, Redoc, and Postman further ensures clarity and ease of use for developers.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 w-full">
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">REST API Development</p>
                                <p className="text-sm leads text-[#45505b]">90%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[90%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">JWT Authentication & Token-Based Systems</p>
                                <p className="text-sm leads text-[#45505b]">85%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[85%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">OAuth</p>
                                <p className="text-sm leads text-[#45505b]">80%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[80%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">CORS Policies</p>
                                <p className="text-sm leads text-[#45505b]">80%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[80%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-xs md:text-sm leads text-[#45505b]">API Documentation Tools (Swagger, Redoc, Postman)</p>
                                <p className="text-sm leads text-[#45505b]">80%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[80%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full p-8 shadow-xl mb-12">
                    <p className="lead text-center md:text-left pt-8 pb-2 underline">Payment, Data Processing & External Integrations</p>
                    <p className="lead pb-8 !font-raleway text-[#45505b] text-center md:text-left text-pretty">
                        This integration suite unifies external services to enhance application functionality by
                        enabling secure transactions through PayPal and Stripe, incorporating video analysis via
                        GeminiAPI, and automating data extraction with PDF parsing and OCR using Python libraries.
                        It also handles large-scale CSV file processing, leverages advanced chat completion models
                        like OpenAI’s GPT-3.5, GPT-4, and Anthropic Claude for dynamic conversational interactions,
                        and builds intelligent agents using OpenAI embedding models.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 w-full">
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">Payment Gateways (PayPal, Stripe)</p>
                                <p className="text-sm leads text-[#45505b]">80%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[80%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">Video Analysis (GeminiAPI)</p>
                                <p className="text-sm leads text-[#45505b]">80%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[80%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">PDF Parsing & OCR (Python libraries)</p>
                                <p className="text-sm leads text-[#45505b]">85%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[85%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-xs md:text-sm leads text-[#45505b]">CSV File Processing (including large-scale 50GB files)</p>
                                <p className="text-sm leads text-[#45505b]">85%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[85%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-[10px] md:text-sm leads text-[#45505b]">Chat Completion Models (OpenAI’s GPT-3.5, GPT-4, Anthropic Claude)</p>
                                <p className="text-sm leads text-[#45505b]">90%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[90%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">Agent Building Using OpenAI Embedding Models</p>
                                <p className="text-sm leads text-[#45505b]">85%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[85%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full p-8 shadow-xl mb-12">
                    <p className="lead text-center md:text-left pt-8 pb-2 underline">Deployment & Infrastructure</p>
                    <p className="lead pb-8 !font-raleway text-[#45505b] text-center md:text-left text-pretty">
                        This robust deployment and infrastructure setup leverages Ubuntu AWS EC2 for scalable hosting,
                        with NGINX managing reverse proxy and secure HTTPS/SSL/TLS configurations. TMUX is used for
                        effective session management, while Docker and Docker Compose provide containerization and
                        orchestration for consistent environments. CI/CD pipelines streamline automated testing and
                        deployment, ensuring efficient and reliable release cycles.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 w-full">
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">Ubuntu AWS EC2 Deployment</p>
                                <p className="text-sm leads text-[#45505b]">90%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[90%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-xs md:text-sm leads text-[#45505b]">NGINX (Reverse Proxy, HTTPS/SSL/TLS Configuration)</p>
                                <p className="text-sm leads text-[#45505b]">85%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[85%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">TMUX (Session Management)</p>
                                <p className="text-sm leads text-[#45505b]">95%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[95%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-[10px] md:text-sm leads text-[#45505b]">Docker & Docker Compose (Containerization & Orchestration)</p>
                                <p className="text-sm leads text-[#45505b]">80%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[80%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">CI/CD Pipelines</p>
                                <p className="text-sm leads text-[#45505b]">80%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[80%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full p-8 shadow-xl mb-12">
                    <p className="lead text-center md:text-left pt-8 pb-2 underline">Testing, Logging & Monitoring</p>
                    <p className="lead pb-8 !font-raleway text-[#45505b] text-center md:text-left text-pretty">
                        This comprehensive framework ensures quality and reliability by employing automated testing
                        with Pytest for Python and Jest for JavaScript, while advanced logging and error-handling
                        mechanisms simplify troubleshooting. Additionally, continuous monitoring is achieved using
                        Prometheus and Grafana, enabling proactive performance management and rapid issue detection.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 w-full">
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-xs md:text-sm leads text-[#45505b]">Automated Testing (Pytest for Python, Jest for JavaScript)</p>
                                <p className="text-sm leads text-[#45505b]">85%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[85%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">Advanced Logging & Error Handling</p>
                                <p className="text-sm leads text-[#45505b]">90%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[90%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">Monitoring Tools (Prometheus, Grafana)</p>
                                <p className="text-sm leads text-[#45505b]">80%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[80%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full p-8 shadow-xl mb-12">
                    <p className="lead text-center md:text-left pt-8 pb-2 underline">Cloud & DevOps</p>
                    <p className="lead pb-8 !font-raleway text-[#45505b] text-center md:text-left text-pretty">
                        This robust Cloud & DevOps framework leverages AWS services—including EC2, Lambda,
                        API Gateway, SQS, and Amplify—to deliver scalable, reliable infrastructure, while integrated
                        DevOps automation streamlines continuous integration, deployment, and operations for
                        high-performing applications.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 w-full">
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-xs md:text-sm leads text-[#45505b]">AWS Services (EC2, Lambda, API Gateway, SQS, Amplify)</p>
                                <p className="text-sm leads text-[#45505b]">85%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[85%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">DevOps Automation</p>
                                <p className="text-sm leads text-[#45505b]">80%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[80%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full p-8 shadow-xl mb-12">
                    <p className="lead text-center md:text-left pt-8 pb-2 underline">Additional Tools & Practices</p>
                    <p className="lead pb-8 !font-raleway text-[#45505b] text-center md:text-left text-pretty">
                        This toolkit enhances development productivity and collaboration, featuring Windsurf Smart
                        Editor for efficient scripting, robust IDEs like PyCharm and Webstorm for streamlined coding,
                        and PowerDesigner for structured design management. Additionally, NodeJS supports Electron JS
                        application development, while Git ensures reliable version control for seamless team
                        collaboration.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 w-full">
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">Windsurf Smart Editor (Efficient Scripting)</p>
                                <p className="text-sm leads text-[#45505b]">85%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[85%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">PyCharm</p>
                                <p className="text-sm leads text-[#45505b]">90%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[90%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">WebStorm</p>
                                <p className="text-sm leads text-[#45505b]">90%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[90%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">PowerDesigner</p>
                                <p className="text-sm leads text-[#45505b]">85%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[85%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">NodeJS (for Electron JS application development)</p>
                                <p className="text-sm leads text-[#45505b]">85%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[85%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm leads text-[#45505b]">Version Control (Git)</p>
                                <p className="text-sm leads text-[#45505b]">95%</p>
                            </div>
                            <span className="bg-gray-100 w-full h-[10px] relative">
                                <span className="bg-[#0563bb] h-[10px] w-[95%] absolute left-0 top-0 z-[2]">{}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export  default Skills;
