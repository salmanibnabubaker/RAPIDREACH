export function shortestPathBinaryMatrix(obs_mat, a, b, x, y) {
    const rows = obs_mat.length;
    const cols = obs_mat[0].length;
    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0] 
    ];
    if (obs_mat[a][b] === 1 || obs_mat[x][y] === 1) {
      return null; 
    }
    const queue = [[a, b]];
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    visited[a][b] = true;
    const parent = Array.from({ length: rows }, () => Array(cols).fill(null));
    while (queue.length > 0) {
      const [currentX, currentY] = queue.shift();
      if (currentX === x && currentY === y) {
        return reconstructPath(parent, a, b, x, y);
      }
      for (const [dx, dy] of directions) {
        const newX = currentX + dx;
        const newY = currentY + dy;
        if (
          newX >= 0 && newX < rows &&
          newY >= 0 && newY < cols &&
          obs_mat[newX][newY] === 0 &&
          !visited[newX][newY]
        ) {
          queue.push([newX, newY]);
          visited[newX][newY] = true;
          parent[newX][newY] = [currentX, currentY]; // Track the parent for path reconstruction
        }
      }
    }
    return null;
}
function reconstructPath(parent, a, b, x, y) {
    const path = [];
    let current = [x, y];
  
    while (current) {
      path.push(current);
      current = parent[current[0]][current[1]];
    }
    return path.reverse();
}