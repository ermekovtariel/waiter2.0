import React from 'react'
import './EmptyWithProblems.css'
import WhoAre from './WhoAre';

function EmptyWithProblems() {
    let all = (<nm className='mg  p-1 col'>
        <button className=' pl-0 pr-3 btn col-sm-3 btn-sm btn'>
            <div className='row'>
                <div className='text-left col'>
                    Все
                    </div>
                <div className='text-right col text-muted'>
                    23 сотрудника
                        </div>
            </div>
        </button>
    </nm>)
    let vacation = (<nm className='mb p-1 col'>
        <button className=' pl-0 pr-3 btn col-sm-3  btn-sm '>
            <div className='row'>
                <div className='text-left col'>
                    В отпуске
                    </div>
                <div className='text-right col text-muted'>
                    7 сотрудников
                        </div>
            </div>
        </button>
    </nm>)
    let dayOff = (<nm className='mw  p-1 col'>
        <button className=' pl-0 pr-3 btn col-sm-2 btn-sm btn'>
            <div className='row'>
                <div className='text-left col'>
                    Отгул
                    </div>
                <div className='text-right col text-muted'>
                    23 сотрудника
                        </div>
            </div>
        </button>
    </nm>)
    let sickLeave = (
        <nm className='mr p-1 col'>
            <button className='pl-0  btn col-sm-3 btn-sm'>
                <div className='row'>
                    <div className='text-left col'>
                        Больничный
                    </div>
                    <div className='text-right col text-muted'>
                        нет
                        </div>
                </div>
            </button>
        </nm >
    )
    let menu = (<div className='row-lg-5 p-3'>
        {all}
        {vacation}
        {dayOff}
        {sickLeave}
    </div>)


    return (
        <div>
            {menu}
            <WhoAre />
        </div>
    )
}

export default EmptyWithProblems
