import React from 'react'
import './PopapSort.scss';
function PopapSort() {
    const [visiblePopub, setVisiblePopub] = React.useState(false)




    return (
        <div>
            <b>Сортировать по: </b>
            <h7 onClick={()=>setVisiblePopub(!visiblePopub)}> популярности</h7>
            {visiblePopub &&
                <div>
                    <ul>
                        <li>популярности</li>
                        <li>цене</li>
                        <li>алфавиту</li>
                    </ul>
                </div>}
        </div>
    )
}

export default PopapSort
