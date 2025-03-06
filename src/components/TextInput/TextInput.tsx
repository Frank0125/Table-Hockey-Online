import styles from "./TextInput.module.css"

interface TextInputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const TextInput = (props: TextInputProps) => {
    return(
    <>
        <input className={styles.textInput} onChange={props.onChange}></input>
    </>
)};