const EXPERIENCE_INFO = Object.freeze({
  ENTVAS: {
    company: "Entvas",
    position: "Full-Stack Developer & AWS Developer",
    range: "April 2025 – May 2026",
    responsibilities: [
      "Frontend Engineering & Prompt Design: Specialized in prompt-based and Kiro Spec prompt development to build responsive, user-centric interfaces. Developed clean, maintainable frontends utilizing Next.js, React, Tailwind CSS, and shadcn/ui.",
      "Backend Architecture & Database Management: Designed and maintained modular, enterprise grade server applications. Built scalable system backends using NestJS and optimized MySQL databases for high performance.",
      "Cloud Infrastructure & DevOps: Architected, deployed, and managed secure cloud infrastructure as an AWS Certified Cloud Practitioner. Implemented containerization and compute via ECS, ECR, Fargate, EC2, and Lambda; managed hosting and security via AWS Amplify and Cognito.",
      "Event-Driven Systems & API Routing: Configured secure network routing and reliable messaging pipelines across microservices. Orchestrated event-driven workflows utilizing AWS EventBridge, SQS, SNS, and SES. Configured NGINX for the seamless deployment of Next.js frontends and Python backends.",
      "Operational Excellence: Optimized AWS costing models for maximum efficiency while expanding cloud-AI capabilities toward the AWS Machine Learning Engineer - Associate level."
    ],
    projects: [
      "Legacy CRM App",
      "PCA CRM App",
      "Legacy Timesheet App"
    ]
  },
  ICEBEAR_SOLUTIONS: {
    company: "Icebear Solutions",
    position: "Full-Stack Developer",
    range: "February 2025 – March 2025",
    responsibilities: [
      "Full-Stack Development: Developed both the backend and frontend for the Football Gallery platform.",
      "Database Architecture: Designed an Entity-Relationship Diagram (ERD) for a relational database encompassing users, players, team managers, agents, and fans. Ensured normalized schemas for data integrity and scalability.",
      "Backend Development (FastAPI, MySQL): Designed JWT-based authentication APIs for secure logins. Developed protected and public APIs featuring filtering, sorting, pagination, and specific record retrieval.",
      "Integrations: Integrated the Gemini API to process and analyze videos. Integrated PayPal and Stripe for secure transactions. Engineered efficient CSV data import pipelines into MySQL.",
      "Frontend Development (Next.js, React, Tailwind CSS, shadcn/ui): Developed responsive UI components for the landing page, authentication flows, user portals, profiles, and payment processing.",
      "Deployment & CI/CD: Deployed the application on an Ubuntu EC2 instance using NGINX as a reverse proxy. Managed backend/frontend processes using tmux. Implemented CI/CD pipelines to automate testing and deployments.",
      "Quality Assurance & Security: Incorporated unit and integration tests. Documented endpoints using Swagger/ReDoc. Integrated advanced logging, HTTPS with SSL/TLS configurations, and automated MySQL database backups.",
      "Performance: Containerized the application using Docker and Docker Compose. Utilized codesplitting and lazy loading on the frontend to optimize load times."
    ],
    projects: [
      "Football Management App"
    ]
  },
  AK_HOLDINGS: {
    company: "AK Holdings",
    position: "Full-Stack Developer / AI Engineer",
    range: "November 2024 – March 2025",
    responsibilities: [
      "AI Agent & Full-Stack Architecture: Developed the Smart AI Agent Interface, utilizing Next.js, React, Tailwind CSS, and shadcn/ui on the frontend, and LangServe (FastAPI) alongside LangChain on the backend.",
      "Data Processing & Vector Databases: Engineered a Python script to iterate over PDF/image files in an S3 bucket, utilizing OCR to extract text and store the vectorized data efficiently in Pinecone. Developed an additional script using the Windsurf Smart Editor to parse and store a 50GB CSV file into PostgreSQL.",
      "Generative AI Integration: Constructed AI agents using LangChain and OpenAI’s embedding models to generate prompts and query Pinecone. Utilized OpenAI (GPT-3.5, GPT-4) and Anthropic Claude for intelligent chat completions.",
      "Infrastructure & Deployment: Deployed the entire application stack on an Ubuntu AWS EC2 instance, configuring NGINX as a reverse proxy. Managed background processes using tmux. Integrated Supabase to manage Docker containers and PostgreSQL databases.",
      "DevOps & Security: Containerized the environment using Docker and Docker Compose. Enforced secure authentication (OAuth, JWT), CORS policies, and SSL/TLS encryption.",
      "Testing & Monitoring: Implemented automated testing (Pytest, Jest) and CI/CD pipelines. Integrated Prometheus and Grafana for comprehensive logging, monitoring, and performance optimization. Maintained version control with Git and documented APIs via Swagger and Postman."
    ],
    projects: [
      "Technical Manual AI Bot App",
      "Database Migration"
    ]
  },
  SHAKEWELL_AGENCY: {
    company: "Shakewell Agency",
    position: "Senior Frontend Developer",
    range: "May 2024 – September 2024",
    responsibilities: [
      "Frontend Engineering: Developed responsive, mobile-first Web Applications and Progressive Web Apps (PWAs) using TypeScript, ES10, and React.",
      "Cross-Functional Collaboration: Partnered closely with designers, product managers, and backend engineers to drive product design and feature development.",
      "Performance Optimization: Optimized application performance and scalability by refining code, minimizing network requests, and prioritizing rapid load times.",
      "Best Practices Advocacy: Championed software engineering best practices, including clean code principles, accessibility (a11y) standards, and cross-browser compatibility."
    ],
    projects: [
      "Resort Sites",
      "Air Navigation and Inventory App"
    ]
  },
  INNODATA_KNOWLEDGE_INC: {
    company: "Innodata Knowledge Inc.",
    position: "Software Engineer – Level 2",
    range: "April 2022 – March 2024",
    responsibilities: [
      "Full-Stack R&D Development: Functioned as a Full-Stack Developer within the Research and Development department, utilizing Python as the primary language.",
      "System Architecture: Created software design and analysis documentation for stakeholders and contributed to project planning and strategy.",
      "API & UI Engineering: Built Web API frameworks using Flask and FastAPI. Developed frontends using React and Next.js, integrating them with both SQL and NoSQL databases.",
      "AI & Machine Learning: Engineered machine learning, deep learning, and image processing solutions, including integrating the OpenAI API into backend projects.",
      "DevOps: Developed automation scripts for DevOps and deployed full-stack projects using NGINX."
    ],
    projects: [
      "Image Management and Processing App",
      "Site Data Scraper",
      "Image Object Detection App",
      "PDF Parser Workflow"
    ]
  },
  ADVANCED_WORLD_SOLUTION_INC: {
    company: "Advanced World Solution Inc.",
    position: "Associate R&D Engineer",
    range: "October 2021 – March 2022",
    responsibilities: [
      "Bug Tracking & Resolution: Replicated, debugged, and resolved feature and UI defects in production software, and managed the deployment of executable (EXE) release files.",
      "Technical Documentation: Documented the end-to-end bug resolution process, from root cause analysis to the implemented fix.",
      "Quality Assurance: Conducted and documented unit testing via application simulators, as well as hardware integration testing directly on the machines where the software was deployed.",
      "Agile Collaboration: Participated in Agile Scrum workflows, utilizing a ticketing system to distribute and track team tasks.",
      "Code Management: Programmed primarily in JavaScript and utilized SVN for version control and file management."
    ],
    projects: [
      "Sharp Printer Software"
    ]
  },
  SCL: {
    company: "SCL",
    position: "Full-Stack Developer",
    range: "July 2018 – June 2021",
    responsibilities: [
      "Backend Development (Python): Built backend APIs using Flask and the requests module to handle RESTful executions and commercial API integrations. Wrote AWS Lambda functions in Python to process data and handle live server requests.",
      "Frontend Development (JavaScript/TypeScript): Developed web applications and desktop software using React, TypeScript, and Electron.js (Node.js core). Transitioned legacy UI codebases from jQuery and CSS3 to React and LESS.",
      "Database Management: Designed, created, and modified data models using MySQL and SQLite to adapt to changing system requirements.",
      "AWS Infrastructure: Managed and configured AWS services, including API Gateway, SQS, EC2 instances, and Lambda functions. Deployed React applications utilizing AWS Amplify."
    ],
    projects: [
      "Media Files Management App",
      "User Management App"
    ]
  },
  EASYRENT: {
    company: "EasyRent (Project-Based)",
    position: "Software Developer",
    range: "November 2017 – February 2018",
    responsibilities: [
      "Backend & Database: Developed REST APIs utilizing Python and Flask, managing application data through PostgreSQL.",
      "Frontend: Designed and built user interfaces using HTML, CSS3, and jQuery."
    ],
    projects: [
      "EasyRent App"
    ]
  },
  SHIP_ELECTRONICS: {
    company: "Ship Electronics (Project-Based)",
    position: "Embedded Developer",
    range: "June 2017 – October 2018",
    responsibilities: [
      "Hardware Programming: Programmed microchips to drive and read electronic sensors.",
      "Circuit Design: Designed schematics and Printed Circuit Boards (PCBs) and sourced necessary electronic components."
    ],
    projects: []
  },
  HGG_PROFILING_SPECIALISTS: {
    company: "HGG Profiling Specialists Philippines Inc.",
    position: "Software Engineer",
    range: "April 2014 – June 2015",
    responsibilities: [
      "Application Maintenance: Continuously developed, maintained, and added new features to the core web application system while managing database records.",
      "Full-Stack Development: Wrote backend APIs using Python and Django. Built the frontend using jQuery, CSS, and Knockout.js (MVC).",
      "Reporting: Designed and generated automated PDF output reports using HTML and CSS."
    ],
    projects: []
  }
});

export {
    EXPERIENCE_INFO
}
