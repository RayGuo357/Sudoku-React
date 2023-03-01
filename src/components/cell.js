import "../css/grid.css"

export function Cell(props) {

    const { num, coord, immutable, handleClick, id, isSelected, styling, isWrong } = props;

    function getStyling() {
        let newStyling = {...styling}

        if (isSelected) newStyling = { ...newStyling, ...{ backgroundColor: '#4f9ae7' } }
        if (immutable) newStyling = { ...newStyling, ...{ fontWeight: 'bold' } }
        if (coord.y === 2 || coord.y === 5) newStyling = { ...newStyling, ...{ borderRight: '3px solid' } }
        if (coord.x === 2 || coord.x === 5) newStyling = { ...newStyling, ...{ borderBottom: '3px solid' } }
        if (isWrong) newStyling = { ...newStyling, ...{ backgroundColor: 'red' } }

        return newStyling
    }


    return (
        <div 
            className={`board-cell`} 
            id={id} 
            onClick={handleClick}
            style={getStyling()}>
            {num !== 0 ? num : ''}
        </div>
    )
}
