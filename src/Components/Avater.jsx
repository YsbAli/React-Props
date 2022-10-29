// import Description from "./Description";
import Listitem from "./Listitem";
import Title from "./Title";
import "../styles.css";
import React, { useState } from "react";

export default function Avater(props) {
  const [likecount, setLikecount] = React.useState(0);
  const [dislike, setdislike] = useState(0);
  // console.log(props)

  //Destructing:-

  // const{name,url,workplace} = props

  // Default values:-

  const { name = "Name", url = " ", workplace = [] } = props;

  // let likecount = 0;

  function handleLike() {
    setLikecount(likecount + 1);
    // alert(`You Clicked ${name}`);
    // setClick(click+1)

    //console.log(likecount); // it will print increment value ,,,
  }
  function handleDislike() {
    setdislike(dislike + 1);
    // alert(`You Clicked ${name}`);
    // setClick(click+1)
  }

  return (
    <div>
      <img src={url} className="avater" width="200px" height="150px" alt=" " />
      <Title text={name} />
      <ul>
        <b>Will Be Work At:</b>
        {workplace.map((workplace) => (
          <li>
            {" "}
            <Listitem title={workplace} />{" "}
          </li>
        ))}
      </ul>
      <h1>Like:{likecount}</h1>
      <h2>Dislike: {dislike} time</h2>
      <button className="btn" onClick={handleLike}>
        Like!
      </button>
      <button className="btn" onClick={handleDislike}>
        Dislike
      </button>
    </div>
  );
}

//1. Avatar Component --> to be more  reusuable

// State : information that you need to remember
// useState give array of 2 :-

// [cuurent value, a function to update]

// React will update UI
