import { Banner } from "@/components/banner";

export default function Work() {
  const title = "Work";
  const teks = "Hai, Sekarang ini adalah halaman Work";
  return (
    <main>
      <Banner title={title} teks={teks} />
    </main>
  );
}
