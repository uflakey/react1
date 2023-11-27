// import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// const div = document.createElement("div");
// div.className = "qwe";
// div.id = "qwe";

const root = document.getElementById("root");
// root.append(div);

// const p = React.createElement("p", { id: "123", className: "321" });
// const div = React.createElement("div", {
//   id: "qwerty",
//   className: "qwerty",
//   children: [p, p],
// });

// JSX

const content = (
  <p id="qwe" className="ewq">
    Name
  </p>
);

const div2 = (
  <div id="qwe" className="qwerty">
    {content}
  </div>
);

const Div3 = ({ name, age }) => (
  <div id="qweqwe" className="qwerty123">
    {content}
    <img src="fdfs" alt="vddv" />
  </div>
);

const Container = () => (
  <>
    {div2}
    <Div3 name="Alex" age={30} />
    {Div3({ name: "Alex", age: 30 })}
  </>
);

// console.log("div :>> ", div);
ReactDOM.createRoot(root).render(<Container />);
