 import React from 'react'
 
 const Card = ({title,value}) => {
   return (
     <div className='p-10 border border-amber-100 rounded-3xl shadow-2xl'>
       <h2>{title}</h2>
       <p>{value}</p>
     </div>
   )
 }
 
 export default Card
 