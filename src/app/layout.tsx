import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety, Trauma & EMDR Therapy in Santa Monica, CA",
  description:
    "Licensed Clinical Psychologist in Santa Monica, CA offering evidence-based therapy (CBT, EMDR, Somatic) for adults struggling with anxiety, trauma, and burnout. In-person & telehealth sessions across California.",
  keywords: [
    "Therapist Santa Monica CA",
    "Psychologist Santa Monica",
    "Anxiety Therapy Santa Monica",
    "EMDR Therapy California",
    "Trauma Therapist Santa Monica",
    "Burnout Therapy High Achievers",
    "Dr. Maya Reynolds PsyD",
    "Telehealth Therapy California",
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Therapy for Anxiety & Trauma in Santa Monica",
    description:
      "Grounded, compassionate clinical psychology for high-achieving adults. In-person counseling in Santa Monica & secure telehealth across California.",
    url: "https://www.drmayareynolds.com",
    siteName: "Dr. Maya Reynolds Psychology Practice",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-[#FAF7F2] text-[#232B28] min-h-screen flex flex-col selection:bg-[#C47455] selection:text-white">
        {children}
      </body>
    </html>
  );
}
