import { Canvas, useImage, Image } from "@shopify/react-native-skia";
import { useWindowDimensions } from "react-native";
// @ts-ignore
import React from "react";

const App = () => {
  const { width, height } = useWindowDimensions();

  // @ts-ignore
  const bg = useImage(require("./assets/sprites/background-day.png"));
  // @ts-ignore
  const bird = useImage(require("./assets/sprites/yellowbird-upflap.png"));
  // @ts-ignore
  const pipeBottom = useImage(require("./assets/sprites/pipe-green.png"));
  // @ts-ignore
  const pipeTop = useImage(require("./assets/sprites/pipe-green-top.png"));
  // @ts-ignore
  // const r = width * 0.33;
  const pipeOfSet = 0;
  // @ts-ignore
  const base = useImage(require("./assets/sprites/base.png"));
  return (
    <Canvas style={{ width, height }}>
      <Image image={bg} width={width} height={height} fit={"cover"} />

      <Image
        image={pipeTop}
        y={pipeOfSet - 320}
        x={width / 2}
        width={103}
        height={640}
      />
      <Image
        image={pipeBottom}
        y={height - 320 + pipeOfSet}
        x={width / 2}
        width={103}
        height={640}
      />
      <Image
        image={base}
        width={width}
        height={150}
        y={height - 75}
        x={0}
        fit={"cover"}
      />
      <Image
        image={bird}
        y={height / 2}
        x={width / 4}
        width={64}
        height={48}
        fit={"contain"}
      />
    </Canvas>
  );
};
export default App;
