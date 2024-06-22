import { Banner } from "@/components/banner";

export default function Work() {
  const title = "Work";
  const teks = "Hai, Sekarang ini adalah halaman Work";
  return (
    <main>
      <section>
        <Banner title={title} teks={teks} />
      </section>
    </main>
  );
}
