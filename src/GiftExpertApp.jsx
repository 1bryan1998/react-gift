import { useState } from "react"
import { AddCategory } from "./Components/Imputs/AddCategory";
import { GiftGrid } from "./Components/Imputs/GiftGrid";


export const GiftExpertApp = ()=>{

   const onAddCategory = (newVal) => {
        if (categories.includes(newVal)){
            return
        }
        setCategories([newVal , ...categories])
   } 
   
   const [ categories, setCategories]  = useState([]);
    return (
        <>
        <h1>Gift Expert App</h1>

        <AddCategory onAddCategory = { (event) => { onAddCategory(event)}}/>

        { 
                categories.map ( category => (
                       <GiftGrid key={category} category={category}/>
                    ))
        }
    
        </>
    )
}