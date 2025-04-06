import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <Image
            src="/book-cover.webp"
            alt="Generative AI for Web Development book cover"
            width={300}
            height={450}
            priority
            className="rounded-md shadow-md"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
            Generative AI for Web Development
          </h1>
          <h2 className="mb-4 text-xl text-neutral-700 dark:text-neutral-300">
            Building Web Applications Powered by OpenAI APIs and Next.js
          </h2>
          <p className="mb-4">
            {`Explore the world of Generative AI and understand why it matters. This book is divided into two parts, introducing tools such as ChatGPT, DALL-E, and shows you how to use them to build AI-powered web apps.`}
          </p>
          <p className="mb-6">
            {`Written by Tom Auger and Emma Saroyan, this practical guide demonstrates how to build a series of web apps with Next.js that showcase how to use the OpenAI APIs - including a Story/Poetry generator, a language learning app, and a blog site with a custom Chatbot widget.`}
          </p>
          <Link 
            href="https://link.springer.com/book/10.1007/979-8-8688-0885-2"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm"
          >
            Buy the book
          </Link>
        </div>
      </div>

      <div className="mt-10 mb-8">
        <h3 className="mb-4 text-xl font-medium">What you will learn</h3>
        <ul className="list-disc pl-5 space-y-2 text-neutral-800 dark:text-neutral-200">
          <li>Learn how to use and integrate Generative AI into web applications with real-world examples</li>
          <li>Understand the legal, ethical, and security concerns with using Generative AI in web development</li>
          <li>Explore how to utilize ChatGPT, DALL-E and OpenAI APIs to generate code for your web projects</li>
          <li>Build three complete web applications with Next.js and OpenAI APIs</li>
          <li>Get insights into alternative models beyond OpenAI</li>
        </ul>
      </div>
      
      <div className="mt-10 mb-8 p-4 bg-blue-50 dark:bg-blue-950 rounded-md border border-blue-200 dark:border-blue-900">
        <h3 className="mb-2 text-lg font-medium">Source Code</h3>
        <p className="mb-2">
          All source code examples from the book are available on GitHub:
        </p>
        <ul className="mb-3 pl-5 space-y-1">
          <li><strong>Magic Carpets Website</strong> - A Next.js web app generated with ChatGPT and DALL-E</li>
          <li><strong>Content Generator</strong> - Using OpenAI Chat API and Image API</li>
          <li><strong>Story Generator</strong> - Create stories and poetry with AI illustrations</li>
          <li><strong>Language Learning App</strong> - AI-powered quizzes for language learning</li>
          <li><strong>Interactive Blog</strong> - Blog with an AI chat widget for content questions</li>
        </ul>
        <Link 
          href="https://github.com/Apress/Generative-AI-for-Web-Development" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors shadow-sm"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          View Repository
        </Link>
      </div>

      <div className="mt-10 mb-8 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-md border border-neutral-200 dark:border-neutral-800">
        <h3 className="mb-2 text-lg font-medium">Corrections and feedback</h3>
        <p className="mb-2">
          We maintain a list of <Link href="/corrections" className="text-blue-600 hover:underline">corrections</Link> for the book as they are identified.
        </p>
        <p>
          Please send any corrections you find to <span className="italic">genaiforwebdev[at]tomauger[dot]am</span>.
        </p>
      </div>
    </section>
  )
}
