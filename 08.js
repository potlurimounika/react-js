import React, { Component } from "react";
class App extends Component
{
 render()
 {
  var Mystyle={
    fontsize:80,
    fontfamily:'courier',
    color:"#063300",
  }
  return (
    <div>
      <h1 style={Mystyle}>Nipuna Technologies.</h1>
    </div>
  );
 }
}
export default App;
