import { useState } from "react";

function SayHello() {
  //falsey values: 0, "", null, undefined, NaN
  const name = "Mehdi";
  return <h1>Hello There, {name ? name : "Unknown"}</h1>;
}

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Nest.js",
    "TypeScript",
  ];
  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function MathComponent() {
  return <h1>Hello There, {2 + 2}</h1>;
}

const courses = [
  {
    name: "React Fundamentals",
    price: 0,
  },
  {
    name: "Advanced React",
    price: 15000,
  },
];

function Course() {
  return (
    <div>
      <h1>Course </h1>
      <div>
        {courses.map((course) => (
          <CourseDetail name={course.name} price={course.price} />
        ))}
      </div>
    </div>
  );
}

function CourseDetail({ name, price }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Type: {price > 0 ? "Paid" : "Free"}</p>
    </div>
  );
}

function Button({ text, count }) {
  return (
    <button>
      {text}, {count}
    </button>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
}

function App() {
  return (
    <div>
      {/*  <SayHello />
      <MathComponent />
      <SayHello />
      <Skills /> */}
      <Counter />
    </div>
  );
}
export default App;
