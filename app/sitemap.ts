import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'
export const substackUrl = 'https://genaiforwebdev.substack.com/'

export default async function sitemap() {
  let routes = ['', '/corrections'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return routes
}
