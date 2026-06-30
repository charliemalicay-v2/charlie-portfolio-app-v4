import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url')
  if (!url) {
    return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 })
  }

  const screenshotUrl = `https://pageshot.site/v1/screenshot?url=${encodeURIComponent(url)}&width=600&height=400&format=png`

  try {
    const response = await fetch(screenshotUrl, { signal: AbortSignal.timeout(10000) })

    if (!response.ok) {
      return NextResponse.json({ error: 'Screenshot failed' }, { status: 502 })
    }

    const image = await response.arrayBuffer()

    return new NextResponse(image, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
      },
    })
  } catch {
    return NextResponse.json({ error: 'Screenshot request failed' }, { status: 502 })
  }
}
