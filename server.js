
const bodyparser = require('body-parser')
const api = require('./api/yelp.js');
const express = require("express");
const cors = require("cors");
const app = express();
const yelp = api.axiosInstance();

app.use(cors());
app.use(express.json());
app.use(bodyparser.json({ limit: '10mb' }))
app.use(bodyparser.urlencoded({ extended: true, limit: '10mb' }))


app.get("/search/:searchTerm", async (req, res) => {
    try {
        const response = await yelp.get('/search', {
            params: {
                limit: 100,
                location: "new orleans",
                term: req.params.searchTerm
            }
        })
        console.log(response.data)
        res.json(response.data)
    } catch (err) { console.log(err) }
});

app.get("/:id", async (req, res) => {
    try {

        const id = req.params.id;
        const response = await yelp.get(`/${id}`);
        console.log(response.data)
        res.json(response.data)
    } catch (err) { console.log(err) }
});

app.listen(4000, () => {
    console.log(`Server is running on port 4000.`);
});
