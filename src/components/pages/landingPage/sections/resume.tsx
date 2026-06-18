'use client'

import * as React from 'react';
import { BriefcaseBusiness, Circle } from "lucide-react";
import { EXPERIENCE_INFO } from '@/components/constants/experiences';

const Resume = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-12 bg-white selection:bg-blue-100">
      <div className="relative flex flex-col items-center w-[85%] md:w-[60%] text-center">
        <p className="!font-raleway text-[#45505b] text-[32px] font-bold pb-4">Resume</p>
        <span className="border-b border-b-solid border-b-black w-[200px]"></span>
        <span className="border-b border-b-solid border-b-[#0563bb] w-[100px] -mt-[1px]"></span>
        
        <div className="w-full py-12 flex flex-col">
          <p className="text-2xl font-bold !font-raleway text-[#45505b] mb-12 text-left md:text-center">
            Professional Experience
          </p>
          
          <div className="flex flex-col gap-y-12">
            {Object.values(EXPERIENCE_INFO).map((job, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-4 border-b border-gray-100 pb-8 last:border-0">
                {/* Left Side: Role Title & Dates */}
                <div className="md:col-span-4 flex flex-row justify-between md:justify-end gap-x-4 text-left md:text-right">
                  <div className="flex flex-col md:items-end">
                    <p className="text-md font-semibold !font-raleway text-[#45505b]">
                      {job.position}
                    </p>
                    <p className="text-sm font-light !font-raleway text-gray-500 mt-1">
                      {job.range}
                    </p>
                  </div>
                  {/* Icon Timeline Container */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="rounded-full bg-[#0563bb] size-[40px] flex justify-center items-center shrink-0 shadow-sm">
                      <BriefcaseBusiness className="text-white size-4" />
                    </div>
                  </div>
                </div>

                {/* Right Side: Company Details & Breakdown */}
                <div className="md:col-span-8 flex flex-col gap-y-4 text-left">
                  <div className="flex flex-col justify-center gap-y-2">
                    <p className="text-md font-bold uppercase tracking-wider !font-raleway text-[#0563bb]">
                      {job.company}
                    </p>
                    <span className="border-b-[3px] border-solid border-b-gray-300 w-[40px]"></span>
                  </div>
                  
                  {/* Responsibilities list */}
                  <div className="flex flex-col gap-y-3 pt-2">
                    {job.responsibilities.map((resp, respIdx) => (
                      <div key={respIdx} className="flex flex-row items-start gap-x-3 group">
                        <Circle className="size-[6px] fill-gray-400 text-gray-400 mt-[7px] shrink-0 group-hover:fill-[#0563bb] group-hover:text-[#0563bb] transition-colors" />
                        <p className="text-sm md:text-sm !font-raleway text-[#45505b] leading-relaxed text-justify">
                          {resp}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Projects Highlight Row */}
                  {job.projects.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-dashed border-gray-200">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 !font-raleway">
                        Featured Projects
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.projects.map((project, pIdx) => (
                          <span 
                            key={pIdx} 
                            className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-md font-medium !font-raleway border border-gray-200/60"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
