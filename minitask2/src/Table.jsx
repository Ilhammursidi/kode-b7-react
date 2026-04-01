function Table({ data, onDelete }) {
console.log(data)
    return (
        <section>
            <table className="table-auto w-200 m-auto mt-10 mb-10 border border-slate-500">
            <thead>
                <tr>
                    <th className="border">NAME</th>
                    <th className="border">TYPE</th>
                    <th className="border">PRICE</th>
                    <th className="border">STOCK</th>
                    <th className="border">DELETE</th>
                </tr>
            </thead>
            <tbody>
                
                    {data.map((item, index) => (
                        <tr className="text-center border" key={index}>
                            <td className="border">{item.product}</td>                        
                            <td className="border">{item.type}</td>                        
                            <td className="border">{item.price}</td>                        
                            <td className="border">{item.stock}</td>
                            <td className="p-2">
                            <button className="border w-10 rounded-md bg-red-500 p-2" onClick={() => onDelete(index)}>
                            X
                            </button>
                            </td>                        
                        </tr>
                    ))}
                    
                
            </tbody>
        </table>
        </section>   
    )
}

export default Table