var inl=document.querySelectorAll('input')
var rst=document.getElementById('allreset')
function inputLimitChecker (e)
{
      if(e.target.value >9|| e.target.value <1 ||e.target.value >= "a")
    {   
        e.target.value=''
        
    }
}
inl.forEach(function(ele){
    ele.addEventListener('input',inputLimitChecker)
})
function playNow()
{
  var show=document.querySelector('.timer')
  var d = new Date("October 13, 2014 11:13:00");
  show.innerHTML = d.getTime; 
}
var box1ele=document.querySelectorAll('.box1')
var box2ele=document.querySelectorAll('.box2')
var box3ele=document.querySelectorAll('.box3')
var box4ele=document.querySelectorAll('.box4')
var box5ele=document.querySelectorAll('.box5')
var box6ele=document.querySelectorAll('.box6')
var box7ele=document.querySelectorAll('.box7')
var box8ele=document.querySelectorAll('.box8')
var box9ele=document.querySelectorAll('.box9')
var row1ele=document.querySelectorAll('.row1')
var row2ele=document.querySelectorAll('.row2')
var row3ele=document.querySelectorAll('.row3')
var row4ele=document.querySelectorAll('.row4')
var row5ele=document.querySelectorAll('.row5')
var row6ele=document.querySelectorAll('.row6')
var row7ele=document.querySelectorAll('.row7')
var row8ele=document.querySelectorAll('.row8')
var row9ele=document.querySelectorAll('.row9')
var col1ele=document.querySelectorAll('.col1')
var col2ele=document.querySelectorAll('.col2')
var col3ele=document.querySelectorAll('.col3')
var col4ele=document.querySelectorAll('.col4')
var col5ele=document.querySelectorAll('.col5')
var col6ele=document.querySelectorAll('.col6')
var col7ele=document.querySelectorAll('.col7')
var col8ele=document.querySelectorAll('.col8')
var col9ele=document.querySelectorAll('.col9')
var allele=document.query.querySelectorAll('ingrid input')
function sumBox1(){
     var sum=0
    for(var i=0;i<box1ele.length;i++){
        sum=sum+Number(box1ele[i].value)
        }
    if(sum>45) {   
              for(var i=0;i<box1ele.length;i++){
                box1ele[i].style.background='red'
                 }
      }
      else if(sum==45)
      {
        for(var i=0;i<box1ele.length;i++){
            box1ele[i].style.background='green'
      }
    }
    else
    {
              for(var i=0;i<box1ele.length;i++){
                box1ele[i].style.background='yellow'
                  }
        }
}
box1ele.forEach(function(ele){
    ele.addEventListener('change',sumBox1)})
function sumBox2(){
            var sum=0
           for(var i=0;i<box2ele.length;i++){
               sum=sum+Number(box2ele[i].value)
               }
           if(sum>45) {   
                     for(var i=0;i<box2ele.length;i++){
                       box2ele[i].style.background='red'
                        }
             }
             else if(sum==45)
      {
        for(var i=0;i<box2ele.length;i++){
            box2ele[i].style.background='green'
      }
    }
           else{
                     for(var i=0;i<box2ele.length;i++){
                       box2ele[i].style.background='yellow'
                         }
               }
       }
       box2ele.forEach(function(ele){
           ele.addEventListener('change',sumBox2)})

function sumBox3(){
            var sum=0
           for(var i=0;i<box3ele.length;i++){
               sum=sum+Number(box3ele[i].value)
               }
           if(sum>45) {   
                     for(var i=0;i<box2ele.length;i++){
                       box3ele[i].style.background='red'
                        }
             }
             else if(sum==45)
      {
        for(var i=0;i<box3ele.length;i++){
            box3ele[i].style.background='green'
      }
    }
           else{
                     for(var i=0;i<box3ele.length;i++){
                       box3ele[i].style.background='yellow'
                         }
               }
       }
       box3ele.forEach(function(ele){
           ele.addEventListener('change',sumBox3)})

function sumBox4(){
            var sum=0
           for(var i=0;i<box4ele.length;i++){
               sum=sum+Number(box4ele[i].value)
               }
           if(sum>45) {   
                     for(var i=0;i<box4ele.length;i++){
                       box4ele[i].style.background='red'
                        }
             }
             else if(sum==45)
      {
        for(var i=0;i<box4ele.length;i++){
            box4ele[i].style.background='green'
      }
    }
           else{
                     for(var i=0;i<box4ele.length;i++){
                       box4ele[i].style.background='yellow'
                         }
               }
       }
       box4ele.forEach(function(ele){
           ele.addEventListener('change',sumBox4)})
