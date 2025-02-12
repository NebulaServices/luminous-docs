import algosearch from "algoliasearch";
import * as fs from "node:fs";
import env from "@next/env";
import { DocumentRecord, sync } from "fumadocs-core/search/algolia";
try {
  env.loadEnvConfig(process.cwd());
  const content = fs.readFileSync(".next/server/app/static.json.body");

  const allIndexes: Record<string, DocumentRecord[]> = JSON.parse(
    content.toString()
  );
  const client = algosearch(
    "WSEHHHX6XS",
    process.env.ALGOLIA_PRIVATE_API_KEY || ""
  );

  for (const [lang, indexes] of Object.entries(allIndexes)) {
    await sync(client, {
      document: `nebulaproxy_${lang}`,
      documents: indexes,
    });
  }
} catch (e) {
  console.error(e);
  process.exit(1)
}
