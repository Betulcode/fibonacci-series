/**/

/*document.querySelector("#findResult").addEventListener("click",fibonacci);
myInput=parseInt(myInput);
function fibonacci()
{
  for(const i=0;i<myInput+1,i++){
    myArray=push(myArray[i-2])
  }
}*/
var myArray=[];
myArray[0]=0;
myArray[1]=1;
document.querySelector("#findResult").addEventListener("click",fibonacci);
function fibonacci()
{
  const n=document.querySelector("#inp").value;
  if (isNaN(n))
  {document.querySelector("#res").innerText="This is not a number";}
  else if (n==1)
  { 
    document.querySelector("#res").innerText="Result:"+ myArray;
  } 
  else if(n>1)
  {for(let i=2;i<n;i++){
    myArray[i]=myArray[i-1]+myArray[i-2];
  }
  document.querySelector("#res").innerText=myArray;

  }
n.focus();
n="";
};

