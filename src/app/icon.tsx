import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const size        = { width: 512, height: 512 };
export const contentType = "image/png";

export default async function Icon() {
  const raw    = await readFile(join(process.cwd(), "public/images/logo.png"));
  const base64 = `data:image/png;base64,${raw.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width:          512,
        height:         512,
        background:     "#020816",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        padding:        48,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={base64}
        alt=""
        style={{ width: "100%", objectFit: "contain" }}
      />
    </div>,
    { ...size },
  );
}
