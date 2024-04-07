/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-01-31 14:33:21
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-04-02 00:47:39
 * @FilePath: /vite-react/src/views/home/refs.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import React from "react";

// class RefsComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.myRef = React.createRef();
//   }

//   componentDidMount() {
//     console.log(this.myRef)
//   }

//   render() {
//     return (
//       <div ref={(element) => { this.myRef = element }}>refs的用法</div>
//     );
//   }
// }
function RefsComponent() {
  const myRef = React.useRef()
  console.log(myRef)
  return <div ref={myRef} />
}


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: "默认值"
//     }
//   }
//   changeValue() {
//     this.setState({
//       message: "更新数据"
//     });
//   }

//   render() {
//     console.log("render")
//     return <div>
//       <h2>{this.state.message}</h2>
//       <button onClick={() => this.changeValue()}>点击</button>
//     </div>
//   }
// }

function App(){
  const [message,setMessage] = React.useState("默认值");
  console.log('render');
  return <div>
      <h2>{message}</h2>
      <button onClick={() => setMessage("更新数据")}>点击</button>
    </div>
}
export default App;