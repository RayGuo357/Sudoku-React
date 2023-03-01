import React, { useEffect, useState } from "react";

import { Cell } from "./cell";
import CompletionPopUp from "./completion-pop-up";

export default function Board(props) {

    const { type } = props;

    const [board, setBoard] = useState({
        author: "",
        origPuzzle: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
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
        ],
        solution: undefined,
        difficulty: "",
        dateSubmitted: "",
        selected: { x: 0, y: 0 },
        selectedValue: 0,
        gameState: "LOADING" // LOADING, RUNNING, COMPLETED
    });

    function updateBoard(newBoard) {
        setBoard((prev) => {
            return { ...prev, ...newBoard };
        })
    }

    useEffect(() => {
        async function fetchBoard() {
            if (type === "DAILY") {
                const response = await fetch('http://192.168.0.23:8000/api/getDaily/')

                const record = await response.json()

                updateBoard({
                    author: record[0].author,
                    origPuzzle: JSON.parse(JSON.stringify(record[0].puzzle)),
                    puzzle: JSON.parse(JSON.stringify(record[0].puzzle)),
                    solution: JSON.parse(JSON.stringify(record[0].solution)),
                    difficulty: record[0].difficulty,
                    dateSubmitted: record[0].dateSubmitted,
                    selectedValue: record[0].puzzle[0][0],
                    gameState: "RUNNING"
                })
            } else if (type === "RANDOM") {
                const response = await fetch('http://192.168.0.23:8000/api/getRandom/')

                const record = await response.json()

                updateBoard({
                    author: record[0].author,
                    origPuzzle: JSON.parse(JSON.stringify(record[0].puzzle)),
                    puzzle: JSON.parse(JSON.stringify(record[0].puzzle)),
                    solution: JSON.parse(JSON.stringify(record[0].solution)),
                    difficulty: record[0].difficulty,
                    dateSubmitted: record[0].dateSubmitted,
                    selectedValue: record[0].puzzle[0][0],
                    gameState: "RUNNING"
                })
            }
        }
        document.getElementById("completion-check").checked = false
        fetchBoard()
        return
    }, [type])

    useEffect(() => {
        function setBoardCallBack() {
            if (board.gameState === "RUNNING" && isSolved()) {
                updateBoard({ gameState: "COMPLETED" })
                document.getElementById("completion-check").checked = true
                // window.alert('Finished') // TODO: Finished game popup
            }
        }

        function isSolved() {
            if (!board.solution) return false
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (board.solution[i][j] !== board.puzzle[i][j]) return false
                }
            }
            return true
        }

        setBoardCallBack()
    }, [board])

    // TODO: Remove
    function test() {
        console.log(board)
    }

    function solve() {
        let newBoard = JSON.parse(JSON.stringify(board.solution))
        newBoard[8][8] = 0
        updateBoard({ puzzle: newBoard })
    }

    function getStyling(value) {
        let style = {}

        if (value !== 0 && value === board.selectedValue) {
            style = { ...style, ...{ backgroundColor: 'gray', transition: '0.5s' } }
        }

        return style
    }

    function penCell(x, y, val) {
        let newPuzzle = JSON.parse(JSON.stringify(board.puzzle))
        newPuzzle[x][y] = parseInt(val)
        updateBoard({ puzzle: newPuzzle, selectedValue: val })
    }

    let handleClick = (e) => {
        let id = e.target.id
        id = id.split('-')
        let coord = { x: parseInt(id[0].charAt(1)), y: parseInt(id[1].charAt(1)) }

        updateBoard({ selected: coord, selectedValue: board.puzzle[coord.x][coord.y] })
    }

    function handleKeyPress(e) {
        if (board.origPuzzle[board.selected.x][board.selected.y] === 0 &&
            /^[0-9]$/i.test(e.key)) {
            penCell(board.selected.x, board.selected.y, parseInt(e.key))
        } else {
            let newX, newY, newCoords
            switch (e.key) {
                case "Backspace":
                    let newPuzzle = JSON.parse(JSON.stringify(board.puzzle))
                    newPuzzle[board.selected.x][board.selected.y] = 0
                    updateBoard({ puzzle: newPuzzle })
                    break
                case "w":
                case "W":
                case "ArrowUp":
                    newX = board.selected.x - 1
                    newY = board.selected.y

                    if (newX < 0) newX = 8

                    newCoords = { x: newX, y: newY }
                    updateBoard({ selected: newCoords, selectedValue: board.puzzle[newCoords.x][newCoords.y] })
                    break
                case "s":
                case "S":
                case "ArrowDown":
                    newX = board.selected.x + 1
                    newY = board.selected.y

                    if (newX > 8) newX = 0

                    newCoords = { x: newX, y: newY }
                    updateBoard({ selected: newCoords, selectedValue: board.puzzle[newCoords.x][newCoords.y] })
                    break
                case "d":
                case "D":
                case "ArrowRight":
                    newX = board.selected.x
                    newY = board.selected.y + 1

                    if (newY > 8) newY = 0

                    newCoords = { x: newX, y: newY }
                    updateBoard({ selected: newCoords, selectedValue: board.puzzle[newCoords.x][newCoords.y] })
                    break
                case "a":
                case "A":
                case "ArrowLeft":
                    newX = board.selected.x
                    newY = board.selected.y - 1

                    if (newY < 0) newY = 8

                    newCoords = { x: newX, y: newY }
                    updateBoard({ selected: newCoords, selectedValue: board.puzzle[newCoords.x][newCoords.y] })
                    break
                default:
                    break
            }
        }
        console.log(e)

        return

    }

    function handleNumberClick(e) {
        if (board.origPuzzle[board.selected.x][board.selected.y] === 0) {
            penCell(board.selected.x, board.selected.y, parseInt(e.target.innerHTML))
        }
    }

    let generateNewRandomBoard = async () => {
        const response = await fetch('http://192.168.0.23:8000/api/getRandom/')

        const record = await response.json()

        updateBoard({
            author: record[0].author,
            origPuzzle: JSON.parse(JSON.stringify(record[0].puzzle)),
            puzzle: JSON.parse(JSON.stringify(record[0].puzzle)),
            solution: JSON.parse(JSON.stringify(record[0].solution)),
            difficulty: record[0].difficulty,
            dateSubmitted: record[0].dateSubmitted,
            selectedValue: record[0].puzzle[0][0],
            gameState: "RUNNING"
        })
    }

    return (
        <div className="container">
            <div>
                <div className="board" onKeyDown={handleKeyPress} tabIndex="0">
                    {board.puzzle.map((row, rowIdx) =>
                        row.map((value, colIdx) => (
                            <Cell
                                isSelected={rowIdx === board.selected.x && colIdx === board.selected.y}
                                isWrong={value !== 0 && value !== board.solution[rowIdx][colIdx]}
                                key={`x${rowIdx}-y${colIdx}`}
                                id={`x${rowIdx}-y${colIdx}`}
                                num={value}
                                coord={{ x: rowIdx, y: colIdx }}
                                immutable={board.origPuzzle[rowIdx][colIdx] !== 0}
                                styling={getStyling(value)}
                                handleClick={handleClick}
                            />
                        ))
                    )}
                </div>
                <div className="number-container" style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto' }}>
                    {[...Array(9)].map((e, i) => (
                        <div key={i} onClick={handleNumberClick}>{i + 1}</div>
                    ))}
                </div>
                <input type='button' onClick={test}></input> {/* TODO: Remove */ }
                <input type='button' onClick={solve}></input> {/* TODO: Remove */ }
                <input id="completion-check" type='checkbox'></input> {/* TODO: Hide */ }
                <div className="board-info">
                    Author: {board.author === "Anonymous" ? <i>{board.author}</i> : <b>{board.author}</b>} <br/>
                    Difficulty: { {1: "Easy", 2: "Medium", 3: "Hard", 4: "Extreme"}[board.difficulty] } <br/>
                    Date Submitted: {board.dateSubmitted.split(" ")[0]} <br/>
                </div>
                <CompletionPopUp type={type} generateNewRandomBoard={generateNewRandomBoard} />
            </div>
        </div>
    )
}
