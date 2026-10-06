import type { ReactNode } from 'react';
import { SdkDocsShell } from '@/components/sdk-docs-shell';
import { sdkSource, sdkTreeFor } from '@/lib/sdk-source';

// Under the catch-all so it gets the page's slug: each page carries only its part of the tree
export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ slug?: string[] }>;
  children: ReactNode;
}) {
  const { slug } = await params;
  const page = sdkSource.getPage(slug);
  return <SdkDocsShell tree={sdkTreeFor(page?.url ?? '/sdk')}>{children}</SdkDocsShell>;
}
