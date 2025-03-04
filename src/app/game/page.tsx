"use client";

import styles from "./page.module.css";
import { socket } from "../../socket";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { Button } from "@/components/Button/Button";
//IN PROGRESS
export default function Game() {
  function joinRoom() {
    socket.emit("room:create", { type: "stranger"}, (error : Error, roomId : string) => {
      if (error) {
        console.error(error);
        alert("An error occurred while trying to join a room" + error);
      } 

      console.log("Joined room: " + roomId);
      redirect("/game/" + roomId)
    })
  };


  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={styles.titleText}>Its Time To Play The Game</p>
        </div>
        <Button 
          text="Go To Menu" 
          onClick={() => {
            redirect("/");
          }} 
          size="large"
        />
        <Button 
          text="Join Room" 
          onClick={() => {
            joinRoom();
          }} 
          size="large"
        />
        <br /><br /><br /><br /><br /><br /><br />
      </div>
    </div>
  );
}
