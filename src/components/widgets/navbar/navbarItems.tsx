'use client'

import * as React from 'react';

import {FileText, House, Images, Mail, Server, UserRound} from "lucide-react";

import { Button } from '@/components/ui/button';


const NavbarItems = () => {
    const [homeNavActive, setHomeNavActive] = React.useState(true);
    const [userNavActive, setUserNavActive] = React.useState(false);
    const [docNavActive, setDocNavActive] = React.useState(false);
    const [imageNavActive, setImageNavActive] = React.useState(false);
    const [serverNavActive, setServerNavActive] = React.useState(false);
    const [mailNavActive, setMailNavActive] = React.useState(false);

    const navButtonRef = React.useRef(null);
    const buttonHomeRef = React.useRef(null);
    const buttonUserRef = React.useRef(null);
    const buttonDocRef = React.useRef(null);
    const buttonImageRef = React.useRef(null);
    const buttonServerRef = React.useRef(null);
    const buttonMailRef = React.useRef(null);

    const handleMouseEvent = (eventCon: string = "", btnRef: any = null) => {
        const iconStyles = btnRef.current.children[0].classList;
        const textStyles = btnRef.current.children[1].classList;

        if (eventCon === "mouseEnter") {
            if (iconStyles.contains('text-[#45505b]')) iconStyles.remove('text-[#45505b]');
            if (textStyles.contains('md:hidden')) textStyles.remove('md:hidden');

            if (!iconStyles.contains('text-white')) iconStyles.add('text-white');
        }
        else if (eventCon === "mouseLeave") {
            if (iconStyles.contains('text-white') && !iconStyles.contains('active'))
                iconStyles.remove('text-white');

            if (!iconStyles.contains('text-[#45505b]') && !iconStyles.contains('active'))
                iconStyles.add('text-[#45505b]');
            if (!textStyles.contains('md:hidden')) textStyles.add('md:hidden');
        }
    }

    return (
        <div className="w-full min-h-[100px] flex flex-col justify-center pl-6 gap-y-2" ref={navButtonRef}>
            <Button variant="outline" ref={buttonHomeRef}
                    onMouseEnter={() => handleMouseEvent("mouseEnter", buttonHomeRef)}
                    onMouseLeave={() => handleMouseEvent("mouseLeave", buttonHomeRef)}
                    className={`rounded-full h-[55px] w-[120px] border-[#0563bb] 
                                md:size-[55px] hover:h-[55px] hover:w-[120px] hover:bg-[#0563bb] 
                                cursor-pointer duration-700 flex flex-row ${homeNavActive ? "bg-[#0563bb]" : ""}`}>
                <House className={`size-[20px] ${homeNavActive ? "text-white active" : "text-[#45505b]"}`} />
                <span className={`block md:hidden text-[#45505b] md:text-white text-center transition ease-in
                                 duration-500 ${homeNavActive ? "text-white active" : "text-[#45505b]"}`}>Home</span>
            </Button>
            <Button variant="outline" ref={buttonUserRef}
                    onMouseEnter={() => handleMouseEvent("mouseEnter", buttonUserRef)}
                    onMouseLeave={() => handleMouseEvent("mouseLeave", buttonUserRef)}
                    className={`rounded-full h-[55px] w-[120px] border-[#0563bb] 
                                md:size-[55px] hover:h-[55px] hover:w-[120px] hover:bg-[#0563bb]
                                cursor-pointer duration-700 flex flex-row ${userNavActive ? "bg-[#0563bb]" : ""}`}>
                <UserRound className={`size-[20px] ${userNavActive ? "text-white active" : "text-[#45505b]"}`} />
                <span className="block md:hidden text-[#45505b] md:text-white text-center transition ease-in
                                 duration-500">About</span>
            </Button>
            <Button variant="outline" ref={buttonDocRef}
                    onMouseEnter={() => handleMouseEvent("mouseEnter", buttonDocRef)}
                    onMouseLeave={() => handleMouseEvent("mouseLeave", buttonDocRef)}
                    className={`rounded-full h-[55px] w-[120px] border-[#0563bb] 
                                md:size-[55px] hover:h-[55px] hover:w-[120px] hover:bg-[#0563bb]
                                cursor-pointer duration-700 flex flex-row ${docNavActive ? "bg-[#0563bb]" : ""}`}>
                <FileText className={`size-[20px] ${docNavActive ? "text-white active" : "text-[#45505b]"}`} />
                <span className="block md:hidden text-[#45505b] md:text-white text-center transition ease-in
                                 duration-500">Resume</span>
            </Button>
            <Button variant="outline" ref={buttonImageRef}
                    onMouseEnter={() => handleMouseEvent("mouseEnter", buttonImageRef)}
                    onMouseLeave={() => handleMouseEvent("mouseLeave", buttonImageRef)}
                    className={`rounded-full h-[55px] w-[120px] border-[#0563bb] 
                                md:size-[55px] hover:h-[55px] hover:w-[120px] hover:bg-[#0563bb]
                                cursor-pointer duration-700 flex flex-row ${imageNavActive ? "bg-[#0563bb]" : ""}`}>
                <Images className={`size-[20px] ${imageNavActive ? "text-white active" : "text-[#45505b]"}`} />
                <span className="block md:hidden text-[#45505b] md:text-white text-center transition ease-in
                                 duration-500">Portfolio</span>
            </Button>
            <Button variant="outline" ref={buttonServerRef}
                    onMouseEnter={() => handleMouseEvent("mouseEnter", buttonServerRef)}
                    onMouseLeave={() => handleMouseEvent("mouseLeave", buttonServerRef)}
                    className={`rounded-full h-[55px] w-[120px] border-[#0563bb] 
                                md:size-[55px] hover:h-[55px] hover:w-[120px] hover:bg-[#0563bb]
                                cursor-pointer duration-700 flex flex-row ${serverNavActive ? "bg-[#0563bb]" : ""}`}>
                <Server className={`size-[20px] ${serverNavActive ? "text-white active" : "text-[#45505b]"}`} />
                <span className="block md:hidden text-[#45505b] md:text-white text-center transition ease-in
                                 duration-500">Services</span>
            </Button>
            <Button variant="outline" ref={buttonMailRef}
                    onMouseEnter={() => handleMouseEvent("mouseEnter", buttonMailRef)}
                    onMouseLeave={() => handleMouseEvent("mouseLeave", buttonMailRef)}
                    className={`rounded-full h-[55px] w-[120px] border-[#0563bb] 
                                md:size-[55px] hover:h-[55px] hover:w-[120px] hover:bg-[#0563bb]
                                cursor-pointer duration-700 flex flex-row ${mailNavActive ? "bg-[#0563bb]" : ""}`}>
                <Mail className={`size-[20px] ${mailNavActive ? "text-white active" : "text-[#45505b]"}`} />
                <span className="block md:hidden text-[#45505b] md:text-white text-center transition ease-in
                                 duration-500">Contact</span>
            </Button>
        </div>
    );
}

export default NavbarItems;
