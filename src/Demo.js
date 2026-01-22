import Test2 from "./Test2";

function Demo() {
  let x = 200;
  let text = "goodbye";

  if (x < 200) {
    text = "hello";
  }
  return (
    <>
      {/* <h1>mounish is gay</h1>
      <p>{x < 100 ? "its the truth" : "it is the false"}</p>
      <h2>{text}</h2> */}
      <Test2 name="karkala" />
    </>
  );
}

export default Demo;
