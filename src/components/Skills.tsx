import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

const skills = [
  { category: "Programming Languages", items: ["JavaScript", "TypeScript", "Solidity"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
  { category: "Web3", items: ["Web3.js", "Ethers.js", "Hardhat", "IPFS"] },
  { category: "Tools & Others", items: ["Git", "Docker", "Figma", "WordPress"] },
]

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-20 bg-white dark:bg-gray-900"
    
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
           
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{skillCategory.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

