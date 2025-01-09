'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

function ContactForm() {
  const [state, handleSubmit] = useForm("mnnnlabj");
  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }

  return (
    
    <form onSubmit={handleSubmit} className="space-y-4">
      <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">Your Name</label>
      <Input
        id="name"
        type="text"
        name="name"
        required
        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      
      <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">Your Email</label>
      <Input
        id="email"
        type="email"
        name="email"
        required
        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      
      <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300">Subject</label>
      <Input
        id="subject"
        type="text"
        name="subject"
        required
        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      />
      <ValidationError prefix="Subject" field="subject" errors={state.errors} />
      
      <label htmlFor="message" className="block text-gray-700 dark:text-gray-300">Your Message</label>
      <Textarea
        id="message"
        name="message"
        required
        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      
      <Button type="submit" disabled={state.submitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
        Send Message
      </Button>
    </form>
  );
}

export default function Contact() {
  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-700 dark:text-gray-300">
                <Mail className="mr-2 h-5 w-5" /> abdirahmanabdi5863@gmail.com
              </p>
              <p className="flex items-center text-gray-700 dark:text-gray-300">
                <Phone className="mr-2 h-5 w-5" /> +254 723 275863
              </p>
              <p className="flex items-center text-gray-700 dark:text-gray-300">
                <MapPin className="mr-2 h-5 w-5" /> Nairobi, Kenya
              </p>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Connect with me:</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/Abdirahman5863" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/abdirahman-abdi-92ba53279/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
