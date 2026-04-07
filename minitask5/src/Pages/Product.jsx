import { useState } from 'react'
import Table from '../Components/Table';
import Input from '../Components/Form';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Product() {
const [data, setData] = useState([]);

const normalize = (str) => (str || "").toLowerCase().trim();

const addData = (newItem) => {

      const existingIndex = data.findIndex(
    (item) => normalize(item.product) === normalize(newItem.product)
  );
  
  if (existingIndex !== -1) {
    const updatedData = [...data];
    updatedData[existingIndex].stock =
      Number(updatedData[existingIndex].stock) + Number(newItem.stock);

    setData(updatedData);
  } else {
    setData([...data, newItem]);
  }
};

const deleteData = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
}

    return (
        <section>
        <Header></Header>
        <section className='flex flex-col justify-center mt-8'>
        <Input onAdd={addData}/>
        <Table data={data} onDelete={deleteData}/>
        </section>
        <Footer></Footer>            
        </section>
    )
}
export default Product
