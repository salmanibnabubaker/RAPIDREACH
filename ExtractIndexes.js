import { StringToNum } from "./StringToNumber.js";

function IsNum(x){
    if(x=='0'||x=='1'||x=='2'||x=='3'||x=='4'||x=='5'||x=='6'||x=='7'||x=='8'||x=='9'){
        return true;
    }
    return false;
}
function FirstNumIndex(str){
    let len=str.length;
    for(let i=0;i<len;i++){
        if(IsNum(str[i])){
            return i;
        }
    }
    return -1;
}
function DivisorCharAt(str,x){
    let len=str.length;
    for(let i=0;i<len;i++){
        if(str[i]==x){
            return i;
        }
    }
    return -1;
}
export function Indexes(str){
    let FirstNumAt=FirstNumIndex(str),DivisorAt=DivisorCharAt(str,',');
    let x="",y="";
    for(let i=FirstNumAt;i<DivisorAt;i++){
        x+=str[i];
    }
    for(let i=DivisorAt+1;i<str.length;i++){
        y+=str[i];
    }
    return [StringToNum(x),StringToNum(y)];
}