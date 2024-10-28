import { OffthreadVideo } from "remotion";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const HelloWorld = ({ titleText, titleColor }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 60, 120, 180], [0, 1, 1, 0]);

  return (
    <AbsoluteFill>
      <OffthreadVideo src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" />

      {/*Replace with your code here*/}
      <AbsoluteFill
        style={{
          display: "grid",
          placeContent: "center",
        }}
      >
        <h1
          style={{
            opacity,
            color: titleColor,
            fontSize: 100,
          }}
        >
          {titleText}
        </h1>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
