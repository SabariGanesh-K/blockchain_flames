import React from 'react'
import frnd from '../media/friendzone.jpg';
import bro from '../media/brozone.jpg';
import aff from '../media/affection.jpg';
import succ from '../media/success.png';
import ene from '../media/enemy.jpg'
import Image from 'next/dist/client/image';
import { Minter } from './Minter';
const style = {
    wrapper:'flex flex-col  bg-[#FDD5C8]',
    resultText:'font-bold text-center',
    resultOptions:"flex flex-row justify-center",
    imageMeme:'w-3/4 h-3/4'
}
export default function Results(props) {
    // props.result = "Friendship";
  return (
    <div className={style.wrapper}>
        <div className={style.resultText} > {props.result  }</div>
       
        <div className= {style.resultOptions}>
        {props.result==='Friendship' && 
        

    

        <div>
            <Image src = {frnd} width='5' layout='responsive' className={style.imageMeme} />
        </div>

        }
                {props.result==='Love' && 
        
        <div>
            <Minter/>
            <Image src = {succ}   className={style.imageMeme}/>
        </div>

        }
                {props.result==='Affection' && 
        
        <div>
            <Image src = {aff}   className={style.imageMeme}/>
        </div>

        }
                {props.result==='Marriage' && 
        
        <div>
            <Minter/>
            <Image src = {succ}   className={style.imageMeme}/>
        </div>

        }
                {props.result==='Enemy' && 
        
        <div>
            <Image  src = {ene} className={style.imageMeme}/>
        </div>

        }
                {props.result==='Sibling' && 
        
        <div>
            <Image src = {bro}   className={style.imageMeme}/>
        </div>

        }

        </div>



    </div>
  )
}

// {
//     "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
//     "external_url": "https://openseacreatures.io/3", 
//     "image": "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png", 
//     "name": "Dave Starbelly",
//     "attributes": [ ... ], 
//   }
