import React from "react";
import Prompt from "./Prompt";

const Artifacts = () => (
  <>
    <Prompt cmd="ls artifacts/" />
    <div>
      - <a href="/ProcRanking">ProcRanking</a>
      <br />
      サークル内向けランキングシステム。
      <br />
      <br />- <a href="/Organization-Inviter">Organization-Inviter</a>
      <br />
      GitHubのOrganizationに自動招待するWebアプリ。
      <br />
      <br />- <a href="/ProClock">ProClock</a>
      <br />
      サークル内モニタに表示する時計アプリ。
      <br />
      <br />- <a href="/GakusaiLauncher">GakusaiLauncher</a>
      <br />
      制作ゲームを学祭で展示する際に作成したアプリ。
      <br />
      <br />- <a href="/GPA-Extension">GPA-Extension</a>
      <br />
      学内システムでGPAを計算し、表示するChrome拡張。
      <br />
      <br />- <a href="/EXBot">EXBot</a>
      <br />
      身内向けDiscordBot。
      <br />
    </div>
    <br />
  </>
);

export default Artifacts;
