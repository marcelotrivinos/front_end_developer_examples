import "./styles.css";
import Clock from "./Clock.js";
import Counter from "./Counter.js";
import UserInput from "./UserInput";
import SelectUser from "./SelectUser";

export default function App() {
  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <Clock></Clock>
      <Counter></Counter>
      <UserInput></UserInput>
      <SelectUser></SelectUser>
    </div>
  );
}
