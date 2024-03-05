import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './store/cartSlice'
import { Button } from 'react-bootstrap'
function App() {
  // const cartData=useSelector{state=>state.cart};
  const cartProduct=useSelector(state => state.cart)
const dispatch=useDispatch()
//for use dispatch method refrence 
const addcart=(data)=>{
  //call dispatch method 
  dispatch(add(data))
}

 
  return (
    <>
    <div>
{/* <button onClick={addcart} >press button </button> */}
<Button onClick={addcart}>test slice </Button>
    </div>



<h3>test slice count as per state count </h3>

<p className='text-danger'>length number : {cartProduct.length} </p>
</>
  )
}

export default App
