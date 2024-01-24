import Image from "next/image";
import Prompt from "../Prompt";

export default function Home() {
  return (
    <>
      <Prompt cmd="man GakusaiLauncher" />
      <div>
        制作ゲームを学祭で展示する際に作成したアプリ。
        <br />
        学祭で部員が制作したゲームを展示する際、全PCにデータをコピーする作業を軽減するために作成。
        <br />
        主にバックエンドを担当し、ログインやゲームファイルの登録/アップデートや削除を行うRESTful
        API、管理画面から各クライアントPCの状況を確認するためにSocket.IOによる双方向通信を実装。
        <br />
        バックエンドはExpress、フロントエンドはWPFで開発。
        <br />
        <a href="/">Back to Home</a>
      </div>
      <br />
      <Image
        src="/GakusaiLauncher/01.png"
        style={{ maxWidth: "100%", height: "auto" }}
        width={951}
        height={445}
        alt="About GakusaiLauncher"
      ></Image>
    </>
  );
}
