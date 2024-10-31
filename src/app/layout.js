import Navbar from "@/components/Navbar";
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
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
