'use client'

import * as React from 'react';
import Image from "next/image";

import aboutProfileImage from '@/assets/images/about-profile-crop.jpg';
import {ChevronRight} from "lucide-react";
import {buttonVariants} from "../../../ui/button";
import Link from "next/link";
import { ABOUT_EDUCATION_INFO, ABOUT_INFO_1, ABOUT_INFO_2, ABOUT_INFO_3, ABOUT_PERSONAL_INFO } from '@/components/constants/about';


const About = () => {
    return (
        <div id="about" className="min-h-screen w-full flex flex-col items-center pt-12">
            <div className="text-center relative flex flex-col items-center relative w-[90%] md:w-[60%]">
                <p className="!font-raleway text-[#45505b] text-[32px] font-bold pb-4">About</p>
                <span className="border-b border-b-solid border-b-black w-[200px]">{}</span>
                <span className="border-b border-b-solid border-b-[#0563bb] w-[100px]">{}</span>
                <p className="lead py-4 !font-raleway">{ABOUT_INFO_1}</p>

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
                            {Object.values(ABOUT_PERSONAL_INFO).map(row =>
                                <div className="flex flex-row items-center gap-x-0">
                                    <ChevronRight className="text-[#0563bb] size-[25px]" />
                                    <p className="text-md lead font-bold !font-raleway">{row.label}:</p>
                                    {row.url !== "" ?
                                        <p className="text-md lead !font-raleway pl-2">
                                            <Link href={row.url} className={buttonVariants({ variant: "ghost" })}>
                                                {row.value}
                                            </Link>
                                        </p>:
                                        <p className="text-md lead !font-raleway pl-2">{row.value}</p> 
                                    }
                                </div>
                            )}
                        </div>
                        <p className="lead pt-2 text-center md:text-left !font-raleway text-balance">{ABOUT_INFO_2}</p>
                    </div>
                </div>

                <p className="lead py-6 text-center md:text-left !font-raleway text-balance">{ABOUT_INFO_3}</p>
            </div>
            
            <div className="w-full flex flex-col items-center pt-12 pb-16 bg-gray-50/30">
            {/* Header Section */}
            <div className="text-center flex flex-col items-center w-[90%] md:w-[75%] max-w-6xl mb-10">
                <h2 className="!font-raleway text-[#45505b] text-[32px] font-bold pb-2">Education</h2>
                <span className="border-b border-b-solid border-b-gray-300 w-[160px]"></span>
                <span className="border-b-2 border-b-solid border-b-[#0563bb] w-[80px] mb-8"></span>
            </div>

            {/* Education Content Card */}
            <div className="w-[90%] md:w-[60%] p-6 md:p-8 shadow-md rounded-xl bg-white border border-gray-100 text-left relative overflow-hidden hover:shadow-lg transition-all duration-300">
                
                {/* Left decorative brand accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#0563bb]" />
                
                <div className="flex flex-col gap-y-3 pl-2">
                    {/* Institution and Date Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-2">
                        <h3 className="text-lg font-bold text-gray-700 tracking-wide">
                            {ABOUT_EDUCATION_INFO.INSTITUTION}
                        </h3>
                        <span className="self-start sm:self-auto text-xs font-bold text-[#0563bb] bg-blue-50/80 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                            {ABOUT_EDUCATION_INFO.DATE}
                        </span>
                    </div>

                    {/* Degree Title */}
                    <h4 className="text-md font-semibold text-[#0563bb] !font-raleway">
                        {ABOUT_EDUCATION_INFO.DEGREE}
                    </h4>

                    {/* Description Paragraph */}
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed font-normal mt-1">
                        {ABOUT_EDUCATION_INFO.DESCRIPTION}
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default About;