function sumBox5(){
                   var sum=0
                  for(var i=0;i<box5ele.length;i++){
                      sum=sum+Number(box5ele[i].value)
                      }
                  if(sum>45) {   
                            for(var i=0;i<box5ele.length;i++){
                              box5ele[i].style.background='red'
                               }
                    }
                    else if(sum==45)
      {
        for(var i=0;i<box5ele.length;i++){
            box5ele[i].style.background='green'
      }
    }
                  else{
                            for(var i=0;i<box5ele.length;i++){
                              box5ele[i].style.background='yellow'
                                }
                      }
              }
              box5ele.forEach(function(ele){
                  ele.addEventListener('change',sumBox5)})
       
function sumBox6(){
                   var sum=0
                  for(var i=0;i<box6ele.length;i++){
                      sum=sum+Number(box6ele[i].value)
                      }
                  if(sum>45) {   
                            for(var i=0;i<box6ele.length;i++){
                              box6ele[i].style.background='red'
                               }
                    }
                    else if(sum==45)
      {
        for(var i=0;i<box6ele.length;i++){
            box6ele[i].style.background='green'
      }
    }
                  else{
                            for(var i=0;i<box6ele.length;i++){
                              box6ele[i].style.background='yellow'
                                }
                      }
              }
              box6ele.forEach(function(ele){
                  ele.addEventListener('change',sumBox6)})
      
function sumBox7(){
                    var sum=0
                   for(var i=0;i<box7ele.length;i++){
                       sum=sum+Number(box7ele[i].value)
                       }
                   if(sum>45) {   
                             for(var i=0;i<box7ele.length;i++){
                               box7ele[i].style.background='red'
                                }
                     }
                     else if(sum==45)
      {
        for(var i=0;i<box7ele.length;i++){
            box7ele[i].style.background='green'
      }
    }
                   else{
                             for(var i=0;i<box7ele.length;i++){
                               box7ele[i].style.background='yellow'
                                 }
                       }
               }
               box7ele.forEach(function(ele){
                   ele.addEventListener('change',sumBox7)})
               
function sumBox8(){
                           var sum=0
                          for(var i=0;i<box8ele.length;i++){
                              sum=sum+Number(box8ele[i].value)
                              }
                          if(sum>45) {   
                                    for(var i=0;i<box8ele.length;i++){
                                      box8ele[i].style.background='red'
                                       }
                            }
                            else if(sum==45)
      {
        for(var i=0;i<box8ele.length;i++){
            box8ele[i].style.background='green'
      }
    }
                          else{
                                    for(var i=0;i<box8ele.length;i++){
                                      box8ele[i].style.background='yellow'
                                        }
                              }
                      }
                      box8ele.forEach(function(ele){
                          ele.addEventListener('change',sumBox8)})
               
function sumBox9(){
                           var sum=0
                          for(var i=0;i<box9ele.length;i++){
                              sum=sum+Number(box9ele[i].value)
                              }
                          if(sum>45) {   
                                    for(var i=0;i<box9ele.length;i++){
                                      box9ele[i].style.background='red'
                                       }
                            }
                            else if(sum==45)
      {
        for(var i=0;i<box9ele.length;i++){
            box9ele[i].style.background='green'
      }
    }
                          else{
                                    for(var i=0;i<box9ele.length;i++){
                                      box9ele[i].style.background='yellow'
                                        }
                              }
                      }
                      box9ele.forEach(function(ele){
                          ele.addEventListener('change',sumBox9)})
function sumRow1(){
                            var sum=0
                           for(var i=0;i<row1ele.length;i++){
                               sum=sum+Number(row1ele[i].value)
                               }
                           if(sum>45) {   
                                     for(var i=0;i<row1ele.length;i++){
                                       row1ele[i].style.background='red'
                                        }
                             }
                             else if(sum==45)
                              {
                                for(var i=0;i<row1ele.length;i++){
                                    row1ele[i].style.background='green'
                                 }
                               }
                           else{
                                     for(var i=0;i<row1ele.length;i++){
                                       row1ele[i].style.background='yellow'
                                         }
                               }
                       }
                       row1ele.forEach(function(ele){
                           ele.addEventListener('change',sumRow1)})
