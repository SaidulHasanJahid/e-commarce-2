import "./globals.css";
import Header from "@/@module/@common/header";
import Footer from "@/@module/@common/footer";
import { ModalProvider } from "@/@module/@common/modal/modal-modal-context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Header />
        <ModalProvider>{children}</ModalProvider>
        <Footer />
      </body>
    </html>
  );
}
