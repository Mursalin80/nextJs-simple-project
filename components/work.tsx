import React from "react";
import { TileWrapper, TileBackground, TileContent, Tile } from "./tile";

const Work = () => {
  <TileWrapper numOfPages={3}>
    <TileBackground></TileBackground>
    <TileContent>
      <Tile
        Page={0}
        renderContent={({ progress }) => <span>Foo {progress}</span>}
      ></Tile>
    </TileContent>
    <TileContent>Foo</TileContent>
  </TileWrapper>;
};

export default Work;
