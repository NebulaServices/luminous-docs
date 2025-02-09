import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
// edging
export const runtime = "edge";
export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get("title");
  const description = request.nextUrl.searchParams.get("description");
  const font = await (
    await fetch(new URL("./roboto.woff", import.meta.url))
  ).arrayBuffer();
  const nebulaLogo = await (
    await fetch(new URL("./logo.png", import.meta.url))
  ).arrayBuffer();
  return new ImageResponse(
    (
      <div
        tw="h-full w-full flex flex-row justify-center items-center"
        style={{ backgroundColor: "#0b0618", color: "#ded6f5" }}
      >
        <section tw="flex flex-col justify-center items-center">
          <img
            width="192"
            height="192"
            alt=""
            tw="-mb-4"
            src={nebulaLogo as unknown as string}
          />
          <p tw="text-4xl">Nebula Services</p>
        </section>
        <div tw="border-[#330066] h-[50%] border-r border-2 mx-8" />

        <section tw="flex flex-col justify-center items-center">
          <h1 tw="text-6xl font-bold text-[#dcb8ff]">{title}</h1>
          <p tw="text-2xl">{description}</p>
        </section>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "Roboto", data: font, weight: 400 }],
    }
  );
}
