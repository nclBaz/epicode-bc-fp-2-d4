import "./App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Product from "./components/Product"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.0,
    discount: 0,
    purchases: 0,
    image: "https://prd.place/300/200?id=1",
    stock: 10,
  },
  {
    id: 2,
    name: "Product 2",
    price: 20.0,
    discount: 10,
    image: "https://prd.place/300/200?id=2",
    stock: 10,
  },
  {
    id: 3,
    name: "Product 3",
    price: 30.0,
    discount: 30,
    purchases: 5,
    image: "https://prd.place/300/200?id=3",
    stock: 10,
  },
  {
    id: 4,
    name: "Product 4",
    price: 40.0,
    discount: 0,
    purchases: 123,
    image: "https://prd.place/300/200?id=4",
    stock: 10,
  },
  {
    id: 5,
    name: "Product 5",
    price: 50.0,
    discount: 60,
    purchases: 12,
    image: "https://prd.place/300/200?id=5",
    stock: 0,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum atque vel! Officia, eius sint quos dicta nesciunt doloremque necessitatibus. Dolorem, dignissimos. Voluptates dolore est deleniti nesciunt nemo consequuntur asperiores.",
  },
  {
    id: 6,
    name: "Product 6",
    price: 60.0,
    discount: 50,
    purchases: 100,
    image: "https://prd.place/300/200?id=6",
    stock: 0,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum atque vel! Officia, eius sint quos dicta nesciunt doloremque necessitatibus. Dolorem, dignissimos. Voluptates dolore est deleniti nesciunt nemo consequuntur asperiores.",
  },
  {
    id: 7,
    name: "Product 7",
    price: 70.0,
    discount: 0,
    purchases: 100,
    image: "https://prd.place/300/200?id=7",
    stock: 0,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum atque vel! Officia, eius sint quos dicta nesciunt doloremque necessitatibus. Dolorem, dignissimos. Voluptates dolore est deleniti nesciunt nemo consequuntur asperiores.",
  },
  {
    id: 8,
    name: "Product 8",
    price: 80.0,
    discount: 0,
    purchases: 100,
    image: "https://prd.place/300/200?id=8",
    stock: 0,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum atque vel! Officia, eius sint quos dicta nesciunt doloremque necessitatibus. Dolorem, dignissimos. Voluptates dolore est deleniti nesciunt nemo consequuntur asperiores.",
  },
  {
    id: 9,
    name: "Product 9",
    price: 90.0,
    discount: 0,
    purchases: 100,
    image: "https://prd.place/300/200?id=9",
    stock: 0,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum atque vel! Officia, eius sint quos dicta nesciunt doloremque necessitatibus. Dolorem, dignissimos. Voluptates dolore est deleniti nesciunt nemo consequuntur asperiores.",
  },
  {
    id: 10,
    name: "Product 10",
    price: 100.0,
    discount: 0,
    purchases: 1000,
    image: "https://prd.place/300/200?id=10",
    stock: 0,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum atque vel! Officia, eius sint quos dicta nesciunt doloremque necessitatibus. Dolorem, dignissimos. Voluptates dolore est deleniti nesciunt nemo consequuntur asperiores.",
  },
]

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleSelect = selected => {
    setSelectedProduct(selected)
  }

  return (
    <>
      <Navbar />
      {products.length > 0 ? (
        products.map(product => (
          <Product
            key={product.id}
            // name={product.name}
            // price={product.price}
            // image={product.image}
            // description={product.description}
            // stock={product.stock}
            {...product}
            selectedProduct={selectedProduct} // Per leggere lo stato condiviso
            handleSelect={handleSelect} // Per aggiornare lo stato condiviso
          ></Product>
        ))
      ) : (
        <div>NO PRODUCTS</div>
      )}

      <Footer />
    </>
  )
}

export default App
