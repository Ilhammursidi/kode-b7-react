import { useEffect, useState } from 'react'

// Components
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function App() {
  const [reviews, setReviews] = useState([]) 
  const [form, setForm] = useState({         
    nama: "",
    review: ""
  })

  useEffect(() => {
    const saved = localStorage.getItem("review");
    if (saved) {
      setReviews(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("review", JSON.stringify(reviews));
  }, [reviews]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nama || !form.review) return;

    const newReview = {
      id: Date.now(),
      ...form
    };

    setReviews([newReview, ...reviews]); 

    setForm({
      nama: "",
      review: ""
    });
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter(r => r.id !== id));
  };

  return (
    <>
      <Header />
      <main className='m-auto p-8'>
        
        <form onSubmit={handleSubmit} className='flex flex-col m-auto p-5 rounded-2xl border w-100 gap-2'>
          <label>Nama</label>
          <input
            name="nama"
            value={form.nama}
            onChange={handleChange}
            className='h-7 border rounded-full p-2'
            type="text"
          />

          <label>Review</label>
          <textarea
            name="review"
            value={form.review}
            onChange={handleChange}
            className='border rounded h-20'
          />

          <button className='bg-sky-400 rounded-full h-10' type='submit'>
            Kirim
          </button>
        </form>

        <section className='mt-5 flex flex-col gap-3 mb-35'>
          {reviews.map((r) => (
            <div key={r.id} className='border p-3 rounded-xl shadow'>
              <h4 className='font-bold'>{r.nama}</h4>
              <p>{r.review}</p>
              <button
                onClick={() => handleDelete(r.id)}
                className='text-red-500 text-sm mt-2'
              >
                Hapus
              </button>
            </div>
          ))}
        </section>

      </main>
      <Footer />
    </>
  )
}

export default App