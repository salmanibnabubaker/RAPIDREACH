export function BinaryMat(row,col){
    let Matrix=[],num;
    for(let i=0;i<row;i++){
        let row=[];
        for(let j=0;j<col;j++){
            num=Math.floor(Math.random()*3);
            if(num==0){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        Matrix.push(row);
    }
    return Matrix;
}