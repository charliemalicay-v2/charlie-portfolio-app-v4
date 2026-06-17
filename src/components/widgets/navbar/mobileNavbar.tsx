'use client'
import * as React from 'react';

import {
    Sheet,
    SheetContent,
} from "@/components/ui/sheet"

import {Button} from "@/components/ui/button";
import {AlignJustify, X} from "lucide-react";
import NavbarItems from "./navbarItems";
import {SheetTitle} from "../../ui/sheet";


const MobileNavbar = () => {
    const [openNavBar, setOpenNavBar] = React.useState(false);

    return (
        <>
            <Button variant="outline" size="icon" onClick={() => setOpenNavBar(!openNavBar)}
                    className="flex justify-center items-center md:hidden fixed top-[20px] right-[20px] z-[3]
                                cursor-pointer rounded-full size-[45px] bg-[#0563bb] p-0">
                { openNavBar ?
                    <X className="text-white size-[25px]" /> :
                    <AlignJustify className="text-white size-[25px]" />
                }
            </Button>
            <Sheet open={openNavBar} onOpenChange={setOpenNavBar}>
                <SheetContent className="flex flex-col justify-center w-[50%] min-w-[200px]" side="left">
                    <SheetTitle>{}</SheetTitle>
                    <NavbarItems />
                </SheetContent>
            </Sheet>
        </>
    );
}

export  default MobileNavbar;
