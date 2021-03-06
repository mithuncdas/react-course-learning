import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const names = ['Mithun','Rahim','karim','sokina','jorina']
  const infos = [
    {name:'Mithun',age:'10'},
    {name:'Rahim',age:'20'},
    {name:'Karim',age:'40'},
    {name:'Sokina',age:'60'},
    {name:'Jorina',age:'70'},
  ]
  return (
    <div className="App">
      <h1>My First React app</h1>
      <MyFirstComponent></MyFirstComponent>
      <InlineStyleComponent></InlineStyleComponent>
      <PredefinedStyleComponent></PredefinedStyleComponent>
      <MyFirstProps name="Mithun Das"></MyFirstProps>
      <MyArrayProps name={names[0]}></MyArrayProps>
      <MyArrayProps name={names[1]}></MyArrayProps>
      <MyArrayProps name={names[2]}></MyArrayProps>
      <MyArrayProps name={names[3]}></MyArrayProps>
      <MyArrayWithObjectProps info={infos[0]}></MyArrayWithObjectProps>
      <MyArrayWithObjectProps info={infos[1]}></MyArrayWithObjectProps>
      {
        infos.map(info => <DaynamicComponent info={info}></DaynamicComponent>)
      }
      <ReactState></ReactState>
      <Users></Users>
    </div>
  );
}

function MyFirstComponent(){
  return (
    <div>
      <h1>My FirstComponent</h1>
    </div>
  );
}

/**
 * component with style inline style
 */
function InlineStyleComponent(){
  return (
    <div>
      <h1 style={{ border:'2px solid red',background:'white',color:'red',padding:'10px' }}>Inline Style Component</h1>
    </div>
  );
}
/**
 * component with predefined style
 */
function PredefinedStyleComponent(){
  const style = {
    border:'2px solid red',
    background:'white',
    color:'red',
    padding:'10px'
  }
  return (
    <div>
      <h1 style={style}>Predefiend style Component </h1>
    </div>
  );
}

/**
 * react simple props
 */
function MyFirstProps(props){
  const divStyle={
    border:'2px solid red',
    background:'whitegray',
  }
  return (
    <div style={divStyle}>
      <h1 style={{ color:'red' }}>My First Props</h1>
      <h3>My name is {props.name}</h3>
    </div>
  );
}

/**
 * react props using array
 */
function MyArrayProps(props){
  return (
    <div>
      <h1>Props using array</h1>
      <h3> My name is {props.name}</h3>
    </div>
  );
}

/**
 * react props using 
 */
function MyArrayWithObjectProps(props){
  return (
    <div>
      <h1>Props using array object</h1>
      <h3>My name is {props.info.name}</h3>
      <h4>My age is {props.info.age}</h4>
    </div>
  );
}

/**
 * react dyanmic component
 */
function DaynamicComponent(props){
  return (
   <div>
      <h1>Daynamic Component</h1>
      <h4>My name is {props.info.name}</h4>
   </div>
  );
}
/**
 * React state
 */
function ReactState(){
  const [age, setAge] = useState(0)
  const ageIncrease = () => {
    const newAge = age + 1;
    setAge(newAge);
  }
  return (
    <div style={{ marginBottom:'10px' }}>
      <h1>React State</h1>
      <h4>Your age is :{age} </h4>
      <button onClick={ageIncrease}>Increase</button>
      <button onClick={() => setAge(age - 1)}>Decrease</button>
    </div>
  );
}

/**
 * React Use Effect
 */
function Users(){
  const [users,setUsers] = useState([]);
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  })
  return (
    <div>
      <h3>Dynamic User Name:{users.length} </h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
