'use client'

import * as React from 'react';

import NavbarItems from "@/components/widgets/navbar/navbarItems";


const Index = () => {
    return (
        <div className="hidden md:flex h-screen w-[100px] flex-col justify-center fixed left-0 z-[3]">
            <NavbarItems />
        </div>
    );
}

export default Index;
