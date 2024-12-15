import type { Metadata, Viewport } from "next";
import AuthenticatedLayout from "../_components/layout/AuthenticatedLayout";

export const metadata: Metadata = {
  title: "Finder Jet Admin Dashboard",
  description:
    "Admin dashboard for managing Finder Jet's lost item tracking and reporting system.",
  keywords: "admin dashboard, lost items management, Finder Jet admin",
  applicationName: "Finder Jet Admin",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    console.log('RootLayout............................');
  return <AuthenticatedLayout>{children}</AuthenticatedLayout>;
}
