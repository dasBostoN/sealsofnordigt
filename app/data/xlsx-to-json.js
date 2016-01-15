var xlsxj = require("xlsx-to-json");
  xlsxj({
    input: "Sälar.xlsx", 
    output: "seals_auto.json",
    sheet: "Sälar"
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
  });