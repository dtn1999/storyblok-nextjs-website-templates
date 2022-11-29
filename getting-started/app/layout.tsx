import "../styles/globals.css";
import { LayoutWrapper } from "./LayoutWrapper";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutWrapper>
      <html lang="en">
        <body>
          <h1>just a test </h1>
          {children}
        </body>
      </html>
    </LayoutWrapper>
  );
}
