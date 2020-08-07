/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let ans = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j != grid[0].length; j++) {
      ans = Math.max(ans, dfs(grid, i, j))
    }
  }
  return ans;
};

function dfs(grid, cur_i, cur_j) {
  if (cur_i < 0 || cur_j < 0 || cur_i == grid.length || cur_j == grid[0].length || grid[cur_i][cur_j] != 1) return 0;
  grid[cur_i][cur_j] = 0;
  const di = [0, 0, 1, -1]
  const dj = [1, -1, 0, 0]
  let ans = 1;
  for (let i = 0; i != 4; i++) {
    let next_i = cur_i + di[i],
      next_j = cur_j + dj[i];
    ans += dfs(grid, next_i, next_j);
  }
  return ans;
}

// const grid = [
//   [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
// ]

const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1]
]

const result = maxAreaOfIsland(grid)

console.info(result)