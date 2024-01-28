import Prompt from "../Prompt";

export default function Home() {
  return (
    <>
      <Prompt cmd="man EXBot" />
      <div>
        身内向けDiscordBot。
        <br />
        元々はボイスチャンネルに入ったときに通知がほしいという要望から始まり、その他に外部の音楽botの制御やボイスチャンネル滞在時間の統計、Minecraftサーバの制御機能を搭載している。
        <br />
        Pythonで開発。
        <br />
        <a href="/">Back to Home</a>
      </div>
      <br />
    </>
  );
}
