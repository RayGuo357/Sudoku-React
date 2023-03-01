import React from "react";
import { useNavigate } from "react-router";

export default function CompletionPopUp(props) {

    const { type, generateNewRandomBoard } = props

    const navigate = useNavigate();

    return (
        <div id="completion-container">
            <div id="back-completion">
                <div id="completion">
                    <div id="coffetti-container">
                        <svg id="confetti" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-confetti" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 5h2"></path>
                            <path d="M5 4v2"></path>
                            <path d="M11.5 4l-.5 2"></path>
                            <path d="M18 5h2"></path>
                            <path d="M19 4v2"></path>
                            <path d="M15 9l-1 1"></path>
                            <path d="M18 13l2 -.5"></path>
                            <path d="M18 19h2"></path>
                            <path d="M19 18v2"></path>
                            <path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39z"></path>
                        </svg>
                    </div>

                    <span>
                        Congratulations!
                    </span>

                    <div id="button-container">
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
        </div>
    )
}