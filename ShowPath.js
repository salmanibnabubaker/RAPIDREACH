import { NumToString } from "./NumberToString.js";
import { Indexes } from "./ExtractIndexes.js";

let Index=0;
function MoveCar(PathArray){
    let CarObj=document.getElementById("Car");
    CarObj.style.top=PathArray[Index][0]*20+"px";
    CarObj.style.left=PathArray[Index][1]*20+"px";
    document.getElementById("DetailsJourney").innerText="Distance:"+NumToString(3*(PathArray.length-1-Index))+"m\nTime to reach:"+NumToString(PathArray.length-1-Index)+"seconds";
    Index++;
    StartCar(PathArray);
}
function StartCar(PathArray){
    if(Index!=PathArray.length){
        setTimeout(()=>{
            MoveCar(PathArray);
        },500);
    }
    else{
        document.getElementById("DetailsJourney").innerText="Reached Destination";
        setTimeout(()=>{

            //removing animation map
            document.getElementById("OuterContainer").removeChild(document.getElementById("Animation"));


            let str1=document.querySelector("#Source").innerText,str2=document.querySelector("#Destination").innerText;
            let [a,b]=Indexes(str1),[x,y]=Indexes(str2);
            let b1=document.getElementById("s"+NumToString(a)+"s"+NumToString(b)),b2=document.getElementById("d"+NumToString(x)+"d"+NumToString(y));

            b1.setAttribute('class','Block');
            b2.setAttribute('class','Block');

            b1.style.backgroundColor="darkgreen";
            b2.style.backgroundColor="darkgreen";



            document.querySelector("#Source").innerText="Source:";
            document.querySelector("#Destination").innerText="Destination:";

            document.querySelector("#Status").innerText="";

        },1000);
    }
}


export function DisplayPath(PathArray){
    if(PathArray==null){
        document.getElementById("DetailsJourney").innerText="Path does'nt exist";
        return;
    }
    if(PathArray.length==1){
        document.getElementById("DetailsJourney").innerText="Reached Destination";
    }
    else{
        document.getElementById("DetailsJourney").innerText="Distance:"+NumToString(3*(PathArray.length-1))+"m\nTime to reach:"+NumToString(PathArray.length-1)+"seconds";
    }
    let len=PathArray.length;
    for(let i=0;i<len;i++){
        if(i==0){
            document.getElementById("m"+NumToString(PathArray[i][0])+"m"+NumToString(PathArray[i][1])).style.backgroundColor="red";
        }
        else if(i==len-1){
            document.getElementById("m"+NumToString(PathArray[i][0])+"m"+NumToString(PathArray[i][1])).style.backgroundColor="red";
        }
        else{
            document.getElementById("m"+NumToString(PathArray[i][0])+"m"+NumToString(PathArray[i][1])).style.backgroundColor="darkgray";
        }
    }
    if(PathArray.length!=1){
        let Container=document.getElementById("Animation");
        let StartJourney=document.createElement('button');
        StartJourney.innerText="Start Journey";
        StartJourney.setAttribute('id','StartJourney');
        let Car=document.createElement('div');
        Car.setAttribute('id','Car');
        document.getElementById("AnimationMap").appendChild(Car);
        StartJourney.addEventListener('click',()=>{
            StartJourney.style.display="none";
            setTimeout(()=>{
                Index=0;
                StartCar(PathArray);
            },500);
        });
        Container.appendChild(StartJourney);
    }
}