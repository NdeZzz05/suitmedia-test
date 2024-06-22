import { Banner } from "@/components/banner";
import { ListPost } from "@/components/list-post";
export default function Home() {
  const title = "Home";
  const teks = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

  return (
    <main>
      <Banner title={title} teks={teks} />
      <ListPost />
    </main>
  );
}
