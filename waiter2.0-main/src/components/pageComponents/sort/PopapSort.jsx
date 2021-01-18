import React, { useEffect } from 'react'
import './PopapSort.scss';


function PopapSort() {
    const [visiblePopub, setVisiblePopub] = React.useState(false)

    const sortRef = React.useRef();



    const toggleVisiblePopup = () => {
        setVisiblePopub(!visiblePopub)
    }


    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisiblePopub(false)
        }
    }


    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
        console.log(sortRef.current)
    }, [])


    return (
        <div ref={sortRef}>
            <b>Сортировать по: </b>
            <h7
                onClick={() => toggleVisiblePopup()}
            > популярность</h7>
            {visiblePopub &&
                <div>
                    <ul>
                        <li>популярность</li>
                        <li>цене</li>
                        <li>алфавиту</li>
                    </ul>
                </div>}
        </div>
    )
}

export default PopapSort
