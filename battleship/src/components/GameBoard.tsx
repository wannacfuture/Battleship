import React, { createRef, useEffect, useRef, useState } from "react";
import { Element } from "./Element";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

export interface GameBoardProps {}
export interface Pos {
  row: number;
  col: number;
}

export const GameBoard: React.FC<GameBoardProps> = () => {
  const [loopArray, setLoopArray] = useState<boolean[]>([]);
  const [currentPos, setCurrentPos] = useState<{ row: number; col: number }>({
    row: -1,
    col: -1,
  });
  const [isVertical, setIsVertical] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    let tempArray: boolean[] = [];
    for (let i = 0; i < 100; i++) tempArray.push(false);
    setLoopArray(tempArray);
  }, []);

  const handleMove = (e: any) => {
    const tempRow = Math.floor((e.pageY - 100) / 50);
    const tempCol = Math.floor((e.pageX - 100) / 50);
    setCurrentPos({ row: tempRow, col: tempCol });
  };

  const onHandleClick = (isActive: number, pos: Pos) => {
    if (isActive === 2) {
      let tempArray: boolean[] = [];
      loopArray.forEach((value) => {
        tempArray.push(value);
      });

      if (!isVertical)
        for (let i = pos.col; i < pos.col + 4; i++)
          tempArray[pos.row * 10 + i] = true;
      else
        for (let i = pos.row; i < pos.row + 4; i++)
          tempArray[i * 10 + pos.col] = true;
      setLoopArray(tempArray);
    }
  };

  return (
    <>
      <div
        className="gameboard"
        onMouseMove={handleMove}
        onContextMenu={(e) => {
          e.preventDefault();
          setIsVertical(!isVertical);
        }}
      >
        {loopArray.map((value: boolean, index: number) => {
          return (
            <Element
              key={index}
              selfPos={{ row: Math.floor(index / 10), col: index % 10 }}
              MousePos={currentPos}
              isVertical={isVertical}
              ref={elementRef}
              handleClick={onHandleClick}
              isActivated={value}
              totalData={loopArray}
            ></Element>
          );
        })}
      </div>
    </>
  );
};