function sumRow2(){
                            var sum=0
                           for(var i=0;i<row2ele.length;i++){
                               sum=sum+Number(row2ele[i].value)
                               }
                           if(sum>45) {   
                                     for(var i=0;i<row2ele.length;i++){
                                       row2ele[i].style.background='red'
                                        }
                             }
                             else if(sum==45)
                             {
                               for(var i=0;i<row2ele.length;i++){
                                   row2ele[i].style.background='green'
                                }
                              }
                           else{
                                     for(var i=0;i<row2ele.length;i++){
                                       row2ele[i].style.background='yellow'
                                         }
                               }
                       }
                       row2ele.forEach(function(ele){
                           ele.addEventListener('change',sumRow2)})
function sumRow3(){
                            var sum=0
                           for(var i=0;i<row3ele.length;i++){
                               sum=sum+Number(row3ele[i].value)
                               }
                           if(sum>45) {   
                                     for(var i=0;i<row3ele.length;i++){
                                       row3ele[i].style.background='red'
                                        }
                             }
                             else if(sum==45)
                             {
                               for(var i=0;i<row3ele.length;i++){
                                   row3ele[i].style.background='green'
                                }
                              }
                           else{
                                     for(var i=0;i<row3ele.length;i++){
                                       row3ele[i].style.background='yellow'
                                         }
                               }
                       }
                       row3ele.forEach(function(ele){
                           ele.addEventListener('change',sumRow3)}) 
function sumRow4(){
                            var sum=0
                           for(var i=0;i<row4ele.length;i++){
                               sum=sum+Number(row4ele[i].value)
                               }
                           if(sum>45) {   
                                     for(var i=0;i<row4ele.length;i++){
                                       row4ele[i].style.background='red'
                                        }
                             }
                             else if(sum==45)
                             {
                               for(var i=0;i<row4ele.length;i++){
                                   row4ele[i].style.background='green'
                                }
                              }
                           else{
                                     for(var i=0;i<row4ele.length;i++){
                                       row4ele[i].style.background='yellow'
                                         }
                               }
                       }
                       row4ele.forEach(function(ele){
                           ele.addEventListener('change',sumRow4)}) 
function sumRow5(){
                            var sum=0
                           for(var i=0;i<row5ele.length;i++){
                               sum=sum+Number(row5ele[i].value)
                               }
                           if(sum>45) {   
                                     for(var i=0;i<row5ele.length;i++){
                                       row5ele[i].style.background='red'
                                        }
                             }
                             else if(sum==45)
                             {
                               for(var i=0;i<row5ele.length;i++){
                                   row5ele[i].style.background='green'
                                }
                              }
                           else{
                                     for(var i=0;i<row5ele.length;i++){
                                       row5ele[i].style.background='yellow'
                                         }
                               }
                       }
                       row5ele.forEach(function(ele){
                           ele.addEventListener('change',sumRow5)}) 
function sumRow6(){
                            var sum=0
                           for(var i=0;i<row6ele.length;i++){
                               sum=sum+Number(row6ele[i].value)
                               }
                           if(sum>45) {   
                                     for(var i=0;i<row6ele.length;i++){
                                       row6ele[i].style.background='red'
                                        }
                             }
                             else if(sum==45)
                             {
                               for(var i=0;i<row6ele.length;i++){
                                   row6ele[i].style.background='green'
                                }
                              }
                           else{
                                     for(var i=0;i<row6ele.length;i++){
                                       row6ele[i].style.background='yellow'
                                         }
                               }
                       }
                       row6ele.forEach(function(ele){
                           ele.addEventListener('change',sumRow6)})                                                                        
      
