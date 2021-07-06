import React from 'react';
// import CardList from './CardList';
// const Card = (props) => {
//     return(
//         <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//             <h2>{props.name}</h2>
//             <h3>{props.email}</h3>
//             <img src = "https://robohash.org/test?200x200" alt = "robo"/>
//         </div>
//     )
// }
const Card = ({id,name,email}) => {
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <h2>{name}</h2>
            <h3>{email}</h3>
            <img src = {`https://robohash.org/${id}?200x200`} alt="robo"/>
        </div>
    )
}
export default Card;
