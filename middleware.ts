import { i18n } from "@/i18n";
import { createI18nMiddleware } from "fumadocs-core/i18n";
import {
  type NextFetchEvent,
  NextResponse,
  type NextRequest,
} from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const cookie = req.cookies.get("locale");
  const localization = createI18nMiddleware(i18n);
  if (!cookie || !i18n.languages.includes(cookie.value)) {
    req.cookies.delete("locale");
    return localization(req, ev);
  }
  const { pathname } = req.nextUrl;

  const pathLocale = i18n.languages.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (!pathLocale) {
    let path = pathname;

    while (path.startsWith("/")) {
      path = path.slice(1);
    }

    const url = new URL(`/${cookie.value}/${path}`, req.url);
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|static.json|icon.*).*)",
  ],
};
