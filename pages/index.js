
  var startWrite = setTimeout(function(){
    
       var $WIP = "Work in progress...";
    
        function initWIP(i){
              $("#wip").addClass("writeOut").text($WIP.substring(0, i));
                  if(i < $WIP.length){
                        setTimeout(function(){
                           initWIP(i + 1);   
                        }, 40);
                     }else{
                    /* after finishing do this
                        setTimeout(function() {

                        }, 1000);
                    */   
                     }
         }
    
               setTimeout(function() {
                  initWIP(0);
               }, 1000); 
   }, 2500);

startWrite();
