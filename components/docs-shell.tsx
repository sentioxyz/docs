'use client';

import type { ReactNode } from 'react';
import type * as PageTree from 'fumadocs-core/page-tree';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { SentioSidebarGroup } from '@/components/sentio-sidebar-group';
import { SentioThemeSwitch } from '@/components/sentio-theme-switch';
import { AISearch, AISearchPanel, AISearchTrigger } from '@/components/ai/search';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import { MessageCircleIcon } from 'lucide-react';

/**
 * Sidebar layout and Ask AI around the doc pages, in both builds of the site. A client component so
 * the SDK Reference can swap in its full tree after the first paint (sdk-docs-shell.tsx).
 */
export function DocsShell({ tree, children }: { tree: PageTree.Root; children: ReactNode }) {
  return (
    <DocsLayout
      tree={tree}
      {...baseOptions()}
      // SentioNav renders the tabs; `top` mode keeps a tab dropdown out of the sidebar
      tabMode="top"
      // Folders have no route of their own; render them as static group titles
      sidebar={{ components: { Folder: SentioSidebarGroup } }}
      /*
       * Used by the mobile drawer. fumadocs also renders it in the desktop
       * sidebar, where global.css hides it (desktop uses the top nav).
       */
      slots={{ themeSwitch: SentioThemeSwitch }}
    >
      {/* Ask AI: answers come from an AgentConnect agent via /api/chat (lib/ask-ai.ts) */}
      <AISearch>
        <AISearchPanel />
        <AISearchTrigger
          position="float"
          className={cn(
            buttonVariants({
              variant: 'secondary',
              className: 'text-fd-muted-foreground rounded-2xl',
            }),
          )}
        >
          <MessageCircleIcon className="size-4.5" />
          Ask AI
        </AISearchTrigger>
      </AISearch>
      {children}
    </DocsLayout>
  );
}
