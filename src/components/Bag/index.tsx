import { MouseEvent, useCallback } from "react";
import CellRow from "../CellRow";
import Cell from "../Cell";
import Icon from "../Icon";
import { IconType } from "../Icon/IconType";
import "./styles.scss";
import { CellDataSet } from "./CellDataSet";
import { useBag } from "src/hooks/useBag";

const Bag = () => {
  const { bag, updateBag } = useBag();

  const isDisabled = false;

  const handleCellClick = useCallback(
    (e: MouseEvent) => {
      if (
        isDisabled ||
        !(e.target instanceof HTMLDivElement) ||
        e.target.dataset?.value === undefined
      ) {
        return;
      }

      const { col, row, value } = new CellDataSet(e.target.dataset);

      if (value == 0) {
        updateBag((prev) => {
          const grid = Array.from(prev.grid);
          for (const i in grid) {
            grid[i] = Array.from(grid[i]);
          }
          grid[row][col] = 1;

          return { grid };
        });
      }
    },
    [isDisabled, updateBag]
  );

  return (
    <div className="bag">
      <h2>
        Bag <Icon size="icon--small" icon={IconType.MOD_BAG} />
      </h2>
      <div
        className={`bag__table ${isDisabled ? "" : "bag__table--active"}`}
        onClick={handleCellClick}
      >
        {bag.grid.map((cells, row) => (
          <CellRow key={row}>
            {cells.map((cell, col) => (
              <Cell row={row} col={col} value={cell} key={`${row}_${col}`}>
                {cell === 1 && <Icon icon={IconType.CELL_COIN} />}
              </Cell>
            ))}
          </CellRow>
        ))}
      </div>
    </div>
  );
};

export default Bag;
