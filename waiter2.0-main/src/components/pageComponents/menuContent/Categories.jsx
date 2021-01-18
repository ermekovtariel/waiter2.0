import React from 'react'

import './salat.scss'

function Categories({ items, onClick }) {
    const [activeItem, setActiveItem] = React.useState(null)
    const onSelectItem = (index) => {
        setActiveItem(index);
    }
    return (
        <div>
            <ul>
                <li onClick={() => onSelectItem(null)}>
                    <h1>
                        Все
                    </h1>
                </li>
                {items && items.map((name, index) =>
                    <li
                        onClick={() => onSelectItem(index)}
                        key={`${index}_${name}`}>
                        <h1
                            className={activeItem === index ? 'active' : ''}
                        >
                            {name}
                        </h1>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Categories
