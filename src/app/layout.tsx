import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const space_gro = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>EBP - Your Reliable Chat Assistant</title>
        <meta name="title" content="EBP - Your Reliable Chat Assistant" />
        <meta
          name="description"
          content="EBP is a chat application designed to provide accurate and timely answers about labor laws. It serves as a valuable resource for employees, employers, and HR professionals seeking information on various labor regulations and policies"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_DOMAIN}`} />
        <meta
          property="og:title"
          content="EBP - Your Reliable Chat Assistant"
        />
        <meta
          property="og:description"
          content="EBP is a chat application designed to provide accurate and timely answers about labor laws. It serves as a valuable resource for employees, employers, and HR professionals seeking information on various labor regulations and policies"
        />
        <meta
          property="og:image"
          content="https://github.com/SIRIUS-webkit/chat-bot/blob/master/public/meta_bg.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`${process.env.NEXT_PUBLIC_DOMAIN}`}
        />
        <meta
          property="twitter:title"
          content="EBP - Your Reliable Chat Assistant"
        />
        <meta
          property="twitter:description"
          content="EBP is a chat application designed to provide accurate and timely answers about labor laws. It serves as a valuable resource for employees, employers, and HR professionals seeking information on various labor regulations and policies"
        />
        <meta
          property="twitter:image"
          content="https://github.com/SIRIUS-webkit/chat-bot/blob/master/public/meta_bg.png"
        />
      </head>
      <body className={space_gro.className}>{children}</body>
    </html>
  );
}
