"use client";

import styles from "./page.module.css";
import { redirect } from "next/navigation";
import { Button } from "@/components/Button/Button";
import { Title } from "@/components/Title/Title";
//IN PROGRESS
export default function Friend() {

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Title
          text = "Play with your Friend!!"
          fontSize = "2.4rem"
        />
        <Button 
          text="Go To Menu" 
          onClick={() => {
            redirect("/");
          }} 
          size="large"
        />
        <br /><br /><br /><br /><br /><br /><br />
      </div>
    </div>
  );
}
