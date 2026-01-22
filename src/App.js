import Demo from "./Demo";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Prac1 from "./Prac1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./component/AboutUs";
import Contact from "./component/Contact";
import Home from "./component/Home";
import NoPage from "./component/NoPage";
import Login from "./Login.js";

function App() {
  let x = 20;
  // Example conditional rendering:
  // return <>{x < 10 ? <Test1 /> : <Test2 />}</>;

  let arry = ["mounish", "vsihal", "varun"];
  let numarry = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter> */}

      <Login />

      {/* <Prac1 />
      {numarry.map((item) => (
        <h1 key={item}>{item * item}</h1>
      ))} */}
    </>
  );
}

export default App;
