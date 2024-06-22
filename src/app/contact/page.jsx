import { Banner } from "@/components/banner";

export default function Contact() {
  const title = "Contact";
  const teks = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";
  return (
    <main>
      <section>
        <Banner title={title} teks={teks} />
      </section>
    </main>
  );
}
