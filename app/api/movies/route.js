
const movies = [
  {
    id: "demo-001",
    title: "Film Demo LayarKu",
    genre: "Drama",
    year: 2026,
    description: "Konten contoh untuk menguji katalog.",
    playbackAvailable: false
  }
];

export async function GET() {
  return Response.json({
    success: true,
    data: movies
  });
}