function sumRow7(){
                            var sum=0
                           for(var i=0;i<row7ele.length;i++){
                               sum=sum+Number(row7ele[i].value)
                               }
                           if(sum>45) {   
                                     for(var i=0;i<row7ele.length;i++){
                                       row7ele[i].style.background='red'
                                        }
                             }
                             else if(sum==45)
                             {
                               for(var i=0;i<row7ele.length;i++){
                                   row7ele[i].style.background='green'
                                }
                              }
                           else{
                                     for(var i=0;i<row1ele.length;i++){
                                       row7ele[i].style.background='yellow'
                                         }
                               }
                       }
                       row7ele.forEach(function(ele){
                           ele.addEventListener('change',sumRow7)})

 function sumRow8(){
                            var sum=0
                           for(var i=0;i<row8ele.length;i++){
                               sum=sum+Number(row8ele[i].value)
                               }
                           if(sum>45) {   
                                     for(var i=0;i<row8ele.length;i++){
                                       row8ele[i].style.background='red'
                                        }
                             }
                             else if(sum==45)
                             {
                               for(var i=0;i<row8ele.length;i++){
                                   row8ele[i].style.background='green'
                                }
                              }
                           else{
                                     for(var i=0;i<row8ele.length;i++){
                                       row8ele[i].style.background='yellow'
                                         }
                               }
                       }
                       row8ele.forEach(function(ele){
                           ele.addEventListener('change',sumRow8)})

 function sumRow9(){
                            var sum=0
                           for(var i=0;i<row9ele.length;i++){
                               sum=sum+Number(row9ele[i].value)
                               }
                           if(sum>45) {   
                                     for(var i=0;i<row9ele.length;i++){
                                       row9ele[i].style.background='red'
                                        }
                             }
                             else if(sum==45)
                             {
                               for(var i=0;i<row9ele.length;i++){
                                   row9ele[i].style.background='green'
                                }
                              }
                           else{
                                     for(var i=0;i<row9ele.length;i++){
                                       row9ele[i].style.background='yellow'
                                         }
                               }
                       }
                       row9ele.forEach(function(ele){
                           ele.addEventListener('change',sumRow9)})

function sumCol1(){
                            var sum=0
                           for(var i=0;i<col1ele.length;i++){
                               sum=sum+Number(col1ele[i].value)
                               }
                           if(sum>45) {   
                                     for(var i=0;i<col1ele.length;i++){
                                       col1ele[i].style.background='red'
                                        }
                             }
                             else if(sum==45)
                             {
                               for(var i=0;i<col1ele.length;i++){
                                   col1ele[i].style.background='green'
                                }
                              }
                           else{
                                     for(var i=0;i<col1ele.length;i++){
                                       col1ele[i].style.background='yellow'
                                         }
                               }
                       }
                       col1ele.forEach(function(ele){
                           ele.addEventListener('change',sumCol1)})
function sumCol2(){
                            var sum=0
                           for(var i=0;i<col2ele.length;i++){
                               sum=sum+Number(col2ele[i].value)
                               }
                           if(sum>45) {   
                                     for(var i=0;i<col2ele.length;i++){
                                       col2ele[i].style.background='red'
                                        }
                             }
                             else if(sum==45)
                             {
                               for(var i=0;i<col2ele.length;i++){
                                   col2ele[i].style.background='green'
                                }
                              }
                           else{
                                     for(var i=0;i<col2ele.length;i++){
                                       col2ele[i].style.background='yellow'
                                         }
                               }
                       }
                       col2ele.forEach(function(ele){
                           ele.addEventListener('change',sumCol2)})
function sumCol3(){
                            var sum=0
                           for(var i=0;i<col3ele.length;i++){
                               sum=sum+Number(col3ele[i].value)
                               }
                           if(sum>45) {   
                                     for(var i=0;i<col3ele.length;i++){
                                       col3ele[i].style.background='red'
                                        }
                             }
                             else if(sum==45)
                             {
                               for(var i=0;i<col3ele.length;i++){
                                   col3ele[i].style.background='green'
                                }
                              }
                           else{
                                     for(var i=0;i<row3ele.length;i++){
                                       col3ele[i].style.background='yellow'
                                         }
                               }
                       }
                       col3ele.forEach(function(ele){
                           ele.addEventListener('change',sumCol3)}) 
function sumCol4(){
                            var sum=0
                           for(var i=0;i<col4ele.length;i++){
                               sum=sum+Number(col4ele[i].value)
                               }
                           if(sum>45) {   
                                     for(var i=0;i<col4ele.length;i++){
                                       col4ele[i].style.background='red'
                                        }
                             }
                             else if(sum==45)
                             {
                               for(var i=0;i<col4ele.length;i++){
                                   col4ele[i].style.background='green'
                                }
                              }
                           else{
                                     for(var i=0;i<col4ele.length;i++){
                                       col4ele[i].style.background='yellow'
                                         }
                               }
                       }
                       col4ele.forEach(function(ele){
                           ele.addEventListener('change',sumCol4)}) 
