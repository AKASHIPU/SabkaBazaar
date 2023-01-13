import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [value,setValue]=useState([]);

  useEffect(()=>{
    let API='https://my-json-server.typicode.com/vikasgupta111/dbRepo/banners';
    async function CallAPi(){
        let result=await fetch(API);
        let response= await result.json();
        setValue(response);
        console.log(response)
    }
    CallAPi();
  },[])
  useEffect(() => {
    let api =
      "https://my-json-server.typicode.com/vikasgupta111/dbRepo/categories";
    fetch(api).then((result) => {
      result.json().then((response) => {
        setData(response);
        //console.log(response);
      });
    });
  }, []);
  return (
    <div>
      <h1>Hello Home</h1>
      {data.map((items) => {
        return (
          <div>
            {" "}
            <div>{items.name}</div>
            <div>{items.description}</div>{" "}
            <img
              src={`https://sabkabazar.netlify.app${items.imageUrl}`}
              alt={items.key}
            />{" "}
          </div>
        );
      })}

      {value.map((cartItems)=>{
        return(
            <div>
                <div>
                {cartItems.bannerImageAlt}
                </div>
                <img src={`https://sabkabazar.netlify.app${cartItems.bannerImageUrl}`} alt={cartItems.id}/>
            </div>
        )
      })}
    </div>
  );
};

export default Home;
