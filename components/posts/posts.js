/* eslint-disable react/jsx-key */
import Card from './card'
import React, { useState,useEffect } from 'react'; 


function Posts({data}) {
   const [post, setPost] = useState(data); 
    let status = [
      {
          img:'https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          name:'Smith',
      },
      {
          img:'https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=600',
          name:'Harry',
      },
      {
          img:'https://images.pexels.com/photos/450212/pexels-photo-450212.jpeg?auto=compress&cs=tinysrgb&w=600',
          name:'Benny',
      },
      {
          img:'https://images.pexels.com/photos/7206254/pexels-photo-7206254.jpeg?auto=compress&cs=tinysrgb&w=600',
          name:'Azhan',
      },
      {
          img:'https://images.pexels.com/photos/6531452/pexels-photo-6531452.jpeg?auto=compress&cs=tinysrgb&w=600',
          name:'Monroo',
      },
      {
          img:'https://images.pexels.com/photos/6773648/pexels-photo-6773648.jpeg?auto=compress&cs=tinysrgb&w=600',
          name:'Methews',
      }
      ]
  return (
    <>
      <span style={{width:"50%"}} className = "posts"> 
        <div className='status'>
          
            <div className='stat'>
            {status.map(res =>{
              return (
                <span className = "status_data">
                    <img src = {res.img} alt = "" width={40}/>
                    <span>{res.name}</span>
                </span>
              )
            })
          }</div>
          
        </div>    
          {
            post.map(res =>{
              return (
                <>
                  <Card data = {res}/>
                </>
              )
            })
          }
      </span>
    </>
    
  )
}

export default Posts
