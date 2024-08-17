import { defaultLanguage, languages } from "@/i18n";
import { createI18nMiddleware } from "fumadocs-core/middleware";
import {
  type NextFetchEvent,
  NextResponse,
  type NextRequest,
} from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const cookie = req.cookies.get("locale");
  const localization = createI18nMiddleware({
    languages,
    defaultLanguage,
    hideLocale: "always",
  });
  if (!cookie || !languages.includes(cookie.value)) {
    req.cookies.delete("locale");
    return localization(req, ev);
  }
  if (languages.some((lang) => req.nextUrl.pathname.startsWith(`/${lang}`))) {
    return NextResponse.next();
  }
  return NextResponse.rewrite(
    new URL(`/${cookie.value}${req.nextUrl.pathname}`, req.url)
  );
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
