// import { useState } from "react"

function Product({ id, image, name, price, description, stock, discount, purchases, selectedProduct, handleSelect }) {
  // const [isSelected, setIsSelected] = useState(false)

  /*
  Se volessimo far si che ci sia al massimo un unico prodotto selezionata, lo stato locale ad ogni singolo Product
  non potrebbe funzionare bene perché non ci sarebbe modo per condividere l'informazione su chi sia selezionato
  tra i vari Product

  La soluzione è un pattern che si chiama LIFTING STATE UP, questa si applica portando lo stato da condividere al parent
  più prossimo per poi passare ai figli tramite prop tale stato e la funzione per modificarlo (se ne avessero bisogno, non è obbligatorio)
  Così facendo i vari prodotti potranno condividere l'informazione su chi sia quello selezionato
  */

  const discountedPrice = discount > 0 ? price - (price * discount) / 100 : price

  // const handleSelect = () => {
  //   setIsSelected(isSelected => !isSelected)
  // }

  const isSelected = id === (selectedProduct && selectedProduct.id)

  return (
    <div className={`product ${stock === 0 ? "out-of-stock" : ""} ${isSelected ? "selected" : ""}`} onClick={() => handleSelect({ id: id })}>
      <img src={image} alt={name}></img>
      <h1>{name}</h1>
      <p>
        Prezzo: ${discount > 0 ? <s>{price}</s> : price} {discount > 0 && `--> ${discountedPrice}`}
      </p>
      <p>Purchased: {purchases ?? "No data available"}</p>
      <p>{description || "NO DESCRIPTION"}</p>
      <button disabled={stock === 0}>Aggiungi al carrello</button>
    </div>
  )
}

export default Product
