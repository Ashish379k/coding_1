
function rmDp(input)
{
    var input1=[]
    var arr=[]
    for(var i=0;i<input.length;i++)
    {
        for(var j=i+1;j<input.length-1;j++)
        {
            if(input[i]==input[j])
            {
               input[j]=null
            }
        }
    }
    for(var i=0;i<input.length;i++)
    {
        if(input[i]!==null)
        {
            arr.push(input[i])
        }
    }
    console.log(arr)
}
var obj1= {
    arr: [10,10,20,30,40,20,100,'a','a','b'],
    unq: function(){
        console.log(unique(this))
    }
}

obj1.unq()


   
   
    
