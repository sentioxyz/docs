import type { ReactNode } from 'react';
import { SiteShell, siteMetadata, siteViewport } from '@/components/site-shell';
import './global.css';

/** Root layout of the static SDK Reference build (scripts/build-sdk.mjs) */
export const metadata = siteMetadata;

export const viewport = siteViewport;

export default function Layout({ children }: { children: ReactNode }) {
  return <SiteShell site="sdk">{children}</SiteShell>;
}
