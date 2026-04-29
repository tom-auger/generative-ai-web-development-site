export const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://genaiforwebdev.com'
export const substackUrl = 'https://genaiforwebdev.substack.com/'

export default async function sitemap() {
  let routes = ['', '/corrections'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return routes
}
