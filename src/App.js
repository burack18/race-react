import { useEffect, useState } from 'react';
import './App.css';

const initArr=new Array(50).fill({}).map(item=>{return {x:Math.floor(Math.random()*500),y:0}})
console.log(initArr);

function App() {
  const [rain, setRain] = useState(initArr)
  const [max, setMax] = useState(25);

  useEffect(() => {
    const inter=setInterval(() => {
   
      setRain(prev=>{
        const m =Math.max(...prev.map(item=>item.y));        
        setMax(pre=>m+25);
        if(m+25>898){
          clearInterval(inter)
        }
        return prev.map(item=>{return{x:item.x,y:item.y+Math.floor(Math.random()*3)
        }})})
        
    }, 50);
    
  }, [])
  
  
  const createTearStyle=(x,y)=>{
    return {position:'relative',top:y,left:x,width:'5px',height:'25px',backgroundColor:max>100&&y>max-26?'red':'green'};
  }
  return (
  <>
    <div className="App" style={{position:'fixed',display:'flex'}}>
      {rain.map(t=><div style={createTearStyle(t.x,t.y)}></div>)}
    </div>
      {<div style={{position:'relative',top:`${max}px`,width:'100vh',height:'2px',backgroundColor:'black'}}><p>Distance:{900-max}</p></div>}
      {<div style={{position:'relative',top:`900px`,width:'100vh',height:'2px',borderTopStyle:'dashed'}}/>}

  </>
  );
}

export default App;
