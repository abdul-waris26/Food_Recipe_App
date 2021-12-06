import React, {Component} from "react";
import { RiCloseCircleLine } from 'react-icons/ri';
import "./main.css"

const Food_Item = (props) =>{
    return <center><div className="box">
        <center>
           <div className="sno">{props.food_Item.id}</div>
           <div className="name">{props.food_Item.name}</div>
           <p className="food_item_info">{props.food_Item.ingredients}</p>
           <img className="food_item_cover" src={props.food_Item.imageSource}/>
           <div className="icons">
                <RiCloseCircleLine
                onClick={()=>{props.onRemove(props.food_Item)} }
                className='delete-icon'
                />
            </div>
         </center>
         </div>
        </center>

}

export default Food_Item;