
import { PieGraph } from '../Components/Pie_Chart/PieChart'
import { pie_chart_data } from '../Components/Student_Results_Page/DATA';

import { useState } from 'react';

import "../Components/Student_Results_Page/style.css"

const getPrevious7Days = () => {
    const days = [];
    const today = new Date();

    for (let i = 1; i <= 7; i++) {
      const pastDate = new Date();
      pastDate.setDate(today.getDate() - i + 1);
  
      const formattedDate = pastDate.toISOString().split("T")[0];
      days.push(formattedDate);
    }

    return days;
};

export function Student_Results() {
    const prev_7_days = getPrevious7Days()
    const [current_day, set_current_day] = useState(0)

    return (
        <div>
            <h1 className='main_text'>Student Reports</h1>
             <li className="dates">
                   {prev_7_days.map((day, index) => (
                        <button className="results_button" key={index} onClick={() => {set_current_day(index)}}>
                            {day}
                        </button>
                    ))}
             </li>
            <div className="main_pie_holder" style={{
                width: "500px", 
                height: "500px",
                margin: "0 auto"
                }}>
                <PieGraph data={pie_chart_data(current_day)}/>
            </div>
        </div>
    )
}