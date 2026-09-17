import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hanshaoye.com"),
  title: "汉少爷手作饭团 | 一顿握在手里的热饭",
  description:
    "汉少爷饭团以东方米食文化为基础，为忙碌日常提供健康、温暖、便捷的新式热食体验。",
  openGraph: {
    title: "汉少爷手作饭团",
    description: "千年米艺，手心相传。",
    type: "website",
    locale: "zh_CN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#EDE5D9",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
