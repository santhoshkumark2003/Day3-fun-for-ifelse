//1. print the numbers from 1 to 100 with the interval of 10
/*for(let i=1;i<=100;i=i+10 )
{
    console.log(i);
}
*/

//2. print the number from 10 to 1
/*for( let i=10;i>0;i=i-1)
{
    console.log(i);
}*/

//3. print the multiple of 2 until 10
/*for(let i=2;i<=10;i=i*2)
    {
        console.log(i);
    }
*/

//4. print the number from 100 to 1 with the difference of 10.
/*for(let i=100;i>=1;i=i-10)
{
    console.log(i);
}*/

//5. write a function to print the eligble, Not eligble voters separately from the list of array [18,17,16,15,10,8,7,9,35,40,86,75,0]. Note: print invalid if the voter age is 0.
 var givenArr=[18,17,16,15,10,8,7,9,35,40,86,75,0];
 var eligible=[];
 var notEligible=[];
 var invalid=[];
 function vote(arr)
 {
    for(let i=0;i<arr.length;i=i+1)
    {
        if(arr[i]<=0)
        {
            invalid.push(arr[i]);
        }
        else if(arr[i]>=18)
        {
            eligible.push(arr[i]);
        }
        else
        {
            notEligible.push(arr[i]);
        }
    }
    return {
        eligible_for_vote : eligible,
        notEligible_for_vote : notEligible,
        invalid_for_vote : invalid
    }
 }
 console.log(vote(givenArr));
