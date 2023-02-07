const cropData = [
    {
        name: "Amaranth",
        season: ["fall"],
        imgUrl: "amaranth.png",
        vendors: {
            pierre: 70,
            joja: 87,
            oasis: 0,
            travelingCart: {
                minPrice: 105,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 7,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 150,
            minYield: 1,
            extraYieldPerc: 0
        }
    },
    {
        name: "Ancient Fruit",
        season: ["spring", "summer", "fall"],
        imgUrl: "ancientfruit.png",
        vendors: {
            pierre: 0,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }
            //also drops from mobs/artifact
        },
        growth: {
            daysTillMature: 28,
            daysTillRegrow: 7
        },
        produce: {
            baseSellPrice: 550,
            minYield: 1,
            extraYieldPerc: 0
        }
    }, 
    {
        name: "Artichoke",
        season: ["fall"],
        imgUrl: "artichoke.png",
        vendors: {
            pierre: 30,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 8,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 160,
            minYield: 1,
            extraYieldPerc: 0
        }
        //only year 2+ 
    },
    {
        name: "Beet",
        season: ["fall"],
        imgUrl: "beet.png",
        vendors: {
            pierre: 0,
            joja: 0,
            oasis: 20,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 6,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 100,
            minYield: 1,
            extraYieldPerc: 0
        }
    },
    {
        name: "Blue Jazz",
        season: ["spring"],
        imgUrl: "bluejazz.png",
        vendors: {
            pierre: 30,
            joja: 37,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 7,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 50,
            minYield: 1,
            extraYieldPerc: 0      
        }
    },
    {
        name: "Blueberry",
        season: ["summer"],
        imgUrl: "blueberry.png",
        vendors: {
            pierre: 80,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 120,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 13,
            daysTillRegrow: 4
        },
        produce: {
            baseSellPrice: 50,
            minYield: 3,
            extraYieldPerc: 0.02            
        }
    },
    {
        name: "Bok Choy",
        season: ["fall"],
        imgUrl: "bokchoy.png",
        vendors: {
            pierre: 50,
            joja: 62,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 4,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 80,
            minYield: 1,
            extraYieldPerc: 0     
        }
    },
    {
        name: "Cactus Fruit",
        //only grows in greenhouse/garden pot or ginger island
        season: [],
        imgUrl: "cactusfruit.png",
        vendors: {
            pierre: 0,
            joja: 0,
            oasis: 150,
            travelingCart: {
                minPrice: 0,
                maxPrice: 0
            }
        },
        growth: {
            daysTillMature: 12,
            daysTillRegrow: 3
        },
        produce: {
            baseSellPrice: 75,
            minYield: 1,
            extraYieldPerc: 0     
        }
    },
    {
        name: "Cauliflower",
        season: ["spring"],
        imgUrl: "cauliflower.png",
        vendors: {
            pierre: 80,
            joja: 100,
            oasis: 0,
            travelingCart: {
                minPrice: 120,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 12,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 175,
            minYield: 1,
            extraYieldPerc: 0
        }
    },
    {
        name: "Coffee Bean",
        season: ["spring", "summer"],
        imgUrl: "coffeebean.png",
        vendors: {
            pierre: 0,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 2500
            }
            //also drops from mobs
        },
        growth: {
            daysTillMature: 10,
            daysTillRegrow: 2
        },
        produce: {
            baseSellPrice: 15,
            minYield: 4,
            extraYieldPerc: 0.02         
        }
    },
    {
        name: "Corn",
        //two seasons
        season: ["summer", "fall"],
        imgUrl: "corn.png",
        vendors: {
            pierre: 150,
            joja: 187,
            oasis: 0,
            travelingCart: {
                minPrice: 225,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 14,
            daysTillRegrow: 4
        },
        produce: {
            baseSellPrice: 50,
            minYield: 1,
            extraYieldPerc: 0      
        }
    },
    {
        name: "Cranberry",
        season: ["fall"],
        imgUrl: "cranberry.png",
        vendors: {
            pierre: 240,
            joja: 300,
            oasis: 0,
            travelingCart: {
                minPrice: 360,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 7,
            daysTillRegrow: 5
        },
        produce: {
            baseSellPrice: 75,
            minYield: 2,
            extraYieldPerc: 0.1       
        }
    },
    {
        name: "Eggplant",
        season: ["fall"],
        imgUrl: "eggplant.png",
        vendors: {
            pierre: 20,
            joja: 25,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 5,
            daysTillRegrow: 5
        },
        produce: {
            baseSellPrice: 60,
            minYield: 1,
            extraYieldPerc: 0.002
        }
    },
    {
        name: "Fairy Rose",
        season: ["fall"],
        imgUrl: "fairyrose.png",
        vendors: {
            pierre: 200,
            joja: 250,
            oasis: 0,
            travelingCart: {
                minPrice: 300,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 12,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 290,
            minYield: 1,
            extraYieldPerc: 0
        }
    },
    {
        name: "Garlic",
        season: ["spring"],
        imgUrl: "garlic.png",
        vendors: {
            pierre: 40,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 4,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 50,
            minYield: 1,
            extraYieldPerc: 0      
        }
        //only year 2+    
    },
    {
        name: "Grape",
        season: ["fall"],
        imgUrl: "grape.png",
        vendors: {
            pierre: 60,
            joja: 75,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 10,
            daysTillRegrow: 3
        },
        produce: {
            baseSellPrice: 80,
            minYield: 1,
            extraYieldPerc: 0     
        }
    },
    {
        name: "Green Bean",
        season: ["spring"],
        imgUrl: "greenbean.png",
        vendors: {
            pierre: 60,
            joja: 75,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 10,
            daysTillRegrow: 3
        },
        produce: {
            baseSellPrice: 40,
            minYield: 1,
            extraYieldPerc: 0      
        }
    },
    {
        name: "Hops",
        season: ["summer"],
        imgUrl: "hops.png",
        vendors: {
            pierre: 60,
            joja: 75,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 11,
            daysTillRegrow: 1
        },
        produce: {
            baseSellPrice: 25,
            minYield: 1,
            extraYieldPerc: 0      
        }
    },     
    {
        name: "Hot Pepper",
        season: ["summer"],
        imgUrl: "hotpepper.png",
        vendors: {
            pierre: 40,
            joja: 50,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 5,
            daysTillRegrow: 3
        },
        produce: {
            baseSellPrice: 40,
            minYield: 1,
            extraYieldPerc: 0.03
        }
    },  
    {
        name: "Kale",
        season: ["spring"],
        imgUrl: "kale.png",
        vendors: {
            pierre: 70,
            joja: 87,
            oasis: 0,
            travelingCart: {
                minPrice: 105,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 6,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 110,
            minYield: 1,
            extraYieldPerc: 0
        }
    },
    {
        name: "Melon",
        season: ["summer"],
        imgUrl: "melon.png",
        vendors: {
            pierre: 80,
            joja: 100,
            oasis: 0,
            travelingCart: {
                minPrice: 120,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 12,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 250,
            minYield: 1,
            extraYieldPerc: 0
        }
    },
    {
        name: "Parsnip",
        season: ["spring"],
        imgUrl: "parsnip.png",
        vendors: {
            pierre: 20,
            joja: 25,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 4,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 35,
            minYield: 1,
            extraYieldPerc: 0       
        }
    },
    {
        name: "Pineapple",
        season: ["summer"],
        imgUrl: "pineapple.png",
        vendors: {
            pierre: 0,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 0,
                maxPrice: 0
            }
            //Only at island trader for magma cap or drops from mobs
        },
        growth: {
            daysTillMature: 14,
            daysTillRegrow: 7
        },
        produce: {
            baseSellPrice: 300,
            minYield: 1,
            extraYieldPerc: 0
        }
    },
    {
        name: "Poppy",
        season: ["summer"],
        imgUrl: "poppy.png",
        vendors: {
            pierre: 100,
            joja: 125,
            oasis: 0,
            travelingCart: {
                minPrice: 150,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 7,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 140,
            minYield: 1,
            extraYieldPerc: 0
        }
    },
    {
        name: "Potato",
        season: ["spring"],
        imgUrl: "potato.png",
        vendors: {
            pierre: 50,
            joja: 62,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 6,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 80,
            minYield: 1,
            extraYieldPerc: 0.2       
        }
    },
    {
        name: "Pumpkin",
        season: ["fall"],
        imgUrl: "pumpkin.png",
        vendors: {
            pierre: 100,
            joja: 125,
            oasis: 0,
            travelingCart: {
                minPrice: 150,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 13,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 320,
            minYield: 1,
            extraYieldPerc: 0
        }
    },
    {
        name: "Radish",
        season: ["summer"],
        imgUrl: "radish.png",
        vendors: {
            pierre: 40,
            joja: 50,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 6,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 90,
            minYield: 1,
            extraYieldPerc: 0        
        }
    },
    {
        name: "Red Cabbage",
        season: ["summer"],
        imgUrl: "redcabbage.png",
        vendors: {
            pierre: 100,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 150,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 9,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 260,
            minYield: 1,
            extraYieldPerc: 0
        }
        //year 2+
    },
    {
        name: "Rhubarb",
        season: ["spring"],
        imgUrl: "rhubarb.png",
        vendors: {
            pierre: 0,
            joja: 0,
            oasis: 100,
            travelingCart: {
                minPrice: 150,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 13,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 220,
            minYield: 1,
            extraYieldPerc: 0
        }
    },
    {
        name: "Starfruit",
        season: ["summer"],
        imgUrl: "starfruit.png",
        vendors: {
            pierre: 0,
            joja: 0,
            oasis: 400,
            travelingCart: {
                minPrice: 600,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 13,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 750,
            minYield: 1,
            extraYieldPerc: 0
        }
    },
    {
        name: "Strawberry",
        season: ["spring"],
        imgUrl: "strawberry.png",
        vendors: {
            pierre: 100,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 360,
                maxPrice: 1000
            }
            //only during egg festival!!
        },
        growth: {
            daysTillMature: 8,
            daysTillRegrow: 4
        },
        produce: {
            baseSellPrice: 120,
            minYield: 1,
            extraYieldPerc: 0.02
        }
    },
    {
        name: "Summer Spangle",
        season: ["summer"],
        imgUrl: "summerspangle.png",
        vendors: {
            pierre: 50,
            joja: 62,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 8,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 90,
            minYield: 1,
            extraYieldPerc: 0      
        }
    },
    {
        name: "Sunflower",
        season: ["summer", "fall"],
        imgUrl: "sunflower.png",
        vendors: {
            pierre: 200,
            joja: 125,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }
            //drops between 0 and 2 sunflower seeds on harvest.
        },
        growth: {
            daysTillMature: 8,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 80,
            minYield: 1,
            extraYieldPerc: 0        
        }
    },
    {
        name: "Sweet Gem Berry",
        season: ["fall"],
        imgUrl: "sweetgemberry.png",
        vendors: {
            pierre: 0,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 600,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 24,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 300,
            minYield: 1,
            extraYieldPerc: 0
        }
    },
    {
        name: "Taro Root",
        season: ["summer"],
        imgUrl: "taroroot.png",
        vendors: {
            pierre: 0,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 0,
                maxPrice: 0
            }
            //only at island merchant for 2 bone fragment or from artifacts on ginger island
        },
        growth: {
            daysTillMature: 7,
            daysTillRegrow: 0
            //3 days more if not watered.
        },
        produce: {
            baseSellPrice: 35,
            minYield: 1,
            extraYieldPerc: 0       
        }
    },
    {
        name: "Tea Leaves",
        //all seasons but only gives leaves on every last week.
        season: ["spring", "summer", "fall", "winter"],
        imgUrl: "tealeaves.png",
        vendors: {
            pierre: 0,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 1500,
                maxPrice: 2500
            }
            //can also get for free from caroline
        },
        growth: {
            daysTillMature: 20,
            daysTillRegrow: 1
        },
        produce: {
            baseSellPrice: 50,
            minYield: 1,
            extraYieldPerc: 0
        }
    },
    {
        name: "Tomato",
        season: ["summer"],
        imgUrl: "tomato.png",
        vendors: {
            pierre: 50,
            joja: 62,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 11,
            daysTillRegrow: 4
        },
        produce: {
            baseSellPrice: 60,
            minYield: 1,
            extraYieldPerc: 0.05
        }
    },
    {
        name: "Tulip",
        season: ["spring"],
        imgUrl: "tulip.png",
        vendors: {
            pierre: 20,
            joja: 25,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 6,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 30,
            minYield: 1,
            extraYieldPerc: 0     
        }
    },
    {
        name: "Unmilled Rice",
        season: ["spring"],
        imgUrl: "unmilledrice.png",
        vendors: {
            pierre: 40,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }
            //also drops from mobs.
        },
        growth: {
            daysTillMature: 6,
            daysTillRegrow: 0
            //if not watered, 2 days more. 
        },
        produce: {
            baseSellPrice: 30,
            minYield: 1,
            extraYieldPerc: 0.1        
        }
    },
    {
        name: "Wheat",
        season: ["summer", "fall"],
        imgUrl: "wheat.png",
        vendors: {
            pierre: 10,
            joja: 12,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 4,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 25,
            minYield: 1,
            extraYieldPerc: 0          
            //also 40% chance to drop hay
        }
    },
    {
        name: "Yam",
        season: ["fall"],
        imgUrl: "yam.png",
        vendors: {
            pierre: 60,
            joja: 75,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }
        },
        growth: {
            daysTillMature: 10,
            daysTillRegrow: 0
        },
        produce: {
            baseSellPrice: 35,
            minYield: 1,
            extraYieldPerc: 0
        }
    },
]

//Calculations for crop quality are base-price times 1.25, 1.5 and 2 (rounded down).

//Add trellis, giant crop, health/energy, flower variants.
