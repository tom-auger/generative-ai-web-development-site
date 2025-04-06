import { baseUrl } from 'app/sitemap'

export async function GET() {
  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Generative AI for Web Development</title>
        <link>${baseUrl}</link>
        <description>Book site for Generative AI for Web Development</description>
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
