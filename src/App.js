import React , {useState } from "react";
import Food_Item_List from "./Food_Item_List";
import AddFood_Item from "./AddFood_Item";
import { Route, Switch} from 'react-router-dom';
import Food_Items from "./data"

const App =(props) =>{

    const [food_Item_List, setFood_Item_List] = useState(Food_Items)

    const addFood_Item =(food_ItemtoAdd) =>{
          setFood_Item_List(food_Item_List.concat([food_ItemtoAdd]))

    }

    const removeFood_Item = (food_ItemTORemove) =>{
         setFood_Item_List(food_Item_List.filter(f => f!==food_ItemTORemove));
    }

    return <div>
        
          <Switch>
              <Route exact path="/">
                 <Food_Item_List onRemove={removeFood_Item} Food_Items={food_Item_List}></Food_Item_List>
              </Route>
              <Route path="/add-food_item" render ={({history}) =>{
                 return <AddFood_Item onAddFood_Item ={(newFood_Item) =>{
                  addFood_Item(newFood_Item);
                  history.push('/');
               } }/>
                 
              }} />
                               
          </Switch>
        
    </div>
}

export default App;