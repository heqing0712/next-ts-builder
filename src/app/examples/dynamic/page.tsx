
"use client";
import dynamic from 'next/dynamic';
import { useState, Suspense, lazy, useMemo } from 'react';
const url = 'http://localhost:8080/button.js'

import {
  createRequires,
  fetchRemoteComponent,
  getServerSideProps as getProps
} from "@paciolan/remote-component";

import { resolve } from "@/remote-component.config.js";
import React from 'react';

/**
 * 加载远程组件
 *
 * @param url - 组件的URL地址
 * @returns 组件的默认导出对象
 */
export async function loadRemoteComponent(url: string) {
    const script = await fetch(url).then((res) => res.text());
    const module = {exports: {}};
    const exports = {};
  
    // 因为上面代码里用到了react，所以要把react注入进去，不然会报错
    const require = (id: string) => {
      if (id === 'react') {
        return React;
      }
    };
  
    const process = {env: {NODE_ENV: 'production'}};
  
    const func = new Function('module', 'exports', 'require', 'process', script);
    console.log('js ',script)
  
    func(module, exports, require, process);
  
    return {default: module.exports} as any;
  }
/**
 * 动态组件
 */
export default function DynamicComponent() {
  const requires = createRequires(resolve);
  const url = 'http://localhost:8080/button5.js?v=' + new Date().getTime();
  const MyRemoteComponent = dynamic(() =>
  fetchRemoteComponent({ url, requires })
);

    return (<>
      <div>
        <div onClick={ ()=>{console.log(111)}}> 这是一个测试</div>
      <MyRemoteComponent/>
          </div>
    </>)
}
const packages = {
  react: React,
}

const getParsedModule = (code) => {
  let module = {
    exports: {},
  }
  const require = (name) => {
    return packages[name]
  }
  Function('require, exports, module', code)(require, module.exports, module)
  return module
}

 
const fetchComponent = async () => {
  const text = await fetch('http://localhost:8080/button3.js?v='+new Date().getTime()).then((a) => {
    if (!a.ok) {
      throw new Error('Network response was not ok')
    }
    return a.text()
  })
  const module = getParsedModule(text,)
  return {default: module.exports}
}

  function DynamicComponent1() {
  const Component =   React.lazy(async () => fetchComponent())
  function handleClick() {
    console.log(1)
  }

  const btn = React.createElement(
    "button",
    {
      style: {
        color: "blue",
        fontSize: "24px",
      },
      onClick: () => {
        console.log(123);
      },
    } 
  );
  return (
    <btn> 这是一个模板1</btn>
  );

  // return (
  //   <div>
  //     <div onClick={() => { handleClick() }}>这是一个组件</div>
  //     <Component  onClick={() => { handleClick() }}>这是一个远程加载的组件</Component>
  //   </div>
  // )
}
 

// const DynamicComponent = ({name, children, ...props}) => {
//   const Component = useMemo(() => {
//     return React.lazy(async () => fetchComponent(name))
//   }, [name])
//   function handleClick() {
//     console.log(1)
//   }

//   return (
//     <Component onClick={()=>{handleClick()}} {...props}> 这是一个组件</Component>
//   )
// }

// export default React.memo(DynamicComponent)
 