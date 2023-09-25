import { useEffect, useState } from "react";

export const url = "http://34.198.81.140/attendance.json";

export const Fetch = (url) =>{
 const [data , setData] = useState(null); 
  
    useEffect(() => {
      const dataFetch = async () => {
        const fetchData = await fetch(url)
         const dt = await fetchData.json();
        setData(dt);
      };
  
      dataFetch();
    }, [url]);
  
    return data;
  };