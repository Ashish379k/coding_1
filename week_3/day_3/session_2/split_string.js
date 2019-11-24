var name='masai school samurai'
var arr=[]
var count=0
var str=''
for(var i=0;i<name.length;i++){
    str=str+name[i]
    if(name[i]==' ')
    {
        arr.push(str)
        str=''
    }      
}
arr.push(str)
console.log(arr)

    


