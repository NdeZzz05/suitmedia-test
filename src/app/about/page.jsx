import { Banner } from "@/components/banner";

export default function About() {
  const title = "About";
  const teks = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";
  return (
    <main>
      <section>
        <Banner title={title} teks={teks} />
      </section>
    </main>
  );
}
