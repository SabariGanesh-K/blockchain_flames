import React, { useState ,useEffect} from 'react'
import FiredGuys from '../contract/artifacts/contracts/FiredGuys.sol/FiredGuys.json';
import Loader from './loader/Loader'


import { ethers } from 'ethers';
export const Minter = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
// get the end user
const uri = "https://gateway.pinata.cloud/ipfs/QmQCpjazWh4kxnb9gdVv9XHq76afgM2WcBp5Pa2Phsn4oJ"
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(contractAddress, FiredGuys.abi, signer);
    const [success,setsuccess] = useState(false)
   const [loading,setloading] = useState(false)
    const [error,seterror] = useState("")
   
    const mintToken = async() =>{
      setloading(true)
      try {
        await contract.mint(uri);
        setsuccess(true)
        setloading(false);
       
      }
      catch(e){
        setloading(false);
        seterror(true);
        console.log(e);
      }
      

    };
  return (
    <div>
        <br/><br/>
<div className='flex flex-row justify-center'>
{!success && !loading &&  <button onClick={mintToken} type="button" className=" animate-pulse text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg mt-5 shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg  px-5 py-2.5 text-3xl text-center mr-2 mb-2">MINT A NFT FOR YOUR 😍</button>}
{success &&  !loading && <div  className='bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-black  mb-3  '>NFT minted successfully ! ❤️ </div> }
{loading && <Loader/> }



</div>



    </div>
    
  )
}
