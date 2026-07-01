'use client'

import * as React from 'react'
import { ExternalLink, Github } from "lucide-react"
import { PROJECTS_INFO } from '@/components/constants/projects'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const Projects = () => {
    const projects = Object.values(PROJECTS_INFO)

    return (
        <div className="min-h-screen w-full flex flex-col items-center pt-12 bg-gray-50/30">
            <div className="relative flex flex-col items-center w-[85%] md:w-[80%] max-w-6xl">
                <h2 className="!font-raleway text-[#45505b] text-[32px] font-bold pb-2">Sample Projects</h2>
                <span className="border-b border-b-solid border-b-gray-300 w-[160px]"></span>
                <span className="border-b-2 border-b-solid border-b-[#0563bb] w-[80px] mb-12"></span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="relative overflow-hidden cursor-pointer animate-in fade-in slide-in-from-bottom-8 fill-mode-backwards border-gray-100 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            style={{ animationDelay: `${index * 150}ms` }}
                            onClick={() => window.open(project.liveDemo, '_blank')}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.open(project.liveDemo, '_blank') } }}
                            tabIndex={0}
                            role="link"
                            aria-label={`View ${project.name} live demo`}
                        >
                            <img
                                src={`/api/screenshot?url=${encodeURIComponent(project.liveDemo)}`}
                                alt={`${project.name} preview`}
                                className="absolute bottom-3 right-3 w-36 h-24 object-cover rounded-lg border border-gray-200 shadow-sm pointer-events-none"
                            />
                            <CardContent className="relative z-10 flex flex-col gap-4 pt-6">
                                <h3 className="text-lg font-bold !font-raleway text-[#45505b] leading-snug">
                                    {project.name}
                                </h3>
                                <p className="text-sm text-gray-500 !font-raleway leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <Badge key={i} variant="secondary" className="text-[11px]">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">AI Tools:</span>
                                    {project.ai_tools.length > 0 ? (
                                        project.ai_tools.map((tool, i) => (
                                            <Badge key={i} variant="outline" className="text-[11px]">
                                                {tool}
                                            </Badge>
                                        ))
                                    ) : (
                                        <Badge variant="outline" className="text-[11px] text-gray-400">
                                            None AI
                                        </Badge>
                                    )}
                                </div>
                            </CardContent>
                            <CardFooter className="gap-3 pt-2">
                                <Button variant="outline" size="sm" asChild>
                                    <a href={project.repository} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                        <Github className="size-4" />
                                        Repository
                                    </a>
                                </Button>
                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                    <ExternalLink className="size-3" />
                                    Click card to visit
                                </span>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
