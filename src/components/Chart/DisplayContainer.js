import DisplayComponent from "./DisplayComponent";
import cropData from "../../data/cropData";

function DisplayContainer(props) {
    let speedGroPerc;

    switch (props.data.fertilizerType) {
        case "none": 
            speedGroPerc = 0;
            break;
        case "speedGro":
            speedGroPerc = 0.1;
            break;
        case "deluxeSpeedGro":
            speedGroPerc = 0.25;
            break;
        case "hyperSpeedGro":
            speedGroPerc = 0.33;
            break;
        default:
            speedGroPerc = 0;
            break;
    } //add extra variable and also add fertilizer here ^ extra fertilizer weill be ratio.

    function filterCropData() {
        const filteredCropSeason = cropData.filter((crop) => {
            return crop.season.includes(props.data.currentSeason)
        });

        const filteredCropVendor = filteredCropSeason.filter((crop) => {
            for (const [vendor, value] of Object.entries(crop.vendors)) {
                if ( value > 0 || value.minPrice > 0 || value.otherSources != null) {
                    if ((vendor === "pierre" && props.data.seedsPierre === true) || 
                        (vendor === "joja" && props.data.seedsJoja === true) ||
                        (vendor === "oasis" && props.data.seedsOasis === true) ||
                        (vendor === "travelingCart" && props.data.seedsMerchant === true) ||
                        (crop.vendors.otherSources.length >= 1 && props.data.seedsOther === true)) {
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
                return crop.growth.daysTillMature - Math.floor((crop.growth.daysTillMature * speedGroPerc)) <= daysLeftForCrop;
            } else {
                return crop.growth.daysTillMature - Math.floor((crop.growth.daysTillMature * speedGroPerc)) <= (28 - props.data.currentDay) 
            }
        });

        const filteredProduceType = filteredCropTime.filter((crop) => {
            switch (props.data.produceType) {
                case "raw": 
                    return crop;
                case "keg":
                    return crop.cropType != "flower";
                case "jar":
                    return crop.cropType != "flower" && crop.cropType != "coffeeBean";
            }
        })
        return filteredProduceType;
    }

    function calculateCropProfits() {
        const filteredArray = filterCropData();
        
        filteredArray.forEach((crop) => {
            const numberOfSeasons = props.data.currentSeason === "greenhouse" ? 4 : crop.season.length -1;
            const seasonsLeft = props.data.currentSeason === "greenhouse" ? 4 : numberOfSeasons - crop.season.indexOf(props.data.currentSeason);
            const maxDaysForCrop = seasonsLeft * 28;
            //Allow people to set their days for greenhouse.
            //Add Calculations just per season.
            let currentDay = props.data.currentDay + crop.growth.daysTillMature - Math.floor((crop.growth.daysTillMature * speedGroPerc));
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
                for (; currentDay <= maxDaysForCrop; currentDay += crop.growth.daysTillMature - Math.floor((crop.growth.daysTillMature * speedGroPerc))) {
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

            if (props.data.seedsOther === true) {
                if (crop.vendors.otherSources.length >= 1) {
                    cheapestSeed = crop.name === "Strawberry" ? 100 : 0;
                    cheapestMerchant = "Other Sources";
                }
            }

            //Calculates total profit based on produce type.
            let totalIncome;
            let producedProduct;
            switch (props.data.produceType) {
                case "raw":
                    totalIncome = yieldAllCrops * crop.produce.baseSellPrice;
                    producedProduct = "Crop"
                    break;
                case "keg": 
                    if (crop.name === "Hops") {
                        totalIncome = yieldAllCrops * 300;
                        producedProduct = "Pale Ale";
                    } else if (crop.name === "Wheat") {
                        totalIncome = yieldAllCrops * 200;
                        producedProduct = "Beer"
                    } else if (crop.name === "Tea Leaves") {
                        totalIncome = yieldAllCrops * 100;
                        producedProduct = "Green Tea";
                    } else if (crop.name === "Coffee Bean") {
                        totalIncome = (yieldAllCrops / 5) * 150;
                        producedProduct = "Coffee";
                    } else if (crop.cropType === "fruit") {
                        totalIncome = yieldAllCrops * (crop.produce.baseSellPrice * 3);
                        producedProduct = "Wine";
                    } else if (crop.cropType === "vegetable") {
                        totalIncome = yieldAllCrops * (crop.produce.baseSellPrice * 2.25);
                        producedProduct = "Juice";
                    }
                    break;
                case "jar":
                    totalIncome = yieldAllCrops * (crop.produce.baseSellPrice * 2 + 50);
                    producedProduct = crop.cropType === "fruit" ? "Jelly" : "Pickles";
                    break;
            }

            const totalSeedsCost = totalSeeds * cheapestSeed;
            const profitAllCrops = totalIncome - totalSeedsCost;
            const profitPerDay = profitAllCrops / maxDaysForCrop;

            crop.growth.daysTillMatureFertilizer = crop.growth.daysTillMature - Math.floor((crop.growth.daysTillMature * speedGroPerc));
            crop.numberOfHarvest = harvestAmount;
            crop.producedProduct = producedProduct;
            crop.totalIncome = Math.round(totalIncome);
            crop.seedsToBuy = totalSeeds;
            crop.costOfSeed = totalSeedsCost;
            crop.profit = Math.round(profitAllCrops);
            crop.profitPerDay = Math.round(profitPerDay);
            crop.cheapestMerchant = cheapestMerchant;
            crop.cheapestSeed = cheapestSeed;

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
