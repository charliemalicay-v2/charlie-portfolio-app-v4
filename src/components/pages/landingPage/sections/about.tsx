'use client'

import * as React from 'react';
import Image from "next/image";

import aboutProfileImage from '@/assets/images/about-profile-crop.jpg';
import {ChevronRight} from "lucide-react";
import {buttonVariants} from "../../../ui/button";
import Link from "next/link";
import { ABOUT_INFO_1, ABOUT_INFO_2, ABOUT_INFO_3, ABOUT_PERSONAL_INFO } from '@/components/constants/about';


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
        </div>
    );
}

export default About;

