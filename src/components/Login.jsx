import React from 'react'

const Login = () => {
  return (
    <div className='w-[376px] h-[395px] p-10 bg-[#19191F] rounded-[15px] '>
        <div className='grid place-items-center'> 
        <p className='mr-[65%] mb-[10px]  text-[#9494D6]'>Usuario</p>
            <input className='w-[280px] h-[40px] rounded-[15px] p-4 mb-4 bg-[#B6B6FA]' type="text" />
        <p className='mr-[65%] text-[#9494D6] mb-[10px]'>Contraseña</p>
            <input className='w-[280px] mb-[42px]  h-[40px] rounded-[15px] p-4 bg-[#B6B6FA]' type="text" />
            <button className='w-[280px] h-[40px] mb-[13px]  rounded-[15px] p-[5px] text-white bg-[#194284]'>Entrar</button>
            <p className='text-[#5A5A77]'>¿Se te olvido tu contraseña?</p>
        </div>
    </div>
  )
}

export default Login