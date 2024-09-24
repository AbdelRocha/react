import {useState} from 'react'

const ListRender = () => {
        const [list]=useState (["Abdel , Pedradas , Trula , Mohamed"]);

        const [users , setUsers, ]=useState([
            {id: 1 ,name: "Abdel", age: 31},
            {id: 2, name: "Pedradas", age: 28}, 
            {id: 3 , name: "Trula" , age:44},
        ]);


        const deleteradom = () => {
            const randomNmber = Math.floor(Math.random() * 4);

            setUsers((prevUsers) =>  {
                console.log(prevUsers);
                return prevUsers.filter((user) =>  randomNmber !== user.id);



            });
            
          
        };

  return (
    <div>
        <ul>
            {list.map((item , i) => ( 
                <li key={i}>{item}</li>
            ))}
        </ul>
            <ul>
                {users.map((user) =>
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            )}
            </ul>
            <button onClick={deleteradom}>Delete random user</button>
    </div>
  );
};

export default ListRender;