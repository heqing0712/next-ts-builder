
import React from "react";
import * as ReactDOM from "react-dom";
var vm = require("vm");

const Index = (props) => {
  let sandbox = {
    React: React,
    ReactDOM: ReactDOM,
    MyComponent: null,
    self: {},
    };
    console.log(props.MyComponent)
  vm.runInNewContext(props.MyComponent, sandbox);
  const MyComponent = sandbox.MyComponent.default;
  return (
    <div>
      <p>Hello from Next.js</p>
          <div>
      <MyComponent/>
      </div>
    </div>
  );
};

Index.getInitialProps = async function () {
    const res = await fetch("http://localhost:8080/button3.js");
    console.log(res)
  const script = await res.text();

  return { MyComponent: script };
};

export default Index;
