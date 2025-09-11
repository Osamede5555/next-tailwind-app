import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        body {
          background: yellow !important;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
