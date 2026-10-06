import { sdkMarkdownUrl, sdkSource } from '@/lib/sdk-source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { SITE_DESCRIPTION } from '@/lib/shared';

interface Props {
  params: Promise<{ slug?: string[] }>;
}

export default async function Page(props: Props) {
  const params = await props.params;
  const page = sdkSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <header className="flex flex-col gap-3 border-b pb-6">
        {/* Page actions sit to the right of the title and wrap below it on narrow screens */}
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
          <DocsTitle className="min-w-0">{page.data.title}</DocsTitle>
          <div className="flex shrink-0 flex-row items-center gap-2">
            <MarkdownCopyButton markdownUrl={sdkMarkdownUrl(page)} />
            <ViewOptionsPopover />
          </div>
        </div>
        <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      </header>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // TypeDoc links pages by relative file paths
            a: createRelativeLink(sdkSource, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return sdkSource.generateParams();
}

// No per-page OG image: the main site renders those in the Worker, and this build is static
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const page = sdkSource.getPage(params.slug);
  if (!page) notFound();

  const title = page.data.title;
  const description = page.data.description ?? SITE_DESCRIPTION;
  return {
    title,
    description,
    openGraph: { type: 'article', siteName: 'Sentio Docs', title, description },
    twitter: { card: 'summary', title, description },
  };
}
