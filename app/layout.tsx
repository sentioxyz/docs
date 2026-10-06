import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { SiteShell, siteMetadata, siteViewport } from '@/components/site-shell';
import { DocsShell } from '@/components/docs-shell';
import './global.css';

export const metadata = siteMetadata;

export const viewport = siteViewport;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SiteShell site="main">
      {/* Docs are served from the basePath root, so DocsLayout lives in the root layout */}
      <DocsShell tree={source.getPageTree()}>{children}</DocsShell>
    </SiteShell>
  );
}
