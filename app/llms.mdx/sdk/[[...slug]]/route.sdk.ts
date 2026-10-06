import { sdkLlms, sdkSource } from '@/lib/sdk-source';
import { notFound } from 'next/navigation';

// Markdown of each SDK Reference page (/llms.mdx/sdk/<slug>/content.md), written out by the export
export const dynamic = 'force-static';

export async function GET(_req: Request, { params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const page = sdkSource.getPage(slug?.slice(0, -1));
  if (!page) notFound();

  return new Response(await sdkLlms.page(page), {
    headers: {
      'Content-Type': 'text/markdown',
    },
  });
}

export function generateStaticParams() {
  return sdkSource.getPages().map((page) => ({ slug: [...page.slugs, 'content.md'] }));
}
