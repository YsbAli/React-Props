// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./styles.css";

// // import App from "./App";

// function Avater() {
//   //show avater only when user logged in :

//   //let isAuth = false;    // Please Log in first

//   let isAuth = true;
//   let isAuth2 = true;

//   // if(!isAuth){
//   //   return <div>Please Log in first </div>
//   // }

//   return (
//     <div>
//       <img
//         src="https://devfolioio.s3.us-west-2.amazonaws.com/avatars/Xu6hw3FHTCdoaFGnUG1fq.jpg"
//         className="avater"
//         width="100px"
//         alt="Youusb"
//       />

//       {!isAuth ? <div> "Please Log in first" </div> : <Title />}
//       {!isAuth2 ? (
//         <Description />
//       ) : (
//         <div>
//           {" "}
//           <h5> Nothing to show/Please Login First</h5>{" "}
//         </div>
//       )}
//     </div>
//   );
// }
// function Title() {
//   return <h2> Yousub Ali </h2>;
// }

// function Description() {
//   return (
//     <div>
//       {" "}
//       <p> Softwere Developer </p>{" "}
//     </div>
//   );
// }
// function App() {
//   return (
//     <div>
//       <Avater />
//       <Avater />
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// From Importing :

// import React, { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import Avater, { Title } from "./Components/Avater";
// import { Description } from "./Components/Description";
// import Listitem from "./Components/Listitem";
// import "./styles.css";

// function App() {
//   let Authentication = true;

//  const workAt = ["Kolkata Based", "Bangaluru Based", "Abroad Based"];

//   // let worklist = workAt.map((x) =>
//   // React.createElement('li',null, x))                    // null and empty object is same here

//   function handleClick(){
//     alert("Button Clicked")
//   }

//   return (
//     <div>
//       <Avater />
//       <Title />

//       {Authentication ? <Description /> : <h1>Please Login to See </h1>}
//       {/* <ul>
//       <i> <u> <b>Will Be Work At:</b> </u> </i>
//        <br/>
//          <li>Kolkata Based</li>
//          <li>Bangaluru Based</li>
//          <li>Abroad Based</li>

//         this will also give same output
//          {worklist}

//          </ul>  */}

//       <ul>
//         <b>Will Be Work At:</b>
//         {workAt.map((workplace) =>
//           <li> <Listitem title={workplace}/> </li>
//         )}
//       </ul>
//       <button onClick={()=>alert('I clicked')}>Like!</button>
//       {/* <button onClick={handleClick}>Like!</button> */}

//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// Props:-

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Avater from "./Components/Avater";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <div className="shaddow">
        <Avater
          name="Yousub Ali"
          url="https://devfolioio.s3.us-west-2.amazonaws.com/avatars/Xu6hw3FHTCdoaFGnUG1fq.jpg"
          workplace={["Kolkata Based", "Bangaluru Based", "Abroad Based"]}
        />
      </div>
      <div className="shaddow">
        <Avater
          name="Allu Arjun"
          url="data:image/jpeg;base64,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"
          workplace={["Mumbai", "Pune", "Hydrabad"]}
        />
      </div>
      <div className="shaddow">
        <Avater
          name="RJ Farhan BD"
          url="https://yt3.ggpht.com/ytc/AMLnZu_xUNUCn8GAwncxR2--80VoF62eDLJeR0oXdmQ_=s900-c-k-c0x00ffffff-no-rj"
          workplace={["Natok", "Cinema", "Album"]}
        />
      </div>
      <div className="shaddow">
        <Avater
          name="RJ Farhan BD"
          url="https://yt3.ggpht.com/ytc/AMLnZu_xUNUCn8GAwncxR2--80VoF62eDLJeR0oXdmQ_=s900-c-k-c0x00ffffff-no-rj"
          workplace={["Natok", "Cinema", "Album"]}
        />
      </div>
      <div className="shaddow">
        <Avater
          name="Yousub Ali"
          url="https://devfolioio.s3.us-west-2.amazonaws.com/avatars/Xu6hw3FHTCdoaFGnUG1fq.jpg"
          workplace={["Kolkata Based", "Bangaluru Based", "Abroad Based"]}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
