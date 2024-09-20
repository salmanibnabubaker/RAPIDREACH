import {NumToString} from './NumberToString.js';
import { ObstaclePresent } from './CheckForObs.js';

let Container=document.getElementById("SourceContainerInner");
let Map_Width=20,Map_Height=20,Block_dim=20;
let sel_id="";
function Selection(i,j){
    if(sel_id.length!=0){
        document.getElementById(sel_id).style.backgroundColor="darkgreen";
    }
    sel_id="s"+NumToString(i)+"s"+NumToString(j);
    document.getElementById(sel_id).style.backgroundColor="darkgray";
}
export function CreateSourceMap(obs_mat){
    let block;
    for(let i=0;i<Map_Height;i++){
        for(let j=0;j<Map_Width;j++){
            block=document.createElement('div');
            block.setAttribute('class','Block');
            block.setAttribute('id',"s"+NumToString(i)+"s"+NumToString(j));
            block.style.left=j*Block_dim+"px";
            block.style.top=i*Block_dim+"px";
            block.addEventListener('click',()=>{
                if(ObstaclePresent(obs_mat,i,j)){
                    if(sel_id.length!=0){
                        document.getElementById(sel_id).style.backgroundColor="darkgreen";
                    }
                    document.getElementById("Source").innerHTML="Source:Obstacle Present";
                }
                else{
                    document.getElementById("Source").innerHTML="Source:"+i+","+j;
                    Selection(i,j);
                }
            });
            Container.appendChild(block);
        }
    }
}