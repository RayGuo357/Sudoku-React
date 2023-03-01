import React from "react";
import { useNavigate } from "react-router";

export default function CompletionPopUp(props) {

    const { type, generateNewRandomBoard } = props

    const navigate = useNavigate();

    return (
        <div id="completion-container">
            <div id="back-completion">
                <div id="completion">
                    Congratulations!

                    <input
                        type="button"
                        onClick={() => {
                            document.getElementById("completion-check").checked = false
                        }}
                        value="Close"
                    />

                    {
                        type === "DAILY" ?
                            <input
                                type="button"
                                onClick={() => {
                                    navigate("/random")
                                    document.getElementById("completion-check").checked = false
                                }}
                                value="Play Random"
                            />
                            :
                            <input
                                type="button"
                                onClick={() => {
                                    generateNewRandomBoard()
                                    document.getElementById("completion-check").checked = false
                                }}
                                value="New Board"
                            />
                    }
                </div>
            </div>
        </div>
    )
}