import React, { useEffect } from 'react'
import './PopapSort.scss';


function PopapSort({items}) {
    
    const [visiblePopub, setVisiblePopub] = React.useState(false)
    const [activeItem,setActiveItem] = React.useState(0)
    const onSelectItem=(index)=>{
        setActiveItem(index)
        setVisiblePopub(false)
    }
    const activeLebel = items[activeItem]
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
            > {activeLebel}</h7>
            {visiblePopub &&
                <div>
                    <ul>
                        {items && items.map((name, index) =>(
                            <li
                                key={`${index}_${name}`}
                                className={activeItem === index ? 'active' : ''}
                                onClick={()=>onSelectItem(index)}>
                                {name}  
                            </li>
                        ))}
                    </ul>
                </div>}
        </div>
    )
}

export default PopapSort
