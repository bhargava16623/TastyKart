import { createContext } from "react";

const UserContext=createContext({
    user:{
        name:"name",
        email:"name@mail.com",
    },
});


export default UserContext;