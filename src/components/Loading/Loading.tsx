import Image from "next/image";
import LoadingGif from "../../app/assets/files/Loading.gif";

export const  Loading = () =>{
    return (
        <>
            <Image
                src={LoadingGif}
                alt="Loading"
                fill = {true}
            />
        </>
    )
}