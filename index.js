const express = require('express')
const bodyParser = require("body-parser");

const router = express.Router();
const app = express()
const port = 80

// add router in express app
app.use("/",router);
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())


router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.post("/hook",(req, res) => {
    const data = req.body;
    console.log("Subscribe Request");
    console.log(data);
    res.status(201);
    res.json({id: 66, apiStatus: "success"});
});

router.delete("/hook",(req, res) => {
    const data = req.body;
    console.log("Unsubscribe Request");
    console.log(data);
    res.status(204);
    res.json({apiStatus: "success"});
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})