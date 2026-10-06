import { sdkFullTree, sdkSource } from '@/lib/sdk-source';

// The whole SDK sidebar tree, loaded once by components/sdk-docs-shell.tsx (written out by the export)
export const dynamic = 'force-static';

export async function GET() {
  return Response.json(await sdkSource.serializePageTree(sdkFullTree()));
}
