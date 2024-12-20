import Hero from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="font-bold">
      <section>
        <Navbar />
        <Hero />
      </section>
    </div>
  );
}
