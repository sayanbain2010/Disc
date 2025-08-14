// pages/_app.js
import "../styles/tippy.css";
import "../styles/customColors.css";
import "tailwindcss/tailwind.css";
import "nprogress/nprogress.css";

import NProgress from "nprogress";
import Router from "next/router";
import Head from "next/head";

import Header from "../components/Static/Header";
import Footer from "../components/Static/Footer";

import { ThemeProvider } from "next-themes";

// NProgress route events
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function RetroApp({ Component, pageProps }) {
  const NavItems = [
    { link: true, name: "Home", icon: "fal fa-home", activeIcon: "fa fa-home", href: "/" },
    { link: true, name: "Commands", icon: "fa fa-list-alt", activeIcon: "fa fa-list-alt", href: "/commands" },
    { link: true, name: "Support", icon: "fab fa-discord", activeIcon: "fab fa-discord", href: "https://discord.gg/YOUR_SUPPORT_LINK" },
    { link: true, name: "Add Retro", icon: "fal fa-robot", activeIcon: "fab fa-robot", href: "https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=277028620608&scope=bot%20applications.commands" },
    { link: true, name: "Partners", icon: "fal fa-handshake", activeIcon: "fa fa-handshake", href: "/partners" }
  ];

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="h-screen relative border-t-4 border-purple-600">
        {/* Gradient background */}
        <div
          className="bg-gradient-to-b z-10 opacity-25 absolute top-0 w-full from-purple-600 to-transparent"
          style={{ height: "500px" }}
        />
        
        <Head>
          <title>Retro</title>
          <meta name="description" content="Retro - The Ultimate Music & Utility Bot" />
        </Head>

        <main className="transition-all duration-200 z-10 absolute inset-0 px-5 h-screen max-w-7xl w-full mx-auto">
          <Header NavItems={NavItems} />
          <div className="block px-5 md:px-0">
            <Component {...pageProps} />
          </div>
          <Footer />
        </main>

        {/* Scripts */}
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="/js/main.js?i=2"></script>
      </div>
    </ThemeProvider>
  );
     }
