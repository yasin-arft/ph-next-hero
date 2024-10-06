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
        {children}
      </body>
    </html>
  );
}
