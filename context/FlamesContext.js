import React, { Children, createContext, useEffect, useState } from 'react'
import  {ethers}  from "ethers";

export const FlamesContext = createContext()

export const FlamesProvider = ({children}) => {
    const [provider, setProvider] = useState({})
    const [signer,setsigner] = useState("")
    const [success,setsuccess] = useState(false);
    const [n1,setn1] = useState("")
    const [n2,setn2] = useState("")
    const [loggedinstatus,setloggedinstatus] = useState(false)
    const contractAddress = '';
    const ABI =  [ ]
   

    // const contract = new ethers.Contract(contractAddress, ABI, signer);  
const connectWallet = () =>{
    
    if (!loggedinstatus){
        const requestAccounts = async () => {
          await provider.send("eth_requestAccounts", []);
          setloggedinstatus(true)
        }
        requestAccounts()
        .catch(console.error)
    }
    else{
        return ""
    }
}
useEffect(() => {
    const tmp = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(tmp)
    setsigner(tmp.getSigner())
}, []);

// useEffect(()=>{
// const requestAccounts = async()=>{
//     await provider.send("eth_requestAccounts",[]);
//     setloggedinstatus(true)
// }
// requestAccounts()
// .catch(console.error)
// },[])

  return (
   <FlamesContext.Provider value = {{connectWallet,loggedinstatus,n1,setn1,n2,setn2}}>{children}</FlamesContext.Provider>
  )

  
}
