import Food_Items from "../data";

const food_items_reducer = (state = Food_Items, action) => {
    switch (action.type) {
        case "ADD_FOOD_ITEM":
            return {
                Food_Items:[...state.Food_Items,action.Food_Items]
            }
            break;
        case "REMOVE_FOOD_ITEM":
            return {
                Food_Items: state.Food_Items.filter(x => x.id != action.index)
            }
            break;
            
        default:
            return {
                Food_Items: state
            };
    }
}

export default food_items_reducer