



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