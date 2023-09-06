import { Header } from "@components";
import "@styles/globals.css";

export const metadata = {
  title: "CarpTravel",
  description: "Uncover Carpathian’s Secrets",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/favicons/favicon-light.ico"
          type="image/x-icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/assets/favicons/favicon-dark.ico"
          type="image/x-icon"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
