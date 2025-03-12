"use client";

import styles from "./page.module.css";
import { socket } from "../../../socket";
import { redirect } from "next/navigation";

import { Button } from "@/components/Button/Button";
import { Title } from "@/components/Title/Title"
//IN PROGRESS
export default function Stranger() {
  function createStrangerRoom() {
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
        <Title
          text = "Play with a Stranger!!"
          fontSize= "2.6rem"
          margingTop= "0.6rem"
        />
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
            createStrangerRoom();
          }} 
          size="large"
        />
        <br /><br /><br /><br /><br /><br /><br />
      </div>
    </div>
  );
}
