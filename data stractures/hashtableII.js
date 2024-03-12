

class HashMap{

    constructor(size){
        // the size value is the size of the array to be used for storing data
        this.table=new Array(size)
        this.size= size
    }

     hashing(key){
        let index=0
        for (let i = 0; i < key.length; i++) {
           index+=key.charCodeAt(i)
          //  console.log(key.charCodeAt(i),index,index%this.size);
        }

        return index%this.size

    }


    setter(key,value){

        const index=this.hashing(key)

     //   this.table[index]=[key,value]

        if(!this.table[index]){

        this.table[index]=[[key,value]]

        }else{

            let primarykeyindex=this.table[index].map(values=>values[0]).indexOf(key)

            if(primarykeyindex==-1)this.table[index].push([key,value])
            if(primarykeyindex!==-1)this.table[index][primarykeyindex]=[key,value]

        }

    }
    getter(key){
        let index=this.hashing(key)
        if(!this.table[index]) return console.log(undefined);
        let keyindex=this.table[index].map(values=>values[0]).indexOf(key)
        return console.log('{',this.table[index][keyindex][0],':',this.table[index][keyindex][1],'}');
        
    }
    viewtable(){
    //   return console.log(this.table);
        let table=`{\n`
      for (let i = 0; i < this.table.length; i++) {
       
        if(!this.table[i]) continue
        let result=this.table[i]

        result.forEach(val => {
        table+=`  ${val[0]}:${val[1]},\n`
            
        });
        
      }
      table+='}'

      console.log(table);
    }

    delete(key){
        let index=this.hashing(key)
        if(!this.table[index]) return console.log(undefined);
        let keyindex=this.table[index].map(val=>val[0]).indexOf(key)

        if(keyindex==-1) return console.log(undefined);
        this.table[index].splice(keyindex,1)

    }
}

const hashtable=new HashMap(50)

hashtable.viewtable()
hashtable.setter('hello','world')
// hashtable.viewtable()
hashtable.setter('helol','world2')
hashtable.setter('helol','world3')
// hashtable.setter('hello','world4')
hashtable.setter('heoll','world4')

hashtable.viewtable()
hashtable.delete('helol')
hashtable.viewtable()
