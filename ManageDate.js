import {useState} from 'react'


const ManageDate = () => {
    let someDate = 10;  
    console.log(someDate);

const [number , setNumber] = useState(15); 

  return (
    <div>
        <div>
            <p>valor: {someDate}</p>
            <button onClick={ () => (someDate = 15 )}>Clique aqui</button>
        </div>
            <div>
                <p>valor: {number}</p>
                <button onClick={ () => setNumber (30) }>clicando again</button>
            </div>
    </div>
  );
};

export default ManageDate;