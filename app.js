   
$(".restart").hide();
(function(){
  "use strict";
  // object
  var app = {

		  			  init: function(){
				      app.listeners();
				    },

				    listeners:function(){
				      		$(".verifie").click(app.day);
							$(".restart").click();
				    },

				    day:function(){
				    	var day=$("#jour").val();
				    	var month=$("#mois").val();
				    	var year=$("#annee").val();
				    	var total= 
				    	$("#message").html(moment(year+month+day,"YYYYMMDD").format('dddd')).show(".restart");
  						// $(".restart").show("");
				    	
						if(day>31){
						$("#message").html("le jour doit etre compris entre 1 et 31").css("background-color","red");
						}
						if(day<1){
						$("#message").html("le jour doit etre compris entre 1 et 31").css("background-color","red");
						}
						if(year<0){
						$("#message").html("L'année doit etre supérieure à 0");
						}
						$(".overlay").hide();
						$("#jour").hide();
						$("#mois").hide();
						$("#annee").hide();
						$(".verifie").hide();
						$(".restart").show();
						},
		
			};

app.init();

})();
