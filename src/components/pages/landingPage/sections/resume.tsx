'use client'

import * as React from 'react';
import {BriefcaseBusiness, Circle, Dot} from "lucide-react";


const Resume = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center pt-12">
            <div className="text-center relative flex flex-col items-center relative w-[85%] md:w-[60%]">
                <p className="!font-raleway text-[#45505b] text-[32px] font-bold pb-4">Resume</p>
                <span className="border-b border-b-solid border-b-black w-[200px]">{}</span>
                <span className="border-b border-b-solid border-b-[#0563bb] w-[100px]">{}</span>
                <div className="w-full py-12 flex flex-col">
                    <p className="text-2xl font-bold !font-raleway text-[#45505b] mb-8">Professional Experience</p>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-4">
                        <div className="col-span-7 flex flex-row gap-x-4">
                            <div className="col-span-4 flex flex-col items-end">
                                <p className="text-md font-semibold !font-raleway text-[#45505b]">
                                    Fullstack Developer / AI Engineer
                                </p>
                                <p className="text-md font-light !font-raleway text-[#45505b]">
                                    Febuary 2025 - Present
                                </p>
                            </div>
                            <div className="col-span-1">
                                <div className="rounded-full bg-[#0563bb] size-[50px] flex justify-center items-center">
                                    <BriefcaseBusiness className="text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-7 flex flex-col gap-y-2">
                            <div className="h-[50px] pb-[20px] flex flex-col justify-center gap-y-4">
                                <p className="pt-10 text-md font-semibold !font-raleway text-[#45505b] text-left">
                                    ICEBEAR SOLUTIONS
                                </p>
                                <span className="border-b-[5px] border-solid border-b-gray-400 w-[10%]">{}</span>
                            </div>
                            <div className="flex flex-col gap-y-2 pt-4">
                                <span className="flex flex-row items-center gap-x-2">
                                    <Circle className="size-[5px]" />
                                    <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left">
                                        Full-Stack Development:
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Develop both the backend and the frontend for the Football Gallery platform.
                                    </p>
                                </span>

                                <span className="flex flex-row items-center gap-x-2">
                                    <Circle className="size-[5px]" />
                                    <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left">
                                        Database Architecture:
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Design an ERD for a relational database that includes entities such as users, players, team managers, agents, and fans.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Ensure normalized database schemas for data integrity and scalability.
                                    </p>
                                </span>

                                <span className="flex flex-row items-center gap-x-2">
                                    <Circle className="size-[5px]" />
                                    <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left">
                                        Backend Development:
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Utilize FastAPI as the framework and MySQL as the database.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Design authentication APIs using JWT and token-based systems for secure logins.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Develop a mix of protected and public APIs to handle various functionalities.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Implement APIs that list data with features such as filtering, sorting, and pagination.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Create endpoints for retrieving specific records from the data sets.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Integrate a process to analyze videos using GeminiAPI.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Integrate payment gateways by incorporating both PayPal and Stripe into the backend.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Import data from CSV files into the MySQL database efficiently.
                                    </p>
                                </span>

                                <span className="flex flex-row items-center gap-x-2">
                                    <Circle className="size-[5px]" />
                                    <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left">
                                        Frontend Development:
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Use a tech stack that includes Next.js, React.js, TailwindCSS, and ShadCN.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Develop UI components for key pages such as the landing page, login, signup, user portals, and user profiles.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Create payment-related components to handle transactions via Stripe and PayPal.
                                    </p>
                                </span>

                                <span className="flex flex-row items-center gap-x-2">
                                    <Circle className="size-[5px]" />
                                    <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left">
                                        Deployment and Infrastructure:
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Deploy both the Next.js frontend and the FastAPI backend on an Ubuntu EC2 instance.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Configure NGINX as a reverse proxy to facilitate smooth communication between the frontend and backend.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Use TMUX for session management to run and monitor both the frontend and backend processes.
                                    </p>
                                </span>

                                <span className="flex flex-row items-center gap-x-2">
                                    <Circle className="size-[5px]" />
                                    <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left">
                                        Automated Testing:
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Incorporate unit tests and integration tests to ensure the reliability of both the APIs and the frontend components.
                                    </p>
                                </span>

                                <span className="flex flex-row items-center gap-x-2">
                                    <Circle className="size-[5px]" />
                                    <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left">
                                        Performance Optimization:
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Utilize code-splitting and lazy loading on the frontend to optimize load times
                                        and improve user experience.
                                    </p>
                                </span>

                                <span className="flex flex-row items-center gap-x-2">
                                    <Circle className="size-[5px]" />
                                    <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left">
                                        Security Enhancements:
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Utilize HTTPS with SSL/TLS configurations on NGINX.
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-8 py-4">
                        <div className="col-span-4 flex flex-col items-end">
                            <p className="text-md font-semibold !font-raleway text-[#45505b]">
                                Fullstack Developer / AI Engineer
                            </p>
                            <p className="text-md font-light !font-raleway text-[#45505b]">
                                November 2024 - Present
                            </p>
                        </div>
                        <div className="col-span-1">
                            <div className="rounded-full bg-[#0563bb] size-[50px] flex justify-center items-center">
                                <BriefcaseBusiness className="text-white" />
                            </div>
                        </div>
                        <div className="col-span-7 flex flex-col gap-y-2">
                            <div className="h-[50px] pb-[20px] flex flex-col justify-center gap-y-4">
                                <p className="pt-10 text-md font-semibold !font-raleway text-[#45505b] text-left">
                                    AK Holdings
                                </p>
                                <span className="border-b-[5px] border-solid border-b-gray-400 w-[10%]">{}</span>
                            </div>
                            <div className="flex flex-col pt-4 gap-y-2">
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Developing both the backend and frontend for the Smart AI Agent Interface.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Frontend: Utilizing Next.js, React.js, TailwindCSS, and ShadCN.
                                </p>

                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Backend: Leveraging the LangServe framework (built on FastAPI) alongside LangChain
                                             for agent creation.
                                </p>

                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    PDF Processing: Creating a script to iterate over PDF and PDF image files in
                                                    an S3 bucket. This script uses Python packages for PDF parsing
                                                    and OCR to extract text and then stores the results in the
                                                    Pinecone vector database.
                                </p>

                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Vector Data Storage: Utilizing Pinecone to store vectorized data efficiently.
                                </p>

                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Agent Building: Constructing an agent using LangChain and OpenAI’s embedding
                                                    models to generate prompts and query data within the Pinecone
                                                    vector database.
                                </p>

                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Chat Completions: Using models such as OpenAI’s GPT-3.5, GPT-4, and Anthropic
                                                      Claude to generate chat completions based on responses from the
                                                      embedded models.
                                </p>

                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    NGINX Configuration: Establishing an NGINX configuration as a reverse proxy for
                                                         deploying both the LangServe backend and Next.js frontend.
                                </p>

                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Deployment Environment: Deploying the entire application (both backend and
                                                            frontend) on an Ubuntu AWS EC2 instance.
                                </p>

                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Session Management: Utilizing TMUX sessions to manage and run backend and
                                                        frontend processes.
                                </p>

                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Large-Scale Data Processing: Developing a script to parse a 50GB CSV file and
                                        store its data in an SQL database like PostgreSQL.
                                </p>

                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Efficient Scripting: Using the Windsurf Smart Editor for rapid script development.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Database Management with Supabase: Integrating Supabase to manage Docker
                                        containers and take advantage of its features for PostgreSQL database management.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Continuous Integration & Testing: Implementing robust automated testing (using
                                        tools like Pytest for Python and Jest for JavaScript) and CI/CD pipelines to
                                        ensure code quality and swift deployment cycles.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Security Enhancements: Enforcing secure authentication and authorization (using
                                        OAuth and JWT) along with CORS policies. Additionally, SSL/TLS is configured
                                        on the NGINX reverse proxy to ensure encrypted communications.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Containerization & Orchestration: Utilizing Docker and Docker Compose to
                                        containerize the application for consistent development and production
                                        environments.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Logging and Monitoring: Integrating comprehensive logging and monitoring (using
                                        tools like Prometheus and Grafana) to quickly detect and resolve issues,
                                        while also facilitating performance optimization.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Version Control & Documentation: Using Git for version control, maintaining
                                        through documentation of API endpoints (with Swagger or Postman), and
                                        ensuring collaborative development practices among team members.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-8 py-4">
                        <div className="col-span-4 flex flex-col items-end">
                            <p className="text-md font-semibold !font-raleway text-[#45505b]">
                                Senior Frontend Developer
                            </p>
                            <p className="text-md font-light !font-raleway text-[#45505b]">
                                May 2024 - September 2024
                            </p>
                        </div>
                        <div className="col-span-1">
                            <div className="rounded-full bg-[#0563bb] size-[50px] flex justify-center items-center">
                                <BriefcaseBusiness className="text-white" />
                            </div>
                        </div>
                        <div className="col-span-7 flex flex-col gap-y-2">
                            <div className="h-[50px] pb-[20px] flex flex-col justify-center gap-y-4">
                                <p className="pt-10 text-md font-semibold !font-raleway text-[#45505b] text-left">
                                    Shakewell Agency
                                </p>
                                <span className="border-b-[5px] border-solid border-b-gray-400 w-[10%]">{}</span>
                            </div>
                            <div className="flex flex-col pt-4 gap-y-2">
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Developing Responsive Web Applications and PWAs that create mobile-first, engaging web
                                    interfaces that adapt to various devices.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Participating in Product Design and Feature Development in collaborate closely with designers,
                                    product managers, and backend engineers.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Coding with TypeScript, ES10, and React by wield JavaScript frameworks like React to build
                                    interactive components.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Optimizing for Performance and Scalability in prioritize speed optimize code, minimize requests,
                                    and monitor performance.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Advocating for Best Practices in spread the gospel of clean code, accessibility, and cross-browser
                                    compatibility.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-8 py-4">
                        <div className="col-span-4 flex flex-col items-end">
                            <p className="text-md font-semibold !font-raleway text-[#45505b]">
                                Software Engineer Level 2
                            </p>
                            <p className="text-md font-light !font-raleway text-[#45505b]">
                                April 2022 - March 2024
                            </p>
                        </div>
                        <div className="col-span-1">
                            <div className="rounded-full bg-[#0563bb] size-[50px] flex justify-center items-center">
                                <BriefcaseBusiness className="text-white" />
                            </div>
                        </div>
                        <div className="col-span-7 flex flex-col gap-y-2">
                            <div className="h-[50px] pb-[20px] flex flex-col justify-center gap-y-4">
                                <p className="pt-10 text-md font-semibold !font-raleway text-[#45505b] text-left">
                                    Innodata Knowledge Services Inc.
                                </p>
                                <span className="border-b-[5px] border-solid border-b-gray-400 w-[10%]">{}</span>
                            </div>
                            <div className="flex flex-col pt-4 gap-y-2">
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Working in Research and Development Department.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Function as FullStack Developer.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Creating Design and Analysis of the software for stakeholder documents.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Deciding project planning and strategies.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Using Python as a primary language.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Building Web API framework using Flask and FastAPI.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Developing Frontend using ReactJS and NextJS.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Integrate either SQL or No-SQL database.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Engaging Image Processing.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Engaging Machine learning and Deep learning.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Developing automation in DevOps.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Deploy Frontend and Backend Project using NGINX.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Adding OpenAI API to backend projects.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-8 py-4">
                        <div className="col-span-4 flex flex-col items-end">
                            <p className="text-md font-semibold !font-raleway text-[#45505b]">
                                Associate R & D Engineering
                            </p>
                            <p className="text-md font-light !font-raleway text-[#45505b]">
                                October 2021 - March 2022
                            </p>
                        </div>
                        <div className="col-span-1">
                            <div className="rounded-full bg-[#0563bb] size-[50px] flex justify-center items-center">
                                <BriefcaseBusiness className="text-white" />
                            </div>
                        </div>
                        <div className="col-span-7 flex flex-col gap-y-2">
                            <div className="h-[50px] pb-[20px] flex flex-col justify-center gap-y-4">
                                <p className="pt-10 text-md font-semibold !font-raleway text-[#45505b] text-left">
                                    Advanced World Solution Inc.
                                </p>
                                <span className="border-b-[5px] border-solid border-b-gray-400 w-[10%]">{}</span>
                            </div>
                            <div className="flex flex-col pt-4 gap-y-2">
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Replicating Feature or UI Defect found in running code and release EXE file.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Documenting from discovering code to fix approach fixing.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Doing documentation to Unit Testing of the selected feature through simulator of the app.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Doing documentation Integrating Testing in the machine, we’re software installed.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Doing File release file we’re app code transfer to file then install it to the machine.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Ticketing System that how to distribute tasks on each member.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    The using scrum agile development in the project.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Mostly Javascript language encountered in the project.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Using SVN as file management in project both codes and files to documented.
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-8 py-4">
                        <div className="col-span-4 flex flex-col items-end">
                            <p className="text-md font-semibold !font-raleway text-[#45505b]">
                                Fullstack Developer / Software Developer
                            </p>
                            <p className="text-md font-light !font-raleway text-[#45505b]">
                                July 2018 - June 2021
                            </p>
                        </div>
                        <div className="col-span-1">
                            <div className="rounded-full bg-[#0563bb] size-[50px] flex justify-center items-center">
                                <BriefcaseBusiness className="text-white" />
                            </div>
                        </div>
                        <div className="col-span-7 flex flex-col gap-y-2">
                            <div className="h-[50px] pb-[20px] flex flex-col justify-center gap-y-4">
                                <p className="pt-10 text-md font-semibold !font-raleway text-[#45505b] text-left">
                                    SCL - Shortcut Labs
                                </p>
                                <span className="border-b-[5px] border-solid border-b-gray-400 w-[10%]">{}</span>
                            </div>
                            <div className="flex flex-col gap-y-2 pt-4">
                                <span className="flex flex-row items-center gap-x-2">
                                    <Circle className="size-[5px]" />
                                    <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left">
                                        Python Programming Language as main in developing the backend side:
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Using flask to build the backend’s API.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Using requests modules to perform REST execution in every API and use a
                                        commercial API.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Writing AWS Lambda Function in Python to make data processes and requests in
                                        live server in AWS
                                    </p>
                                </span>

                                <span className="flex flex-row items-center gap-x-2">
                                    <Circle className="size-[5px]" />
                                    <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left">
                                        Javascript Programming Language as a main in developing the frontend side both application and web:
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Start developing the UI from JQuery then switch to ReactJS.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Using Typescript to simplify the coding standard when coding in javascript.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Using NodeJS as a core for Electron JS to build an application.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Start developing from CSS3 then switch to LESS for UI styles.
                                    </p>
                                </span>

                                <span className="flex flex-row items-center gap-x-2">
                                    <Circle className="size-[5px]" />
                                    <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left">
                                        MySQL / SQLite as Database Management:
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Creating models that came from a discussion that suited what data to be stored.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Insert, Update, Delete Data.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Changing Current models that suit the modification of the system.
                                    </p>
                                </span>

                                <span className="flex flex-row items-center gap-x-2">
                                    <Circle className="size-[5px]" />
                                    <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left">
                                        Amazon Web Services:
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Managing Lambda function to be connected to API Gateway.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Adding, Updating, Deleting Lambda Function in the AWS Account.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Changing Settings in API Gateway.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Managing SQS.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Uploading React APP to Amplify.
                                    </p>
                                </span>
                                <span className="pl-4 flex flex-row items-center gap-x-2">
                                    <Dot className="size-[5px]" />
                                    <p className="text-sm md:text-xs !font-raleway text-[#45505b] text-left">
                                        Managing EC2 instances.
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-8 py-4">
                        <div className="col-span-4 flex flex-col items-end">
                            <p className="text-md font-semibold !font-raleway text-[#45505b]">
                                Software Developer
                            </p>
                            <p className="text-md font-light !font-raleway text-[#45505b]">
                                November 2017 - February 2018
                            </p>
                        </div>
                        <div className="col-span-1">
                            <div className="rounded-full bg-[#0563bb] size-[50px] flex justify-center items-center">
                                <BriefcaseBusiness className="text-white" />
                            </div>
                        </div>
                        <div className="col-span-7 flex flex-col gap-y-2">
                            <div className="h-[50px] pb-[20px] flex flex-col justify-center gap-y-4">
                                <p className="pt-10 text-md font-semibold !font-raleway text-[#45505b] text-left">
                                    Easyrent (Project Based)
                                </p>
                                <span className="border-b-[5px] border-solid border-b-gray-400 w-[10%]">{}</span>
                            </div>
                            <div className="flex flex-col pt-4 gap-y-2">
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Writing REST API through Python Flask.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Designing and Building UI through HTML and CSS3.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Writing the frontend by JQuery.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Using Postgresql as Database of the project.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-8 py-4">
                        <div className="col-span-4 flex flex-col items-end">
                            <p className="text-md font-semibold !font-raleway text-[#45505b]">
                                Embedded Developer
                            </p>
                            <p className="text-md font-light !font-raleway text-[#45505b]">
                                June 2017 - October 2018
                            </p>
                        </div>
                        <div className="col-span-1">
                            <div className="rounded-full bg-[#0563bb] size-[50px] flex justify-center items-center">
                                <BriefcaseBusiness className="text-white" />
                            </div>
                        </div>
                        <div className="col-span-7 flex flex-col gap-y-2">
                            <div className="h-[50px] pb-[20px] flex flex-col justify-center gap-y-4">
                                <p className="pt-10 text-md font-semibold !font-raleway text-[#45505b] text-left">
                                    Ship Electronics (Project Based)
                                </p>
                                <span className="border-b-[5px] border-solid border-b-gray-400 w-[10%]">{}</span>
                            </div>
                            <div className="flex flex-col pt-4 gap-y-2">
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Programming microchip to drive and read sensors.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Designing Schematic and PCB.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Identifying Electronics parts.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-8 py-4">
                        <div className="col-span-4 flex flex-col items-end">
                            <p className="text-md font-semibold !font-raleway text-[#45505b]">
                                Software Engineer
                            </p>
                            <p className="text-md font-light !font-raleway text-[#45505b]">
                                April 2014 - June 2015
                            </p>
                        </div>
                        <div className="col-span-1">
                            <div className="rounded-full bg-[#0563bb] size-[50px] flex justify-center items-center">
                                <BriefcaseBusiness className="text-white" />
                            </div>
                        </div>
                        <div className="col-span-7 flex flex-col gap-y-2">
                            <div className="h-[50px] pb-[20px] flex flex-col justify-center gap-y-4">
                                <p className="pt-10 text-md font-semibold !font-raleway text-[#45505b] text-left">
                                    HGG Profiling Specialist Philippines Inc.
                                </p>
                                <span className="border-b-[5px] border-solid border-b-gray-400 w-[10%]">{}</span>
                            </div>
                            <div className="flex flex-col pt-4 gap-y-2">
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Serve as continuing development and maintaining the web application system.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Adding Features and modifying features in the system.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Managing Data from the Database.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Writing backend API in Python Django.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Writing MVC script in knockout js.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Building the UI using JQuery and CSS.
                                </p>
                                <p className="text-md md:text-sm !font-raleway text-[#45505b] text-left text-pretty text-center">
                                    Designing Output PDF through HTML and CSS.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full py-12 flex flex-col">
                    <p className="text-2xl font-bold !font-raleway text-[#45505b]">Education</p>
                </div>
            </div>
        </div>
    );
}

export default Resume;
