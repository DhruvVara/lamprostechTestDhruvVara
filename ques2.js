function freqElements(arr,a){
    // map store the number frequencies
    let map=new Map();
    
    for(let i=0;i<arr.length;i++){
        
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1);
        }else{
            map.set(arr[i],1);
        }
    }
    let queue =[...map];
    // sort the keys based on count
    queue.sort(function(a,b){
        if(a[1]==b[1]){
            // a and b
            return b[0]-a[0];
        }else{
            return b[1]-a[1];
        }
    })
    let lst=[]
    for(let i=0;i<a;i++){
        lst.push(queue[i][0]);
    }

        console.log(lst);

}

freqElements([5,2,5,3,5,3,1],2)