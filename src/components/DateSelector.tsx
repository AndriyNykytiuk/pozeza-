import React,{useState} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import '../css/dateSelector.css';



const DateSelector: React.FC = () => {
    const [inspectDate,setInspectDate] = useState<Date | null>(new Date());

    return(
        <div>
            <h3>інформація оновлена</h3>
               <DatePicker
               wrapperClassName='date-picker'
        selected={inspectDate}
        onChange={(date:Date|null)=> setInspectDate(date) }
        dateFormat="dd/MM/yyyy"
        />
        </div>
     
    )
}

export default DateSelector;