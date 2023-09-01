import { Header } from "@components";
import "@styles/globals.css";

export const metadata = {
  title: "CarpTravel",
  description: "Uncover Carpathian’s Secrets",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
