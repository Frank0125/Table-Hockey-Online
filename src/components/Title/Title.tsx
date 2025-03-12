import styles from "./Title.module.css"

interface TitleProps {
    text: string;
    fontSize?: string | null;
    margingTop?: string | null;
}

export const Title = ( props : TitleProps ) => {
    return (
        <>
            <div className={styles.titleContainer}>
                <p 
                    className={styles.titleText}
                    style={ 
                        {
                            ...(props.fontSize ? { fontSize: props.fontSize } : {}),
                            ...(props.margingTop ? { paddingTop: props.margingTop } : {})
                        }
                    }
                >
                    { props.text }
                </p>
            </div>
        </>
    )
};