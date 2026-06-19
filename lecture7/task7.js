let n=5;
let m=2*n-1;
for(let row=1;row<=m;row++) {
    let v=0;
    if (row<=n) {
        v=row;
    } 
    else{
        v=m-row+1;
    }
    let rowStr="";
    let leftlength=v;
    for (let j=0;j<leftlength;j++) {
        if (row<=n) {
            if (j%2===0) {
                rowStr += v + " ";
            } else {
                rowStr+=(10-v) + " ";
            }
        } else {
            if (j%2===0) {
                rowStr+=(10-v) + " ";
            } 
            else{
                rowStr+=v+ " ";
            }
        }
    }
    let spaces = (n-v)*2; 
    for (let s=0;s<spaces;s++) {
        rowStr += "  "; 
    }
    let rightlength=v; 
    for (let j=0;j<rightlength;j++) {
        if (row<=n) {
            if (j% 2===0) {
                rowStr+=(10-v)+" ";
            } else {
                rowStr+=v+" ";
            }
        } else {
            if (j%2===0) {
                rowStr+=v+" ";
            } else{
                rowStr+=(10-v)+" ";
            }
        }
    }
    console.log(rowStr);
}