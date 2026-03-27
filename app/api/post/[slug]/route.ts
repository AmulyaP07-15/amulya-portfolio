import { NextRequest, NextResponse } from 'next/server';
import { getPostBySlug } from '@/lib/mdx';

export async function GET(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json({ content: post.content });
}