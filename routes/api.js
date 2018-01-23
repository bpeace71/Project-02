app.get("/api/goalWeight",
   function(req, res) {
    console.log("this is what we wanted", req.params.book);
    if (req.params.goalWeight) {
    // Passing in where as filter inside the curly braces -- to find a title.
    // Left to right finding all book where the title equal req.params.book
      Routine.findAll({
        where: {
          rountineID: req.params.goalWeight
        }
      }).then(function(results) {
        console.log(res)
        res.json(results);
      });
    }
  });