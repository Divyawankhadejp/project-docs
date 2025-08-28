
// Define the functional component
const DummyComponent= ({ name, age, isHappy }) => {
  return (
    <div>
      <h1>Hello from Dummy Component!</h1>
      <p>My name is {name}.</p>
      <p>I am {age} years old.</p>
      {isHappy ? <p>I am feeling happy today!</p> : <p>I am not feeling happy today.</p>}
    </div>
  );
};

export default DummyComponent;