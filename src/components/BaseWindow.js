import { Resizable } from "re-resizable";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWindow, toggleWindowActive } from "../actions/windowsActions";
import RandomNumber from "../helpers/RandomNumber";
import useCounter from "../hooks/useCounter";

const BaseWindow = ({ children, windowToShow }) => {
  const { dimensionMain } = useSelector((state) => state.uiReducer);
  const refNumberRamdon = useRef({
    top: RandomNumber(dimensionMain.height / 10, 0),
    left: RandomNumber(dimensionMain.width / 2, 0),
  });
  const { counter, increment, reset } = useCounter(0);

  const [windowResize, setWindowResize] = useState({
    width: dimensionMain.width / 2,
    heigth: dimensionMain.height / 2,
  });
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
      setWindowResize({
        width: dimensionMain.width / 2,
        heigth: dimensionMain.height / 2,
      });
      reset();
    }
  };

  useEffect(() => {
    console.log(windowResize);
  }, [windowResize]);

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
      minHeight={dimensionMain.height / 4}
      maxHeight="100%"
      maxWidth="100%"
      minWidth={dimensionMain.width / 4}
    >
      <div>
        <header className="basewindow__header">
          <div
            className="basewindow__actions actions-close"
            onClick={(ev) => handleClose(ev, windowToShow)}
          >
            <span
              className="iconify icon__square"
              data-icon="material-symbols:close"
            ></span>
          </div>
          <div
            className="basewindow__actions actions-resize"
            onClick={handleResize}
          >
            <span
              className="iconify icon__square"
              data-icon="akar-icons:square"
            ></span>
          </div>
        </header>
        {children}
      </div>
    </Resizable>
  );
};

export default BaseWindow;
