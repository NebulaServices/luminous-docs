"use server";

import { cookies } from "next/headers";

export async function setLang(lang: string) {
  (await cookies()).set("locale", lang, { path: "/" });
}
