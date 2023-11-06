
const mergeandsortarrayfn= (arr1,lengtharr1,arr2,lengtharr2)=>{
let trimeedarray1=arr1.splice(0,lengtharr1)
let trimeedarray2=arr2.splice(0,lengtharr2)

let mergedarray=[...trimeedarray1,...trimeedarray2]

console.log(mergedarray)


}


const merge = (nums1, m, nums2, n)=> {
    for(let i=m;i<m+n; i++){
     nums1[i] = nums2[i-m];
 }
 nums1.sort((a, b) => a-b);
console.log(nums1.sort((a, b) => a-b))

}
  
array1=[1,2,3,4,5,6,0,0]
length1=4
array2=[4,5,7,8,10]
length2=3

mergeandsortarrayfn(array1,length1,array2,length2)
merge(array1,length1,array2,length2)