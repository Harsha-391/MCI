import "./globals.css";

export const metadata = {
  title: "Mehta Career Institute – IIT-JEE | NEET | Foundation | Jaipur",
  description:
    "Mehta Career Institute, Jaipur – Expert coaching for IIT-JEE (Mains & Advanced), NEET UG, and Foundation courses. Proven results, experienced faculty, regular tests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
