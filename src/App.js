import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    console.log("Setting the width");
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div>{width}</div>
    </>
  );

  // const [resourceType, setResourceType] = useState("post");
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   // console.log("Render");
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  //   // .then((data) => setItems(data));
  // }, [resourceType]);
  // return (
  //   <>
  //     <div>
  //       <button onClick={() => setResourceType("posts")}>Post</button>
  //       <button onClick={() => setResourceType("comments")}>Comments</button>
  //       <button onClick={() => setResourceType("users")}>Users</button>
  //       <h1>{resourceType}</h1>
  //       {items.map((item) => {
  //         return <pre>{JSON.stringify(item)}</pre>;
  //       })}
  //     </div>
  //   </>
  // );
}

export default App;
