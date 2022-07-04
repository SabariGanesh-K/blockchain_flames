import Head from 'next/head'
import Image from 'next/image'
import Results from '../components/results'
import styles from '../styles/Home.module.css'
import React,{useState} from 'react'
import {Flames}  from '../components/flames'
import { Header } from '../components/Header'
const style = {
  wrapper:'h-screen w-screen bg-[#FDD5C8]'
}
export default function Home() {
 return(
  <div className={style.wrapper}>
    <Header/>
  <Flames/>
  </div>
 )
  
//  0xBC65E4d3aC021088585E255d45608587f46D078a
  
}
