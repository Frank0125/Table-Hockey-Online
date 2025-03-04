
import Image from "next/image";
import Board from "../../assets/files/Game_Board2.svg";

export default function GameRoom() {
    return (
        <>
            <Image
                src={Board}
                alt="Loading"
                fill = {true}
            />
        </>
    )
}