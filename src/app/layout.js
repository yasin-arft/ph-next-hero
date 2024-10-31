import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Next Hero",
  description: "Next hero web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <h6><Link href={'/'}>Logo</Link></h6>
            <ul>
              <li><Link href={'/about'}>About</Link></li>
              <li><Link href={'/services'}>Services</Link></li>
              <li><Link href={'/contact'}>Contact</Link></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
