/**
 * we are going to create a hash table so as to have an overview of how objects and maps work
 * 
 * the hasing function has to be galvanized so as to avoid collisions eg
 * if we were to set the following key value pairs
 * hashtable.set('name','doe')
 * hashtable.set('mane','jane')
 * 
 * the hashtable would replace doe with jane since the key since 
 * the key shares the same letter hence the index key
 * generated will be similar
 */

class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    hash(key){
        let total=0

        for (let char = 0; char < key.length; char++) {
            total+=key.charCodeAt(char)            
        }
        return total%this.size
    }
// set with collisions
    set(key,value){
        let index= this.hash(key)
        this.table[index]=[value]
    }

    //set negation collition in keys passed in
    advancedset(key,value){
        let index= this.hash(key)
        let bucket=  this.table[index]
        console.log('bucket set',bucket);

        if(!bucket){
            bucket=[[key,value]] 
        }else{
            const samekeyhash=bucket.find(keyitem=>keyitem  [0]==key)
            console.log('key hash: ',samekeyhash);
            if(samekeyhash) {samekeyhash[1]=value}
            else{

                bucket.push([key,value])
            } 
        }
        this.table[index]=bucket

    }

    get(key){
        let index=this.hash(key)
        return this.table[index]
    }

    advancedget(key){
        let index=this.hash(key)
        let bucket= this.table[index]
     //   console.log('adv get: ',bucket);
        if(!bucket) return undefined
      const valuesubarray=  bucket.find(keyitem=>keyitem[0]==key)

      return valuesubarray[1]
    }

    remove(key){
        let index=this.hash(key)
        let bucket= this.table[index]
        if(!bucket) return undefined
        const filteredbucket=  bucket.filter(keyitem=>keyitem[0]!==key)
       // console.log('key',key,'buckey filter: ',filteredbucket);
        this.table[index]=filteredbucket

    }

    display(){
        let hasttablevalue='{\n'

        for (let i = 0; i < this.table.length; i++) {
            
            if(this.table[i]){
                console.log(this.table[i]);
            }
            
        }

        hasttablevalue+='}'
        return console.log(hasttablevalue)
    }
}

const hashtable= new HashTable(10)

console.log(hashtable.hash('hello'));

hashtable.advancedset('name','doe')
hashtable.advancedset('mane','jane')
hashtable.advancedset('mane','jane2')
hashtable.advancedset('maen','jane3')
hashtable.advancedset('age',20)
hashtable.advancedset('aeg',22)

hashtable.display()
// console.log(hashtable.get('age'));
// console.log(hashtable.advancedget('name'));
// //hashtable.remove('name')
// console.log(hashtable.advancedget('mane'));
// console.log(hashtable.advancedget('age'));
hashtable.remove('aeg')
hashtable.remove('maen')
hashtable.remove('name')
hashtable.display()


