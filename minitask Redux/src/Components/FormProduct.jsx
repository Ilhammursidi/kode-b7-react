import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProduct } from "../redux/slice/product"

export function FormProduct() {
const [item,setItem] = useState("");
const [qty,setQty] = useState(1);
const dispatch = useDispatch();

const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addProduct({
        product: item,
        stock: qty,
    }))
    setItem("");
    setQty(1);
}
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 border w-2/6 m-auto mt-10 p-5">
            <div className="flex gap-2">
                <label htmlFor="item"><b>Item</b></label>
                <input
                    type="text"
                    id="item"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    className="border p-2"
                    required
                />
            </div>
            <div className="flex gap-2">
                <label htmlFor="qty"><b>Quantity</b></label>
                <input
                    type="number"
                    id="qty"
                    value={qty}
                    onChange={(e) => setQty(parseInt(e.target.value))}
                    className="border p-2"
                    min="1"
                    required
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Add Product
            </button>
        </form>

    )
}