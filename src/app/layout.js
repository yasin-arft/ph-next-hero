import localFont from "next/font/local";
import "./globals.css";

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
            <h6>Logo</h6>
            <ul>
              <li>About</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
