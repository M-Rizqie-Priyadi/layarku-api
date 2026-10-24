
export const metadata = {
  title: "LayarKu",
  description: "Platform katalog film LayarKu"
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        background: "#07172E",
        color: "#FFFFFF"
      }}>
        {children}
      </body>
    </html>
  );
}
