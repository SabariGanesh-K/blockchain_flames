import React,{useContext, useState} from 'react'
import { FlamesContext } from '../context/FlamesContext';
import Results from './results';

const style = {
    masterContainer:'flex flex-col',
    container:'flex flex-row justify-center',
    wrapper:'bg-[#F9476C] w-3/4 rounded-full text-center flex flex-col ',
    flamebutt:'bg-[#FF8195] font-semibold p-2 m-5 '
}
export const Flames = () => {
  

    const {setn1,setn2} = useContext(FlamesContext)
    const [name1,setname1] = useState("");
    const [name2,setname2] = useState("");
    const [flamed,setflamed] = useState(false);
    const [status,setstatus] = useState();
    
    const getFlame = (name1, name2) =>
    name1.toLowerCase().split('').                                                      
    filter(c => name2.toLowerCase().includes(c)).                                      
    reduce((result, c) => [
    result[0].replace(new RegExp(`${c}`, 'g'), ''),                                   
    result[1].replace(new RegExp(`${c}`, 'g'), '')                                   
    ], [name1.toLowerCase(), name2.toLowerCase()]).
    reduce((length, letters) => [length.shift() + letters.length], [0]).              
    map(length => {
    const findStop = (flames, startAt) => {
      if (flames.length === 1) return flames;                                         
      const position = new Array(length).fill(0).                                     
        reduce(beginAt => beginAt + 1 > flames.length ? 1 : beginAt + 1, startAt - 1) 
      flames.splice(position - 1, 1);                                                 
      return findStop(flames, position);                                            
    };
    return findStop('FLAMES'.split(''), 1)[0];                                       
    }).
    map(result =>
    ['Friendship', 'Love', 'Affection', 'Marriage', 'Enemy', 'Sibling'].
      filter(flame => flame.toLowerCase().startsWith(result.toLowerCase()))[0]       
    )[0];
    

    function handleSubmit(e){
    e.preventDefault()
    const res = getFlame(name1,name2);
    setn1(name1);
    setn2(name2);
    setstatus(res);
    setflamed(true)
    }
    return (
        <div suppressHydrationWarning className={style.masterContainer}>
        <div   className={style.container}>
    <div className=  {style.wrapper} >
   {  !status &&   <form> 
            <div className='text-black font-bold'>YOUR NAME </div>
            <input type = "text" value = {name1} onChange={(e)=>setname1(e.target.value)}/>
            <div className='text-black font-bold'>YOUR Partner❤️ NAME </div>
            <input type="text" value = {name2} onChange = {(e)=>setname2(e.target.value)}/>
    <div> <button className={style.flamebutt} onClick={handleSubmit}>FLAME 🔥🔥🔥</button></div>
           
        </form>}

        {status &&  
        <>
           <div className='text-black font-bold'>YOUR NAME </div>
           <div className='text-black'> {name1} </div>
           <div className='text-black font-bold'>YOUR Partner❤️ NAME </div>
           <div className='text-black'> {name2} </div>
           </>
        }
   
    
    
    </div>
    
    </div>
    {status && <Results result = {status}/>}
    </div>
    )
}






