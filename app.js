   
$(".restart").hide();
// window.location.reload()
(function(){
  "use strict";
  // object
  var app = {

		  			  init: function(){
				      app.listeners();
				    },

				    listeners:function(){
				      		$(".verifie").click(app.day);
							$(".restart").click(app.restart);
				    },

				    day:function(){
				    	var day=$("#jour").val();
				    	var month=$("#mois").val();
				    	var year=$("#annee").val();
				    	var total= 
				    	$("#message").html(moment(year+month+day,"YYYYMMDD").format('dddd')).show(".restart");
  						
				    	
						if(day>31){
						$("#alert").html("le jour doit etre compris entre 1 et 31");
						}
						if(day<1){
						$("#alert").html("le jour doit etre compris entre 1 et 31");
						}
						if(year<0){
						$("#alert").html("L'année doit etre supérieure à 0");
						}
						$(".overlay").hide();
						$("#jour").hide();
						$("#mois").hide();
						$("#message").hide();
						$("#annee").hide();
						$(".verifie").hide();
						$(".restart").show();
						},
						restart:function(){
							window.location.reload()
						},
		
			};

app.init();

})();
