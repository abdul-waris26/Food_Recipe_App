import React, { useEffect } from "react";
import Food_Item_List from "./Food_Item_List";
import AddFood_Item from "./AddFood_Item";
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from "react-redux"
import removeFood_Item from "./actions/remove"
import { bindActionCreators } from "redux"
import addFood_Item from "./actions/add";
import { useHistory } from "react-router-dom";

const App = (props) => {
    let history =useHistory();
    useEffect(() => {
        console.log(props)
        
    })
    
    return <div>

        <Switch>
            <Route exact path="/">
                <Food_Item_List removeFood_Item={props.removeFood_Item} Food_Items={props.Food_Items}></Food_Item_List>
                <Link to="/add-food_item">Add new food-item</Link>
            </Route>
            <Route path="/add-food_item" >
                <AddFood_Item  onAddFood_Item ={(newFood_Item) => {
                  props.addFood_Item(newFood_Item);
                  history.push("/")}
                 } />
             </Route>  
        </Switch>
            
    </div>
}

const mapStateToProps=(state)=> {
    return { Food_Items: state.Food_Items }
}

const mapDispatchToProps=(dispatch) =>{
    return bindActionCreators({ removeFood_Item, addFood_Item }, dispatch)
} 
   
export default connect(mapStateToProps, mapDispatchToProps)(App);