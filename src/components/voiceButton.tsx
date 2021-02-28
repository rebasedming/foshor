import { NONAME } from "dns"
import React from "react"

const VoiceButton = (props: {
    title: string
}) => {
    const {title} = props 

    return(
        <>
        <button style = {{
            border: "none",
            padding: "10px 30px",
            borderRadius: 5,
            outline: "none",
            background: "blue",
            color: "white",
            marginBottom: 20,
            fontSize: 20,
            cursor: "pointer"
        }}>
            {title}
        </button>
        </>
    )
}

export default VoiceButton