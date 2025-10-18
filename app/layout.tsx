import "./globals.css";
import Header from "@/@module/@common/header";
import Footer from "@/@module/@common/footer";
import { ModalProvider } from "@/@module/@common/modal/modal-modal-context";
import StateProvider from "@/appstore/providers/state-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <StateProvider>
          <Header />
          <ModalProvider>{children}</ModalProvider>
          <Footer />
        </StateProvider>
      </body>
    </html>
  );
}
