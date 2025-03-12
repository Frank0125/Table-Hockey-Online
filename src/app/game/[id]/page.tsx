"use client"

import { socket } from "../../../socket";
import { useEffect, useState, use} from "react";
import Image from "next/image";
import Board from "../../assets/files/Game_Board2.svg";
import styles from "./page.module.css";

import { Button } from "@/components/Button/Button";
import { TextInput } from "@/components/TextInput/TextInput"
import { Title } from "@/components/Title/Title";
import { Room } from "@/interfaces/Room"

export default function GameRoom( { params } : { params: Promise<{ id: string }> } ) {
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
    }, []);

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
            console.log("receiveD?");
        })
    }


    return (
        <>
            <div className={styles.background}>
                <br />
                <Title
                    text = "Room Chat:"
                />
                <div className = {styles.chatContainer}>
                    <h2 className = {styles.messageText}>{room ? room.chat : "nada"}</h2>
                    <p className = {styles.disclaimerText}>One message at a time</p>
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