const CharToNum=(x)=>{
    switch(x){
        case "0":return 0;
        case "1":return 1;
        case "2":return 2;
        case "3":return 3;
        case "4":return 4;
        case "5":return 5;
        case "6":return 6;
        case "7":return 7;
        case "8":return 8;
    }
    return 9;
}
export function StringToNum(x){
    let result=0,mul=1;
    for(let i=x.length-1;i>=0;i--){
        result+=(mul*CharToNum(x[i]));
        mul*=10;
    }
    return result;
}