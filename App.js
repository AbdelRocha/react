
import './App.css';
import city from './assets/city.jpg';
import Cardetails from './components/Cardetails';
import ListRender from './components/ListRender';
import ManageDate from './components/ManageDate';
import ShowUserNmae from './components/ShowUserNmae';






function App() {


  const cars = [
      {id:1 , brand:"ferrari", color:"amarela", Km:0 , newcar: true},
      {id:2 , brand:"kia", color:"violeta", Km:3540 , newcar: false},
      {id:3 , brand:"Renalti", color:"mangenta", Km:1000 , newcar: true},
  ];

  return ( 
    <div className="App"> 
      <h1>Tarefa_react</h1>
      {/*imagem public*/}
      <div>
        <img src="img.jpg" alt="paisagem" />
      </div>
      {/* imagem assets*/}
      <div>
        <img src={city } alt="cidade do cabo" />
      </div>
        <ManageDate/>
        <ListRender/>
        
         {/*props*/}
        <ShowUserNmae name="Matheus" />
        {/*Descriting*/}
      <Cardetails brand=" BMW" Km={100000} color="preto" newcar={false}/>
    {/*reaproeitamento*/}
            <Cardetails brand=" ferrari" Km={0} color="laranja"  newcar={true}/>
     <Cardetails brand=" porche" Km={4500} color="rosa" newcar={false}/>
     {/*loop in array object*/}
        {cars.map ((car) => (
          <Cardetails
            brand={car.brand}
            color={car.color}
            km={car.Km}
            newcar={car.newcar}
          />

 ))};
     



    </div>
      
  );
}

export default App;
