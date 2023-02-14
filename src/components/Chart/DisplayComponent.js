import Chart from "react-apexcharts";

import "./DisplayComponent.css";

function DisplayComponent(props) {
    const profitArray = props.data.map((crop) => {
        return crop.profit
    })

    const nameArray = props.data.map((crop) => {
        return crop.name
    })

    const daysTillRegrowArray = props.data.map((crop) => {
        return crop.growth.daysTillRegrow != 0 ? crop.growth.daysTillRegrow : "N/A";
    })

    const otherSourcesArray = props.data.map((crop) => {
        if (crop.vendors.otherSources.length >= 1) {
            const listItems = crop.vendors.otherSources.map((source) => {
                return `<li> ${source.type} (${source.chance}) </li>`
            }).join('');
            return `<span class="tooltip__title"> Other ways to obtain </span> <ul> ${listItems} </ul>`
        } else {
            return "";
        }
    })

    const series = [{
        data: profitArray,
        name: "Total Profit"
    }]

    const options = {
        chart: {
            toolbar: {
                show: false
            },
        },
        grid: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: nameArray,
        },
        yaxis: {
            title: {
                text: "Profit"
            }
        },
        tooltip: {
            enabled: true,
             custom: function({ series, seriesIndex, dataPointIndex, w}) {
                 return (`
                    <div class="tooltip__box">
                         <img src=${require("../../img/" + props.data[dataPointIndex].imgUrl)} class="tooltip-crop__img" />
                         <span class="tooltip__title"> Profit Breakdown </span>
                         <span> Total Income: ${props.data[dataPointIndex].totalIncome} <img src=${require("../../img/gold.png")} class="tooltip-gold__img" /></span>
                         <span> Cost of Seeds: ${props.data[dataPointIndex].costOfSeed} <img src=${require("../../img/gold.png")} class="tooltip-gold__img" /></span>
                         <span> Total Profit: ${props.data[dataPointIndex].profit} <img src=${require("../../img/gold.png")} class="tooltip-gold__img" /></span>
                         <span> Profit per Day: ${props.data[dataPointIndex].profitPerDay} <img src=${require("../../img/gold.png")} class="tooltip-gold__img" /></span>
                         <span class="tooltip__title"> Crop Information </span>
                         <span> Days till grown: ${props.data[dataPointIndex].growth.daysTillMature} </span>
                         <span> Days till regrown: ${daysTillRegrowArray[dataPointIndex]} </span>
                         <span> Total Harvests: ${props.data[dataPointIndex].numberOfHarvest} </span>
                         <span class="tooltip__title"> Planting Information </span>
                         <span> Number of seeds to buy: ${props.data[dataPointIndex].seedsToBuy}</span>
                         <span> Cheapest Vendor: ${props.data[dataPointIndex].cheapestMerchant} (${props.data[dataPointIndex].cheapestSeed}<img src=${require("../../img/gold.png")} class="tooltip-gold__img" />)  </span>
                         ${otherSourcesArray[dataPointIndex]}
                    </div>
                 `)
             }
        },
        theme: {
            mode: "dark",
        }, 
        colors: [function({ value, seriesIndex, w}) {
            if(value < 0) {
                return "#d61818"
            } else {
                return "#18d61b"
            }
        }]
    }
    return (
        <div className="chart__container">
            <Chart options={options} series={series} height="100%" width="100%" type="bar" style={{borderRadius:"10px", overflow:"hidden"}} />
        </div>
    )
}

export default DisplayComponent;

//Can make responsive so mobile has different layout (check documentation). 


