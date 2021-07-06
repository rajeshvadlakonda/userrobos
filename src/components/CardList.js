import React from 'react';
import Card from './Card';  
const CardList = ({robots}) =>{
    return(
        
        // const cardArray = robots.map((user,i) => {
        //         return <Card id = {robots[i].id} name = {robots[i].name} username = {robots[i].username} email = {robots[1].email}/> 
        //     })
        <div>
        {/* <h2> using mapping </h2>
                {cardArray}
                
        <p>using destructering </p>
            <Card id = {robots[0].id} name = {robots[0].name} username = {robots[0].username} email = {robots[0].email}/>
            <Card id = {robots[1].id} name = {robots[1].name} username = {robots[1].username} email = {robots[1].email}/>  */}

        {/*~~~~ can use mapp for looping for scenarios where there can be hundreds of cards ~~~~~~*/}
        {
            robots.map((user,i) => {
                return <Card 
                key = {i}
                id = {robots[i].id} 
                name = {robots[i].name} 
                username = {robots[i].username} 
                email = {robots[i].email}/> 
            })
        }
        </div>
    )
}

export default CardList;