function sumCol5(){
                            var sum=0
                           for(var i=0;i<col5ele.length;i++){
                               sum=sum+Number(col5ele[i].value)
                               }
                           if(sum>45) {   
                                     for(var i=0;i<col5ele.length;i++){
                                       col5ele[i].style.background='red'
                                        }
                             }
                             else if(sum==45)
                             {
                               for(var i=0;i<col5ele.length;i++){
                                   col5ele[i].style.background='green'
                                }
                              }
                           else{
                                     for(var i=0;i<col5ele.length;i++){
                                       col5ele[i].style.background='yellow'
                                         }
                               }
                       }
                       col5ele.forEach(function(ele){
                           ele.addEventListener('change',sumCol5)}) 
function sumCol6(){
                            var sum=0
                           for(var i=0;i<col6ele.length;i++){
                               sum=sum+Number(col6ele[i].value)
                               }
                           if(sum>45) {   
                                     for(var i=0;i<col6ele.length;i++){
                                       col6ele[i].style.background='red'
                                        }
                             }
                             else if(sum==45)
                             {
                               for(var i=0;i<col6ele.length;i++){
                                   col6ele[i].style.background='green'
                                }
                              }
                           else{
                                     for(var i=0;i<col6ele.length;i++){
                                       col6ele[i].style.background='yellow'
                                         }
                               }
                       }
                       col6ele.forEach(function(ele){
                           ele.addEventListener('change',sumCol6)})                                                                        
      
function sumCol7(){
                            var sum=0
                           for(var i=0;i<col7ele.length;i++){
                               sum=sum+Number(col7ele[i].value)
                               }
                           if(sum>45) {   
                                     for(var i=0;i<col7ele.length;i++){
                                       col7ele[i].style.background='red'
                                        }
                             }
                             else if(sum==45)
                             {
                               for(var i=0;i<col7ele.length;i++){
                                   col7ele[i].style.background='green'
                                }
                              }
                           else{
                                     for(var i=0;i<col1ele.length;i++){
                                       col7ele[i].style.background='yellow'
                                         }
                               }
                       }
                       col7ele.forEach(function(ele){
                           ele.addEventListener('change',sumCol7)})

 function sumCol8(){
                            var sum=0
                           for(var i=0;i<col8ele.length;i++){
                               sum=sum+Number(col8ele[i].value)
                               }
                           if(sum>45) {   
                                     for(var i=0;i<col8ele.length;i++){
                                       col8ele[i].style.background='red'
                                        }
                             }
                             else if(sum==45)
                             {
                               for(var i=0;i<col8ele.length;i++){
                                   col8ele[i].style.background='green'
                                }
                              }
                           else{
                                     for(var i=0;i<col8ele.length;i++){
                                       col8ele[i].style.background='yellow'
                                         }
                               }
                       }
                       col8ele.forEach(function(ele){
                           ele.addEventListener('change',sumCol8)})

 function sumCol9(){
                            var sum=0
                           for(var i=0;i<col9ele.length;i++){
                               sum=sum+Number(col9ele[i].value)
                               }
                           if(sum>45) {   
                                     for(var i=0;i<col9ele.length;i++){
                                       col9ele[i].style.background='red'
                                        }
                             }
                             else if(sum==45)
                             {
                               for(var i=0;i<col9ele.length;i++){
                                   col9ele[i].style.background='green'
                                }
                              }
                           else{
                                     for(var i=0;i<col9ele.length;i++){
                                       col9ele[i].style.background='yellow'
                                         }
                               }
                       }
                       col9ele.forEach(function(ele){
                           ele.addEventListener('change',sumCol9)})
//function allSum()
//{
//                             var sum=0
//                           for(var i=0;i<allele.length;i++){
//                               sum=sum+Number(allele[i].value)
//                               }
//                          if(sum==45*9)
//                             {
//                               for(var i=0;i<allele.length;i++){
//                                   allele[i].style.background='green'
//                                }
//                              }
//                          
//                       }
//                       col9ele.forEach(function(ele){
//                           ele.addEventListener('change',sumCol9)})
