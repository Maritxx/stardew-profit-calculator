import Chart from "react-apexcharts";

import "./DisplayComponent.css";

function DisplayComponent(props) {
    const profitArray = props.data.map((crop) => {
        return crop.profit
    })

    const nameArray = props.data.map((crop) => {
        return crop.name
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
            enabled: true
            //Add custom tooltip here with img.
        },
        theme: {
            mode: "dark",
        }
    }

    return (
        <div className="chart__container">
            <Chart options={options} series={series} height="100%" width="100%" type="bar" style={{borderRadius:"10px", overflow:"hidden"}} />
        </div>
    )
}

export default DisplayComponent;

//Can make responsive so mobile has different layout (check documentation). 


