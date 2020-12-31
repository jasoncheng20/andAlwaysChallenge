import React from "react";
import Hero from "../components/Hero";

export default function Home() {
  
  async function getStaticProps(context) {
    const res = await fetch(`http://localhost:3000/api/cms`);
    const data = await res.json();

    return {
      props: {}, // will be passed to the page component as props
    };
  }

  return (
    <div
      className="p-5 flex items-center justify-center bg-cover bg-local bg-no-repeat bg-bottom"
      style={{ backgroundImage: "url(/images/hero-background.png)" }}
    >
      <Hero src="/images/hero.png" />
    </div>
  );
}
