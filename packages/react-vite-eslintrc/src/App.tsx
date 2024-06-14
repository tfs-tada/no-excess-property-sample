import { useEffect } from "react";

const MyComponent = (props: { name: string }) => {
  return <div>My name is {props.name} !</div>;
};

const myFunction = (props: { name: string }) => {
  console.log(props);
};

const userData = { name: "Alice", age: 20 } as const;
const App = () => {
  useEffect(() => {
    // excess property 'age' is not allowed
    myFunction(userData);
  }, []);

  // excess property 'age' is not allowed (jsx)
  return <MyComponent {...userData} />;
};

export default App;
