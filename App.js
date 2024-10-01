import { Fragment  } from 'react';
import './App.css';

import city from './assets/city.jpg';
import Cardetails from './components/Cardetails'; 
import ListRender from './components/ListRender';
import ManageDate from './components/ManageDate';
import ShowUserNmae from './components/ShowUserNmae';
import Container from './components/Container';
import ExecutrFuntion from './components/ExecutrFuntion';



function App() {


  const cars = [
      {id:1 , brand:"ferrari", color:"amarela", Km:0 , newCar: true},
      {id:2 , brand:"kia", color:"violeta", Km:3540 , newCar: false},
      {id:3 , brand:"Renalti", color:"mangenta", Km:1000 , newCar: true},
  ];

  function showMessage (){
      console.log("exexutar com pai!");
  }
  

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
      <Cardetails brand=" BMW" Km={100000} color="preto" newCar={false}/>
    {/*reaproeitamento*/}
            <Cardetails brand=" ferrari" Km={0} color="laranja"  newCar={true}/>
     <Cardetails brand=" porche" Km={4500} color="rosa" newCar={false}/>
     {/*loop in array object*/}
        {cars.map ((car) => (
          <Cardetails
          key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.Km}
            newcar={car.newCar}
          />

 ))};
      {/*Fragment */}
            <Fragment propFragment="teste"/>
            {/*children*/}
            <Container myVlaue="testing">

                <p>This is the complement </p>
              
            </Container>
             <Container myVlaue="testing 2">

                <p>This is the complement 2 </p>
              
            </Container>
            {/* executar */}

            <ExecutrFuntion myFuntion= {showMessage}/>


    </div>
      
  );
}

export default App;
