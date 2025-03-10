"use client";


import { redirect } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";
import styles from "./page.module.css";
import Background from "./assets/files/Menu_Background.png";

import { Button } from "@/components/Button/Button";
import { Loading } from "@/components/Loading/Loading";

export default function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <br /><br />
        <div className={styles.titleContainer}>
          <p className={styles.titleText}>Air Hockey Online</p>
        </div>
        <br /><br /><br /><br /><br />
        <Button
          text="Play With A Friend"
          onClick={() => {
            redirect("/game");
            console.log("Friend");
          }}
          size="large"
        />
        <Button
          text="Play With A Stranger"
          onClick={() => {
            redirect("/game");
            console.log("Stranger");
          }}
          size="large"
        />
        <br /><br /><br />
        <Suspense fallback={<Loading />}>
            <div className={styles.aboutContainer}>
              <a href="https://github.com/Frank0125/Air-Hockey-Online">
                <p className={styles.aboutText}>About</p>
              </a>
            </div>
        </Suspense>
      </div>
      <Image 
        className={styles.backgroundImage}
        src={Background}
        alt={"Background"}
        width={840}
        height={778.5}
        // layout="responsive"            
      />
    </div>
  );
}
