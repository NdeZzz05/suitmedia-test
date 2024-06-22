import { Banner } from "@/components/banner";

export default function Ideas() {
  const title = "Ideas";
  const teks = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";
  return (
    <main>
      <Banner title={title} teks={teks} />
    </main>
  );
}
