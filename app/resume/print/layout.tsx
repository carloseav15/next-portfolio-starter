import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Printable Resume | Carlos Arancibia",
  description: "Print-ready HTML version of Carlos Arancibia's professional resume.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrintResumeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
