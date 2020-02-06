//import는 외부의 파일을 불러 오는 명령어
import React, { Component } from "react";
//react를 사용하기 위해서 react 라이브러리에서 React와 Component를 호출함
import logo from "./logo.svg";
import "./App.css";
//css를 불러옴 파일 이름은 달라도 된다.
import Counter from "./Counter.js"; // 카운터를 표시해줄 컴포넌트 호출
import Clock from "./Clock"

//Component라는 react의 class를 상속 받음
class App extends Component {
  //constructor는 컴포넌트가 마운트(생성)될때 데이터를 초기화 시켜 주고 싶을때 사용한다.
  //react에서는 state를 contructor에서 선언 해주어야 한다.
  constructor(props) {
    super(props);
    //상속을 받을때 this를 사용하기 위해서는 super를 선언해준다.
    //super를 사용하면 부모 클래스의 constructor를 호출해서 데이터를 초기화 해준다.

    //number의 값을 state로 선언한다.
    //state는 상태를 저장하는 변수로 현재 컴포넌트에서 데이터를 관리하거나 ui부분의 상태를 관리할때 사용
    this.state = {
      number1: 0,
      number2: 0
    };
  }

  //함수 실행시 number값이 1 증가
  handleIncrease1 = () => {
    const { number1 } = this.state;

    //this.setState는 state의 값을 변경할때 사용 하는 함수
    //this.state.number 에 직접 데이터를 변경할 수 없다.
    this.setState({
      number1: number1 + 1
    });
  };
handleIncrease2 = () => {
    const { number2 } = this.state;

    //this.setState는 state의 값을 변경할때 사용 하는 함수
    //this.state.number 에 직접 데이터를 변경할 수 없다.
    this.setState({
      number2: number2 + 1
    });
  };

  //함수 실행 시 number값이 1감소
  handleDecrease1 = () => {
    this.setState(({ number1 }) => ({
      number1: number1 - 1
    }));
  };
  handleDecrease2 = () => {
    this.setState(({ number2 }) => ({
      number2: number2 - 1
    }));
  };
  handleReset1 = () => {
    this.setState(({ number1 }) => ({
      number1: 0 
    }));
  };
  handleReset2 = () => {
    this.setState(({ number2 }) => ({
      number2: 0 
    }));
  };

  //jsx를 화면에 보여줄때 render함수를 호출해서 return을 해야 한다.
  //jsx는 js를 html처럼 사용할수 있게 해주는 언어?이다.
  render() {
    return (
      //jsx를 return 할때 두개 이상의 엘리먼트가 있으면
      //항상 감싸주어야 한다. 아래에서는 div로 엘리먼트를 감싸줌.
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/*
          위에서 import 한 Counter 컴포넌트를 선언 props를 이용해서 
          handleIncrease와 handleDecrease함수와 number의 값을 전달 한다.
          props는 상위컴포넌트에서 하위컴포넌트로 데이터와 함수를 전달할때 사용 하는 속성으로 
          props로 데이터를 받은 컴포넌트에서는 데이터 변경이 불가 하다.
        */}
          <Counter
            handleIncrease={this.handleIncrease1}
            handleDecrease={this.handleDecrease1}
            handleReset={this.handleReset1}
            number={this.state.number1}
          />
          <Counter
            handleIncrease={this.handleIncrease2}
            handleDecrease={this.handleDecrease2}
            handleReset={this.handleReset2}
            number={this.state.number2}
          />
          <Clock />
        </header>
      </div>
    );
  }
}

//외부에서 import로 불러오기 위해서는 export를 해줘야 한다.
//default는 하나의 모듈 혹은 class만 export할때 써준다.
//https://enyobook.wordpress.com/2016/08/17/export-default%EC%97%90-%EB%8C%80%ED%95%B4/
export default App;
