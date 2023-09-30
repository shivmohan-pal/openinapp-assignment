import { useEffect, useState } from "react";

export const url = "https://shivmohan-pal.github.io/data/attendance.json";

export const Fetch = (url) =>{
 const [data , setData] = useState(null); 
  
    useEffect(() => {
      const dataFetch = async () => {
        try {
        const fetchData = await (await fetch(url)).json();
        setData(fetchData);
        }
        catch(e) {
          // console.log(e.type)
          console.log('Not connected to internet')
        }
      };
  
      dataFetch();
    }, [url]);
  
    return data;
  };