import React,{useState} from 'react'
import DatePicker from 'react-datepicker'


const DateSelector: React.FC = () => {
    const [inspectDate,setInspectDate] = useState<Date | null>(new Date());

    return(
        <DatePicker
        selected={inspectDate}
        onChange={(date:Date)=> setInspectDate(date) }
        dateFormat="dd/MM/yyyy"
        />
    )
}

export default DateSelector;