import Prompt from "../Prompt";

export default function Home() {
  return (
    <>
      <Prompt cmd="man ProClock" />
      <div>
        部室内モニタに表示する時計アプリ。
        <br />
        日付や時間に加え、天気や気温、日の出/日の入時刻なども表示する。
        <br />
        元々Unityで実装されていたものをElectron + Reactで再実装。
        <br />
        <a href="/">Back to Home</a>
      </div>
      <br />
      <img
        src="/ProClock/01.png"
        style={{ maxWidth: "100%", height: "auto" }}
        width={951}
        height={445}
        alt="About ProClock"
      ></img>
    </>
  );
}
