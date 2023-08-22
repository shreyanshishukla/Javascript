 function sum(a,b){
    console.log("sum",a+b);
}
 function mul(a,b){
    console.log("mul",a*b);
}
export function sub(a,b){
    console.log("sub",a-b);
}
export default  function div(a,b){
    console.log("div",a/b);
}

export {mul,sum};