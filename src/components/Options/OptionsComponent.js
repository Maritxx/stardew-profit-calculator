//Has the actual presentation of the component. 

function OptionsComponent(props) {
    return (
        <form>
            <div>
                <label>Current Season: 
                    <select
                        name="currentSeason"
                        //value= useState from the container. Starts on spring.
                        //onChange= props. function from the container to set current state.
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
                        //value= useState from the container, initial value of 1.
                        //onChange= props. function from the container to set the current state. NEEDS TO VALIDATE RANGE FIRST (not over 28 days).
                    >
                    </input>
                </label>
                <label>Type of Produce:
                    <select
                        name="produceType"
                        //value= useState from the container. Starts on raw.
                        //onChange= props. function from the container to set current state.
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
                        //value= useState from the container. Initial value of 1.
                        //onChange= props. function from the container to set the current state. NEEDS TO VALIDATE RANGE (bigger than 0, no 'e').   
                    >
                    </input>
                </label>
            </div>

            <div>
                <label>Max. seed Budget:
                    <input
                        type="number"
                        name="seedBudget"
                        //value= useState from the container. Initial value of 0.
                        //onChange= props. function from the container to set the current state. NEEDS TO VALIDATE RANGE (bigger than 0, no 'e').   
                    >
                    </input>
                </label>
                <fieldset>
                    <legend>Seed sources:</legend>
                    <label>
                        <input
                            type="checkbox"
                            name="seedsPierre"
                            //checked= useState from the container. Initial value of true.
                            //onChange props. function from the container to set the current state.
                        >
                        </input> Pierre                 
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="seedsJoja"
                            //checked= useState from the container. Initial value of true.
                            //onChange props. function from the container to set the current state.
                        >
                        </input> JojaMart                  
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="seedsOasis"
                            //checked= useState from the container. Initial value of false.
                            //onChange props. function from the container to set the current state.
                        >
                        </input> Oasis                  
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="seedsMerchant"
                            //checked= useState from the container. Initial value of false.
                            //onChange props. function from the container to set the current state.
                        > 
                        </input> Traveling Merchant                   
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="seedsOther"
                            //checked= useState from the container. Initial value of false.
                            //onChange props. function from the container to set the current state.
                            //Will need some sort of tooltip to make clear its mobs, crafting and island merchant.
                        > 
                        </input> Other Sources                  
                    </label>
                </fieldset>
                <label>Fertilizer used:
                    <select
                        name="fertilizerType"
                        //value= useState from the container. Initial value of none.
                        //onChange= props. function from the container to set the current state.
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