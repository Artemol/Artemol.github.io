import Image from "next/image";
import Prompt from "../Prompt";

export default function Home() {
  return (
    <>
      <Prompt cmd="man GPA-Extension" />
      <div>
        学内システムでGPAを計算し、表示するChrome拡張。
        <br />
        学内のシステムは成績を表示する機能はあるもののGPAを計算する機能がないため、簡易的に合計とセメスター別のGPAを計算してポップアップ表示するChrome拡張を作成した。
        <br />
        JavaScriptで開発。
        <br />
        <a href="/">Back to Home</a>
      </div>
      <br />
      {/* <Image
        src="/GPA-Extension/01.png"
        style={{ maxWidth: "100%", height: "auto" }}
        width={951}
        height={445}
        alt="About GPA-Extension"
      ></Image> */}
    </>
  );
}
