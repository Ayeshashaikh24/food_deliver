import React, { useEffect, useRef, useState } from "react";
import {useDispatchCart,useCart} from "./ContextReducer"

export default function Card(props) {
let options=props.options;
let priceoptions=Object.keys(options);

let dispatch=useDispatchCart();
const priceref=useRef()
let data=useCart();
const[qty,setQty]=useState(1)
const[size,setSize]=useState("")

const handelAddToCart=async()=> {

  let food = []
    for (const item of data) {
      if (item.id === props.fooditem._id) {
        food = item;

        break;
      }
    }
    if (food !== []) {

    if (food.size === size) {
      await dispatch({ type: "UPDATE", id: props.fooditem._id, price: finalPrice, qty: qty })
      return
    }
    else if (food.size !== size) {
await dispatch({type:"ADD",id:props.fooditem._id,
name:props.fooditem.name, price:finalPrice,qty:qty,size:size})
   return
}
return
    }

    await dispatch({type:"ADD",id:props.fooditem._id,
    name:props.fooditem.name, price:finalPrice,qty:qty,size:size})


  }

  let finalPrice=qty*parseInt(options[size]);

  useEffect(()=>{
    setSize(priceref.current.value)
  },[])
  return (
    <div>
      <div>
        <div
          className="card mt-3 "
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src={props.fooditem.img} style={{height:"120px",objectFit:"fill" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.fooditem.name}</h5>
           
            <div className="container w-100">
              {" "}
              <select className="m-2 h-100  bg-success rounded" onChange={(e)=>setQty(e.target.value)}>
                {" "}
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100  bg-success rounded" ref={priceref} onChange={(e)=>setSize(e.target.value)}>
              
{
  priceoptions.map((data)=>{
    return <option key={data} value={data}>{data}</option>
  })
}

              </select>
              <div className="d-inline h-100 fs-5">₹ {finalPrice}/-</div>
            </div>
          </div>
          <hr></hr>
          <button className= {`btn btn-success   btn-sm ms-1 `} onClick={handelAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
