const sql = require("mssql/msnodesqlv8");
const app = require("express")();
const port = 4000;
const bodyParser = require("express").json;
const UserRouter = require("./api/User")
const GPSRouter = require("./api/GPSdata")


const cors = require("cors");

app.use(cors());//allows us to communicate between fe and be
app.use(bodyParser());

app.use('/user',UserRouter)
app.use('/dashboard',GPSRouter)

app.listen(port, () => {
    console.log(`listening on port :${port}`);
});


var config = {
  database: "dummy",
  server: "KAKA\\MSSQLSERVER02",
  driver: "msnodesqlv8",
  user: "sa",
  password: "Dhan1234!",
  options: {
    trustedConnection: true,
  },
};

//connect to database
sql.connect(config, function (err) {
  if (err) {
    console.log(`Error connecting to database`);
    console.error(err);
  } else {
    console.log(`Connected to database`)
    /*let req = new sql.Request();
    let query = `select * from dummy`;
    req.query(query, function (err, recordSet) {
      if (err) {
        console.log(`Error while querying database`);
        console.error(err);
      } else {
        console.log(recordSet);
      }
    });*/
  }
});
