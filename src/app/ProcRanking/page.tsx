import Image from "next/image";
import Prompt from "../Prompt";

export default function Home() {
  return (
    <>
      <Prompt cmd="man ProcRanking" />
      <div>
        サークル内向けランキングシステム。ニフクラmBaaSのサービス終了と部内需要を受けて作成した。
        <br />
        認証にはDiscordのOAuth認証を使用。
        <br />
        バックエンドはNestJS、フロントエンドはReact、DBはMongoDBで開発。
        <br />
        勉強も兼ねてDocker Composeで環境を構築。
        <br />
        <a href="/">Back to Home</a>
      </div>
      <br />
      <Image
        src="/ProcRanking/01.png"
        style={{ maxWidth: "100%", height: "auto" }}
        width={951}
        height={445}
        alt="About ProcRanking"
      ></Image>
      <Image
        src="/ProcRanking/02.png"
        style={{ maxWidth: "100%", height: "auto" }}
        width={951}
        height={445}
        alt="About ProcRanking"
      ></Image>
    </>
  );
}
