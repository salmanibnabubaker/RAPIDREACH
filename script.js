import { CreateSourceMap } from './SourceMap.js';
import { CreateDestinationMap } from './DestinationMap.js';
import { DisplayObstacles } from './MarkObstacles.js';
import { StringToNum } from './StringToNumber.js';
import { CreateAnimationMap } from './AnimationMap.js';
import { BinaryMat } from './BinaryMatrix.js';
import { ObstaclePresent } from './CheckForObs.js';
import { Indexes } from './ExtractIndexes.js';
import { shortestPathBinaryMatrix } from './ShortestPath.js';
import { DisplayPath } from './ShowPath.js';

let obs_matrix=BinaryMat(20,20);
CreateSourceMap(obs_matrix);
CreateDestinationMap(obs_matrix);
DisplayObstacles(obs_matrix);

let Container=document.querySelector("#OuterContainer");
document.getElementById("Journey").addEventListener('click',()=>{
    let str1=document.getElementById("Source").innerText,str2=document.querySelector("#Destination").innerText;
    if(str1.length=="Source:".length||str2.length=="Destination:".length||str1.length=="Source:Obstacle Present".length||str2.length=="Destination:Obstacle Present".length){
        let Notify="";
        if(str1.length=="Source:".length){
            Notify+="Source is not selected\n";
        }
        if(str2.length=="Destination:".length){
            Notify+="Destination is not selected\n";
        }
        if(str1.length=="Source:Obstacle Present".length){
            Notify+="Obstacle at Source\n";
        }
        if(str2.length=="Destination:Obstacle Present".length){
            Notify+="Obstacle at Destination\n";
        }
        document.querySelector("#Status").innerText=Notify;
        return;
    }
    document.getElementById("Status").innerText="";
    let InnerContainer=document.getElementById("Animation");
    if(InnerContainer!==null){
        Container.removeChild(InnerContainer);
    }
    


    InnerContainer=document.createElement('div');
    InnerContainer.setAttribute('class','MapOuter');
    InnerContainer.setAttribute('id','Animation');
    
    


    let Path=document.createElement('p');
    Path.innerText=str1.substr("Source:".length)+" to "+str2.substr("Destination:".length);

    let Details=document.createElement('p');
    Details.setAttribute("id","DetailsJourney");

    InnerContainer.appendChild(Path);
    InnerContainer.appendChild(CreateAnimationMap(obs_matrix));
    InnerContainer.appendChild(Details);

    Container.appendChild(InnerContainer);


    let [a,b]=Indexes(str1),[x,y]=Indexes(str2);
    let ShortPathArray=shortestPathBinaryMatrix(obs_matrix,a,b,x,y);
    DisplayPath(ShortPathArray);

});