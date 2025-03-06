"use client"

import { socket } from "../../../socket";
import { useEffect, useState, use} from "react";
import Image from "next/image";
import Board from "../../assets/files/Game_Board2.svg";
import styles from "../page.module.css";

import { Button } from "@/components/Button/Button";
import { TextInput } from "@/components/TextInput/TextInput"
import { Room } from "@/interfaces/Room"

export default function GameRoom( { params } : { params: Promise<{ id: string }> } ) {
    const [message, setMessage] = useState("Nothing Received");
    const [value, setValue] = useState("Mensaje por Defecto");
    const [room, setRoom] = useState<Room | null>(null)
    const {id} = use(params);

    

    useEffect(() => {
        function getRoom(){
            socket.on("room:get", (arg) =>{
                setRoom(arg)
            })
        }
        getRoom();
    }, [message]);

    function sendMessage() {
        socket.emit("room:update",  id, value, (error : Error, result : string) => {
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
                <div className = {styles.titleContainer}>
                    <p className = {styles.titleText}> Player Chat:</p>
                    <h2 className = {styles.messageText}>{message}</h2>
                    <p>One message at a time</p>
                    ||{ room ? room.chat : "nada" }||
                </div>
                <TextInput
                    onChange={(e) => setValue(e.target.value)}
                />
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