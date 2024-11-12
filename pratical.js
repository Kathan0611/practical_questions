
// arr: [5,4,3,2,1]

//1 questions  peak questions

const arr=[2,1]
const n=arr.length;
let peakIndex;
function binarySearch(arr,n){
    if(n==0 ||n==1){
        peakIndex=0;
    }
    else{
        let i=0;
        let j=arr.length-1;
        
        let mid=Math.floor(i+(j-i)/2);
        //mid element
         if(arr[mid]>arr[mid+1]){
            peakIndex=mid;
            return;
         }
         //left element
         else{
             j=mid-1;
         }
        
        
    }
}

binarySearch(arr,n)
console.log(peakIndex);



//2 questions
//Find the Encrypted String


let s="hello";
const arr2=s.split('');
 
 const k=2;
 const temp=[];
 let index=0;
 for(let i=0;i<k;i++){
     temp.push(s[i]);
 }

 for(let i=k;i<s.length;i++){
          arr2[index++]=s[i];
        //  console.log(arr)
          
 }
 for(let i=0;i<temp.length;i++){
      arr2[index++]=temp[i]
    //   console.log(arr)
 }
 console.log(arr2.join(''))



//3rd sort color


const arr3=[2,0,2,1,1,0];

let count0=0;
let count1=0;
let count2=0;

for(let i=0;i<arr3.length;i++){
     if(arr3[i]==0){
         count0++;
     }
     else if (arr3[i]==1){
         count1++;
     }
     else{
         count2++;
     }
}

for(let i=0;i<count0;i++){
      arr3[i]=0;
      
}
for(let i=count0;i<count0+count1;i++){
      arr3[i]=1;
}
for(let i=count1+count2;i<arr3.length;i++){
    arr3[i]=2;
}


console.log(arr3)


