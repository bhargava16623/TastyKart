import { useRouteError } from "react-router-dom";


const Error=()=>{

    const err=useRouteError();
    return (
        <>
          <h1>Oops !!</h1>
          <h2>Something went Wrong !!!</h2>
          <h2>{err.status +":"+err.statusText}</h2>
        </>
    );
};

export default Error;