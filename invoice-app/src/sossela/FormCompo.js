import { useState } from "react";
export default function FormCompo({prDataChFun}) {
    const [userInput, setUserInput] = useState({ productname:'', price:0, amount:0});
    
    const changeHandler = (e) => {
        setUserInput(prevValue => {
            return { ...prevValue, [e.target.name]: e.target.value }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        prDataChFun(userInput);
    }
    return (
        <form onSubmit={formSubmit}>
            <input value={userInput.productname} name="productname" placeholder="product name" required onInput={changeHandler}/>
            <input value={userInput.price} name="price" placeholder="price" type="number" required onInput={changeHandler}/>
            <input value={userInput.amount} name="amount" placeholder="amount" type="number" required onInput={changeHandler}/>
            <button type="submit" onClick={formSubmit} >Add product</button>
        </form>
    )
}