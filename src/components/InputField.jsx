import React from 'react';

const InputField = ({Title,Placeholder, BtnTitle,background}) => {
    return (
        <div className={`${background} flex flex-col w-[370px] py-4 px-4`}>
            <p className='text-white text-xl'>{Title}</p>
            <input className='my-5 px-4 py-1 rounded border-none ' type="number" placeholder={Placeholder}/>
            <button className='bg-red-500 w-2/5 py-1 rounded-md text-white font-bold border-none text-xl'>{BtnTitle}</button>
           
        </div>
    );
};

export default InputField;