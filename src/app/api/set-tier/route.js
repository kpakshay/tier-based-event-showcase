import { currentUser } from '@clerk/nextjs/server';

export const runtime = 'edge';

export async function POST(req) {
  const user = await currentUser();

  if (!user) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { tier } = await req.json();

  try {
    const response = await fetch(`https://api.clerk.com/v1/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
      },
      body: JSON.stringify({
        public_metadata: {
          tier,
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to update tier');
    }

    return new Response(JSON.stringify({ message: 'Tier updated' }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: 'Failed to update metadata' }), { status: 500 });
  }
}