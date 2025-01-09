import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Abdirahman Abdi. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/Abdirahman5863" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/abdirahman-abdi-92ba53279/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-400">
          Built with ❤️ using Next.js and Tailwind CSS
        </div>
      </div>
    </footer>
  )
}

