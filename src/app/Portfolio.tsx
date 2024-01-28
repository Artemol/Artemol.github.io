import Artifacts from "./Artifacts";
import Contacts from "./Contacts";
import Languages from "./Languages";
import Prompt from "./Prompt";
import Image from "next/image";

const Portfolio = () => (
  <>
    <div>
      Welcome to Artemol&#39;s Portfolio Site!
    </div>
    <br />
    <Prompt cmd="whoami" />
    <div>
      Hello, World! I&#39;m Artemol! <br />
      <Image src="/profile.png" width={160} height={160} alt="Profile Image" />
      <br />
      東北にある大学の学生です。ゲーム制作サークルに所属していて、趣味でプログラミングをしています。
      フロントエンドよりはバックエンドが専門で、最近はRustとかDockerを勉強中。
      <br />
      GitHubアカウント: <a href="https://github.com/Artemol">Artemol</a>
    </div>
    <br />
    <Artifacts />
    <Languages />
    <Contacts />
  </>
);

export default Portfolio;
