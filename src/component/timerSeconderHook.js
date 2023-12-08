import React, { useEffect, useState } from "react";
import "./timerSeconderHook.css";

const TimerSeconderHooks = () => {
  const [aaa, setAAA] = useState(100);
  const [second, setSecond] = useState(0);
  const [doubleSecond, setDoubleSecond] = useState(0);
  const [usedSecond, setUsedSecond] = useState(0);
  const [widthOneSecond, setWidthOneSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [startStop, setStartStop] = useState(false);
  const [loadingLineArray, setLoadingLineArray] = useState([]);
  const [timer_seconder, setTimer_Seconder] = useState(false);

  const timerFn = () => {
    setTimer_Seconder(true);
  };
  const seconderFn = () => {
    setTimer_Seconder(false);
  };
  const defaultFn = () => {
    setStartStop(false);
    setAAA(0);
    setSecond(0);
    setMinute(0);
    setLoadingLineArray([]);
  };
  const plusOneSecondFn = () => {
    if (startStop) {
      let arr = [];
      let lengthArr = loadingLineArray.length;
      let allSecond = doubleSecond + 1;
      for (let i = 0; i < lengthArr; i++) {
        arr.push(
          <div style={{ width: 300 / allSecond }} className="smallTS"></div>
        );
      }
      setLoadingLineArray(arr);
      setUsedSecond(loadingLineArray.length);
      setDoubleSecond(doubleSecond + 1);
    }
    if (second === 59) {
      setSecond(0);
      setMinute(minute + 1);
    } else {
      setSecond(second + 1);
    }
  };
  const minusOneSecondFn = () => {
    // if (startStop) {
    //   let arr = [];
    //   let lengthArr = loadingLineArray.length;
    //   let allSecond = doubleSecond - 1;
    //   for (let i = 0; i < lengthArr; i++) {
    //     arr.push(
    //       <div style={{ width: 300 / allSecond }} className="smallTS"></div>
    //     );
    //   }
    //   setLoadingLineArray(arr);
    //   setUsedSecond(loadingLineArray.length);
    //   setDoubleSecond(doubleSecond - 1);
    // }
    if (minute === 0 && second === 0) {
      setSecond(0);
    } else if (second === 0) {
      setMinute(minute - 1);
      setSecond(59);
    } else {
      setSecond(second - 1);
    }
  };
  const plusTenSecondFn = () => {
    if (startStop) {
      let arr = [];
      let lengthArr = loadingLineArray.length;
      let allSecond = doubleSecond + 10;
      for (let i = 0; i < lengthArr; i++) {
        arr.push(
          <div style={{ width: 300 / allSecond }} className="smallTS"></div>
        );
      }
      setLoadingLineArray(arr);
      setUsedSecond(loadingLineArray.length);
      setDoubleSecond(doubleSecond + 10);
    }
    if (second > 50) {
      setMinute(minute + 1);
      setSecond(second - 50);
    } else {
      setSecond(second + 10);
    }
  };
  const minusTenSecondFn = () => {
    // if (startStop) {
    //   let arr = [];
    //   let lengthArr = loadingLineArray.length;
    //   let allSecond = doubleSecond - 10;
    //   for (let i = 0; i < lengthArr; i++) {
    //     arr.push(
    //       <div style={{ width: 300 / allSecond }} className="smallTS"></div>
    //     );
    //   }
    //   setLoadingLineArray(arr);
    //   setUsedSecond(loadingLineArray.length);
    //   setDoubleSecond(doubleSecond - 10);
    // }
    if (minute === 0 && second < 10) {
      setSecond(0);
    } else if (second < 10) {
      setMinute(minute - 1);
      setSecond(second + 50);
    } else {
      setSecond(second - 10);
    }
  };
  const plusOneMinuteFn = () => {
    if (startStop) {
      let arr = [];
      let lengthArr = loadingLineArray.length;
      let allSecond = doubleSecond + 60;
      for (let i = 0; i < lengthArr; i++) {
        arr.push(
          <div style={{ width: 300 / allSecond }} className="smallTS"></div>
        );
      }
      setLoadingLineArray(arr);
      setUsedSecond(loadingLineArray.length);
      setDoubleSecond(doubleSecond + 60);
    }
    setDoubleSecond(minute * 60 + 60 + second);
    setMinute(minute + 1);
  };
  const minusOneMinuteFn = () => {
    // if (startStop) {
    //   let arr = [];
    //   let lengthArr = loadingLineArray.length;
    //   let allSecond = doubleSecond - 60;
    //   for (let i = 0; i < lengthArr; i++) {
    //     arr.push(
    //       <div style={{ width: 300 / allSecond }} className="smallTS"></div>
    //     );
    //   }
    //   setLoadingLineArray(arr);
    //   setUsedSecond(loadingLineArray.length);
    //   setDoubleSecond(doubleSecond - 60);
    // }
    setMinute(minute - 1);
  };
  const start_stop = () => {
    setDoubleSecond(second + minute * 60);
    setTimeout(() => {}, 500);
    // setWidthOneSecond(300 / (second + minute * 60));
    setWidthOneSecond(300 / doubleSecond);
    setStartStop(!startStop);
    setTimeout(() => {
      console.log(" widthOneSecond : ", widthOneSecond);
    }, 500);
  };

  useEffect(
    () => {
      let interval1;
      let interval2;
      let interval3;
      if (startStop) {
        if (!timer_seconder) {
          interval1 = setInterval(() => {
            setAAA(aaa + 1);
            console.log("a : ", aaa);
          }, 1000);
          interval2 = setInterval(() => {
            plusOneSecondFn();
          }, 1000);
          interval3 = setInterval(() => {
            setLoadingLineArray([
              ...loadingLineArray,
              <div style={{ width: 5 }} className="smallTS"></div>,
            ]);
          }, 1000);
        } else {
          interval1 = setInterval(() => {
            setAAA(aaa - 1);
            console.log("a : ", aaa);
          }, 1000);
          interval2 = setInterval(() => {
            minusOneSecondFn();
          }, 1000);
          interval3 = setInterval(() => {
            setLoadingLineArray([
              ...loadingLineArray,
              <div
                style={{ width: 300 / doubleSecond }}
                className="smallTS"></div>,
            ]);
          }, 1000);
          console.log(" doubleSecond  Effect: ", doubleSecond);
          console.log(" widthOneSecond  Effect: ", widthOneSecond);
        }
      }
      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
      };
    }
    //   , [second, seconder]
  );

  return (
    <div className="wrapperTS">
      <h1>{aaa}</h1>
      <h1> ---- TimerSeconderHooks --- </h1>
      <button className="buttonTS" onClick={timerFn}>
        Timer
      </button>
      <button className="buttonTS" onClick={seconderFn}>
        Seconder
      </button>
      {minute < 10 ? (
        second < 10 ? (
          <h1>
            0{minute} : 0{second}
          </h1>
        ) : (
          <h1>
            0{minute} : {second}
          </h1>
        )
      ) : second < 10 ? (
        <h1>
          {minute} : 0{second}
        </h1>
      ) : (
        <h1>
          {minute} : {second}
        </h1>
      )}
      <div className="loadingLineTS"> {loadingLineArray}</div>
      <div>
        <button className="buttonTS" onClick={defaultFn}>
          Def
        </button>
        <button className="buttonTS" onClick={plusOneSecondFn}>
          +1S
        </button>
        <button className="buttonTS" onClick={minusOneSecondFn}>
          -1S
        </button>
        <button className="buttonTS" onClick={plusTenSecondFn}>
          +10S
        </button>
        <button className="buttonTS" onClick={minusTenSecondFn}>
          -10S
        </button>
        <button className="buttonTS" onClick={plusOneMinuteFn}>
          +1M
        </button>
        <button className="buttonTS" onClick={minusOneMinuteFn}>
          -1M
        </button>
        <button className="buttonTS" onClick={start_stop}>
          StartStop
        </button>
      </div>
    </div>
  );
};

export default TimerSeconderHooks;
