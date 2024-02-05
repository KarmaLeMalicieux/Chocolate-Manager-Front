import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [chocolate, setChocolate] = useState([])

  useEffect(() => {
    fetch(import.meta.env.URL)
      .then((response) => response.json())
      .then((data) => {
        setChocolate(data);
      })
      .catch((error) => console.log(error))

  }, []);

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    grams: "",
    originCountry: "",
    imageUrl: "",
  })

  const handleChange = (data) => {
    const editedProduct = { ...newProduct, [data.target.name]: data.target.value }
    setNewProduct(editedProduct)
  }

  const createProduct = (e) => {
    e.preventDefault()
    console.log(newProduct)
  }
  return (
    <section key="hello">

      <h1> La Chocolaterie </h1>
      <div className='cards-container'>

        {chocolate.map((chocolateData) => {
          return (
            <div className="card" key={chocolateData.name} >
              <img src={`${chocolateData.imageUrl}`} className="card-img-top" />
              <div className="card-body" key={chocolateData.name}>
                <h5 className="card-title">{chocolateData.name}</h5>
                <p className="card-text">{chocolateData.description}</p>
                <p className="card-text">{chocolateData.price} $</p>
                <p className="card-text">{chocolateData.grams} g</p>
              </div>
            </div>
          )
        })}

      </div>
      <form className="" method="post">

        <div className="form-floating mb-3" id='numberOne'>
          <input type="text" name="name" className="form-control" id="floatingInput" placeholder="Product's name" value={newProduct.name} onChange={handleChange} />
          <label for="floatingInput"> Product's name </label>
        </div>
        <div className="form-floating">
          <input type="text" className="form-control" name="description" id="floatingPassword" placeholder="Product's description" value={newProduct.description} onChange={handleChange} />
          <label for="floatingPassword"> Description </label>
        </div>
        <div className="form-floating">
          <input type="text" className="form-control" name="price" id="floatingInput" placeholder="Product's price" value={newProduct.price} onChange={handleChange} />
          <label for="floatingInput"> Price </label>
        </div>
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingPassword" name="grams" placeholder="Product's grams" value={newProduct.grams} onChange={handleChange} />
          <label for="floatingPassword"> Grams </label>
        </div>
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingPassword" name='imageUrl' placeholder="Product's image link" value={newProduct.imageUrl} onChange={handleChange} />
          <label for="floatingPassword"> Image </label>
        </div>
        <button className="btn btn-outline-secondary" type="submit" id="inputGroupFileAddon04" onSubmit={() => { createProduct() }}> Create </button>


      </form>

    </section>
  )
}

export default App
