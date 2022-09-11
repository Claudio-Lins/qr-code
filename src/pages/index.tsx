import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Activity } from "phosphor-react";

const Home: NextPage = () => {
  return (
    <div className="bg-[hsl(212, 45%, 89%)] flex h-screen w-screen flex-col items-center justify-center">
      <div className="flex flex-col w-full max-w-[375px] bg-white p-6 shadow-lg gap-6 rounded-2xl">
        <div className="">
          <Image
            className="rounded-xl"
            src="/images/image-qr-code.png"
            alt="QR Code"
            layout="responsive"
            width={300}
            height={300}
          />
        </div>
        <h3 className="font-bold text-center text-2xl px-4 text-[hsl(218, 44%, 22%)]">Improve your front-end skills by building projects</h3>
        <p className="px-8 text-center text-[hsl(220, 15%, 55%)]">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
};

export default Home;
