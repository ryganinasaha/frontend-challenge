const arr =[1, 2, 5]

function getAlement() {}


const catss = [
    { id: "1", favorite: false },
    { id: "2", favorite: true },
    { id: "3", favorite: false }
  ];
  
  function getFavorite() {
    const catsFavorite = [];
  
    for (let i = 0; i < catss.length; i++) {
      if (catss[i].favorite === true) {
        catsFavorite.push(catss[i]);
      }
    }
    return catsFavorite;
  }
  const myCats = getFavorite();
  
  //console.log(myCats);
  
  function getCatsById(id) {
    let cat = null;
  
    for (let i = 0; i < catss.length; i++) {
      if (catss[i].id === id) {
        cat = catss[i];
  
        break;
      }
    }
    return cat;
  }
  const myCat = getCatsById("3");
  //console.log(myCat);
  
  function setFavoriteById(id, favorite) {
    for (let i = 0; i < catss.length; i++) {
      if (catss[i].id === id) {
        catss[i].favorite = favorite;
  
        break;
      }
    }
  }
  setFavoriteById("1", true);
  //console.log(catss[0]);
  
  function toggleFavoriteById(id) {
    for (let i = 0; i < catss.length; i++) {
      if (catss[i].id === id) {
        catss[i].favorite = !catss[i].favorite;
  
        break;
      }
    }
  }
  toggleFavoriteById("3");
  console.log(catss[2]);
  




















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