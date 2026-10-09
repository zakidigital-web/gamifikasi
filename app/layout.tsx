import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gamifikasi-school.vercel.app"),
  title: {
    default: "Gamifikasi untuk Pendidikan — Kotak Materi & Game Edukasi",
    template: "%s · Gamifikasi untuk Pendidikan",
  },
  description:
    "Rujukan lengkap gamifikasi untuk guru: definisi, elemen mekanika, manfaat, jebakan, cara membuat game edukatif dengan AI, koleksi slide materi, dan webgame kuis interaktif.",
  keywords: [
    "gamifikasi",
    "gamifikasi pendidikan",
    "gamebased learning",
    "materi guru",
    "game edukasi",
    "kuis interaktif",
  ],
  authors: [{ name: "Hafidh Nur Eka Hasyim, S.Kom" }],
  openGraph: {
    title: "Gamifikasi untuk Pendidikan",
    description:
      "Definisi, elemen, manfaat, dan praktik membuat game edukatif — lengkap dengan slide materi dan webgame.",
    locale: "id_ID",
    type: "website",
  },
};

const themeScript = `(function(){try{var k="tema-gamifikasi";var s=localStorage.getItem(k)||"system";var d=s==="dark"||(s==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${outfit.variable} ${jakarta.variable} ${jetbrains.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh flex flex-col bg-surface text-fg">{children}</body>
    </html>
  );
}
