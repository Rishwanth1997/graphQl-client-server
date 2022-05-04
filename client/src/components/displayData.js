import React from "react";
import {gql, useQuery} from "@apollo/client";

const usersList = gql`
    query getUsers {
        users{
            id
            name
            userName
        }
    }
`;

export default function DisplayData () {
    const data = useQuery(usersList);
    if(data.loading){
        return <div>Loading...</div>
    }
    if(data.data){
        console.log(data)
    
    
    return (<>
        {data.data.users.map((item, key)=>(
            <div key={key}>
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{item.userName}</div>
            <hr/>
            </div>
        ))}
        </>)
    }
    return <div>error</div>
}