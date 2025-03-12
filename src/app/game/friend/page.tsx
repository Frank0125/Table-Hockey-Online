"use client";

import styles from "./page.module.css";
import { redirect } from "next/navigation";
import { Button } from "@/components/Button/Button";
//IN PROGRESS
export default function Friend() {

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={styles.titleText}>IN PROGRESS</p>
        </div>
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
