
export default function Home() {
  return (
    <main style={{
      background: "#07172E",
      color: "#FFFFFF",
      minHeight: "100vh",
      padding: "32px",
      boxSizing: "border-box"
    }}>
      <h1 style={{ color: "#3995FF" }}>
        🎬 LayarKu
      </h1>

      <p>
        Semua cerita, satu layar.
      </p>

      <section style={{
        background: "#102B50",
        padding: "20px",
        borderRadius: "14px",
        marginTop: "24px"
      }}>
        <h2>Selamat datang, bro!</h2>
        <p>
          Katalog film LayarKu sedang dipersiapkan.
        </p>
        <p>
          API katalog: /api/movies
        </p>
      </section>
    </main>
  );
}
