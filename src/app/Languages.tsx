import React from "react";
import Prompt from "./Prompt";

const Languages = () => (
  <>
    <Prompt cmd="ls languages/" />
    <div>
      - TypeScript <br />
      ProcRankingやGakusaiLauncherのバックエンドを作成した際に使用。
      <br />
      <br />
      - C# <br />
      サークル内プロジェクトにおいてUnityゲーム開発をする際に使用。 また、GakusaiLauncherの開発にも使用。
      <br />
      <br />
      - C / C++
      <br />
      大学の授業でCを触り、その後C++を少しだけ学んだ。まだ使いこなせていない。
      <br />
      <br />
      - Python <br />
      いろいろなところで学んだし使っている。EXBotに使用。
      <br />
      <br />
      - Java <br />
      昔にMinecraftのPluginを開発した際に独学した。
      <br />
      <br />
      - Rust <br />
      最近勉強中。ゆくゆくはRustでバックエンドシステムを構築したい。<br />
    </div>
    <br />
  </>
);

export default Languages;
