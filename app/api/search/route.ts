import { source } from "@/app/source";
import { createFromSource } from "fumadocs-core/search/server";
// // @ts-expect-error -- untyped
// import { createTokenizer } from "@orama/tokenizers/japanese";

export const { GET } = createFromSource(source, undefined, {
  localeMap: {
    ja: {
      // buggy
      // tokenizer: await createTokenizer(),
      search: {
        threshold: 0,
        tolerance: 0,
      },
    },
  },
});
