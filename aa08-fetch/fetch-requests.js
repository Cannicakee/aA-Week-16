/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

const method = "POST"
const headers = {
    "Content-Type": "application/x-www-form-urlencoded"
}

const url = 'http://localhost:5000/products';
const body = new URLSearchParams({
    name: "Carribean Delight Coffee",
    description: "Made by Manatee Coffee",
    price: 11.99,
    categories: "grocery"
})
/* ============================== Phase 1 ============================== */
const postProdcut = async () => {
    const options = {
        method,
        body,
        headers
    }

    const response = await fetch(url, options)

    if (response.ok) {
        console.log("New product added!")
    }
}

/* ============================== Phase 2 ============================== */

const getStatusAfterPost = async () => {
    const options = {
        method,
        headers,
        body
    }

    const response = await fetch(url, options)

    if (response.ok) {
        let [status, resType, resUrl] = [
            response.status,
            response.headers.get("Content-Type"),
            response.url
        ]
        console.log("Product Added")
        console.log("\tHere's the details:")
        console.log(`${status}\t${resType}\t${resUrl}`)
    }
}



/* ============================== Phase 3 ============================== */

// Your code here 
