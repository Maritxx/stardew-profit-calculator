import React, { useState } from "react";

import DisplayContainer from "./DisplayContainer";
import OptionsComponent from "./OptionsComponent";

function ChartContainer() {
    const [chartOptions, setChartOptions] = useState({
        currentSeason: "spring",
        currentDay: 1,
        produceType: "raw",
        cropAmount: 1,
        seedBudget: 0,
        seedsPierre: true,
        seedsJoja: true,
        seedsOasis: false,
        seedsMerchant: false,
        seedsOther: false,
        fertilizerType: "none",
        farmingLevel: 0,
        professionOne: "none",
        professionTwo: "none"
    });

    function handleChange(e) {
        const {name, value, type, checked, min, max} = e.target;

        if (type === "checkbox") {
            setChartOptions({ ...chartOptions, [name]: checked });
        } else if (type === "number") {
            const newValue = Math.max(Number(min), Math.min(Number(max), Number(value)));
            setChartOptions({ ...chartOptions, [name]: newValue });
        } else {
            setChartOptions({ ...chartOptions, [name]: value });            
        }
    };
    
    return (
        <main>
            <DisplayContainer data={chartOptions} />
            <OptionsComponent data={chartOptions} handleChange={handleChange} />
        </main> 
    )
}

export default ChartContainer;