import React, { FC, useContext, useState, useRef, useCallback } from "react";
import Image from "next/image";
import sty from "../styles/skills.module.css";
import { ScrollContex } from "./scroll-observer";

const opctiyForBlock = (secProgress: number, blockNo: number) => {
  const progress = secProgress - blockNo;
  if (progress >= 0 && progress < 1) {
    return 1;
  }
  return 0.2;
};

const Skills: FC = () => {
  const { scrollY } = useContext(ScrollContex);
  const refContainer = useRef<HTMLDivElement>(null);
  const numOfPages = 3;
  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const half = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + half,
        Math.max(-screenH, scrollY - offsetTop) + half
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div className="bg-black text-white" ref={refContainer}>
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col text-4xl items-center justify-center lg:text-7xl tracking-tight font-semiblod">
        <div className="leading-[1.15]">
          <div
            className={sty.skillText}
            style={{ opacity: opctiyForBlock(progress, 0) }}
          >
            We know our tools inside out.
          </div>
          <span
            className={`${sty.skillText} inline-block after:content-['_]`}
            style={{ opacity: opctiyForBlock(progress, 2) }}
          >
            Our team has contributed 100 commits to React Js core, powering
            thousands of apps worldwide.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
