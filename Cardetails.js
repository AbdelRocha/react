

const Cardetails = ({brand, color,km,newcar}) => {
  return (
    <div>
        <h2>Detalhes do carro:</h2>
        <ul>
            <li> Marca: {brand}</li>
            <li>Km: {km}</li>
            <li>cor: {color}</li>
        </ul>
        {newcar &&   <p> these cars is new!</p>}

    </div>
  )
}

export default Cardetails