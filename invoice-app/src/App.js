import FormCompo from "./sossela/FormCompo";
import TableCompo from "./sossela/TableCompo";
import { useState } from "react";
export default function App() {
    const [prData, setPrData] = useState([]);
    const productChangeHandler = (prObj) =>{
      setPrData(prevData=>{
        return [...prevData,prObj]
      })
    }
  return (
    <>
      <FormCompo prDataChFun={productChangeHandler} />
      <TableCompo prList={prData}/>
    </>
    )
}