import "./Dateblock.css"


const DateBlock = (props) =>{


    return <div className="alert alert-light publication-date-block">
                {props.date}
           </div>
   
}

export default DateBlock;