/**
 * find the Kth smallest elemnent in a 2d array where the elements are sorted
 * example:
 *          [
 *            [1, 3, 4]  
 *            [4, 8, 9]  
 *            [9,10,15]  
 *          ]  
 * k=7
 * 
 *  return[k]=9 this is because when the 2d array is flattend we get
 * 
 *           [
 *            [1, 3, 4]  
 *            [4, 8, 9]  =>[  [1, 3, 4],[4, 8, 9],  [9,10,15]  ]
 *            [9,10,15]  
 *           ] 
 * [  [1, 3, 4],[4, 8, 9],  [9,10,15]  ]=>[1, 3, 4,4, 8, 9,9,10,15]
 * 
 * [1, 3, 4,4, 8, 9,9,10,15] k=7 hence since and array has a 0 based index k=7-1=6 
 * the 6th element is the 7th smallest element which is 9
 * 
 * 
 */

const matrix=   [
                    [1, 3, 4],  
                    [4, 8, 9],  
                    [9,10,15]  
                ]
                Kthsmallestelement(matrix,6)
function Kthsmallestelement(matrix,k) {

    let flattened=[]
    for(i=0;i<matrix.length;i++){
        flattened.push(...matrix[i])
    }

    console.log(flattened[k-1]);
    
}