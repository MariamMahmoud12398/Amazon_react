const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    description: "These athletic socks are designed for comfort and performance. Made from a blend of cotton, polyester, and spandex, they provide a snug fit and excellent moisture-wicking properties. The arch support and cushioning will keep your feet happy even during the toughest workouts.",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1090,
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    description: "This intermediate size basketball is designed for players with smaller hands. It is made of a durable rubber bladder and a synthetic leather cover. The ball is designed to be easy to grip and handle, making it perfect for players who are just starting out or looking for a more comfortable ball to play with.",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    description: "These plain cotton t-shirts are perfect for everyday wear. Made from 100% cotton, they are soft and comfortable against the skin. The classic design makes them easy to mix and match with your favorite bottoms.",
    rating: {
      stars: 4.5,
      count: 56,
    },
    priceCents: 799,
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    description: "This 2 slot toaster is perfect for making toast for you and a friend. It has a sleek and modern design that will look great in any kitchen. The toaster has a variable heat control and a defrost function, making it easy to toast your favorite bread.",
    rating: {
      stars: 5,
      count: 2197,
    },
    priceCents: 1899,

  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    description: "This 6 piece dinner plate set is perfect for any dinner party. The plates are made from a durable ceramic material and have a classic design that will complement any table setting.",
    rating: {
      stars: 4,
      count: 37,
    },
    priceCents: 2067,
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    description: "This 6 piece non-stick baking set is perfect for any home baker. The set includes a variety of pieces that are perfect for making cakes, cookies, and other sweet treats. The non-stick coating makes cleanup a breeze and the carbon steel construction ensures that the pieces will last for years to come.",
    rating: {
      stars: 4.5,
      count: 175,
    },
    priceCents: 3499,
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    description: "This plain hooded fleece sweatshirt is perfect for casual wear. Made from a soft fleece material, it is comfortable against the skin and keeps you warm on chilly days. The hood is adjustable and the cuffs are ribbed for a comfortable fit.",
    rating: {
      stars: 4.5,
      count: 317,
    },
    priceCents: 2400,
    variation: {
      Color: ["Yellow", "Teal"],
      Size: ["S", "M", "L"],
    },
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    description: "This luxury towel set is perfect for any bathroom. The set includes 6 pieces: 2 bath towels, 2 hand towels, and 2 washcloths. The towels are made from a soft, absorbent material that will keep you dry and comfortable.",
    rating: {
      stars: 4.5,
      count: 144,
    },
    priceCents: 3599,
    variation: {
      Set: ["6-Piece", "4-Piece"],
    },

  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    description: "This liquid laundry detergent is perfect for any laundry room. It is designed to effectively remove tough stains and dirt, leaving your clothes smelling fresh and clean. The 110 load bottle is a great value and will last you a long time.",
    rating: {
      stars: 4.5,
      count: 305,
    },
    priceCents: 2899,
    variation: {
      Style: ["Plain", "Lavender"],
    },

  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    description: "These knit athletic sneakers are perfect for any athlete. They are waterproof and have a comfortable, breathable design. The sneakers are made from a durable material that will withstand even the toughest workouts.",
    rating: {
      stars: 4,
      count: 89,
    },
    priceCents: 3390,

  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "round-sunglasses-black.jpg",
    name: "Round Sunglasses",
    description: "These round sunglasses are perfect for any face shape. They are made from a durable acetate material and have a comfortable, adjustable frame. The lenses are UV protected and provide excellent visual clarity.",
    rating: {
      stars: 4.5,
      count: 30,
    },
    priceCents: 1560,

  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "women-beach-sandals.jpg",
    name: "Women's Two Strap Buckle Sandals - Tan",
    description: "These women's sandals are perfect for any beach vacation. They are made from a soft, comfortable material and have a adjustable strap for a secure fit. The buckle is made from a durable metal and adds a touch of style to the sandals.",
    rating: {
      stars: 4.5,
      count: 562,
    },
    priceCents: 2499,

  },


  {

    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "blackout-curtain-set-beige.webp",
    name: "Blackout Curtains Set 4-Pack - Beige",
    description: "These blackout curtains are perfect for blocking out light and noise. They are made from a durable material and come in a set of 4.",
    rating: {
      stars: 4.5,
      count: 232,
    },
    priceCents: 4599,
 
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "men-slim-fit-summer-shorts-gray.jpg",
    name: "Men's Slim-Fit Summer Shorts",
    description: "These men's shorts are perfect for hot summer days. They are made from a comfortable material and have a slim fit.",
    rating: {
      stars: 4,
      count: 160,
    },
    priceCents: 1699,

  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "electric-glass-and-steel-hot-water-kettle.webp",
    name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    description: "This electric kettle is perfect for making tea or coffee. It is made from a durable glass and steel material and has a 1.7-liter capacity.",
    rating: {
      stars: 5,
      count: 846,
    },
    priceCents: 3074,
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "facial-tissue-2-ply-18-boxes.jpg",
    name: "Ultra Soft Tissue 2-Ply - 18 Box",
    description: "These facial tissues are perfect for blowing your nose or wiping your eyes. They are made from a soft, 2-ply material and come in a set of 18 boxes.",
    rating: {
      stars: 4,
      count: 99,
    },
    priceCents: 2374,

  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "straw-sunhat.webp",
    name: "Straw Lifeguard Sun Hat",
    description: "This sun hat is perfect for long days at the beach. It is made from a durable straw material and has a wide brim for added protection.",
    rating: {
      stars: 4,
      count: 215,
    },
    priceCents: 2200,

  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "sky-flower-stud-earrings.webp",
    name: "Sterling Silver Sky Flower Stud Earrings",
    description: "These earrings are perfect for adding a touch of elegance to your outfit. They are made from a durable sterling silver material and have a beautiful flower design.",
    rating: {
      stars: 4.5,
      count: 52,
    },
    priceCents: 1799,

  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "bathroom-rug.jpg",
    name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    description: "This bath rug is perfect for adding a touch of comfort to your bathroom. It is made from a soft, absorbent material and has a non-slip backing.",
    rating: {
      stars: 4.5,
      count: 119,
    },
    priceCents: 1250,

  },

  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "men-golf-polo-t-shirt-blue.jpg",
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    description: "This polo shirt is perfect for golfing. It is made from a comfortable, quick-drying material and has a regular fit.",
    rating: {
      stars: 4.5,
      count: 2556,
    },
    priceCents: 1599,

  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "trash-can-with-foot-pedal-50-liter.jpg",
    name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
    description: "This trash can is perfect for any room in your home. It is made from a durable brushed stainless steel material and has a foot pedal for added convenience.",
    rating: {
      stars: 4.5,
      count: 2286,
    },

    priceCents: 8300,
 
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "duvet-cover-set-blue-twin.jpg",
    name: "Duvet Cover Set with Zipper Closure",
    description: "This duvet cover set is perfect for adding a touch of comfort to your bedroom. It is made from a soft, comfortable material and has a zipper closure.",
    rating: {
      stars: 4,
      count: 456,
    },

    priceCents: 2399,
    variation: {
      Color: ["Blue", "Red"],
      Size: ["Twin", "Queen"],
    },
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "women-chunky-beanie-gray.webp",
    name: "Women's Chunky Cable Beanie - Gray",
    description: "This beanie is perfect for cold winter days. It is made from a soft, chunky material and has a gray color.",
    rating: {
      stars: 5,
      count: 83,
    },
    priceCents: 1250,

  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "round-airtight-food-storage-containers.jpg",
    name: "Round Airtight Food Storage Containers - 10 Piece Set",
    description: "These pants are perfect for any occasion. They are made from a comfortable, classic-fit material and have a pleated design.",
    rating: {
      stars: 4.5,
      count: 9017,
    },

    priceCents: 2290,
    variation: {
      Color: ["Beige", "Green", "Black"],
      Size: ["30", "31", "32"],
    },
  }
];

export default products;
