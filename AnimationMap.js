import { NumToString } from './NumberToString.js';
let Block_dim=20,Map_Height=20,Map_Width=20;

function Obstacles(obs_mat){
    let r=obs_mat.length,c=obs_mat[0].length;
    for(let i=0;i<r;i++){
        for(let j=0;j<c;j++){
            if(obs_mat[i][j]==1){
                document.getElementById("m"+NumToString(i)+"m"+NumToString(j)).style.backgroundColor="black";               
            }
        }
    }
}

export function CreateAnimationMap(obs_mat){
    let AnimationMap=document.createElement('div');
    AnimationMap.setAttribute('class','MapInner');
    AnimationMap.setAttribute('id','AnimationMap');
    let block,id;
    for(let i=0;i<Map_Height;i++){
        for(let j=0;j<Map_Width;j++){
            block=document.createElement('div');
            block.setAttribute('class','Block');
            id="m"+NumToString(i)+"m"+NumToString(j);
            block.setAttribute('id',id);
            block.style.top=i*Block_dim+"px";
            block.style.left=j*Block_dim+"px";
            AnimationMap.appendChild(block);
        }
    }
    setTimeout(()=>{
        Obstacles(obs_mat);
    },1000);
    
    return AnimationMap;
}