import {useState} from 'react';

const Home = () => {
  const [name, setName] = useState("Jack")
  const [age, setAge] = useState(30)

  const HandleClick = () => {
    console.log("Ohayoooo good good student");
  }
  const HandleClickDynamic = (name) => {
    console.log("Ohayoooo student " + name);
  }
  const ChangeDescription= () => {
    setName ('Alexis')
    setAge('28')
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <h3>I'm {name} & {age} years old</h3>
      {/* calling a function w/o parameter */}
      <button onClick={HandleClick} >click me ?!</button>

       {/* calling a function w/ parameter */}
       {/* that way use not invoking a function, juste referencing it, it is an anonymous function */}
       {/* refactoring we don't need the { } around the HandleCLickDynamic because it's one line refactored */}
      <button onClick={() => {HandleClickDynamic("Alexis")}} >click again</button>

      <button onClick={ChangeDescription}>Change your name</button>
    </div>
   );
}

export default Home;
