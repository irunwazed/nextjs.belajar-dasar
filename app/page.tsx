import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <h1>Hello WhatsApp!</h1>
        <Link href="/about">About</Link>
      </div>
    </>
  );
};

export default Home;
