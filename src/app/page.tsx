import Image from "next/image";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Portfolio from "./Portfolio";

export default function Home() {
  return (
    <Theme>
      <Portfolio />
    </Theme>
  );
}
