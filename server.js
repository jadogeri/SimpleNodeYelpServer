const axios = require('axios');
const express = require("express");
const cors = require("cors");
const app = express();

const ax = axios.create({

    baseURL: `https://api.yelp.com/v3/businesses`,
    headers: {

        Authorization: "Bearer yT8rvGixLKUs09F3M5JjD6hL2Va5CItaCJ2tOOKRtPKlLQbVh_SQS55BumNjaRkY3DFE4K0GsnI5OqYACwpCaG2VfHS32Kr7JGxLIRAwpEwvJio1P1QyaVXJoaTdZHYx"

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
