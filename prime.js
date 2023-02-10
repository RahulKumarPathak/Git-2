let num=17;
let count=0;
for(let i=0; i<=17; i++){
if(num%i==0){
count++;
}
}
if (count==2){
console.log("Prime");

}
else {
console.log("Not Prime");
}