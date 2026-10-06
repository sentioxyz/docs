/**
 * Page chrome shared by the two builds of the site: the main one (app/**\/*.tsx, served by the
 * Worker) and the static SDK Reference (app/**\/*.sdk.tsx, see scripts/build-sdk.mjs). The
 * sidebar layout is components/docs-shell.tsx.
 */
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { basePath, SENTIO_TABS, SITE_DESCRIPTION, type SiteBuild } from '@/lib/shared';
import { SentioNav } from '@/components/sentio-nav';

const haffer = localFont({
  variable: '--font-haffer',
  display: 'swap',
  src: [
    { path: '../public/fonts/Haffer-Thin.woff2', weight: '100', style: 'normal' },
    { path: '../public/fonts/Haffer-Light.woff2', weight: '300', style: 'normal' },
    { path: '../public/fonts/Haffer-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/Haffer-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/Haffer-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/Haffer-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/Haffer-Heavy.woff2', weight: '800', style: 'normal' },
    { path: '../public/fonts/Haffer-Black.woff2', weight: '900', style: 'normal' },
  ],
});

const robotoMono = localFont({
  variable: '--font-roboto-mono',
  display: 'swap',
  weight: '100 700',
  src: '../public/fonts/RobotoMono-latin.woff2',
});

export const siteMetadata: Metadata = {
  // Website origin, set per environment at build time (see .github/workflows/deploy.yml)
  metadataBase: new URL(
    `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sentio.xyz'}${basePath}/`,
  ),
  title: {
    default: 'Sentio Docs',
    template: '%s | Sentio Docs',
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: `${basePath}/brand/favicon.ico`,
  },
};

export const siteViewport: Viewport = {
  // Follows the system preference; next-themes overrides color-scheme inline
  // when the user picks a theme manually
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#11071F' },
  ],
  colorScheme: 'light dark',
};

/** <html>, providers and the top nav */
export function SiteShell({ site, children }: { site: SiteBuild; children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${haffer.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider
          /*
           * light / dark / system. next-themes resolves `system` and toggles
           * `.dark` on <html> via a blocking script, so there is no flash.
           * Colors live in global.css under `html:root` and `html.dark`.
           */
          theme={{
            defaultTheme: 'system',
            enableSystem: true,
          }}
          // The search dialog fetches its API directly, so it needs basePath. The static SDK
          // build has no API routes and uses the main site's on the same origin.
          search={{ enabled: true, options: { api: `${basePath}/api/search` } }}
        >
          <SentioNav tabs={[...SENTIO_TABS]} site={site} />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
