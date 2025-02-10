"use client";
import algoSearch from "algoliasearch";
import type { SharedProps } from "fumadocs-ui/components/dialog/search";
import SearchDialog from "fumadocs-ui/components/dialog/search-algolia";
import { useParams } from "next/navigation";

export default function CustomSearchDialog(props: SharedProps) {
  const { lang } = useParams();
  return (
    <SearchDialog
      index={algoSearch(
        "WSEHHHX6XS",
        "14c2d83970b3999c98e0113303958ab4"
      ).initIndex(`nebulaproxy_${lang}`)}
      tags={[]}
      showAlgolia
      {...props}
    />
  );
}
