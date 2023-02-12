// summation 
self.onmessage=function(){
    var sum=0;
    for(var i=0;i<11111111111;i++){
        sum+=i;
    }
   self.postMessage(sum);
   console.log(sum);
}