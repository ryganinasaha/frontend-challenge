


const cats = [
    {
        breeds: [],
        id: "d5",
        url: "https://cdn2.thecatapi.com/images/d5.png",
        width: 600,
        height: 588
    },
    {
        breeds: [],
        id: "1ck",
        url: "https://cdn2.thecatapi.com/images/1ck.jpg",
        width: 968,
        height: 968
    },
    {
        breeds: [],
        id: "1dl",
        url: "https://cdn2.thecatapi.com/images/1dl.jpg",
        width: 612,
        height: 612
    }
]




;(async () => {
    await getAllCats();
})();

async function getAllCats() {
    const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10',{
        header: {
        "x-api-key": "817f5b56-6a3c-4840-989d-d4532bab2eb8"
    }
    });

    const cats = await res.json();

    console.log(cats)

    return cats
    
}