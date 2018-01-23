$("#roulette").on("click", function(event) {
 event.preventDefault();
 var rountineidhere = goalweight;
 $.get("/api/goalWeight", function(data) {
   console.log(data);
   renderDashboard(data);

 });

});