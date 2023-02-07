//Just renders the OptionsComponent component. Has all functions for onclick and state. 

//have usestate and setstate here for all select/input boxes and pass down to the optionsComponent. onChange/onInput they use the function passed down from here.

import OptionsComponent from "./OptionsComponent";

function OptionsContainer() {
    return (
        <OptionsComponent />
    )
}

export default OptionsContainer;