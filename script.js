var plants = [
    {
        "name" : "Alocasia",
        "price" : 20,
        "photo": "assets/AlocasiaCalidora-365x500.jpg",
        "active" : false,
        "quantity" : 1
    },
    {
        "name" : "Aphelandra",
        "price" : 23,
        "photo": "assets/AphelandraTerrazzoRose-365x500.jpg",
        "active" : false,
        "quantity" : 1
    },
    {
        "name" : "Aloe Elancé",
        "price" : 12,
        "photo": "assets/AloeElancéArrondi-365x500.jpg",
        "active" : false,
        "quantity" : 1
    },
    {
        "name" : "Caladium white",
        "price" : 18,
        "photo": "assets/caladiumwhitequeenraphial-365x500.jpg",
        "active" : false,
        "quantity" : 1
    },
    {
        "name" : "Aspargus",
        "price" : 28,
        "photo": "assets/P1110821-365x500.jpg",
        "active" : false,
        "quantity" : 1
    },
    {
        "name" : "Cactus rosa",
        "price" : 19,
        "photo": "assets/7569C107-D4DA-4EFC-ABC9-5AEF86B75687-scaled-365x500.jpeg",
        "active" : false,
        "quantity" : 1
    },
    {
        "name" : "Alocasia",
        "price" : 20,
        "photo": "assets/AlocasiaCalidora-365x500.jpg",
        "active" : false,
        "quantity" : 1
    },
    {
        "name" : "Aphelandra",
        "price" : 23,
        "photo": "assets/AphelandraTerrazzoRose-365x500.jpg",
        "active" : false,
        "quantity" : 1
    },
    {
        "name" : "Aloe Elancé",
        "price" : 12,
        "photo": "assets/AloeElancéArrondi-365x500.jpg",
        "active" : false,
        "quantity" : 1
    },
    {
        "name" : "Aspargus",
        "price" : 28.60,
        "photo": "assets/P1110821-365x500.jpg",
        "active" : false,
        "quantity" : 1
    }
]


const plantsShop = {
  data() {
    return {
      plants: window.plants
    }
  },
  methods : {
    total: () => {
        var total = 0;
        plants.forEach(plant => {
            if(plant.active){
                total += plant.price * plant.quantity;
            }
        });
    return total;
    },
    totalQuantity: () => {
        var totalQuantity = 0;
        plants.forEach(plant => {
            if(plant.active){
                totalQuantity += plant.quantity;
            }
        });
    return totalQuantity;
    }
  }
}

Vue.createApp(plantsShop).mount('#app')
