/**
 * given a flower bed and flowers can you plant all flowwers in a the given bed
 * flowerbed:[1,0,0,0,1]
 * number of flowers= n=1
 * 
 * no two flowers should be adjacent to one another
 * 
 * 
 */


plantbed([1,0,0,0,1,0,0,0],2)
function plantbed(bed,flowers){
    let counter=0

   for(i=0;i<bed.length;i++){
    if(bed[i]==1) continue

    if(bed[i]==0&&bed[i-1]==0&&bed[i+1]==0){
        bed[i]=1
        flowers--
        i+=2
    }
   }

   console.log(bed,flowers==0);
}