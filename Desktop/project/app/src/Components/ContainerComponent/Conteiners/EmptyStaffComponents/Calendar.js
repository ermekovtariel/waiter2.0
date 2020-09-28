import React, {useState} from 'react'
import DatePicker from 'react-datepicker';



function Calendar() {
    const [startDate, setStartDate] = useState(new Date());
    var z = <DatePicker
        className='col btn btn-outline-secondary btn-sm '
        selected={startDate}
        dateFormat="d MMM"
    />
    var p = <DatePicker
        className='col btn btn-outline-secondary btn-sm '
        selected={startDate}
        dateFormat="d MMM"
    />
    var d = <DatePicker
        className='col btn btn-outline-secondary btn-sm '
        dateFormat="d MMM"
    />
    return (
        <div className=' row p-3 btn-sm'>
            <div className='col p-3'><button className='row btn btn-outline-secondary btn-sm '><div className='col  btn-sm'>
                Сегодня</div >
                {z}
            </button></div>
            <div className='col p-3'> <button className='row btn btn-outline-secondary btn-sm'><div className='col  btn-sm'>
                Завтра</div >
                {p}
            </button></div>
            <div className='col p-3'><button className='row btn btn-outline-secondary btn-sm'><div className='col  btn-sm'>
                Неделя</div >
                {d}
            </button></div>
           
            
        </div>
    );
};

export default Calendar


