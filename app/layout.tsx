import type { Metadata } from "next";
import { Chakra_Petch, JetBrains_Mono } from "next/font/google";
import { AnalyticsScript } from "@/components/analytics/AnalyticsScript";
import { DevelopmentBanner } from "@/components/layout/DevelopmentBanner";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { createAbsoluteUrl, siteConfig } from "@/lib/site";
import { LEGACY_THEME_STORAGE_KEY, THEME_PREFERENCE_STORAGE_KEY } from "@/lib/theme";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const defaultOgImage = createAbsoluteUrl("/images/digicorp-proof-2026.webp");

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Software Engineer",
    "Full-Stack",
    "Mobile Engineer",
    "Next.js portfolio",
    "Android iOS production",
    "Software engineer portfolio",
  ],
  openGraph: {
    type: "website",
    url: createAbsoluteUrl("/"),
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: defaultOgImage, alt: "Carlos Arancibia portfolio preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [defaultOgImage],
  },
};

const themeScript = `(() => {
  try {
    const preferenceKey = "${THEME_PREFERENCE_STORAGE_KEY}";
    const legacyKey = "${LEGACY_THEME_STORAGE_KEY}";
    const root = document.documentElement;

    const isResolvedTheme = (value) => value === "light" || value === "dark";
    const isThemePreference = (value) => value === "system" || isResolvedTheme(value);

    let storedPreference = localStorage.getItem(preferenceKey);

    if (!isThemePreference(storedPreference)) {
      const legacyTheme = localStorage.getItem(legacyKey);
      storedPreference = isResolvedTheme(legacyTheme) ? legacyTheme : "system";
      localStorage.setItem(preferenceKey, storedPreference);
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolvedTheme =
      storedPreference === "system"
        ? prefersDark
          ? "dark"
          : "light"
        : storedPreference;

    root.classList.toggle("dark", resolvedTheme === "dark");
    root.dataset.theme = resolvedTheme;
    root.dataset.themePreference = storedPreference;
    root.style.colorScheme = resolvedTheme;
    window.setTimeout(() => root.classList.add("theme-ready"), 0);
  } catch {
    // Ignore storage access failures.
  }
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${chakraPetch.variable} ${jetBrainsMono.variable} min-h-full antialiased`}
      >
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <div className="relative flex min-h-screen flex-col">
          <Nav />
          <DevelopmentBanner />
          <main id="content" className="grow">
            {children}
          </main>
          <Footer />
        </div>
        <AnalyticsScript />
      </body>
    </html>
  );
}
