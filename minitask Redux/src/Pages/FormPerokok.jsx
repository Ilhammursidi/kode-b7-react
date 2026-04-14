import { useSelector, useDispatch } from "react-redux"
import { addSmoker, removeSmoker } from "../redux/slice/slice"
import { useState } from "react"


export function SurveyPerokok() {
    const survey = useSelector(state => state.survey.survey)
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        nama: "",
        umur: "",
        gender: "",
        perokok: "",
        brand: []
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addSmoker(form))
    }

    const handleChange = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    }

    const handleCheckbox = (value) => {
        if (form.brand.includes(value)) {
            setForm({
                ...form,
                brand: form.brand.filter((item) => item !== value)
            })
        } else {
            setForm({
                ...form,
                brand: [...form.brand, value]
            })
        }
    }

    const brandList = ["magnum", "malboro", "sampoerna", "djarum", "dunhill"]


    return (
        <>
            <section className="flex flex-row p-5 gap-2">
                <form onSubmit={handleSubmit} className="flex flex-col gap-10 border w-2/6 m-auto mt-10 p-5">
                    <div className="flex gap-2">
                        <label htmlFor="nama"><b>Nama</b></label>
                        <input className="w-full"
                        required
                        type="text"
                        id="nama"
                        value={form.nama}
                        onChange={(e) => setForm({ ...form, nama: e.target.value })}></input>
                    </div>
                    <div className="flex gap-2">
                        <label htmlFor="umur"><b>Umur</b></label>
                        <input className="w-full"
                        required
                            type="string"
                            inputMode="number"
                            id="umur"
                            value={form.umur}
                            onChange={(e) => setForm({ ...form, umur: e.target.value })}></input>
                    </div>
                    <div>
                        <label><b>Jenis Kelamin</b></label> <br />
                        <div className="flex flex-row justify-around">
                            <div>
                        <input type="radio" name="gender" id="L"
                            value={form.gender === "Laki-laki"}
                            onChange={(e) => handleChange("gender", "Laki-laki")} required></input><label htmlFor="L"><b>Laki-laki</b></label>
                            </div>
                            <div>

                        <input type="radio" name="gender" id="P"
                            value={form.gender === "Perempuan"}
                            onChange={(e) => handleChange("gender", "Perempuan")} required></input><label htmlFor="P"><b>Perempuan</b></label>
                            </div>
                            </div>                        
                    </div>
                    <div>
                        <label htmlFor="perokok"><b>Apakah anda seorang perokok ?</b></label>
                        <select name="perokok" id="perokok"
                            value={form.perokok}
                            onChange={(e) => handleChange("perokok", e.target.value)} required>
                            <option value="" disabled>Pilih</option>
                            <option
                                value="ya"
                            >Ya</option>
                            <option value="tidak">Tidak</option>
                        </select>
                    </div>
                    <div>
                        <label>Brand Rokok</label><br />

                        {brandList.map((item) => (
                            <label key={item} style={{ marginRight: "10px" }} className={form.perokok !== "ya" ? "hidden" : "block"}>
                                <input
                                    type="checkbox"
                                    checked={form.brand.includes(item)}
                                    onChange={() => handleCheckbox(item)}
                                className={form.perokok !== "ya" ? "hidden" : "block"}/>
                                {item}
                            </label>
                        ))}
                    </div>
                    <button type="submit" className="bg-blue-600 p-2 rounded text-white">Submit</button>
                </form>

                <table border="1" width="1000" className="border h-10">
                    <caption>Hasil Survey Rokok</caption>
                    <thead>
                        <tr>
                        </tr>
                        <tr className="border" bgcolor="lighblue">
                            <th className="border p-1" rowSpan="2" scope="col">Nama</th>
                            <th className="border p-1" rowSpan="2" scope="col">Umur</th>
                            <th className="border p-1" rowSpan="2" scope="col">Jenis Kelamin</th>
                            <th className="border p-1" rowSpan="2" scope="col">Perokok</th>
                            <th className="border p-1" colSpan="5" scope="col">Brand Rokok</th>
                            <th className="border p-1" rowSpan="2" scope="col">Aksi</th>
                        </tr>
                        <tr>
                            {brandList.map((brand) => (
                                <th bgcolor="lighblue" className="border" key={brand}>{brand}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {survey.map((item) => (
                            <tr key={item.id}>
                                <td align="center" className="border-l border-r">{item.nama}</td>
                                <td align="center" className="border-l border-r">{item.umur}</td>
                                <td align="center" className="border-l border-r">{item.gender}</td>
                                <td align="center" className="border-l border-r">{item.perokok}</td>
                                {brandList.map((brand) => (
                                    <td key={brand} align="center" className="border-l border-r">
                                        {item.brand.includes(brand) ? "✔" : "-"}
                                    </td>
                                ))}
                                <td align="center" className="border-l border-r ">
                                    <button className="text-center p-2" onClick={() => dispatch(removeSmoker(item.id))}>
                                        <img src="/public/Trash.svg"/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    )
}