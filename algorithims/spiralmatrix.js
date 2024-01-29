/**
 * Question:
 * Given a matrix of m ✕n elements (m rows, n columns), return all elements of the
 * matrix in spiral order.
 * For example, given the following matrix:
 * [
 * [ 1, 2, 3 ],
 * [ 4, 5, 6 ],
 * [ 7, 8, 9 ]
 * ]
 * You should return [1,2,3,6,9,8,7,4,5].
 */


const matrix= [
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
        [ 7, 8, 9 ],
        [10,11,12]
              ]


//1,2,3,6,9,12,11,10,7,4,5,8
              spiralmatrix(matrix)
function spiralmatrix(matrix){
console.log(matrix);
let matrixactuallength=matrix.length-1
let spiralflow=[]

 while (matrix.length>0) {
    
for(i=0;i<matrix.length;i++){
console.log(i);
    if(i==0){
        let firstrow=matrix[0]
        spiralflow=[...spiralflow,...firstrow]
    }else if(i>0&&i<matrixactuallength){
        let lastval=matrix[i].pop()
        spiralflow=[...spiralflow,lastval]

    }else if(i==matrixactuallength){
        let lastrow=matrix.pop()
        spiralflow=[...spiralflow,...lastrow.reverse()]
        
    }
}

matrix.shift()
}

console.log(spiralflow,matrix);



  }