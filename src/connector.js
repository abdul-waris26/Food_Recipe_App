import { createStore } from "redux"
import { Provider } from "react-redux";
import food_items_reducer from "./reducers/food_items";

const Connector =(props)=>{
    const food_recipe_Store = createStore(food_items_reducer)

    return <Provider store = {food_recipe_Store}>
        {props.children}
    </Provider>

}

export default Connector