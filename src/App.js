import React, {useState} from 'react';
import './App.css';

function App() {
  const [res,setRes] = useState("0");

  const handleClick = (e) => {
    if(res == 0){
      setRes(e.target.name);
    }else{
      setRes(res.concat(e.target.name)); 
    }
  }

  const clear = () =>{
    setRes("");
  }

  const popBack = () => {
    setRes(res.slice(0,res.length-1));
  }

  const equals = () => {
    try{
      setRes(eval(res));
    }catch(error){
      setRes("Error");
    }
  }
  return (
    <>
    <div className="container"> 
       <form>
          <input type="text" value={res} />
       </form>

       <div className="Keyword">
         <button onClick={clear} id="clear">AC</button>
         <button onClick={popBack} id="popBack">C</button>
         <button name="%" onClick={handleClick}>%</button>
         <button className="operator" name="/" onClick={handleClick}>/</button>
         <button name="1" onClick={handleClick}>1</button>
         <button name="2" onClick={handleClick}>2</button>
         <button name="3" onClick={handleClick}>3</button>
         <button className="operator" name="*" onClick={handleClick}>&times;</button>
         <button name="4" onClick={handleClick}>4</button>
         <button name="5" onClick={handleClick}>5</button>
         <button name="6" onClick={handleClick}>6</button>
         <button className="operator" name="-" onClick={handleClick}>-</button>
         <button name="7" onClick={handleClick}>7</button>
         <button name="8" onClick={handleClick}>8</button>
         <button name="9" onClick={handleClick}>9</button>
         <button className="operator" name="+" onClick={handleClick}>+</button>
         <button name="0" onClick={handleClick}>0</button>
         <button name="." onClick={handleClick}>.</button>
         <button id="equals" onClick={equals}>=</button>

       </div>
    </div>
    </>
  );
}

export default App;
