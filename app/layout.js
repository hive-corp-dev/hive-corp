import "modern-css-reset/dist/reset.min.css";
import "@/app/_styles/globals.scss";
import { Noto_Sans_JP } from "next/font/google";
import Header from "./_components/layouts/header/header";
import Footer from "./_components/layouts/footer/footer";
import { HeaderContextProvider } from "./_context/header-context";
import { HamburgerMenuContextProvider } from "./_context/hamburger-menu-context";
import HamburgerMenu from "./_components/layouts/hamburger-menu/hamburger-menu";
import GoogleAnalytics from "./_utils/google-analytics";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <GoogleAnalytics />
      </head>
      <HamburgerMenuContextProvider>
        <HeaderContextProvider>
          <body className={notoSansJp.className}>
            <Header />
            <HamburgerMenu />
            {children}
            <Footer />
          </body>
        </HeaderContextProvider>
      </HamburgerMenuContextProvider>
    </html>
  );
}
