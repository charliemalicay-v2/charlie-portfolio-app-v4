'use client'

import * as React from 'react';
import Image from "next/image";

import aboutProfileImage from '@/assets/images/about-profile-crop.jpg';
import {ChevronRight} from "lucide-react";
import {buttonVariants} from "../../../ui/button";
import Link from "next/link";


const About = () => {
    return (
        <div id="about" className="min-h-screen w-full flex flex-col items-center pt-12">
            <div className="text-center relative flex flex-col items-center relative w-[90%] md:w-[60%]">
                <p className="!font-raleway text-[#45505b] text-[32px] font-bold pb-4">About</p>
                <span className="border-b border-b-solid border-b-black w-[200px]">{}</span>
                <span className="border-b border-b-solid border-b-[#0563bb] w-[100px]">{}</span>
                <p className="lead py-4 !font-raleway">
                    I am currently living in Davao City, Philippines. I have 10 years of experience in my career,
                    during which I have spent most of my time working remotely. I hold a BS degree in Computer
                    Engineering.Besides my career, I have extracurricular activities like Running, Hiking,
                    Open Water Swimming, participating in Triathlons, and Travelling.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-8 gap-0 md:gap-8 py-4">
                    <div className="col-span-3 flex flex-col justify-center w-full">
                        <Image src={aboutProfileImage} className="w-full h-full object-contain"
                               alt="about-profile" />
                    </div>
                    <div className="col-span-5 flex flex-col">
                        <p className="lead text-center md:text-left text-[24px] font-bold !font-raleway text-[#45505b] py-8 md:py-0">
                            Fullstack Developer / AI Engineer
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-8 h-full">
                            <div className="flex flex-row items-center gap-x-0">
                                <ChevronRight className="text-[#0563bb] size-[25px]" />
                                <p className="text-md lead font-bold !font-raleway">Birth Date:</p>
                                <p className="text-md lead !font-raleway pl-2">February 3, 1992</p>
                            </div>
                            <div className="flex flex-row items-center gap-x-0">
                                <ChevronRight className="text-[#0563bb] size-[25px]" />
                                <p className="text-md lead font-bold !font-raleway">Website:</p>
                                <p className="text-md lead !font-raleway pl-2">
                                    <Link href="https://charlie-portfolio-4-app.vercel.app"
                                          className={buttonVariants({ variant: "ghost" })}>
                                        Personal Portfolio
                                    </Link>
                                </p>
                            </div>
                            <div className="flex flex-row items-center gap-x-0">
                                <ChevronRight className="text-[#0563bb] size-[25px]" />
                                <p className="text-md lead font-bold !font-raleway">Mobile#:</p>
                                <p className="text-md lead !font-raleway pl-2">+639994924896</p>
                            </div>
                            <div className="flex flex-row items-center gap-x-0">
                                <ChevronRight className="text-[#0563bb] size-[25px]" />
                                <p className="text-md lead font-bold !font-raleway">Location:</p>
                                <p className="text-md lead !font-raleway pl-2">Davao City, Philippines</p>
                            </div>
                            <div className="flex flex-row items-center gap-x-0">
                                <ChevronRight className="text-[#0563bb] size-[25px]" />
                                <p className="text-md lead font-bold !font-raleway">Age:</p>
                                <p className="text-md lead !font-raleway pl-2">32</p>
                            </div>
                            <div className="flex flex-row items-center gap-x-0">
                                <ChevronRight className="text-[#0563bb] size-[25px]" />
                                <p className="text-md lead font-bold !font-raleway">Degree:</p>
                                <p className="text-md lead !font-raleway pl-2">Bachelor of Science</p>
                            </div>
                            <div className="flex flex-row items-center gap-x-0">
                                <ChevronRight className="text-[#0563bb] size-[25px]" />
                                <p className="text-md lead font-bold !font-raleway">Email:</p>
                                <p className="text-md lead !font-raleway pl-2">charliemalicay@gmail.com</p>
                            </div>
                            <div className="flex flex-row items-center gap-x-0">
                                <ChevronRight className="text-[#0563bb] size-[25px]" />
                                <p className="text-md lead font-bold !font-raleway">Skype:</p>
                                <p className="text-md lead !font-raleway pl-2">live:charliemalicay_1</p>
                            </div>
                        </div>

                        <p className="lead pt-2 text-center md:text-left !font-raleway text-balance">
                            In my 10 years of experience in software and web development as a full-stack developer
                            and AI engineer. For frontend development, I primarily use JavaScript with frameworks
                            such as NextJS, ReactJS, TailwindCSS, and ShadCN, while on the backend I work with Python
                            using Django REST API, Flask, and FastAPI. My expertise extends to managing databases
                            like MySQL, PostgreSQL, SQLite, and MongoDB, utilizing AWS services like EC2, S3, and
                            Lambda, and configuring NGINX for seamless deployment of both NextJS frontends and
                            Python backends.
                        </p>
                    </div>
                </div>

                <p className="lead py-6 text-center md:text-left !font-raleway text-balance">
                    I also develop AI agents using LangServe and LangChain training
                    them with vector databases and embedded models and work with chat completion models from
                    OpenAI, Anthropic Claude, and GeminiAI. Comfortable developing on both Windows and Ubuntu
                    Linux, I consistently adopt agile practices, prioritize code quality, and implement
                    performance-optimized, secure solutions.
                </p>
            </div>
        </div>
    );
}

export default About;

