import { useState } from "react"
import { FormProduct } from "../Components/FormProduct" 
import { TabelProduct } from "../Components/TabelProduct"

export function ReduxProducts() {
    const [editProduct,setEditProduct] = useState(null);

    const handleEdit = (product) => {
        setEditProduct(product);
    }

    const finishEdit = () => {
        setEditProduct(null);
    }

    return(
        < >
        <section className="grid grid-cols-2 min-h-screen">
        <FormProduct
        editProduct={editProduct} onFinishEdit={finishEdit}></FormProduct>
        <TabelProduct onEdit={handleEdit}></TabelProduct>
        </section>
        </>
    )
}