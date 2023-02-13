import DisplayComponent from "./DisplayComponent";
import cropData from "../../data/cropData";

function DisplayContainer(props) {
    function filterCropData() {
        const filteredCropSeason = cropData.filter((crop) => {
            return crop.season.includes(props.data.currentSeason)
        });

        const filteredCropVendor = filteredCropSeason.filter((crop) => {
            for (const [vendor, value] of Object.entries(crop.vendors)) {
                if ( value > 0 || value.minPrice > 0) {
                    if ((vendor === "pierre" && props.data.seedsPierre === true) || 
                        (vendor === "joja" && props.data.seedsJoja === true) ||
                        (vendor === "oasis" && props.data.seedsOasis === true) ||
                        (vendor === "travelingCart" && props.data.seedsMerchant === true) ||
                        (vendor === "other" && props.data.seedsOther === true)) {
                            return crop
                    }
                } 
            }
        })

        const filteredCropTime = filteredCropVendor.filter((crop) => {
            if (props.data.currentSeason === "greenhouse") {
                return crop
            }

            //Checks for cross-season crops.
            else if (crop.season.length >= 3) {
                const numberOfSeasons = crop.season.length -1;
                const seasonsLeft = numberOfSeasons - crop.season.indexOf(props.data.currentSeason);
                const daysLeftForCrop = seasonsLeft * 28 - props.data.currentDay;
                return crop.growth.daysTillMature <= daysLeftForCrop;
            } else {
                return crop.growth.daysTillMature <= (28 - props.data.currentDay) 
            }
        });

        return filteredCropTime;
    }

    function calculateCropProfits() {
        const filteredArray = filterCropData();
        
        filteredArray.forEach((crop) => {
            const numberOfSeasons = props.data.currentSeason === "greenhouse" ? 4 : crop.season.length -1;
            const seasonsLeft = props.data.currentSeason === "greenhouse" ? 4 : numberOfSeasons - crop.season.indexOf(props.data.currentSeason);
            const maxDaysForCrop = seasonsLeft * 28;
            //Allow people to set their days for greenhouse.
            //Add Calculations just per season.
            let currentDay = props.data.currentDay + crop.growth.daysTillMature;
            let harvestAmount = 0;
            let cheapestMerchant;
            let cheapestSeed = 0;

            if (crop.name === "Tea Leaves") {
                const harvestFirstSeason = currentDay <= 21 ? 7 : currentDay <= 28 ? 28 - currentDay : 0; 
                harvestAmount = (seasonsLeft - 1) * 7 + harvestFirstSeason;
            }

            //Calculates harvests for crops that regrow.
            else if (crop.growth.daysTillRegrow > 0) {
                for (; currentDay <= maxDaysForCrop; currentDay += crop.growth.daysTillRegrow) {
                    harvestAmount++
                }
            } else {
                for (; currentDay <= maxDaysForCrop; currentDay += crop.growth.daysTillMature) {
                    harvestAmount++
                }
            }

            const yieldPerCrop = (harvestAmount * (crop.produce.extraYieldPerc + 1)) * crop.produce.minYield;
            const yieldAllCrops = yieldPerCrop * props.data.cropAmount;
            const totalSeeds = crop.growth.daysTillRegrow > 0 ? props.data.cropAmount : props.data.cropAmount * harvestAmount; 

            if (props.data.seedsPierre === true) {
                if (cheapestSeed === 0 || cheapestSeed > crop.vendors.pierre && crop.vendors.pierre != 0) {
                    cheapestSeed = crop.vendors.pierre;
                    cheapestMerchant = "Pierre";
                }
            }

            if (props.data.seedsJoja === true) {
                if (cheapestSeed === 0 || cheapestSeed > crop.vendors.joja && crop.vendors.joja != 0) {
                    cheapestSeed = crop.vendors.joja;
                    cheapestMerchant = "Joja";
                }
            }

            if (props.data.seedsOasis === true) {
                if (cheapestSeed === 0 || cheapestSeed > crop.vendors.oasis && crop.vendors.oasis != 0) {
                    cheapestSeed = crop.vendors.oasis;
                    cheapestMerchant = "Oasis";
                }           
            }

            if (props.data.seedsMerchant === true) {
                if (cheapestSeed === 0 || cheapestSeed > crop.vendors.travelingCart.minPrice && crop.vendors.travelingCart.minPrice != 0) {
                    cheapestSeed = crop.vendors.travelingCart.minPrice;
                    cheapestMerchant = "Traveling Merchant";
                }           
            }

            const totalSeedsCost = totalSeeds * cheapestSeed;
            const profitAllCrops = yieldAllCrops * crop.produce.baseSellPrice - totalSeedsCost;
            const profitPerDay = profitAllCrops / maxDaysForCrop;

            crop.numberOfHarvest = harvestAmount;
            crop.seedsToBuy = totalSeeds;
            crop.costOfSeed = totalSeedsCost;
            crop.profit = Math.round(profitAllCrops);
            crop.profitPerDay = Math.round(profitPerDay);

            return crop;
        });

        return filteredArray
    }

    function sortCropData() {
        const profitArray = calculateCropProfits();

        return profitArray.sort((a, b) => {
            return a.profit === b.profit ? 0 : a.profit < b.profit ? 1 : -1;
        })
    }

    const chartData = sortCropData();

    return (
        <DisplayComponent data={chartData} />
    )
}

export default DisplayContainer;
