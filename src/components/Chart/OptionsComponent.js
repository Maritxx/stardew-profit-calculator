function OptionsComponent(props) {
    return (
        <form>
            <div>
                <label>Current Season: 
                    <select
                        name="currentSeason"
                        value={props.data.currentSeason}
                        onChange={props.handleChange}
                    >
                        <option value="spring">Spring</option>
                        <option value="summer">Summer</option>
                        <option value="fall">Fall</option>
                        <option value="winter">Winter</option>
                        <option value="greenhouse">Greenhouse</option>
                        <option value="gingerisland">Ginger Island</option>
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
                        <option value="mostProfitable">Most Profitable</option>
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

            <div>
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
                            //Will need some sort of tooltip to make clear its mobs, crafting and island merchant.
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
        </form>
    )
}

export default OptionsComponent;