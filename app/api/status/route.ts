const API_URL = process.env.LEADERHQ_API_URL ?? 'https://api.leaderhq.io'

export async function GET() {
  const res = await fetch(`${API_URL}/core/status`, { cache: 'no-store' })
  const data = await res.json()
  return Response.json(data, { status: res.status })
}
