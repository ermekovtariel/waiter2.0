import React from 'react'




let Workers=(props)=> {

    return <div>
        {
        props.Workers.map(u => <div key={u.id}>

        <span>
            <div>
                <img src='u.photos' />
            </div>
        </span>
        <span>
            <div>
                {u.name}
            </div>
            <div>
                {'менеджер по продпжам'}
            </div>
        </span>
    </div>
    )
        }</div>
}

export default Workers
