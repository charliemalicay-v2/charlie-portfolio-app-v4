const ABOUT_INFO_1 = "I am based in Davao City, Philippines, with over 11 years of professional experience, much of which I have spent working remotely. I hold a Bachelor of Science degree in Computer Engineering from the University of the Immaculate Conception. Outside of work, I am passionate about endurance sports and outdoor activities, including running, hiking, open-water swimming, triathlons, and traveling."
const ABOUT_INFO_2 = "As a Fullstack Developer and AI Engineer, I specialize in both frontend and backend development. On the frontend, I primarily work with JavaScript and TypeScript frameworks such as Next.js, React.js, TailwindCSS, ShadCN, ChakraUI, and MaterialUI. On the backend, I leverage Python with Django REST Framework, Flask, FastAPI, and NestJS. My expertise extends to managing databases like MySQL, PostgreSQL, SQLite, MongoDB, and CouchDB, as well as deploying applications using AWS services such as EC2, S3, Lambda, RDS, and ECS. I am also experienced in configuring NGINX for seamless integration of Next.js frontends with Python backends."
const ABOUT_INFO_3 = "In the field of artificial intelligence, I build AI agents using LangServe and LangChain, training them with vector databases and embedding models. I integrate advanced chat completion models from OpenAI, Anthropic Claude, GeminiAI, HuggingFace, and LangGraph. As an AWS Certified Cloud Practitioner, I am actively working toward the AWS Certified Machine Learning Engineer – Associate certification. Comfortable developing on both Windows and Ubuntu Linux, I consistently adopt agile practices, prioritize code quality, and deliver secure, performance-optimized solutions."

const ABOUT_PERSONAL_INFO = Object.freeze({
    NAME: {
        label: "Name", 
        value: "Charliemagne Malicay",
        url: ""
    },
    BIRTHDATE: {
        label: "Birth Date", 
        value: "1992-02-03",
        url: ""
    },
    AGE: {
        label: "Age", 
        value: "32",
        url: ""
    },
    LOCATION: {
        label: "Location", 
        value: "Davao City, Philippines",
        url: ""
    },
    DEGREE: {
        label: "Degree", 
        value: "Bachelor of Science",
        url: ""
    },
    MOBILE: {
        label: "Mobile", 
        value: "+639994924896",
        url: ""
    },
    EMAIL: {
        label: "email", 
        value: "charliemalicay@gmail.com",
        url: ""
    },
    WEBSITE: {
        label: "Website", 
        value: "Personal Portfolio",
        url: "https://charlie-portfolio-4-app.vercel.app"
    },
    SKYPE: {
        label: "Skype", 
        value: "live:charliemalicay_1",
        url: ""
    }
  })

const ABOUT_EDUCATION_INFO = Object.freeze({
    DEGREE: "Bachelor of Science in Computer Engineering",
    INSTITUTION: "University of the Immaculate Conception",
    DATE: "March 23, 2014",
    DESCRIPTION: "Comprehensive study of hardware architectures, embedded systems, software engineering, and digital circuit design."
});

const ABOUT_ENUM_DATA = {
  "career_summary": {
    "experience_years": 11,
    "roles": ["Fullstack Developer", "AI Engineer", "AWS Developer"],
    "work_style": "Remote",
    "certifications": ["AWS Certified Cloud Practitioner"],
    "in_progress_certifications": ["AWS Certified Machine Learning Engineer - Associate"]
  },
  "technical_skills": {
    "frontend": ["JavaScript", "TypeScript", "Next.js", "React.js", "TailwindCSS", "ShadCN", "ChakraUI", "MaterialUI"],
    "backend": ["Python", "Django REST Framework", "Flask", "FastAPI", "NestJS", "GraphQL", "REST API"],
    "databases": ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "CouchDB"],
    "cloud_services": ["AWS EC2", "AWS S3", "AWS Lambda", "AWS RDS", "AWS ECS", "AWS ECR", "AWS EventBridge", "AWS SQS", "AWS SNS"],
    "deployment": ["NGINX", "Docker", "Git", "CI/CD"]
  },
  "ai_expertise": {
    "frameworks": ["LangServe", "LangChain", "LangGraph"],
    "databases": ["Vector databases", "Pinecone"],
    "models": ["OpenAI GPT-3.5/GPT-4", "Anthropic Claude", "GeminiAI", "HuggingFace"]
  },
  "development_environment": ["Windows", "Ubuntu Linux"],
  "professional_practices": ["Agile methodologies", "Code quality", "Performance optimization", "Security"],
  "extracurricular": ["Running", "Hiking", "Open Water Swimming", "Triathlons", "Traveling"]
}

export {
    ABOUT_INFO_1,
    ABOUT_INFO_2,
    ABOUT_INFO_3,
    ABOUT_PERSONAL_INFO,
    ABOUT_EDUCATION_INFO,
    ABOUT_ENUM_DATA
}
