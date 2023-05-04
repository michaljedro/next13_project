import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-blue-400 text-7xl">
        Hello my friends from the internet!
      </h1>
    </main>
  );
}
