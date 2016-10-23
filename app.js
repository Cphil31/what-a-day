   
(function(){
  "use strict";
  
  // object
  var app = {

		  		

				    init: function(){
				      app.listeners();
				      $(".overplay").html("").css("background-color","red");
				    },

				    listeners:function(){
				      		$("#verifie").click(app.day);
				      		$("#restart").click(app.day);
				    },

				    day:function(){
				    	var day=$("#jour").val();
				    	var month=$("#mois").val();
				    	var year=$("#annee").val();
				    	var total= 
				    	$("#message").html(moment(year+month+day,"YYYYMMDD").format('dddd'));
				    	
						if(day>31){
						$("#message").html("le jour doit etre compris entre 1 et 31").css("background-color","red");
						}
						if(day<1){
						$("#message").html("le jour doit etre compris entre 1 et 31").css("background-color","red");
						}
						if(year<0){
						$("#message").html("L'année doit etre supérieure à 0");
						}

					},
				    

			};

app.init();

})();
