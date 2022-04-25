import React, { useRef, useContext } from "react";
import { ScrollContex } from "./scroll-observer";

interface WraperProps {
  numOfPages: number;
}

interface TileContexValue {
  numOfPages: number;
  currentPage: number;
}

export const TileContext = React.createContext<TileContexValue>({
  numOfPages: 0,
  currentPage: 0,
});

export const TileWrapper: React.FC<WraperProps> = ({
  children,
  numOfPages,
}) => {
  const { scrollY } = useContext(ScrollContex);
  const refContainer = useRef<HTMLDivElement>(null);
  const { current: elContainer } = refContainer;
  let currentPage = 0;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;

    currentPage = percentY * numOfPages;
  }

  return (
    <TileContext.Provider value={{ numOfPages, currentPage }}>
      <div ref={refContainer} className="relative bg-black text-white">
        {children}
      </div>
    </TileContext.Provider>
  );
};

export const TileBackground: React.FC = ({ children }) => {
  return <div className="absolute h-full w-full">{children}</div>;
};

export const TileContent: React.FC = ({ children }) => {
  return (
    <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
  );
};

interface Props {
  Page: number;
  renderContent: (props: { progress: number }) => any;
}

export const Tile: React.FC<Props> = ({ Page, renderContent }) => {
  const { currentPage, numOfPages } = useContext(TileContent);
  const progress = Math.max(0, currentPage - Page);
  const refContainer = useRef<HTMLDivElement>(null);

  let opacity = Math.min(1, Math.max(0, progress * 4));

  if (progress > 0.85 && Page < numOfPages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4);
  }

  return (
    <div
      className="absolute top-0 w-full"
      ref={refContainer}
      style={{
        pointerEvents: progress >= 0 || progress >= 1 ? "none" : "undefine",
        opacity,
      }}
    >
      {renderContent({ progress })}
    </div>
  );
};
