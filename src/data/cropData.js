const cropData = [
    {
        name: "Amaranth",
        season: ["fall", "greenhouse"],
        imgUrl: "amaranth.png",
        vendors: {
            pierre: 70,
            joja: 87,
            oasis: 0,
            travelingCart: {
                minPrice: 105,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["spring", "summer", "fall", "greenhouse"],
        imgUrl: "ancientfruit.png",
        vendors: {
            pierre: 0,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            },
            otherSources: [
                {type: "Monster Drop", chance: "0.5%"},
                {type: "Fishing Treasure", chance: "0.7%"},
                {type: "Artifact Trove", chance: "3.7%"}
            ]
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
        season: ["fall", "greenhouse"],
        imgUrl: "artichoke.png",
        vendors: {
            pierre: 30,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }, 
            otherSources: []
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
    },
    {
        name: "Beet",
        season: ["fall", "greenhouse"],
        imgUrl: "beet.png",
        vendors: {
            pierre: 0,
            joja: 0,
            oasis: 20,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["spring", "greenhouse"],
        imgUrl: "bluejazz.png",
        vendors: {
            pierre: 30,
            joja: 37,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["summer", "greenhouse"],
        imgUrl: "blueberry.png",
        vendors: {
            pierre: 80,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 120,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["fall", "greenhouse"],
        imgUrl: "bokchoy.png",
        vendors: {
            pierre: 50,
            joja: 62,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            }, 
            otherSources: []
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
        season: ["greenhouse"],
        imgUrl: "cactusfruit.png",
        vendors: {
            pierre: 0,
            joja: 0,
            oasis: 150,
            travelingCart: {
                minPrice: 0,
                maxPrice: 0
            }, 
            otherSources: [
                {type: "Fish Pond", chance: "5%"}
            ]
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
        season: ["spring", "greenhouse"],
        imgUrl: "cauliflower.png",
        vendors: {
            pierre: 80,
            joja: 100,
            oasis: 0,
            travelingCart: {
                minPrice: 120,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["spring", "summer", "greenhouse"],
        imgUrl: "coffeebean.png",
        vendors: {
            pierre: 0,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 2500
            }, 
            otherSources: [
                {type: "Monster Drop", chance: "1%"}
            ]
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
        season: ["summer", "fall", "greenhouse"],
        imgUrl: "corn.png",
        vendors: {
            pierre: 150,
            joja: 187,
            oasis: 0,
            travelingCart: {
                minPrice: 225,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["fall", "greenhouse"],
        imgUrl: "cranberry.png",
        vendors: {
            pierre: 240,
            joja: 300,
            oasis: 0,
            travelingCart: {
                minPrice: 360,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["fall", "greenhouse"],
        imgUrl: "eggplant.png",
        vendors: {
            pierre: 20,
            joja: 25,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["fall", "greenhouse"],
        imgUrl: "fairyrose.png",
        vendors: {
            pierre: 200,
            joja: 250,
            oasis: 0,
            travelingCart: {
                minPrice: 300,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["spring", "greenhouse"],
        imgUrl: "garlic.png",
        vendors: {
            pierre: 40,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["fall", "greenhouse"],
        imgUrl: "grape.png",
        vendors: {
            pierre: 60,
            joja: 75,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["spring", "greenhouse"],
        imgUrl: "greenbean.png",
        vendors: {
            pierre: 60,
            joja: 75,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["summer", "greenhouse"],
        imgUrl: "hops.png",
        vendors: {
            pierre: 60,
            joja: 75,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["summer", "greenhouse"],
        imgUrl: "hotpepper.png",
        vendors: {
            pierre: 40,
            joja: 50,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["spring", "greenhouse"],
        imgUrl: "kale.png",
        vendors: {
            pierre: 70,
            joja: 87,
            oasis: 0,
            travelingCart: {
                minPrice: 105,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["summer", "greenhouse"],
        imgUrl: "melon.png",
        vendors: {
            pierre: 80,
            joja: 100,
            oasis: 0,
            travelingCart: {
                minPrice: 120,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["spring", "greenhouse"],
        imgUrl: "parsnip.png",
        vendors: {
            pierre: 20,
            joja: 25,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["summer", "greenhouse"],
        imgUrl: "pineapple.png",
        vendors: {
            pierre: 0,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 0,
                maxPrice: 0
            },
            otherSources: [
                {type: "Island Trader", chance: "Magma Cap (1)"},
                {type: "Monster Drop", chance: "1.6%"},
                {type: "Golden Coconut", chance: "14.7%"}
            ]
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
        season: ["summer", "greenhouse"],
        imgUrl: "poppy.png",
        vendors: {
            pierre: 100,
            joja: 125,
            oasis: 0,
            travelingCart: {
                minPrice: 150,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["spring", "greenhouse"],
        imgUrl: "potato.png",
        vendors: {
            pierre: 50,
            joja: 62,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["fall", "greenhouse"],
        imgUrl: "pumpkin.png",
        vendors: {
            pierre: 100,
            joja: 125,
            oasis: 0,
            travelingCart: {
                minPrice: 150,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["summer", "greenhouse"],
        imgUrl: "radish.png",
        vendors: {
            pierre: 40,
            joja: 50,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["summer", "greenhouse"],
        imgUrl: "redcabbage.png",
        vendors: {
            pierre: 100,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 150,
                maxPrice: 1000
            }, 
            otherSources: []
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
    },
    {
        name: "Rhubarb",
        season: ["spring", "greenhouse"],
        imgUrl: "rhubarb.png",
        vendors: {
            pierre: 0,
            joja: 0,
            oasis: 100,
            travelingCart: {
                minPrice: 150,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["summer", "greenhouse"],
        imgUrl: "starfruit.png",
        vendors: {
            pierre: 0,
            joja: 0,
            oasis: 400,
            travelingCart: {
                minPrice: 600,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["spring", "greenhouse"],
        imgUrl: "strawberry.png",
        vendors: {
            pierre: 0,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 360,
                maxPrice: 1000
            },
            otherSources: [
                {type: "Egg Festival", price: 100}
            ]
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
        season: ["summer", "greenhouse"],
        imgUrl: "summerspangle.png",
        vendors: {
            pierre: 50,
            joja: 62,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["summer", "fall", "greenhouse"],
        imgUrl: "sunflower.png",
        vendors: {
            pierre: 200,
            joja: 125,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["fall", "greenhouse"],
        imgUrl: "sweetgemberry.png",
        vendors: {
            pierre: 0,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 600,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["summer", "greenhouse"],
        imgUrl: "taroroot.png",
        vendors: {
            pierre: 0,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 0,
                maxPrice: 0
            },
            otherSources: [
                {type: "Island Merchant", chance: "Bone Fragment (2)"},
                {type: "Volcano Dungeon Chests", chance: "14,7%"},
                {type: "Monster Drops", chance: "50%"},
                {type: "Golden Coconut", chance: "14.7%"}
            ]
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
        season: ["spring", "summer", "fall", "greenhouse"],
        imgUrl: "tealeaves.png",
        vendors: {
            pierre: 0,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 1500,
                maxPrice: 2500
            },
            otherSources: [
                {type: "Crafting Recipe", chance: "Caroline 2-heart Event"}
            ]
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
        season: ["summer", "greenhouse"],
        imgUrl: "tomato.png",
        vendors: {
            pierre: 50,
            joja: 62,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["spring", "greenhouse"],
        imgUrl: "tulip.png",
        vendors: {
            pierre: 20,
            joja: 25,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["spring", "greenhouse"],
        imgUrl: "unmilledrice.png",
        vendors: {
            pierre: 40,
            joja: 0,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            },
            otherSources: [
                {type: "Monster Drops", chance: "10%"}, 
                {type: "Artifact Spots", chance: "3%"}
            ]
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
        season: ["summer", "fall", "greenhouse"],
        imgUrl: "wheat.png",
        vendors: {
            pierre: 10,
            joja: 12,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            },
            otherSources: []
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
        season: ["fall", "greenhouse"],
        imgUrl: "yam.png",
        vendors: {
            pierre: 60,
            joja: 75,
            oasis: 0,
            travelingCart: {
                minPrice: 100,
                maxPrice: 1000
            },
            otherSources: []
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

export default cropData;