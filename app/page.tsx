import Container from "./components/Container";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Container>
        <Navbar />
        <h1 className="py-20 text-5xl font-bold">
          Fiverr Landing
        </h1>
      </Container>
    </main>
  );
}