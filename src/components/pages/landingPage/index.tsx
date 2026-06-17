'use client'

import * as React from 'react';
import Navbar from "@/components/widgets/navbar";
import MobileNavbar from "@/components/widgets/navbar/mobileNavbar";

import Home from "@/components/pages/landingPage/sections/home";
import About from "@/components/pages/landingPage/sections/about";
import Skills from "@/components/pages/landingPage/sections/skills";
import Resume from "@/components/pages/landingPage/sections/resume";


const Index = () => {
    return (
        <div className="relative">
            <Navbar />
            <MobileNavbar />
            <Home />
            <About />
            <Skills />
            <Resume />
        </div>
    );
}

export default Index;

