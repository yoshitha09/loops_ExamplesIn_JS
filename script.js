//for loop
 //Average of n numbers
  function average(){
      let n=parseInt(document.getElementById("num1").value);
      let sum=0;
      let avg;
      for(let i=1;i<=n;i++)
      {
        sum=sum+i;
      }
      avg=sum/n;
      document.getElementById("avg1").innerHTML="Average : "+avg
  }

//sum of squares from 1 to n
 function squares(){
     let m=parseInt(document.getElementById("num2").value);
     let sum1=0;
     let sq;
     for(let i=1;i<=m;i++)
     {
         sq=i*i;
         sum1=sum1+sq;
     }
      document.getElementById("squ").innerHTML="sum of squares : "+sum1;
 }

//sum of cubs from 1 to n
 function cub(){
     let x=parseInt(document.getElementById("num3").value);
     let sum=0;
     let cu=1;
     for(let i=1;i<=x;i++)
     {
         cu=i*i*i;
         sum=sum+cu;
     }
     document.getElementById("cu").innerHTML="sum of cubs : "+sum;    
 }

//fibonacci series
 function fibonacci(){
     let y=parseInt(document.getElementById("num4").value);
     let a=0;
     let b=1;
     let c;
     for (let i=1;i<=n;i++)
     {
         document.getElementById("series").innerHTML="fibonacci series : "+a;
         c=a+b;
         a=b;
         b=c;
     }
 }

//while loop

//sum of digits in a num
 function sumofdigits(){
     let z=parseInt(document.getElementById("num5").value);
     let sum=0;
   while(n>0)
   {
     let d=parseInt(n%10);
     sum=sum+d;
     n=parseInt(n/10);
    }
    document.getElementById("digitSum").innerHTML="sum of digits : "+sum;
 }

//Average of digits in a num
 function Averageofdigits(){
     let d=parseInt(document.getElementById("num6").value);
     let sum=0;
     let div;
     let avg;
     let count=0;
     while(d>0)
     {
         div=parseInt(d%10);
         sum=sum+div;
         d=parseInt(d/10);
         count++;
     }
     avg=sum/count;
     document.getElementById("avgdigit").innerHTML="Average of digits in a number : "+avg;    
 }

//sum of 1st and last digit of a num
 function sumoffirstandlastdigits(){
      let e=parseInt(document.getElementById("num7").value);
      let sum=0;
      let count=0;
      let div;
      while(e>0)
      {
         div=parseInt(e%10);
        if(count===0)
        {
         sum=sum+div;
        }
        e=parseInt(e/10);
        count++;
      }
      sum=sum+div;
      document.getElementById("sum2").innerHTML="sum of 1st and last digit of a number : "+sum;   
 }

//average of digits which are divisible by 5 in given num
 function averagedigits(){
     let f=parseInt(document.getElementById("num8").value);
     let sum=0;
     let div;
     let count=0;
     let avg;
     while(n>0)
     {
         div=parseInt(n%10);
         if(div%5===0)
         {
             sum=sum+div;
             count++
         }
         n=parseInt(n/10);
     }
     avg=parseInt(sum/count);
     document.getElementById("avg4").innerHTML="average of digits which are divisible by 5 : "+avg;
 } 

//find the difference between largest and smallest digit in given num
 function diff(){
     let g=parseInt(document.getElementById("num9").value);
     let d;
     let temp;
     let large=1;
     let small=10;
     let dif;
     while(n>0)
     {
         d=parseInt(n%10);
         temp=d;
         if(large<temp)
         {
             large=temp;
         }
         if(small>temp)
         {
             small=temp;
         }
         n=parseInt(n/10);
     }
     dif=large-small;
     document.getElementById("dif").innerHTML="difference between largest and smallest digit : "+dif;

    }

//palindrome
 function palindrome()
 {
     let n=parseInt(document.getElementById("num10").value);
     let m=n;
     let sum=0;
     let d;
     while(n>0)
     {
         d=parseInt(n%10);
         sum=sum*10+d;
         n=parseInt(n/10);
     }
     if(m===sum)
     {
         document.getElementById("palin").innerHTML="palindrome"
     }
     else{
         document.getElementById("palin").innerHTML="not a palindrome";
     }
 }

//Nested Loop
//sum of prime number
 function sumOfPrimes(){
     let n1=parseInt(document.getElementById("num11").value);
     let n2=parseInt(document.getElementById("num12").value);
     let sum=0;
     for(let i=n1;i<=n2;i++)
     {
         let count=0;
         for(let j=1;j<=n2;j++)
         {
             if(i%j===0)
             {
                 count++;
             }
         }
          if(count===2)
              {
                 sum=sum+i;
             }
     }
     document.getElementById("sum4").innerHTML="sum of prime number : "+sum;    
 } 

//average of perfect num 1 to 1000
 function averageofperfect()
 {
     let m1=parseInt(document.getElementById("num13").value);
     let m2=parseInt(document.getElementById("num14").value);
     let avg;
     let sum=0;
     let count=0;
     let sum1;
     for(let i=m1;i<=m2;i++)
     {
          sum1=0;
         for(let j=1;j<i;j++)
         {
             if(i%j===0)
             {
                sum1=sum1+j;
             }
         }
          if(sum1===i)
             {
                 sum=sum+i;
                 count++
             }
     }
      avg=sum/count;
     document.getElementById("avg5").innerHTML="average of perfect num1 to num2 : "+avg;    
 }

//leap year in range 1900 to 2026
 function leapyear()
 {
     let x1=parseInt(document.getElementById("year1").value);
     let x2=parseInt(document.getElementById("year2").value);
     for(let i=x1;i<=x2;i++)
     {
        if(i%4===0)
        {
          document.getElementById("leap").innerHTML="leap year in range "+ x1+" to "+x2+" : "+i;        
        }
     }
 }

//palindrome num
 function palindromenum()
 {
     let y1=parseInt(document.getElementById("num15").value);
     let y2=parseInt(document.getElementById("num16").value);
     let temp;
     let d;
     for(let i=y1;i<=y2;i++)
     {
        let sum=0;
        temp=i;
        while(temp>0)
        {
          d=parseInt(temp%10);
          sum=sum*10+d;
          temp=parseInt(temp/10);
        }
        if(sum===i)
        {
         document.getElementById("num").innerHTML="palindrome numbers from"+y1+"to"+y2+" : "+i;       
        }
       
     }
 }



 




