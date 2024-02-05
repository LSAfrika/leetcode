/**
 * the below code is an implimentation of a graph using an adjecancy list
 */

class Graph{

    constructor(){
        this.graph={}
    }

    addvertex(vertex){


        if(!this.graph[vertex])   this.graph[vertex]=new Set()     
      
    }

    deletevertex(vertex){

        if(!this.graph[vertex])return

            this.graph[vertex].forEach(node => {
                if(this.graph[node].has(vertex)) this.graph[node].delete(vertex)
                
            });
        
        delete this.graph[vertex]
    }

    deletedge(vertexA,vertexB){
        if(this.graph[vertexA].has(vertexB)&&this.graph[vertexB].has(vertexA)){
            this.graph[vertexA].delete(vertexB)
            this.graph[vertexB].delete(vertexA)
        }
        else{
            console.log('no egdge between: ',vertexA,vertexB);
        }
    }
    addedge(vertexA,vertexB){

        if(!this.graph[vertexA]) this.addvertex(vertexA)
        if(!this.graph[vertexB]) this.addvertex(vertexB)

        this.graph[vertexA].add(vertexB)
        this.graph[vertexB].add(vertexA)
        
    }
    hasedge(vertexA,vertexB){


   
//   if ()  return console.log(vertexA,vertexB,' has an edge:', true)
  return console.log(vertexA,vertexB,' has an edge:',(this.graph[vertexA].has(vertexB)&&this.graph[vertexB].has(vertexA)))

    }
    viewgraph(){

        let graphdetails='{ \n'
       for (let vertex in this.graph) {
    
       if([...this.graph[vertex]].length==0) graphdetails+="  "+vertex+'--> [], \n'
       if([...this.graph[vertex]].length>0) graphdetails+="  "+vertex+'--> ['+[...this.graph[vertex]]+'], \n'
       }

       
       graphdetails+='}'

    console.log(graphdetails);

    }
}

const graph=new Graph()
graph.viewgraph()
graph.addvertex('a')
graph.addvertex('b')
graph.addvertex('c')
// graph.viewgraph()
graph.addedge('a','b')
graph.addedge('b','c')
graph.hasedge('a','b')
graph.hasedge('a','c')
graph.viewgraph()
graph.deletevertex('b')
graph.deletedge('a','b')
graph.deletedge('c','b')
graph.viewgraph()


