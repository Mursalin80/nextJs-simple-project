import React, { FC, useContext, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ScrollContex } from "./scroll-observer";

const MarkHead: FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContex);
  const [imgLoad, setImgLoad] = useState(false);
  let progress = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImgLoaded = useCallback(() => {
    setImgLoad(true);
  }, []);

  return (
    <div
      ref={refContainer}
      className={`min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10`}
      style={{
        transform: `tranalateY(-${progress * 20}vh)`,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/assest/main.mp4" type="video/mp4 " />
      </video>
      <div
        className={`flex-grow-0 pt-10 transition-opacity duration-3000 ${
          imgLoad ? "opacity-0 " : "opacity-100"
        }`}
      >
        <Image
          src="/assest/logo.svg"
          width={128 / 3}
          height={114 / 3}
          alt="logo"
        />
      </div>
      <div className="p-12 font-blod z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center items-center justify-center flex-1 flex flex-col ">
        <h1 className="mb-6 text-4xl xl:text-5xl">Margelo</h1>
        <h2 className="mb-2 text-4xl xl:text-3xl tracking-tight">
          <span>App Development,</span> <span>done right</span>
        </h2>
      </div>
      <div
        className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-3000 ${
          imgLoad ? "opacity-0" : "opacity-100 -translate-y-10"
        }`}
      >
        <Image
          src="/assest/d-arrow.svg"
          width={188 / 3}
          height={105 / 3}
          alt="Arrow"
          onLoad={handleImgLoaded}
        />
      </div>
    </div>
  );
};

export default MarkHead;
