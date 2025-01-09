"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Founder & Lead Developer",
    company: "Orecordify",
    period: "December 2024 – Present",
    description:
      "Launched and manage Orecordify, a SaaS application focused on inventory management, order processing, and customer management.",
    achievements: [
      "Built the application using Next.js, TypeScript, Tailwind CSS, and Supabase.",
      "Designed features for tracking orders and customer data.",
      "Led product development and marketing efforts to expand the user base.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Ngeni Labs",
    period: "January 2024 – April 2024",
    description:
      "Collaborated on blockchain-based Web3 applications using Solidity, TypeScript, and Next.js.",
    achievements: [
      "Contributed to the development of smart contracts for decentralized applications.",
      "Assisted in optimizing workflows and testing blockchain functionality with Hardhat.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Zidio Development",
    period: "May 2024 – August 2024",
    description:
      "Worked on developing responsive web applications using modern front-end frameworks.",
    achievements: [
      "Built and deployed several client websites using React and Tailwind CSS.",
      "Ensured responsiveness and optimized designs for various devices.",
      "Integrated APIs to enhance platform functionality.",
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-20 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">{exp.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {exp.company} | {exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">{exp.description}</p>
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Key Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
