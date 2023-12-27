'use client'
import logo from './aaa/assets/download.png' 
import restart from './aaa/svgs/restart.svg'
import * as C from './style'
import {Casa} from './casa'
import {Button}  from './button/button'
import { useEffect,useRef,useState } from 'react'
import { clickCardType } from './clickCardType'
import { items } from './icon'
import { GridTheme } from './gridcomponents/gridcompnents'
import { minuts } from './hours'
export default function Page(){
  const [time,settime]=useState(0)
  const [move,setmove]=useState<number>(0)
  const [search,setsearch]=useState<boolean>(true)
  const [cartmove,setcartmove]=useState<number>(0)
  const [clickcard,setclickcard]=useState<clickCardType[]>([])
  useEffect(()=>{
      if(search){
        const interval =setInterval(()=>{
          settime((a)=>a+1)
        },1000)
        clicar()
        return()=> clearInterval(interval)
      }
    }
    ,[search])
  function clicar(){
     settime(0)
     setmove(0)
     setcartmove(0)
     let valor:clickCardType[]=[]
     for(let i =0; i<(items.length*2);i++) valor.push({index:null,clicked:false,correct:false})
     for(let a =0; a<2;a++){
      for(let n=0;n<items.length;n++){
        let pos = -1
        while(pos<0||valor[pos].index!==null){
          pos = Math.floor(Math.random()*(items.length*2))
        }
        valor[pos].index = n
      }
    }
    setsearch(true)
    setclickcard(valor)
  }
  const press=(a:number)=>{
    if(search ===true && a!==null&& move<2){
      
      var pegar = [...clickcard]
      if(clickcard[a].clicked===false && clickcard[a].correct===false){
        pegar[a].clicked=true
        setmove((click)=>click+1)
        setclickcard(pegar)
       
      }
    }
  }
  useEffect(()=>{
    if(move===2){
      const value2 = clickcard.filter(a=>a.clicked===true)
      if(value2.length===2){
        if(value2[0].index === value2[1].index){
            const value = [...clickcard]
            for(let i in value){
              if(value[i].clicked){
                value[i].correct = true
                value[i].clicked = false
              }
            }  
            setclickcard(value)
            setmove(0)
            setcartmove(a=>a+1)
         }else{
          setTimeout(() => {
            const value = [...clickcard]
            for(let i in value){
              value[i].clicked = false
            }
            setclickcard(value)
            setmove(0)
            setcartmove(a=>a+1)
          },500)
         }    
      }    
    }
  },[move,clickcard])
  useEffect(()=>{
    if(clickcard.filter(a=> a.correct === true).length===(items.length*2)){
      setsearch(false)
    }
  },[clickcard,move])
  return(
    <C.Container>
      <C.info>
        <C.logo>
          <img src={logo.src} width={'180'} alt="logo" />
        </C.logo>
        <Casa relogio='Tempo' clicks={minuts(time)}></Casa>
        <Casa relogio='Movimentos' clicks={cartmove+''}></Casa>
        <Button icon={restart.src} onclick={clicar}  button={'Reiniciar'}></Button>
       
      </C.info>
      <C.grid>
        <C.songrid>
        {clickcard.map((a,index)=>(<GridTheme key={index} index={a} click={()=>press(index)} ></GridTheme>))}
        </C.songrid>
        
      </C.grid>
    </C.Container>
  )
}