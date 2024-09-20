function SetObstacle(Elm){
    let id=Elm.getAttribute("id");
    document.getElementById(id).style.backgroundColor="black";
}

export function DisplayObstacles(obs_mat){
    let r=obs_mat.length,c=obs_mat[0].length;
    let Source_Map=document.querySelector("#SourceContainerInner"),Dest_Map=document.getElementById("DestinationContainerInner");

    let Source_Blocks=Source_Map.children,Dest_Blocks=Dest_Map.children;
    let Index=0,Elm;
    for(let i=0;i<r;i++){
        for(let j=0;j<c;j++){
            if(obs_mat[i][j]==1){
                SetObstacle(Source_Blocks[Index]);
                SetObstacle(Dest_Blocks[Index]);
            }
            Index++;
        }
    }
}