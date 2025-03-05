"use client"

import { socket } from "../../../socket";
import { useEffect, useState, use} from "react";
import Image from "next/image";
import Board from "../../assets/files/Game_Board2.svg";
import styles from "../page.module.css";

import { Button } from "@/components/Button/Button";

export default function GameRoom( { params } : { params: Promise<{ id: string }> } ) {
    const [message, setMessage] = useState("Nothing Received");
    const {id} = use(params);

    function sendMessage() {
        socket.emit("room:update",  id, "Hola Loco", (error : Error, result : string) => {
            if(error){
                alert("There has been an error" + error)
            }

            console.log(result);
        });
    }

    function receiveMessage() {
        socket.emit("room:receive", id, (error : Error, result : string) => {
            if(error){
                alert("There has been an error" + error)
            }

            if(result){
                setMessage(result);
            }
            console.log("receiveD?");
        })
    }


    return (
        <>
            <div className={styles.container}>
                <div>
                    {message}
                </div>
                <Button
                    size = "large"
                    text = "Send"
                    onClick={() => sendMessage()}
                />
                <Button
                    size = "large"
                    text = "Receive"
                    onClick={() => receiveMessage()}
                />
                <div className = {styles.img}>
                    <Image
                        src={Board}
                        alt="Board"
                    />
                </div>
            </div>
        </>
    )
}