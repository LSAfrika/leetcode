class Hashtable{

    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    hash(key){
        let index=0

        for(let i=0;i<key.length;i++){
            index+=key.charCodeAt(i)
                }

                return index%this.size

    }

    set(key,value){

        let index=this.hash(key)

        if(!this.table[index]){
            this.table[index]=[[key,value]]

        }else{
            //add new key value pair
            let mapvalues=this.table[index]
            let keys=mapvalues.map(value=>value[0])

          //  console.log('keys ',keys);

            if(keys.includes(key)==true){
                let keyindex=keys.indexOf(key)
                mapvalues[keyindex]=[key,value]

            }else{

                this.table[index].push([key,value])

            }

           

        }
    }

    remove(key){

    
        const index=this.hash(key)

        if(this.table[index]==undefined) return undefined

        let keyvalues=this.table[index].map(value=>value[0])

        // console.log('remove keyvslue array: ',keyvalues);

        if(keyvalues.includes(key)==false) return undefined
        let keyindex=keyvalues.indexOf(key)
        this.table[index].splice(keyindex,1)
    

    }

    view(){

        let obj='{ \n'
        for(let value of this.table){
            if(value!==undefined) {
            // console.log(value);

            value.forEach(val => {

                obj+=`${val[0]}:${val[1]},\n`

                
            });

            }
        }
        obj+='}'

        return console.log(obj)
    }
}

// kcl 028x 

const hashmap=new Hashtable(50)

hashmap.set('name','kent')
hashmap.set('mane','bruce')
hashmap.set('age',10)

hashmap.view()
hashmap.set('name','kent updated')
// hashmap.view()
 hashmap.remove('mane')
// hashmap.remove('name')
hashmap.view()
hashmap.set('naem','kent')
hashmap.view()



