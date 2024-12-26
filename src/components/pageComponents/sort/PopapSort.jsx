import React from 'react'




function PopapSort({items}) {
    
    const [visiblePopub, setVisiblePopub] = React.useState(false)
    const [activeItem,setActiveItem] = React.useState(0)
    const onSelectItem=(index)=>{
        setActiveItem(index)
        setVisiblePopub(false)
    }
    const activeLebel = items[activeItem].name;
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
        
    }, [])


    return (
        <div ref={sortRef}>
            <b>Сортировать по: </b>
            <h6
                onClick={() => toggleVisiblePopup()}
            > {activeLebel}</h6>
            {visiblePopub &&
                <div>
                    <ul>
                        {items && items.map((obj, index) =>(
                            <li
                                key={`${index}_${obj.type}`}
                                className={activeItem === index ? 'active' : ''}
                                onClick={()=>onSelectItem(index)}>
                                {obj.name}  
                            </li>
                        ))}
                    </ul>
                </div>}
        </div>
    )
}

export default PopapSort
