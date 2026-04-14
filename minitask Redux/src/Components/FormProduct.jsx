import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addProduct, updateProduct } from "../redux/slice/product"

export function FormProduct({editProduct,onFinishEdit}) {
const [product,setProduct] = useState("");
const [stock,setStock] = useState(1);
const [category,setCategory] = useState("");
const dispatch = useDispatch();

useEffect(()=> {
    if(editProduct) {
        setProduct(editProduct.product)
        setStock(editProduct.stock);
        setCategory(editProduct.category)
    } else {
        setProduct("");
        setStock(1)
        setCategory("");
    }
},[editProduct]);

const handleSubmit = (e) => {
    e.preventDefault()
    if(editProduct) {
        dispatch(updateProduct({id: editProduct.id,product,stock,category}));
        onFinishEdit();
    } else {
    dispatch(addProduct({ id: Date.now(),
        product,stock,category
    }))
    setProduct("");
    setStock(1);
    setCategory("");
}
};

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 border w-3/6 m-auto mt-10 p-5">
            <div className="flex gap-2 items-center">
                <label htmlFor="product"><b>Product</b></label>
                <input
                    type="text"
                    id="product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="border p-2"
                    required
                />
            </div>
            <select className="text-center" name="category" id="category"
            onChange={(e)=> setCategory(e.target.value)}>
                <option value=""selected disabled>Pilih kategory</option>
                <option value="makanan">Makanan</option>
                <option value="minuman">Minuman</option>
                <option value="rokok">Rokok</option>
            </select>
            <div className="flex gap-2">
                <label htmlFor="stock"><b>Stock</b></label>
                <input
                    type="number"
                    id="stock"
                    value={stock}
                    onChange={(e) => setStock(parseInt(e.target.value))}
                    className="border p-2"
                    min="1"
                    required
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                {editProduct ? "Update" : "Tambah"}</button>{editProduct && <button type="button" className="border-2 border-blue-600 text-blue-600 rounded-md p-2" onClick={onFinishEdit}>Batal</button>}
        </form>

    )
}