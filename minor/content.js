chrome.runtime.sendMessage({todo:"showPageAction"});


var feeds = new Set();

function func() 
{   var para="";
    var str="";
     var sc=this.id;
	 var s=sc.slice(3);
	 var tt = document.getElementsByClassName('_1dwg _1w_m _q7o');
	  var y=tt[s].querySelectorAll("._5pbx.userContent._3576").length;
			if(y>0){
				var m=tt[s].getElementsByClassName("_5pbx userContent _3576");
                var z=m[0].getElementsByTagName("p");
               for(var xx=0;xx<z.length;xx ++)
			   {
		         para=para+z[xx].textContent;
		        
				}
				console.log(para);
			    				
			  	  
		       
			}
			
	var k=tt[s].querySelectorAll(".uiScaledImageContainer").length;
         if(k>0){
			var picture = tt[s].getElementsByClassName("uiScaledImageContainer")[0].getElementsByTagName("img")[0];
            var src = picture.getAttribute('src');
            console.log(src); 
             			
		 }	
		 var xhr=new XMLHttpRequest();
         xhr.open("POST","http://localhost/BE/Server.php",true);
         xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		 var markup = "con="+para;
		 xhr.send(markup);
	     xhr.onreadystatechange = function() {
	    if(xhr.readyState == 4 && xhr.status == 200) {
		    console.log(xhr.responseText);
	    }
    }
}

var btn=[];

setInterval(function() {
    var test = document.getElementsByClassName('clearfix b_fjgekloln');	
	//var test = document.getElementsByClassName('_42nr _1mtp');
	
	for(var c=0; c<test.length; c++) {
		
		var data = test[c];

		// Check if feed needs to be modified

		if(!feeds.has(data)) {
			feeds.add(data);
	
            var s=c.toString();
 
           //create button
           btn[c] = document.createElement("BUTTON");
           var btid='bid'+s;
           btn[c].id=btid;
		   var out='check';
		   btn[c].style = "font-weight:bold;background: #3b5998; font-size: 15px; color: #FFFFFF;padding: 3px; position:absolute; top: 4px; right: 30px;";
           //btn[c].style = "font-weight:bold;background: #3b5998; font-size: 15px; color: #FFFFFF;";
		  
           var t= document.createTextNode(out);
           btn[c].appendChild(t);
		  
		   
	
	       document.getElementsByClassName('clearfix b_fjgekloln')[c].appendChild(btn[c]);
		   //document.getElementsByClassName('_42nr _1mtp')[c].appendChild(btn[c]);
 
		   document.getElementById(btid).addEventListener("click", func);
   
   
		  

		   }
	}
	
},1000);


 





