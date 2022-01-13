import React, { Component } from "react"
import Food_Item from "./Food_Item"
import "./main.css"

const Food_Item_List = (props) => {
    console.log(props)
    return <div className="box-layout">
        <center><h2 id="Menu">Abdul's Biryani Space</h2></center>
        {props.Food_Items.map(
            (food_Item, index) =>

                <Food_Item key={index} onRemove={props.removeFood_Item} food_Item={food_Item}></Food_Item>
        )}

    </div>
}

export default Food_Item_List