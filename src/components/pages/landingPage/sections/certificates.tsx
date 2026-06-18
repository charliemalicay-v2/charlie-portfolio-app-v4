'use client'

import * as React from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck } from "lucide-react";
import { CERTFICATES_INFO } from '@/components/constants/certificates';


const Certificates = () => {
    // Convert object properties into a dynamic array
    const certificatesList = Object.values(CERTFICATES_INFO);

    return (
        <div className="min-h-screen w-full flex flex-col items-center pt-12 bg-white selection:bg-blue-100">
            <div className="relative flex flex-col items-center w-[85%] md:w-[60%] text-center">
                <p className="!font-raleway text-[#45505b] text-[32px] font-bold pb-4">Certifications</p>
                <span className="border-b border-b-solid border-b-black w-[200px]"></span>
                <span className="border-b border-b-solid border-b-[#0563bb] w-[100px] -mt-[1px]"></span>
                
                <div className="w-full py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        {certificatesList.map((cert, index) => {
                            // Normalize displaying continuous vs expiring certificates cleanly
                            const displayDate = cert.issued.replace(" - *", " (No Expiration)");

                            return (
                                <div 
                                    key={index} 
                                    className="flex flex-col justify-between p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 group"
                                >
                                    <div>
                                        {/* Header Row */}
                                        <div className="flex items-start justify-between gap-x-4 mb-3">
                                            <div className="rounded-lg bg-blue-50 text-[#0563bb] p-2.5 shrink-0 group-hover:bg-[#0563bb] group-hover:text-white transition-colors duration-300">
                                                {cert.name.includes("Security") ? (
                                                    <ShieldCheck className="size-5" />
                                                ) : (
                                                    <Award className="size-5" />
                                                )}
                                            </div>
                                            <a 
                                                href={cert.badge} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="text-gray-400 hover:text-[#0563bb] p-1 rounded-md transition-colors"
                                                title="Verify Credential"
                                            >
                                                <ExternalLink className="size-4" />
                                            </a>
                                        </div>

                                        {/* Certification Name */}
                                        <h3 className="text-base font-bold !font-raleway text-[#45505b] line-clamp-2 leading-snug mb-1">
                                            {cert.name}
                                        </h3>
                                        
                                        {/* Organization Issuer */}
                                        <p className="text-sm font-semibold text-[#0563bb] !font-raleway uppercase tracking-wider text-[11px] mb-4">
                                            {cert.organization}
                                        </p>
                                    </div>

                                    {/* Footer Meta Details */}
                                    <div className="mt-4 pt-3 border-t border-gray-50 flex flex-col gap-y-1.5 text-xs text-gray-500 !font-raleway">
                                        <div className="flex items-center gap-x-2">
                                            <Calendar className="size-3.5 text-gray-400 shrink-0" />
                                            <span>{displayDate}</span>
                                        </div>
                                        <div className="flex flex-col gap-y-0.5 mt-1">
                                            <span className="text-[10px] font-medium text-gray-400 uppercase tracking-tight">Credential ID</span>
                                            <span className="font-mono text-[11px] text-gray-600 truncate max-w-full" title={cert.credentialID}>
                                                {cert.credentialID}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificates;
