import Image from "next/image";
import logo from "@/app/icon.svg";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "fumadocs-ui/components/card";
import {
  GlassWater,
  Globe,
  Waypoints,
  Key,
  CircleFadingPlus,
} from "lucide-react";
type FeatureCard = {
  href?: string;
  title: string;
  description: {
    ja: string;
    en: string;
  };
  icon?: React.ReactNode;
};
export default function HomePage({
  params,
}: {
  params: { slug?: string[]; lang: string };
}) {
  const featureCards: FeatureCard[] = [
    {
      href: "https://nebulaproxy.io",
      title: "NebulaWEB",
      description: {
        ja: "何百もの人気サイトをサポートする、魅力的で洗練された Web プロキシです。",
        en: "A stunning and sleek web proxy with support for hundreds of popular sites.",
      },
      icon: <Globe />,
    },
    {
      href: `/${params.lang}/docs/dynamic`,
      title: "Dynamic",
      description: {
        ja: "[ベータ版] 新世代の傍受プロキシ。",
        en: "[BETA] The new generation of interception proxies.",
      },
      icon: <Waypoints />,
    },
    {
      href: "https://velocity.radon.games/",
      title: "Velocity",
      description: {
        ja: "Velocity は、シームレスなブラウジング エクスペリエンスを備えたフル機能のタブ付きプロキシです。",
        en: "Velocity is a fully featured tabbed proxy with a seamless browsing experience.",
      },
      icon: <Globe />,
    },
    {
      href: "https://github.com/nebulaservices/prismora",
      title: "Prismora",
      description: {
        ja: "フィンガープリンティングを利用して、プロキシサービスの無断使用を防止するシステム。(近日公開)",
        en: "A system to prevent unauthorized proxy service use through fingerprinting. (COMING SOON)",
      },
      icon: <Key />,
    },
    {
      href: `/${params.lang}/docs/dispenser`,
      title: "Dispenser",
      description: {
        ja: "Discordサーバーのメンバーにドメインを簡単かつプライベートに配布する",
        en: "Easily and privately distribute domains to members of a Discord server",
      },
      icon: <GlassWater />,
    },
    {
      href: "#",
      title: params.lang === "ja" ? "Marketplace ボット" : "Marketplace Bot",
      description: {
        ja: "Nebula のユーザー作成コンテンツ用の Discord ボット",
        en: "A Discord bot for Nebula's user generated content",
      },
      icon: <CircleFadingPlus />,
    },
  ];
  return (
    <main className="flex h-screen flex-col items-center content-center text-center">
      <Image
        priority
        src={logo}
        alt="Follow us on Twitter"
        className="h-64 w-64"
      />
      <h1 className="text-5xl font-bold mb-2">Nebula Services</h1>
      <p className="text-fd-muted-foreground italic text-2xl">
        {params.lang === "ja" ? "情熱、 スキル" : "Passion, Skill"}
      </p>
      <div className="flex flex-row gap-3 mt-2">
        <Link
          href={`/${params.lang}/docs`}
          className={buttonVariants({
            size: "lg",
            variant: "outline",
            className: "rounded-full bg-fd-background",
          })}
        >
          {params.lang === "ja" ? "始める" : "Get Started"}
        </Link>
        <Link
          href={`/${params.lang}/docs/nebulaweb`}
          className={buttonVariants({
            size: "lg",
            variant: "outline",
            className: "rounded-full bg-fd-background",
          })}
        >
          {params.lang === "ja"
            ? "NebulaWeb セットアップガイド"
            : "NebulaWeb Setup Guide"}
        </Link>
      </div>
      <hr className="w-5/6 mt-7 md:w-1/2" />
      <div className="flex flex-col md:grid grid-cols-3 w-5/6 py-7 md:w-1/2 gap-2">
        {featureCards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description[(params.lang as "ja" | "en") || "en"]}
            icon={card.icon}
            href={card.href}
            className="w-full h-48"
          />
        ))}
      </div>
      <hr className="w-5/6 md:w-1/2" />
      <div className="text-left w-5/6 mt-7 md:w-1/2">
        <div className="text-3xl">
          {params.lang === "ja"
            ? "Nebula の拡大にご協力ください!"
            : "Help Nebula expand!"}
        </div>
        <div>
          {params.lang === "ja"
            ? "以下の方法で Nebula の拡大と成長に貢献できます:"
            : "You can help Nebula expand and grow by:"}
        </div>
        <ul className="list-disc mt-5">
          <li>
            {params.lang === "ja"
              ? "GitHub でプルリクエストを送信し、Nebula に貢献します。"
              : "Submitting pull requests on the GitHub and contributing to Nebula."}
          </li>
          <li>
            {params.lang === "ja"
              ? "GitHub の問題を通じてフィードバックを提供します。"
              : "Giving us feedback through GitHub issues."}
          </li>
          <li>
            {params.lang === "ja"
              ? "Discord で他の人を助ける。"
              : "Helping others in the Discord."}
          </li>
        </ul>
      </div>
      <hr className="mt-7 w-5/6 md:w-1/2" />
      <div className="text-left w-5/6 mt-7 md:w-1/2">
        <div className="text-3xl">
          {params.lang === "ja" ? "ありがとう" : "Thank you"}
        </div>
        <ul className="list-disc mt-5">
          <li>
            {params.lang === "ja"
              ? "Wisp を制作してくれた Mercury Workshop に感謝します"
              : "Mercury Workshop for creating Wisp"}
          </li>
          <li>
            {params.lang === "ja"
              ? "Ultraviolet を制作してくれた TitaniumNetwork に感謝します"
              : "Titanium Network for creating Ultraviolet"}
          </li>
          <li>
            {params.lang === "ja"
              ? "Rammerhead を制作してくれた binary-person に感謝します"
              : "binary-person for creating Rammerhead."}
          </li>
          <li>
            {params.lang === "ja"
              ? "私たちの開発者と翻訳者"
              : "Our developers & translators"}
          </li>
          <li>
            {params.lang === "ja"
              ? "Nebula Services Discordの役立つメンバー"
              : "Helpful members of the Nebula Services Discord"}
          </li>
          <li>
            {params.lang === "ja"
              ? "弊社のサービスをご利用いただく皆様！"
              : "Everyone who use our services!"}
          </li>
        </ul>
      </div>
      <hr className="w-5/6 my-7 md:w-1/2 pb-7" />
    </main>
  );
}
