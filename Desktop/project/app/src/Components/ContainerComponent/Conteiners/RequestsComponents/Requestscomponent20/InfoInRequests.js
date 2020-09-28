import React from 'react'

function InfoInRequests() {
    return (
        <div>
            <div className='alert-group alert-group-toggle col'>
                <label className='row'>Запросы</label>
                <hr></hr>
                <label className='row'>
                    У вас   
                    <a type='button'
                        href='#Запросы'
                        className='col btn btn-sm text-warning font-weight-bold'>
                        2 не согласованных запроса
                    </a><br></br>
                
                </label>
                от сотрудников: 
                <hr></hr>
                <a href="#Запросы" className='text-decoration-none row'><div className='text-warning'>Запросы<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg></div></a>
            </div>
        </div>
    )
}

export default InfoInRequests
