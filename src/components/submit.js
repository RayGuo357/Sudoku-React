import React, { useState } from "react";
import { useNavigate } from "react-router";

import { Cell } from "./cell";

export default function SubmitBoard() {

    const [form, setForm] = useState({
        author: "",
        difficulty: 0,
        selected: { x: 0, y: 0 },
        puzzle: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    })

    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value }
        })
    }

    async function onSubmit(e) {
        e.preventDefault();

        const submission = {
            puzzle: form.puzzle,
            author: form.author,
            difficulty: form.difficulty
        }

        let response = await fetch("http://localhost:8000/api/postBoard", {
            method: "POST",
            body: JSON.stringify(submission),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (response.ok) {
            navigate("/")
        } else {
            // TODO: Notification
            switch (response.status) {
                case 400:
                    response = await response.json()
                    console.log("400", response.msg)
                    break
                case 500:
                default:
                    console.log("500")
                    break
            }
        }
    }

    let handleClick = (e) => {
        let id = e.target.id
        id = id.split('-')
        let coord = { x: parseInt(id[0].charAt(1)), y: parseInt(id[1].charAt(1)) }

        updateForm({ selected: coord })
    }

    function handleKeyPress(e) {
        if (/^[0-9]$/i.test(e.key)) {
            let newPuzzle = JSON.parse(JSON.stringify(form.puzzle))
            newPuzzle[form.selected.x][form.selected.y] = parseInt(e.key)

            let newX = form.selected.x
            let newY = form.selected.y

            if (newY + 1 > 8) {
                newY = 0
                newX++
            } else {
                newY++
            }

            if (newX > 8) newX = 0

            let newSelected = { x: newX, y: newY }

            updateForm({ puzzle: newPuzzle, selected: newSelected })
        } else {
            let newX, newY, newCoords
            switch (e.key) {
                case "Backspace":
                    let newPuzzle = JSON.parse(JSON.stringify(form.puzzle))
                    newPuzzle[form.selected.x][form.selected.y] = 0
                    updateForm({ puzzle: newPuzzle })
                    break
                case "w":
                case "W":
                case "ArrowUp":
                    newX = form.selected.x - 1
                    newY = form.selected.y

                    if (newX < 0) newX = 8

                    newCoords = { x: newX, y: newY }
                    updateForm({ selected: newCoords })
                    break
                case "s":
                case "S":
                case "ArrowDown":
                    newX = form.selected.x + 1
                    newY = form.selected.y

                    if (newX > 8) newX = 0

                    newCoords = { x: newX, y: newY }
                    updateForm({ selected: newCoords })
                    break
                case "d":
                case "D":
                case "ArrowRight":
                    newX = form.selected.x
                    newY = form.selected.y + 1

                    if (newY > 8) newY = 0

                    newCoords = { x: newX, y: newY }
                    updateForm({ selected: newCoords })
                    break
                case "a":
                case "A":
                case "ArrowLeft":
                    newX = form.selected.x
                    newY = form.selected.y - 1

                    if (newY < 0) newY = 8

                    newCoords = { x: newX, y: newY }
                    updateForm({ selected: newCoords })
                    break
                default:
                    break
            }
        }
        console.log(e)

        return

    }

    function handleNumberClick(e) {
        let value = e.target.innerHTML
        let newPuzzle = JSON.parse(JSON.stringify(form.puzzle))
        newPuzzle[form.selected.x][form.selected.y] = parseInt(value)

        let newX = form.selected.x
        let newY = form.selected.y

        if (newY + 1 > 8) {
            newY = 0
            newX++
        } else {
            newY++
        }

        if (newX > 8) newX = 0

        let newSelected = { x: newX, y: newY }

        updateForm({ puzzle: newPuzzle, selected: newSelected })
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="board form-group" onKeyDown={handleKeyPress} tabIndex="0">
                    {form.puzzle.map((row, rowIdx) =>
                        row.map((value, colIdx) => (
                            <Cell
                                isSelected={rowIdx === form.selected.x && colIdx === form.selected.y}
                                key={`x${rowIdx}-y${colIdx}`}
                                id={`x${rowIdx}-y${colIdx}`}
                                num={value}
                                coord={{ x: rowIdx, y: colIdx }}
                                immutable={false}
                                styling={{}}
                                handleClick={handleClick}
                            />
                        ))
                    )}
                </div>
                <div className="number-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)' }}>
                    {[...Array(10)].map((e, i) => (
                        <div key={i} onClick={handleNumberClick}>{i}</div>
                    ))}
                </div>
                <div className="form-group">
                    <input
                        name="author"
                        placeholder="Author here"
                        onChange={(e) => updateForm({ author: e.target.value })} />
                </div>
                <div className="form-group">
                    <select
                        name="difficulty"
                        required
                        onChange={(e) => updateForm({ difficulty: parseInt(e.target.value) || 0 })} >
                        <option value="">Please select a difficulty:</option>
                        <option value="1">Easy</option>
                        <option value="2">Medium</option>
                        <option value="3">Hard</option>
                        <option value="4">Extreme</option>
                    </select>
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="submit"
                        className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}