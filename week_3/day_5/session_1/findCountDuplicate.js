function findDup(input1,input2)
{
    obj={
        input1,
        input2,
        count:0
    }
    for(var i=0;i<obj.input1.length;i++)
    {
        if(obj.input1[i]==obj.input2)
        {
            obj.count=obj.count+1
        }
    }
    console.log('Number of target value ' +input2+' '+'in given array is :'+obj.count)
}
findDup([0,1,2,3,3,4,5,6,7,3,2,3],3)