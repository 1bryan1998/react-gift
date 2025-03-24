import { useState } from "react"

export const AddCategory = ({onAddCategory}) => {

  const [inputValue, setInputValue] = useState('One Punch') 
  
  const onImputChange = (event)=>{
    setInputValue(event.target.value);
  }  
  
  const submit = ( event ) => {
    event.preventDefault();
    if (inputValue.trim().length <=1) return
    onAddCategory( inputValue.trim())
    setInputValue('');
}  

  return (
    <form onSubmit = { (event) => submit(event) }>
        <input
        type="text"
        placeholder="Add Category"
        value={ inputValue }
        onChange={ onImputChange }
    />
    </form>
  )
}
