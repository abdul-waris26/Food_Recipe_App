import react from "react";

const AddFood_Item = (props) =>{

       const handleSubmit =(event) =>{
        event.preventDefault();
        const newFood_Item={
          id:+event.target.elements.id.value,
          name:event.target.elements.name.value,
          ingredients:event.target.elements.ingredients.value,
          imageSource:event.target.elements.imageSource.value,

        }
        props.onAddFood_Item(newFood_Item);

       }
    return(<div>
           <h2>Add Food Item</h2>
           <form onSubmit={handleSubmit}>
              <input name ="id" placeholder ="Id"/><br/>
              <input name ="name" placeholder ="Name"/><br/>
              <input name ="ingredients" placeholder ="Ingredients"/><br/>
              <input name="imageSource"placeholder ="food_item_cover"/><br/>
              <button>Cancel</button>
              <button>Add</button>
            </form>
    </div>)
}

export default AddFood_Item;

