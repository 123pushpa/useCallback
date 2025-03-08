import React, { useState, useEffect, useCallback } from "react";

export default function App() {
  // const [data, setData] = useState("SOMETHING");
  const [data] = useState("SOMETHING");

  const memoizedFunction = useCallback(() => {
    console.log(`RESULT IS ${data}`);
  }, [data]);

  useEffect(() => {
    memoizedFunction;
  }, [memoizedFunction]);
  return (
    <>
      <p>DEMO OF CALLBACK </p>
    </>
  );
}

//without using useCallback

// import React ,{useState,useEffecr} from "react";

// export default function App(){
//   // const [data,setData]=useState("SOMETHING")
//   const [data]=useState("SOMETHING")
//   const noMemoizedFunction=()=>{
//     console.lo(`NO CALLBACK ${data}`);
//   }

//   useEffect(()=>{
//    noMemoizedFunction()

//   },[noMemoizedFunction])
//   return (
//     <>
//     <p>WITHOUT USING USECALLBACL</p>
//     </>
//   )
// }
