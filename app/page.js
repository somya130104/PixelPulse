import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="md:px-16 lg:pd-24 xl:px-36">
      <Header />
      <Hero/>
    </div>
  );
}
