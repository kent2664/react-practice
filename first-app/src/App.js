import Greeting from './Greetings.js';
export default function App() {
  const myName = "Kenta";
  return (
    <>
      <h1>Hello World! ;D</h1>
      <h2>My first react app made by {myName}</h2>
      <Greeting name={myName} />
    </>
  )
}