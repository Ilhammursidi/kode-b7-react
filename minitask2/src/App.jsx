import { useState } from 'react'
import './Global.css'
import Table from './Table';
import Input from './Form';

function App() {
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
        <section className='flex flex-col justify-center mt-8'>
        <Input onAdd={addData}/>
        <Table data={data} onDelete={deleteData}/>
        </section>            
    )
}
export default App
