import React, {useState} from 'react'
import Admin from './Admin'
import './Header.css';

function Header() {
    const [slide, setSlide]=useState(false)
    let setting

    if (slide){
        setting=[<ul>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </ul>]
    }
    return (
        <div className='row shadow-lg p-3 mb-5 bg-white rounded '>
            <div className='text-dark col logo'>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-slash-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.354 5.354a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 .708.708l6-6z" />
                </svg>
                 Fanki
            </div>
            <div className='col'>
                <div className='row'>
                    <div className='col'>
                        <button className='btn btn-default text-muted' >
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bell" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
                                <path fill-rule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                            </svg>Сообщений нет
            </button></div>
                    <div className='col text-center'>
                        <button onClick={() => setSlide(!slide)} className='btn btn-default'>
                            <Admin />
                        </button>
                        {setting}
            </div>
                </div>
            </div>
            
        </div>
    )
}

export default Header
