import React, { useState } from 'react';
import { teams } from '../consts/teams';

function Modal({showModal, setShowModal}) {
    const [count, setCount]=useState(0)
    const [current, setCurrent]=useState(0)
    const update=(index)=>{
        teams[index].counter=Number(teams[index].counter)+Number(count)
        setCount(0)
    }

    if(showModal===true){
        return ( 
            <>
                <div className='absolute w-full top-0 left-0 h-screen bg-black opacity-60'></div>
                <div className='flex items-center justify-center absolute w-full top-0 left-0 h-screen'>
                <div className=' w-[600px] h-fit hmin-[400px] bg-white p-4'>
                    <h1 className='w-full  mb-[50px] text-[20px]'>Изменить очки командам</h1>
                    <form>
                    {
                        teams.map((item,index)=>
                            <div className='flex w-full text-[20px] justify-center'>
                                <input type='radio' name='team' onChange={()=>setCurrent(index)}></input>
                                <p>{item.name}</p>
                            </div>
                        )
                    }
                    <div className='w-full flex justify-center mt-[30px]'>
                        <input type='text' className='h-[30px] ml-[20px] border-2 w-[200px]'
                            onChange={(e)=>setCount(e.target.value)}
                        ></input>
                    </div>
                   
                    <div className='flex justify-center mt-[50px]'>
                        <button onClick={(e)=>{
                            e.preventDefault() 
                            update(current)}} 
                            className='bg-green-400 p-4 m-[10px]'>Подтвердить</button>
                        <button type='reset' className='bg-yellow-400 p-4 m-[10px]'>Очистить</button>
                        <button onClick={()=>setShowModal(false)} className='bg-red-400 p-4 m-[10px]'>Закрыть</button>
                    </div>
                    
                    </form>
                </div> 
                </div>
            </>
        );
    }
    }
    

export default Modal;