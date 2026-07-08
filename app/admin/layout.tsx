import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="border-b bg-white px-6 py-4 flex justify-between items-center">
        <span className="font-semibold text-lg">724 Tesisatçı Admin</span>
        <Link href="/" className="text-sm text-blue-600 hover:underline">
          Siteye Dön
        </Link>
      </div>
      <div className="max-w-6xl mx-auto p-6">{children}</div>
    </div>
  );
}
