import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My First React app</h1>
      <MyFirstComponent></MyFirstComponent>
      <InlineStyleComponent></InlineStyleComponent>
      <PredefinedStyleComponent></PredefinedStyleComponent>
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

export default App;
