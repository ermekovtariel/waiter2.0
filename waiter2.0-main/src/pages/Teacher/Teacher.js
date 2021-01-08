import React from 'react';

const Teacher = (props) => {
    return (
        <div className='teacher'>
            Персонал:
            {props.result}
        </div>
    )
}


export default Teacher