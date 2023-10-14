import React from "react";

export default  ProductCard =(props) =>{
    return (
        
        <div>
             <div className="w-[160px] h-[160px] relative bg-violet-50 rounded-3xl">
                 <img 
                 src ={`${props.image}`} 
                 alt = {props.name}
                 className="relative w-auto h-auto  object-cover"/>

             </div>
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]" >
                <div className="text-stone-900 text-sm font-semibold font-jakarta-sans leading-[21px] tracking-normal">
                    {props.name}</div>

                <div className="text-stone-900 text-sm font-semibold font-jakarta-sans leading-[21px] tracking-normal" >
                    {props.price}</div>
            </div>  
        </div>
    )
};