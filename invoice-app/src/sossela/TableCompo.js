export default function TableCompo({prList}) {
    const trClickhandler = (productObj)=>{
        console.log(productObj);
    }
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Product name</th>
                </tr>
                <tr>
                    <th>Price</th>
                </tr>
                <tr>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
        {
            prList.map((prObj,idx)=>{
                return(
                    <tr key={idx} onClick={()=>trClickhandler(prObj)}>
                        <td>{prObj.productname}</td>
                        <td>{prObj.price}</td>
                        <td>{prObj.amount}</td>
                    </tr>
                )
            })
        }
            </tbody>
        </table>
    )
}