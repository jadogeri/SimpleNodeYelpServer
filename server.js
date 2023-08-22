const axios = require('axios');
const express = require("express");
const cors = require("cors");
const app = express();

const ax = axios.create({

    baseURL: `https://api.yelp.com/v3/businesses`,
    headers: {

        Authorization: "Bearer *************************************************"

    },

});

app.use(cors());
app.use(express.json());

app.get("/search", async (req, res) => {
    try {
        const response = await ax.get('/search', {
            params: {
                limit: 50,
                location: "new orleans"
            }
        })
        console.log(response.data)
        res.json(response.data)
    } catch (err) { console.log(err) }
});

app.listen(4000, () => {
    console.log(`Server is running on port 4000.`);
});
