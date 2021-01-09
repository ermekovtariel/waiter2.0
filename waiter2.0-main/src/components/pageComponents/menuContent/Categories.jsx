import React from 'react'

import './salat.scss'

function Categories({ items, onClick }) {
    console.log(items)

    return (
        <div>
            <ul>
                {items.map((name, index) =>
                    <li
                        onClick={() => onClick(name)}
                        key={`${index}_${name}`}>
                        <h1>
                            {name}
                        </h1>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Categories
