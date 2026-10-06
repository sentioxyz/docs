'use client';

import { useEffect, useState, type ReactNode } from 'react';
import type * as PageTree from 'fumadocs-core/page-tree';
import { deserializePageTree } from 'fumadocs-core/source/client';
import { DocsShell } from '@/components/docs-shell';
import { basePath } from '@/lib/shared';

let fullTree: Promise<PageTree.Root> | undefined;

/** The whole SDK tree, once per page load (the browser caches the file across pages) */
function loadFullTree() {
  fullTree ??= fetch(`${basePath}/sdk/tree.json`)
    .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`tree.json: ${res.status}`))))
    .then(deserializePageTree)
    // fumadocs' tree context only takes a new tree when its $id changes
    .then((tree) => ({ ...tree, $id: `${tree.$id}:full` }));
  return fullTree;
}

/**
 * The SDK Reference's sidebar: each page renders with its part of the tree (lib/sdk-source.ts
 * sdkTreeFor), then the whole tree replaces it, so collapsed folders expand in place instead of
 * opening a page. If loading it fails, the trimmed tree stays.
 */
export function SdkDocsShell({ tree, children }: { tree: PageTree.Root; children: ReactNode }) {
  const [full, setFull] = useState<PageTree.Root>();
  useEffect(() => {
    loadFullTree().then(setFull, () => {});
  }, []);
  return <DocsShell tree={full ?? tree}>{children}</DocsShell>;
}
