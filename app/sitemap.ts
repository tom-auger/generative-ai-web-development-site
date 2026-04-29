export const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://tom-auger.github.io/generative-ai-web-development-site'
export const substackUrl = 'https://genaiforwebdev.substack.com/'

export default async function sitemap() {
  let routes = ['', '/corrections'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return routes
}
