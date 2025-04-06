import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Explore chapters and topics from Generative AI for Web Development.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Book</h1>
      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
        Please view our blog on substack <a href="https://genaiforwebdev.substack.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
      </p>
      {/* <BlogPosts /> */}
    </section>
  )
}
