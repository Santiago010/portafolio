import { Resizable } from "re-resizable";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWindow, toggleWindowActive } from "../actions/windowsActions";
import RandomNumber from "../helpers/RandomNumber";
import useCounter from "../hooks/useCounter";

const initialSize = {
  width: 500,
  height: 600,
};

const BaseWindow = ({ children, windowToShow }) => {
  const refNumberRamdon = useRef({
    top: RandomNumber(100, 0),
    left: RandomNumber(100, 0),
  });
  const { counter, increment, reset } = useCounter(0);

  const [windowResize, setWindowResize] = useState(initialSize);
  const [positionWindow, setpositionWindow] = useState({
    top: 0,
    left: 0,
  });

  const dispatch = useDispatch();
  const { windowActive } = useSelector((state) => state.windowsReducer);

  const handleClose = (ev, windowToShow) => {
    dispatch(setWindow(windowToShow));
  };
  const handleClick = () => {
    dispatch(toggleWindowActive(windowToShow));
  };

  const handleResize = () => {
    setpositionWindow({
      top: 0,
      left: 0,
    });
    if (counter === 0) {
      setWindowResize({
        width: "100%",
        height: "100%",
      });

      increment();
    } else {
      setpositionWindow(refNumberRamdon.current);
      setWindowResize(initialSize);
      reset();
    }
  };

  useEffect(() => {
    setpositionWindow(refNumberRamdon.current);
  }, []);

  return (
    <Resizable
      onClick={handleClick}
      className="basewindow animate__animated animate__bounceIn"
      style={{
        WebkitBackdropFilter: "blur(10.5px)",
        position: "absolute",
        zIndex: windowToShow === windowActive ? 2 : 1,
        opacity: windowToShow === windowActive ? 1 : 0.1,
        ...positionWindow,
      }}
      onResizeStop={(e, direction, ref, d) => {
        setWindowResize({
          width: windowResize.width + d.width,
          height: windowResize.height + d.height,
        });
      }}
      defaultSize={{
        width: windowResize.width,
        height: windowResize.height,
      }}
      size={windowResize}
      minHeight={windowResize.height / 2}
      maxHeight="100%"
      maxWidth="100%"
      minWidth={windowResize.width / 2}
    >
      <div>
        <header className="basewindow__header">
          <div
            className="basewindow__actions actions-close"
            onClick={(ev) => handleClose(ev, windowToShow)}
          ></div>
          <div
            className="basewindow__actions actions-resize"
            onClick={handleResize}
          ></div>
        </header>
        {children}
      </div>
    </Resizable>
  );
};

export default BaseWindow;
