import { useDispatch, useSelector } from "react-redux"
import { removeProduct } from "../redux/slice/product"


export function TabelProduct({onEdit}) {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.data) || [];
    if (products.length === 0) {
        return <p className="text-center mt-5">No products available.</p>;
    }

    return (
        <div className="overflow-x-auto p-5">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border">Product</th>
                        <th className="py-2 px-4 border">Stock</th>
                        <th className="py-2 px-4 border">Category</th>
                        <th className="py-2 px-4 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td className="py-2 px-4 border">{product.product}</td>
                            <td className="py-2 px-4 border">{product.stock}</td>
                            <td className="py-2 px-4 border">{product.category}</td>
                            <td className="py-2 px-4 border">
                                <div className="flex justify-between gap-2">
                                <button
                                    onClick={() => onEdit(product)}
                                    className="bg-blue-500 text-white w-full p-1 rounded"
                                    >
                                    Edit
                                </button>
                                <button
                                    onClick={() => dispatch(removeProduct(product.id))}
                                    className="bg-red-500 text-white p-1 w-full rounded mr-2"
                                    >
                                    Remove
                                </button>
                                    </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}