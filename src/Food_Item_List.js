import React, {Component} from "react"
import PropTypes from "prop-types"
import Food_Item from "./Food_Item"
import "./main.css"

const Food_Item_List = (props) =>{
    return <div className="box-layout">
        <center><h2 id="Menu">Abdul's Biryani Space</h2></center>
           {props.Food_Items.map(
               (food_Item,index)=>
                  
                  <Food_Item key={index} onRemove={props.onRemove} food_Item={food_Item}></Food_Item>
           )}

    </div>
}

Food_Item_List.propTypes ={
    Food_Items:PropTypes.array.isRequired,
    onRemove: PropTypes.func
}

export default Food_Item_List;