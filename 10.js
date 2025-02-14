import React, { Component } from 'react';
class App extends React.Component
{
 render()
 {
  return (
    <div>
      <First/>
      <Second/>
    </div>
  );
 }
}
class First extends React.Component
{
  render()
  {
    return(
      <div>
        <h1>JAVA</h1>
      </div>
    );
  }
}
class Second extends React.Component
{
  render()
  {
    return(
      <div>
        <h2>www.java.com</h2>
        <p>This website contains the great cs tutorial.</p>
      </div>
    );
  }
}
export default App;
