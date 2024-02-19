export const findClustersInBag = (grid: number[][]): boolean => {
  const visited = new Set();
  const DIRS = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  const ROWS = grid.length;
  const COLS = grid[0].length;

  const clusters: { row: number; col: number }[][] = [];
  let clusterIndex = 0;

  const bfs = (row: number, col: number, index: number) => {
    clusters[index] = [{ row, col }];
    const queue = [{ row, col }];
    visited.add(`${row}_${col}`);

    while (queue.length > 0) {
      const { col, row } = queue.pop()!;

      for (const dir of DIRS) {
        const c = col + dir[0];
        const r = row + dir[1];

        console.log("dir", { c, r });
        if (
          r >= 0 &&
          r < ROWS &&
          c >= 0 &&
          c < COLS &&
          grid[r][c] === 1 &&
          !visited.has(`${r}_${c}`)
        ) {
          queue.push({ col: c, row: r });
          visited.add(`${r}_${c}`);
          clusters[index].push({ row: r, col: c });
        }
      }
    }
  };

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (grid[i][j] === 1 && !visited.has(`${i}_${j}`)) {
        bfs(i, j, clusterIndex);
        clusterIndex += 1;
      }
    }
  }
  // @TODO
  return false;
};
