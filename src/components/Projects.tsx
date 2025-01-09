"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: "Orecordify",
    description: "A SaaS application for inventory management, order processing, customer management, and analytics.",
    image: "/orcordify.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", 'postgresql'],
    features: [
      "Real-time inventory tracking",
      "Order management system",
      "Customer analytics dashboard",
      "Automated reports"
    ],
    liveDemo: "https://orecordify.com",
    githubRepo: "https://github.com/Abdirahman5863/Orecordify"
  },
  {
    title: "Web3 Kickstarter",
    description: "A decentralized crowdfunding platform built on blockchain technology, combining the familiar Kickstarter experience with Web3 capabilities.",
    image: "/kick.png",
    tech: ["Solidity", "TypeScript", "Next.js", "Tailwind CSS", "ThirdWeb"],
    features: [
      "Decentralized project funding",
      "Smart contract integration",
      "Transparent transaction history",
      "Wallet connectivity",
      "Project creation and management"
    ],
    liveDemo: "https://web3kickstarter-s41l.vercel.app",
    githubRepo: "https://github.com/Abdirahman5863/web3kickstarter"
  },
  {
    title: "ProSchedular",
    description: "A modern scheduling platform that revolutionizes appointment management with smart scheduling, professional profiles, and automated notifications.",
    image: "/pro.png",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Supabase"],
    features: [
      "Smart Scheduling with customizable availability",
      "Professional Profile pages",
      "Calendar Integrations (Google, Outlook)",
      "Automated email/SMS notifications"
    ],
    liveDemo: "https://pro-schedular.vercel.app",
    githubRepo: "https://github.com/Abdirahman5863/pro-schedular"
  },
 
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0])

  return (
    <motion.section 
      id="projects" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className="h-full flex flex-col bg-white dark:bg-gray-700 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <CardHeader className="space-y-4">
                  <div className="aspect-video relative overflow-hidden rounded-lg">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      layout="fill"
                      objectFit="cover"
                      className="transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <Button asChild variant="outline" size="sm">
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-12"
          >
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">{selectedProject.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {selectedProject.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Key Features:</h3>
                <ul className="mb-6 text-sm text-gray-600 dark:text-gray-300 list-disc pl-4 space-y-1">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
                  <Button asChild variant="outline">
                    <a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-800 dark:text-gray-200 hover:text-primary"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a
                      href={selectedProject.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-800 dark:text-gray-200 hover:text-primary"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub Repo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence> */}
      </div>
    </motion.section>
  )
}

