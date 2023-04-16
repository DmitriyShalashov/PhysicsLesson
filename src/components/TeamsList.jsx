import React, { useState } from 'react';
import { teams } from '../consts/teams';

function TeamsList({setShowModal}) {
    const [newTeam, setNewTeam]=useState({
        name:"",
        counter:0
    })
    const [showAdd, setShowAdd]=useState(false)

    const createTeam=(team)=>{
        console.log()
        if(team.name===""){
            alert("Введите корректное имя")
            return
        }
        else{
            teams.push(team)
            setShowAdd(false)
            setNewTeam({
                name:"",
                counter:0
            })
        }
    }
    const removeTeam=(index)=>{
        console.log(index)
        teams.splice(index,1)
    }
    return ( 
        <div className='w-[420px]'>
            <h1 className='mb-[30px] text-[40px] text-center'>Команды</h1>
            {
                teams.map((item,index)=>
                    <div className='border-2  flex h-[70px] mb-[10px] items-center justify-between'>
                        <div className='p-[20px] text-[25px]'>{item.name}</div>
                        <div className='p-[20px]'>
                            <div className='text-[20px]'>Счёт: <span className='text-sky-500'>{item.counter}</span></div>
                            <p className='text-[15px] cursor-pointer hover:text-red-400'
                                onClick={()=>removeTeam(index)}
                            >Удалить команду</p>
                        </div>
                    </div> 
                )
            }
            
            <div className='mt-[40px] border-2 h-[50px] flex justify-center items-center cursor-pointer hover:bg-slate-900 hover:text-white'
                onClick={()=>setShowAdd(true)}
            >
                Добавить команду
            </div>  
            {
                showAdd===true?
                <div className='mt-[50px] flex'>
                    <button className='bg-green-400 p-[15px] hover:bg-green-600' 
                        onClick={()=>createTeam(newTeam)}
                    >Добавить</button>
                    <input type='text' className='ml-[20px] border-black border-2 p-[15px]' 
                    onChange={(e)=>setNewTeam({...newTeam, name:e.target.value})}
                    value={newTeam.name} placeholder='Название'></input>
                </div>
                :
                <></>
            }
            <div className='mt-[20px] border-2 h-[50px] flex justify-center items-center cursor-pointer hover:bg-slate-900 hover:text-white'
                onClick={()=>setShowModal(true)}
            >
                Изменить очки
            </div>
        </div>
   
    );
}

export default TeamsList;