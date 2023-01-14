import React, { useState, useEffect } from "react";
 import '../Home/home.css';


 export default function Home(){
  const [imageUrl,setImageUrl]=useState([]);
  const [data,setData]=useState([]);

useEffect(()=>{
async function FetchApi(){
  let Api='https://my-json-server.typicode.com/vikasgupta111/dbRepo/banners';
let result= await fetch(Api);
let response= await result.json();
setImageUrl(response);
console.log(response);


}
FetchApi();
},[]);
useEffect(()=>{
async function desApi(){
  let  result= await fetch('https://my-json-server.typicode.com/vikasgupta111/dbRepo/categories');
 let response = await result.json();
  setData(response);

}
desApi();
},[])
  return(

      <div>
        
        <div className='pic-ctn'>
          {imageUrl.map((imageItems)=>{
             return(
              
               
              <img src={`https://sabkabazar.netlify.app/${imageItems.bannerImageUrl}`} alt="" className="pic"/>
             

              
             )
          })}

</div>
{data.map((items)=>{
  return(
    <div>


            <div className="description">{items.name}</div>
            <div>{items.description}</div>{" "}
            <img
             src={`https://sabkabazar.netlify.app${items.imageUrl}`} style={{height:"250px",width:"300px"}}
              alt={items.key}
            />



      </div>
  )
})}
</div>

  )
}
























// const Home = () => {
//   const [data, setData] = useState([]);
//   const [value,setValue]=useState([]);

//   useEffect(()=>{
//     let API='https://my-json-server.typicode.com/vikasgupta111/dbRepo/banners';
//     async function CallAPi(){
//         let result=await fetch(API);
//         let response= await result.json();
//         setValue(response);
//         console.log(response)
//     }
//     CallAPi();
//   },[])
//   useEffect(() => {
//     let api =
//       "https://my-json-server.typicode.com/vikasgupta111/dbRepo/categories";
//     fetch(api).then((result) => {
//       result.json().then((response) => {
//         setData(response);
//         //console.log(response);
//       });
//     });
//   }, []);
//   return (
//     <div>
//       <h1>Hello Home 2</h1>
//       {data.map((items) => {
//         return (
//           <div>
//             {" "}
//             <div>{items.name}</div>
//             <div>{items.description}</div>{" "}
//             <img
//               src={`https://sabkabazar.netlify.app${items.imageUrl}`} style={{height:"250px",width:"300px"}}
//               alt={items.key}
//             />{" "}
//           </div>
//         );
//       })}

//       {value.map((cartItems)=>{
//         return(
//             <div>
            
//                 <div className="pic-ctn">
//                 <img src={`https://sabkabazar.netlify.app${cartItems.bannerImageUrl}`}  alt={cartItems.id}/>
//             </div>
//             </div>
//         )
//       })}
//     </div>
//   );
// };

// export default Home;
