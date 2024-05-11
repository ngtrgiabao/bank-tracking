import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/ui/sidebar";
import Image from "next/image";
import MobileNav from "@/components/ui/mobile-nav";
import { getLoggedInUser } from "@/lib/actions/user";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen max-w-full">
          <Sidebar user={loggedIn} />

          <div className="flex size-full flex-col">
            <nav className="flex items-center justify-between p-4 w-full shadow-md lg:hidden">
              <Image
                src="https://i.pinimg.com/564x/90/af/12/90af12758c4f2881b57866bfeffc0d92.jpg"
                width={40}
                height={40}
                alt="logo"
                className="rounded-full"
              />

              <div>
                {/* <MobileNav user={loggedIn} /> */}
              </div>
            </nav>

            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
