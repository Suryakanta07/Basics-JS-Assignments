//Loki wants to steal the tesseract but in order to do so, he has to rearrange the elements in an array in a specific manner which is mentioned in a clue. The clue says ‘cursed are the odd and sorted are the even’. Loki manages to decode the clue which translates to “sort the even positioned elements of an array, starting from the element at index 0, in ascending order”. Manipulate the array so as to help Loki steal the tesseract.
const twoWaySort = (arr,n) =>{	
    let l = 0, r = n - 1;
    let k = 0;
    while (l < r)
    {
        while (arr[l] % 2 != 0)
        {
            l++;
            k++;
        }
        while (arr[r] % 2 == 0 && l < r)
            r--;
        if (l < r)
        {
            let temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;
        }
    }    
    let odd=new Array(k);
    for(let i=0;i<k;i++)
    {
        odd[i]=arr[i];
    }
    let even=new Array(n-k);
    for(let i=0;i<n-k;i++)
    {
        even[i]=arr[k+i];
    }
    odd.sort(function(a,b){return b-a;});
    even.sort(function(a,b){return a-b;});		
    return odd.concat(even);		
}
let arr=[5,3,9,1,4,4,6];
let ans=twoWaySort(arr, arr.length);
for(let i=0;i<ans.length;i++)
{
    console.log(ans[i]+" ");
}