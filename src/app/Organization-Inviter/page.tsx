import Prompt from "../Prompt";

export default function Home() {
  return (
    <>
      <Prompt cmd="man Organization-Inviter" />
      <div>
        GitHubのOrganizationに自動招待するWebアプリ。
        <br />
        GitHubのユーザ名と合言葉を入れ、合言葉による認証を通過すると特定のOrganizationへ招待する。
        <br />
        <br />
        バックエンドはExpress、フロントエンドはReact + MUIで開発。
        <br />
        <a href="/">Back to Home</a>
      </div>
      <br />
      <img
        src="/Organization-Inviter/01.png"
        style={{ maxWidth: "100%", height: "auto" }}
        width={951}
        height={445}
        alt="About Organization-Inviter"
      ></img>
    </>
  );
}
