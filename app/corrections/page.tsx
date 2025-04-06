export const metadata = {
  title: 'Book Corrections',
  description: 'Corrections and updates for Generative AI for Web Development',
}

export default function CorrectionsPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Corrections</h1>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        If you find any errors or have questions about the content, please send them to genaiforwebdev[at]tomauger[dot]am.
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-medium mb-4">Acknowledgements</h2>
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          We would like to thank the following individuals for their corrections and feedback:
        </p>
        <ul className="list-disc pl-6 mb-6 text-neutral-600 dark:text-neutral-400">
          <li>Amine Najahi</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-medium mb-4">First Edition Corrections</h2>
        
        <div className="border-b pb-4 mb-4">
          <h3 className="font-medium">Chapter 3: Introduction to ChatGPT</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">Page 39</p>
          <div className="mb-2">
            <p className="font-medium">Original text:</p>
            <p className="text-neutral-600 dark:text-neutral-400 mb-2 pl-4">
              "Having a high-level understanding of how LLMs like ChatGPT work is helpful for understanding their limitations and how to best to tune them to specific use cases."
            </p>
          </div>
          <div>
            <p className="font-medium">Correction:</p>
            <p className="text-neutral-600 dark:text-neutral-400 pl-4">
              "Having a high-level understanding of how LLMs like ChatGPT work is helpful for understanding their limitations and how to best adapt them to specific use cases."
            </p>
          </div>
        </div>

        <div className="border-b pb-4 mb-4">
          <h3 className="font-medium">Chapter 14: The Future of AI in Web Development</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">Page 236</p>
          <div className="mb-2">
            <p className="font-medium">Original text:</p>
            <p className="text-neutral-600 dark:text-neutral-400 mb-2 pl-4">
              "The arguments presented in favor of regulation largely focused on safety concerns, from the dangers of AI-generated disinformation to the potential existential threat posed by a future "superintelligence" that could harm."
            </p>
          </div>
          <div>
            <p className="font-medium">Correction:</p>
            <p className="text-neutral-600 dark:text-neutral-400 pl-4">
              "The arguments presented in favor of regulation largely focused on safety concerns, from the dangers of AI-generated disinformation to the potential existential threat posed by a future "superintelligence" that could harm humanity."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 