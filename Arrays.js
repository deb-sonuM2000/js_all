let values=[1,2,3,4,5]
values.push(10)
values.push(20)
console.log(values);
console.log(values[2]);
//
console.log("\n");
//another type
let v=['sonu','sonali','somu','shreehan','sahana','swati',{tech:'JS'},64]
v[6]='Suyog'
console.log(v);
console.log("\n");

//Array Methods
let data=[1,23,4,5,6,7]
console.log(data.push(65));
console.log(data.pop());
console.log(data.shift());
console.log(data.unshift(99));
console.log(data)
console.log("\n");

let n1=[]
n1[0]=10
n1[50]=20
console.log(n1.length);
for(let key in n1){
          console.log(key);
          //console.log(n1[key]);
}