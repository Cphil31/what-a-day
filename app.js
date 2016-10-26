   
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
  		$(".restart").click(app.restart);
  	},

  	day:function(){
  		var day=$("#jour").val();
  		var month=$("#mois").val();
  		var year=$("#annee").val();
  		var total= 
  		$(".affjour").html(moment(year+month+day,"YYYYMMDD").format('dddd')).show(".restart");
      $('body').css('background-color','#9055A2');
      $(".overlay").hide();
      $("#jour").hide();
      $("#mois").hide();
      $("#annee").hide();
      
      
      
      if(day>31){
        $("#message").html("le jour doit etre compris entre 1 et 31").css({"background-color": "#ff7473", "font-size": "50px"});
        $("#jour").css("border-color","#ff7473");
  		}
  		if(day<1){
  			$("#message").html("le jour doit etre compris entre 1 et 31").css({"background-color": "#ff7473", "font-size": "50px"});
  			$("#jour").css("border-color","#ff7473");
  		}
  		if(year<0){
  			$("#message").html("L'année doit etre supérieure à 0").css({"background-color": "#ff7473", "font-size": "50px"});
  			$("#annee").css("border-color","#ff7473");
  		}
  		
  		$(".verifie").hide();
  		$(".restart").show();
  	},
  	restart:function(){
  		window.location.reload()
  	},
  	
  };

  app.init();

})();
