"use client"

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
}

export default function About() {
  return (
    <motion.section 
      id="about" 
      className="py-20 bg-white dark:bg-gray-800"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.p 
            className="mb-4 text-lg text-gray-700 dark:text-gray-300"
            variants={itemVariants}
          >
            I'm a Full-Stack Developer based in Nairobi, Kenya, with a passion for building innovative digital solutions. With expertise in both Web2 and Web3 technologies, I specialize in creating scalable, user-focused web applications that make a difference.
          </motion.p>
          <motion.p 
            className="mb-4 text-lg text-gray-700 dark:text-gray-300"
            variants={itemVariants}
          >
            My journey in tech began with an intensive Web Development Program at Code 3 Camp, where I honed my skills in modern frameworks and tools like React, Next.js, Node.js, and Solidity. This strong foundation, combined with my internship experiences at Ngeni Labs and Zidio Development, has equipped me with a versatile skill set to tackle complex development challenges.
          </motion.p>
          <motion.p 
            className="text-lg text-gray-700 dark:text-gray-300"
            variants={itemVariants}
          >
            When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or mentoring aspiring developers. I'm always excited about new opportunities to create impactful solutions and collaborate with like-minded professionals.
          </motion.p>
        </div>
      </div>
    </motion.section>
  )
}

