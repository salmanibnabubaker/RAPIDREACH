export function ObstaclePresent(obs_mat,i,j){
    if(obs_mat[i][j]==1){
        return true;
    }
    return false;
}