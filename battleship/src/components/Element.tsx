import React, { useEffect, useState, useImperativeHandle } from "react";

export interface ElementProps {
  selfPos: { row: number; col: number };
  MousePos: { row: number; col: number };
  isVertical: boolean;
  handleClick: any;
  isActivated: boolean;
  totalData: boolean[];
}
export const Element = React.forwardRef<any, ElementProps>(
  (
    { selfPos, MousePos, isVertical, handleClick, isActivated, totalData },
    ref
  ) => {
    const [isActive, setIsActive] = useState(0);

    useEffect(() => {
      if (!isActivated) {
        if (
          (selfPos.col >= MousePos.col &&
            selfPos.col < MousePos.col + 4 &&
            selfPos.row === MousePos.row &&
            !isVertical) ||
          (selfPos.row >= MousePos.row &&
            selfPos.row < MousePos.row + 4 &&
            selfPos.col === MousePos.col &&
            isVertical)
        ) {
          if (
            (MousePos.col >= 7 && !isVertical) ||
            (MousePos.row >= 7 && isVertical)
          )
            setIsActive(1);
          if (
            (MousePos.col < 7 && !isVertical) ||
            (MousePos.row < 7 && isVertical)
          ) {
            let flag = true;
            if (!isVertical)
              for (let i = MousePos.col; i < MousePos.col + 4; i++)
                if (totalData[MousePos.row * 10 + i]) flag = false;
            if (isVertical)
              for (let i = MousePos.row; i < MousePos.row + 4; i++)
                if (totalData[MousePos.col + 10 * i]) flag = false;
            if (flag) setIsActive(2);
            else setIsActive(1);
          }
        } else {
          setIsActive(0);
        }
      } else {
        setIsActive(3);
      }
    });

    return (
      <>
        <div
          className="element"
          onClick={() => {
            handleClick(isActive, selfPos);
          }}
        >
          <img
            src={require("../assets/Misssmall.png")}
            className="bgimg"
            style={
              isActivated
                ? { opacity: 1 }
                : isActive === 2
                ? { opacity: 1 }
                : isActive === 1
                ? { opacity: 0.3 }
                : { opacity: 0 }
            }
          ></img>
        </div>
      </>
    );
  }
);
