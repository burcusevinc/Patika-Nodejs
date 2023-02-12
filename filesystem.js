const fs = require("fs");

//işlemlerin senkron gerçekleşmesi için callback metodu kullanıldı:

//create
fs.appendFile(
  "employees.json",
  '{"name": "Burcu", "salary": 2000}',
  "utf8",
  (err) => {
    if (err) console.log(err);
    console.log("dosya oluşturuldu");

    //read - callback function
    fs.readFile("employees.json", "utf8", (err, data) => {
      if (err) console.log(err);
      console.log;
      data;
      console.log("veri okundu");
      //update - callback function 2
      fs.writeFile(
        "employees.json",
        '{"name": "Sevinç", "salary": 5000}',
        "utf8",
        (err) => {
          if (err) console.log(err);
          console.log("dosya güncellendi");
          //delete - callback function 3
          fs.unlink("employees.json", (err) => {
            if (err) console.log(err);
            console.log("dosya silindi");
          });
        }
      );
    });
  }
);
