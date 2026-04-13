import { useDispatch, useSelector } from "react-redux"
import { removeProduct, editProduct } from "../redux/slice/product"


export function TabelProduct() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.data) || [];
    console.log(products)
    if (products.length === 0) {
        return <p className="text-center mt-5">No products available.</p>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Item</th>
                        <th className="py-2 px-4 border-b">Quantity</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td className="py-2 px-4 border-b">{product.product}</td>
                            <td className="py-2 px-4 border-b">{product.stock}</td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    onClick={() => dispatch(removeProduct(product.id))}
                                    className="bg-red-500 text-white p-1 rounded mr-2"
                                >
                                    Remove
                                </button>
                                <button
                                    onClick={() => dispatch(editProduct(product))}
                                    className="bg-blue-500 text-white p-1 rounded"
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}