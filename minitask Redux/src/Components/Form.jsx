import { useState } from "react";

function Input({onAdd}) {

    const [formProduct, setFormProduct] = useState({
        product: "",
        type: "",
        price: "",
        stock: "",
    });


    const handleChange = (e) => {
        setFormProduct({
            ...formProduct,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formProduct);
        
        onAdd(formProduct)
        setFormProduct({
            product:"",
            type:"",
            price:"",
            stock:""
        })
    }


    return (
        <section className='flex justify-center mt-8'>
                <form className='flex border p-8 gap-2 rounded-2xl flex-col w-100' onSubmit={handleSubmit}>
                <label htmlFor="product">Name
                    </label>
                    <input className='border rounded-2xl p-4'
                    type="text"
                    required
                    name="product"
                    value={formProduct.product}
                    onChange={handleChange}
                />
                <label htmlFor="type">Type
                    </label>
                    <select name="type" value={formProduct.type} onChange={handleChange} className="border h-15 rounded-lg p-5">
                        <option value="" disabled>Select Type</option>
                        <option value="Food">Food</option>
                        <option value="Drink">Drink</option>
                        <option value="cigarette">Cigarette</option>
                        <option value="Seasoning">Seasoning</option>
                    </select>
    
                    
                <label htmlFor="price">Price
                    </label>
                    <input className='border rounded-2xl p-4'
                    type="number"
                    required
                    name="price"
                    value={formProduct.price}
                    onChange={handleChange}
                    
                />
                <label htmlFor="stock">Stock
                    </label>
                    <input className='border rounded-2xl p-4'
                    type="number"
                    required
                    name="stock"
                    value={formProduct.stock}
                    onChange={handleChange}
                />
                <button className='rounded-full border bg-amber-300 p-6 mt-7' type="submit">Add Product</button>
            </form>
        </section>            
    )
}
export default Input
