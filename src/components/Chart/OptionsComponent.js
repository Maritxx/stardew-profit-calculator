import "./OptionsComponent.css";

function OptionsComponent(props) {
    return (
        <form className="options__container">
            <div className="basic-info__container">
                <label>Current Season: 
                    <select
                        name="currentSeason"
                        value={props.data.currentSeason}
                        onChange={props.handleChange}
                    >
                        <option value="spring">Spring</option>
                        <option value="summer">Summer</option>
                        <option value="fall">Fall</option>
                        <option value="greenhouse">Greenhouse</option>
                    </select>
                </label>
                <label>Current Day:
                    <input 
                        type="number"
                        name="currentDay"
                        min="1"
                        max="28"
                        value={props.data.currentDay}
                        onChange={props.handleChange}
                    >
                    </input>
                </label>
                <label>Type of Produce:
                    <select
                        name="produceType"
                        value={props.data.produceType}
                        onChange={props.handleChange}
                    >
                        <option value="raw">Raw</option>
                        <option value="jar">Jar</option>
                        <option value="keg">Keg</option>
                    </select>
                </label>
                <label>Amount of Crops:
                    <input
                        type="number"
                        name="cropAmount"
                        min="1"
                        max="1000000000"
                        value={props.data.cropAmount}
                        onChange={props.handleChange}
                    >
                    </input>
                </label>
            </div>

            <div className="seed-info__container">
                <label>Max. seed Budget:
                    <input
                        type="number"
                        name="seedBudget"
                        min="0"
                        max="1000000000"
                        value={props.data.seedBudget}
                        onChange={props.handleChange}
                    >
                    </input>
                </label>
                <fieldset>
                    <legend>Seed sources:</legend>
                    <label>
                        <input
                            type="checkbox"
                            name="seedsPierre"
                            checked={props.data.seedsPierre}
                            onChange={props.handleChange}
                        >
                        </input> Pierre                 
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="seedsJoja"
                            checked={props.data.seedsJoja}
                            onChange={props.handleChange}
                        >
                        </input> JojaMart                  
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="seedsOasis"
                            checked={props.data.seedsOasis}
                            onChange={props.handleChange}
                        >
                        </input> Oasis                  
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="seedsMerchant"
                            checked={props.data.seedsMerchant}
                            onChange={props.handleChange}
                        > 
                        </input> Traveling Merchant                   
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="seedsOther"
                            checked={props.data.seedsOther}
                            onChange={props.handleChange}
                        > 
                        </input> Other Sources                  
                    </label>
                </fieldset>
                <label>Fertilizer used:
                    <select
                        name="fertilizerType"
                        value={props.data.fertilizerType}
                        onChange={props.handleChange}
                    >
                        <option value="none">None</option>
                        <option value="basicFertilizer">Basic Fertilizer</option>
                        <option value="qualityFertilizer">Quality Fertilizer</option>
                        <option value="deluxeFertilizer">Deluxe Fertilizer</option>
                        <option value="speedGro">Speed-Gro</option>
                        <option value="deluxeSpeedGro">Deluxe Speed-Gro</option>
                        <option value="hyperSpeedGro">Hyper Speed-Gro</option>
                    </select>
                </label>
            </div>

            <div className="level-info__container">
                <label>Farming Level:
                        <input 
                            type="number"
                            name="farmingLevel"
                            min="0"
                            max="10"
                            value={props.data.farmingLevel}
                            onChange={props.handleChange}
                        >
                        </input>
                </label>
                <fieldset>
                    <legend>Farming Professions:</legend>
                    <label> Level 5:
                        <select
                            name="professionOne"
                            value={props.data.professionOne}
                            disabled={props.data.farmingLevel < 5}
                            onChange={props.handleChange}
                        >
                            <option value="none">None</option>
                            <option value="rancher">Rancher</option>
                            <option value="tiller">Tiller</option>
                        </select>                 
                    </label>
                    <label> Level 10:
                        <select
                            name="professionTwo"
                            value={props.data.professionTwo}
                            disabled={props.data.farmingLevel < 10}
                            onChange={props.handleChange}
                        >
                            {props.data.professionOne === "rancher" ? 
                                <>
                                    <option value="none">None</option>
                                    <option value="coopmaster">Coopmaster</option> 
                                    <option value="shepherd">Shepherd</option>
                                </> : 
                                props.data.professionOne === "tiller" ? 
                                <>
                                    <option value="none">None</option>
                                    <option value="artisan">Artisan</option>
                                    <option value="agriculturist">Agriculturist</option>
                                </> :
                                    <option value="none">None</option>
                                }
                        </select>                 
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Food Buffs:</legend>
                    <label>Food type:
                        <select 
                            name="foodBuff"
                            value={props.data.foodBuff}
                            onChange={props.handleChange}
                        >
                            <option value="none">None</option>
                            <option value="completeBreakfast">Complete Breakfast</option>
                            <option value="hashbrowns">Hashbrowns</option>
                            <option value="pepperPoppers">Pepper Poppers</option>
                            <option value="tomKhaSoup">Tom Kha Soup</option>
                            <option value="farmersLunch">Farmer's Lunch</option>
                            <option value="mapleBar">Maple Bar</option>
                        </select>
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="seasoningQiAdded"
                            checked={props.data.seasoningQiAdded}
                            disabled={props.data.foodBuff === "none"}
                            onChange={props.handleChange}
                        >
                        </input> Qi Seasoning Added?
                    </label>
                </fieldset>
            </div>
        </form>
    )
}

export default OptionsComponent;