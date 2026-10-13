/* ========== FOOD DATA (110+ ITEMS) ========== */
const foodItems = [
  // === PIZZA (12) ===
  {id:1,name:"Margherita Pizza",category:"pizza",price:249,origPrice:349,img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",desc:"Classic mozzarella, tomato sauce & fresh basil",rating:4.8,reviews:312,veg:true,best:true,time:"25 min",emoji:"🍕"},
  {id:2,name:"Pepperoni Pizza",category:"pizza",price:349,origPrice:449,img:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",desc:"Loaded with spicy pepperoni & mozzarella cheese",rating:4.7,reviews:256,veg:false,best:true,time:"25 min",emoji:"🍕"},
  {id:3,name:"BBQ Chicken Pizza",category:"pizza",price:379,origPrice:479,img:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",desc:"Smoky BBQ sauce, grilled chicken & red onions",rating:4.6,reviews:189,veg:false,best:false,time:"30 min",emoji:"🍕"},
  {id:4,name:"Veggie Supreme",category:"pizza",price:329,origPrice:429,img:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop",desc:"Loaded with peppers, olives, mushrooms & onions",rating:4.5,reviews:145,veg:true,best:false,time:"25 min",emoji:"🍕"},
  {id:5,name:"Paneer Tikka Pizza",category:"pizza",price:349,origPrice:449,img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",desc:"Indian fusion pizza with spiced paneer chunks",rating:4.7,reviews:201,veg:true,best:true,time:"30 min",emoji:"🍕"},
  {id:6,name:"Mushroom Pizza",category:"pizza",price:299,origPrice:379,img:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",desc:"Wild mushrooms with garlic & herb butter",rating:4.4,reviews:98,veg:true,best:false,time:"25 min",emoji:"🍄"},
  {id:7,name:"Hawaiian Pizza",category:"pizza",price:329,origPrice:399,img:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",desc:"Ham, pineapple & cheese — sweet meets savory",rating:4.3,reviews:134,veg:false,best:false,time:"25 min",emoji:"🍕"},
  {id:8,name:"Farm Fresh Pizza",category:"pizza",price:279,origPrice:359,img:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop",desc:"Fresh garden vegetables on thin crust",rating:4.5,reviews:112,veg:true,best:false,time:"20 min",emoji:"🌿"},
  {id:9,name:"Cheese Burst Pizza",category:"pizza",price:399,origPrice:499,img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",desc:"Extra cheese stuffed crust with three cheese blend",rating:4.9,reviews:345,veg:true,best:true,time:"30 min",emoji:"🧀"},
  {id:10,name:"Four Cheese Pizza",category:"pizza",price:379,origPrice:479,img:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",desc:"Mozzarella, cheddar, parmesan & gouda blend",rating:4.6,reviews:167,veg:true,best:false,time:"25 min",emoji:"🧀"},
  {id:11,name:"Mexican Pizza",category:"pizza",price:349,origPrice:449,img:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",desc:"Jalapeños, beans, salsa & spiced chicken",rating:4.5,reviews:143,veg:false,best:false,time:"25 min",emoji:"🌶️"},
  {id:12,name:"Tandoori Chicken Pizza",category:"pizza",price:369,origPrice:469,img:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop",desc:"Tandoori spiced chicken with onions & capsicum",rating:4.7,reviews:198,veg:false,best:true,time:"30 min",emoji:"🍗"},

  // === BURGER (10) ===
  {id:13,name:"Classic Veg Burger",category:"burger",price:149,origPrice:199,img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",desc:"Crispy veg patty with lettuce, tomato & mayo",rating:4.4,reviews:234,veg:true,best:false,time:"15 min",emoji:"🍔"},
  {id:14,name:"Cheese Burger",category:"burger",price:179,origPrice:229,img:"https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop",desc:"Juicy patty with double cheese & pickles",rating:4.6,reviews:267,veg:false,best:true,time:"15 min",emoji:"🍔"},
  {id:15,name:"Chicken Burger",category:"burger",price:199,origPrice:249,img:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",desc:"Grilled chicken fillet with spicy sauce",rating:4.7,reviews:289,veg:false,best:true,time:"18 min",emoji:"🍔"},
  {id:16,name:"Veggie Burger Deluxe",category:"burger",price:169,origPrice:219,img:"https://images.unsplash.com/photo-1572802419224-296b0aeee15d?w=400&h=300&fit=crop",desc:"Loaded with fresh veggies & signature dressing",rating:4.3,reviews:123,veg:true,best:false,time:"15 min",emoji:"🥬"},
  {id:17,name:"Double Patty Burger",category:"burger",price:249,origPrice:329,img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",desc:"Two juicy patties stacked with cheese & bacon",rating:4.8,reviews:312,veg:false,best:true,time:"20 min",emoji:"🍔"},
  {id:18,name:"Spicy Chicken Burger",category:"burger",price:219,origPrice:279,img:"https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop",desc:"Extra spicy crispy chicken with jalapeño",rating:4.5,reviews:178,veg:false,best:false,time:"18 min",emoji:"🌶️"},
  {id:19,name:"Mushroom Swiss Burger",category:"burger",price:229,origPrice:299,img:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",desc:"Sautéed mushrooms with swiss cheese",rating:4.6,reviews:145,veg:true,best:false,time:"18 min",emoji:"🍄"},
  {id:20,name:"BBQ Bacon Burger",category:"burger",price:259,origPrice:339,img:"https://images.unsplash.com/photo-1572802419224-296b0aeee15d?w=400&h=300&fit=crop",desc:"Smoky BBQ sauce, crispy bacon & onion rings",rating:4.7,reviews:198,veg:false,best:false,time:"20 min",emoji:"🥓"},
  {id:21,name:"Paneer Burger",category:"burger",price:169,origPrice:219,img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",desc:"Grilled paneer patty with mint chutney",rating:4.4,reviews:156,veg:true,best:false,time:"15 min",emoji:"🧀"},
  {id:22,name:"Crispy Chicken Burger",category:"burger",price:189,origPrice:239,img:"https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop",desc:"Crispy fried chicken with coleslaw",rating:4.5,reviews:167,veg:false,best:false,time:"18 min",emoji:"🍗"},

  // === BIRYANI (10) ===
  {id:23,name:"Chicken Biryani",category:"biryani",price:299,origPrice:399,img:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",desc:"Aromatic basmati rice layered with spiced chicken",rating:4.9,reviews:456,veg:false,best:true,time:"40 min",emoji:"🍛"},
  {id:24,name:"Mutton Biryani",category:"biryani",price:399,origPrice:499,img:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=300&fit=crop",desc:"Tender mutton pieces with fragrant rice",rating:4.8,reviews:345,veg:false,best:true,time:"50 min",emoji:"🍖"},
  {id:25,name:"Veg Biryani",category:"biryani",price:229,origPrice:299,img:"https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=400&h=300&fit=crop",desc:"Mixed vegetables with aromatic spiced rice",rating:4.5,reviews:198,veg:true,best:false,time:"35 min",emoji:"🥗"},
  {id:26,name:"Egg Biryani",category:"biryani",price:249,origPrice:329,img:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",desc:"Boiled eggs in fragrant basmati rice",rating:4.4,reviews:134,veg:false,best:false,time:"35 min",emoji:"🥚"},
  {id:27,name:"Hyderabadi Biryani",category:"biryani",price:349,origPrice:449,img:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=300&fit=crop",desc:"Authentic Hyderabadi dum biryani with raita",rating:4.9,reviews:389,veg:false,best:true,time:"45 min",emoji:"👑"},
  {id:28,name:"Lucknowi Biryani",category:"biryani",price:329,origPrice:429,img:"https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=400&h=300&fit=crop",desc:"Light, aromatic Awadhi style dum biryani",rating:4.7,reviews:178,veg:false,best:false,time:"45 min",emoji:"🍛"},
  {id:29,name:"Paneer Biryani",category:"biryani",price:269,origPrice:349,img:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",desc:"Marinated paneer with flavored basmati rice",rating:4.5,reviews:145,veg:true,best:false,time:"35 min",emoji:"🧀"},
  {id:30,name:"Prawns Biryani",category:"biryani",price:449,origPrice:549,img:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=300&fit=crop",desc:"Juicy prawns with coastal spiced rice",rating:4.7,reviews:123,veg:false,best:false,time:"40 min",emoji:"🦐"},
  {id:31,name:"Keema Biryani",category:"biryani",price:329,origPrice:429,img:"https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=400&h=300&fit=crop",desc:"Minced meat biryani with aromatic spices",rating:4.6,reviews:156,veg:false,best:false,time:"40 min",emoji:"🍛"},
  {id:32,name:"Dum Biryani Special",category:"biryani",price:379,origPrice:479,img:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",desc:"Chef's special slow-cooked dum biryani",rating:4.8,reviews:267,veg:false,best:true,time:"50 min",emoji:"⭐"},

  // === CHINESE (12) ===
  {id:33,name:"Veg Fried Rice",category:"chinese",price:179,origPrice:229,img:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",desc:"Wok-tossed rice with mixed vegetables",rating:4.4,reviews:234,veg:true,best:false,time:"15 min",emoji:"🍚"},
  {id:34,name:"Chicken Fried Rice",category:"chinese",price:219,origPrice:279,img:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",desc:"Smoky fried rice with chicken pieces",rating:4.6,reviews:278,veg:false,best:true,time:"18 min",emoji:"🍚"},
  {id:35,name:"Veg Hakka Noodles",category:"chinese",price:169,origPrice:219,img:"https://images.unsplash.com/photo-1552611052-33e04de1b100?w=400&h=300&fit=crop",desc:"Stir-fried noodles with fresh vegetables",rating:4.5,reviews:198,veg:true,best:false,time:"15 min",emoji:"🍜"},
  {id:36,name:"Chicken Noodles",category:"chinese",price:199,origPrice:259,img:"https://images.unsplash.com/photo-1552611052-33e04de1b100?w=400&h=300&fit=crop",desc:"Spicy noodles with tender chicken strips",rating:4.6,reviews:212,veg:false,best:false,time:"18 min",emoji:"🍜"},
  {id:37,name:"Veg Manchurian",category:"chinese",price:189,origPrice:249,img:"https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop",desc:"Crispy veg balls in tangy manchurian sauce",rating:4.5,reviews:189,veg:true,best:false,time:"20 min",emoji:"🥘"},
  {id:38,name:"Spring Rolls (4pcs)",category:"chinese",price:149,origPrice:199,img:"https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop",desc:"Crispy rolls stuffed with veggies & glass noodles",rating:4.3,reviews:145,veg:true,best:false,time:"15 min",emoji:"🥟"},
  {id:39,name:"Veg Momos (8pcs)",category:"chinese",price:129,origPrice:179,img:"https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop",desc:"Steamed dumplings with spicy chutney",rating:4.6,reviews:345,veg:true,best:true,time:"20 min",emoji:"🥟"},
  {id:40,name:"Chicken Momos (8pcs)",category:"chinese",price:159,origPrice:209,img:"https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop",desc:"Juicy chicken dumplings with mayo dip",rating:4.7,reviews:389,veg:false,best:true,time:"20 min",emoji:"🥟"},
  {id:41,name:"Sweet Corn Soup",category:"chinese",price:119,origPrice:159,img:"https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",desc:"Creamy sweet corn soup with crispy noodles",rating:4.3,reviews:112,veg:true,best:false,time:"10 min",emoji:"🍲"},
  {id:42,name:"Hot & Sour Soup",category:"chinese",price:129,origPrice:169,img:"https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",desc:"Spicy & tangy soup with tofu & mushrooms",rating:4.4,reviews:134,veg:true,best:false,time:"10 min",emoji:"🍲"},
  {id:43,name:"Chilli Chicken",category:"chinese",price:249,origPrice:329,img:"https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop",desc:"Crispy chicken tossed in spicy chilli sauce",rating:4.7,reviews:298,veg:false,best:true,time:"20 min",emoji:"🌶️"},
  {id:44,name:"Chilli Paneer",category:"chinese",price:229,origPrice:299,img:"https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop",desc:"Crispy paneer in fiery Indo-Chinese sauce",rating:4.6,reviews:234,veg:true,best:false,time:"20 min",emoji:"🧀"},

  // === INDIAN (15) ===
  {id:45,name:"Butter Chicken",category:"indian",price:299,origPrice:399,img:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",desc:"Creamy tomato gravy with tender chicken pieces",rating:4.9,reviews:498,veg:false,best:true,time:"35 min",emoji:"🍗"},
  {id:46,name:"Paneer Butter Masala",category:"indian",price:269,origPrice:349,img:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",desc:"Soft paneer cubes in rich buttery tomato gravy",rating:4.8,reviews:378,veg:true,best:true,time:"30 min",emoji:"🧀"},
  {id:47,name:"Dal Makhani",category:"indian",price:219,origPrice:279,img:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",desc:"Slow-cooked black lentils with cream & butter",rating:4.7,reviews:312,veg:true,best:true,time:"40 min",emoji:"🍲"},
  {id:48,name:"Palak Paneer",category:"indian",price:249,origPrice:319,img:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",desc:"Fresh spinach gravy with cottage cheese cubes",rating:4.6,reviews:198,veg:true,best:false,time:"25 min",emoji:"🌿"},
  {id:49,name:"Chole Bhature",category:"indian",price:199,origPrice:259,img:"https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop",desc:"Spicy chickpea curry with fluffy fried bread",rating:4.7,reviews:356,veg:true,best:true,time:"30 min",emoji:"🍛"},
  {id:50,name:"Rajma Chawal",category:"indian",price:179,origPrice:229,img:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",desc:"Kidney bean curry with steamed basmati rice",rating:4.5,reviews:234,veg:true,best:false,time:"30 min",emoji:"🍚"},
  {id:51,name:"Kadhi Chawal",category:"indian",price:169,origPrice:219,img:"https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop",desc:"Yogurt-based curry with pakoras and rice",rating:4.4,reviews:156,veg:true,best:false,time:"30 min",emoji:"🍛"},
  {id:52,name:"Malai Kofta",category:"indian",price:279,origPrice:359,img:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",desc:"Paneer & potato balls in creamy cashew gravy",rating:4.6,reviews:178,veg:true,best:false,time:"35 min",emoji:"⭐"},
  {id:53,name:"Shahi Paneer",category:"indian",price:259,origPrice:339,img:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",desc:"Royal paneer curry with nuts & cream",rating:4.7,reviews:198,veg:true,best:false,time:"30 min",emoji:"👑"},
  {id:54,name:"Chicken Curry",category:"indian",price:269,origPrice:349,img:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",desc:"Home-style chicken curry with aromatic spices",rating:4.6,reviews:234,veg:false,best:false,time:"35 min",emoji:"🍗"},
  {id:55,name:"Mutton Curry",category:"indian",price:379,origPrice:479,img:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",desc:"Slow-cooked tender mutton in rich gravy",rating:4.8,reviews:189,veg:false,best:false,time:"50 min",emoji:"🍖"},
  {id:56,name:"Fish Curry",category:"indian",price:329,origPrice:429,img:"https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop",desc:"Fresh fish in tangy coconut-based curry",rating:4.5,reviews:134,veg:false,best:false,time:"30 min",emoji:"🐟"},
  {id:57,name:"Aloo Gobi",category:"indian",price:179,origPrice:229,img:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",desc:"Potato & cauliflower dry curry with turmeric",rating:4.3,reviews:145,veg:true,best:false,time:"25 min",emoji:"🥔"},
  {id:58,name:"Mix Veg Curry",category:"indian",price:199,origPrice:259,img:"https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop",desc:"Seasonal mixed vegetables in spiced gravy",rating:4.4,reviews:123,veg:true,best:false,time:"25 min",emoji:"🥗"},
  {id:59,name:"Dal Tadka",category:"indian",price:159,origPrice:209,img:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",desc:"Yellow lentils tempered with cumin & garlic",rating:4.5,reviews:267,veg:true,best:false,time:"20 min",emoji:"🍲"},

  // === SOUTH INDIAN (10) ===
  {id:60,name:"Masala Dosa",category:"south-indian",price:149,origPrice:199,img:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop",desc:"Crispy dosa with spiced potato filling & chutneys",rating:4.7,reviews:345,veg:true,best:true,time:"15 min",emoji:"🥞"},
  {id:61,name:"Plain Dosa",category:"south-indian",price:99,origPrice:139,img:"https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop",desc:"Thin crispy dosa with sambhar & chutney",rating:4.5,reviews:234,veg:true,best:false,time:"10 min",emoji:"🥞"},
  {id:62,name:"Idli Sambhar (4pcs)",category:"south-indian",price:99,origPrice:139,img:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop",desc:"Soft steamed rice cakes with sambhar",rating:4.6,reviews:289,veg:true,best:true,time:"10 min",emoji:"🍚"},
  {id:63,name:"Medu Vada (3pcs)",category:"south-indian",price:89,origPrice:129,img:"https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop",desc:"Crispy lentil donuts with chutney",rating:4.4,reviews:178,veg:true,best:false,time:"15 min",emoji:"🍩"},
  {id:64,name:"Uttapam",category:"south-indian",price:129,origPrice:169,img:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop",desc:"Thick pancake topped with onions & tomatoes",rating:4.3,reviews:134,veg:true,best:false,time:"15 min",emoji:"🥞"},
  {id:65,name:"Rava Dosa",category:"south-indian",price:139,origPrice:179,img:"https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop",desc:"Crispy semolina dosa with curry leaves",rating:4.5,reviews:156,veg:true,best:false,time:"12 min",emoji:"🥞"},
  {id:66,name:"Mysore Masala Dosa",category:"south-indian",price:169,origPrice:219,img:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop",desc:"Dosa with spicy red chutney & potato masala",rating:4.6,reviews:198,veg:true,best:false,time:"15 min",emoji:"🌶️"},
  {id:67,name:"Pongal",category:"south-indian",price:119,origPrice:159,img:"https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop",desc:"Comforting rice & lentil porridge with ghee",rating:4.4,reviews:112,veg:true,best:false,time:"20 min",emoji:"🍚"},
  {id:68,name:"Upma",category:"south-indian",price:99,origPrice:139,img:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop",desc:"Semolina dish tempered with mustard & curry leaves",rating:4.2,reviews:89,veg:true,best:false,time:"15 min",emoji:"🍚"},
  {id:69,name:"Paper Dosa",category:"south-indian",price:159,origPrice:209,img:"https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop",desc:"Extra thin and crispy paper-thin dosa",rating:4.5,reviews:167,veg:true,best:false,time:"12 min",emoji:"📜"},

  // === STREET FOOD (10) ===
  {id:70,name:"Pav Bhaji",category:"street-food",price:149,origPrice:199,img:"https://images.unsplash.com/photo-1606491956689-2ea866880049?w=400&h=300&fit=crop",desc:"Spicy mashed vegetables with buttery pav buns",rating:4.7,reviews:345,veg:true,best:true,time:"20 min",emoji:"🍞"},
  {id:71,name:"Samosa (2pcs)",category:"street-food",price:49,origPrice:79,img:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=400&h=300&fit=crop",desc:"Crispy pastry filled with spiced potatoes",rating:4.5,reviews:456,veg:true,best:true,time:"10 min",emoji:"📐"},
  {id:72,name:"Pani Puri (6pcs)",category:"street-food",price:79,origPrice:119,img:"https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&h=300&fit=crop",desc:"Crispy puris filled with tangy water & chutney",rating:4.6,reviews:378,veg:true,best:true,time:"5 min",emoji:"💧"},
  {id:73,name:"Vada Pav",category:"street-food",price:49,origPrice:79,img:"https://images.unsplash.com/photo-1606491956689-2ea866880049?w=400&h=300&fit=crop",desc:"Mumbai's iconic spicy potato fritter in bun",rating:4.5,reviews:312,veg:true,best:false,time:"10 min",emoji:"🍔"},
  {id:74,name:"Bhel Puri",category:"street-food",price:69,origPrice:99,img:"https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&h=300&fit=crop",desc:"Puffed rice mixed with chutneys & vegetables",rating:4.4,reviews:198,veg:true,best:false,time:"5 min",emoji:"🥗"},
  {id:75,name:"Aloo Tikki",category:"street-food",price:79,origPrice:119,img:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=400&h=300&fit=crop",desc:"Crispy potato patties with chutneys & yogurt",rating:4.5,reviews:234,veg:true,best:false,time:"15 min",emoji:"🥔"},
  {id:76,name:"Chole Kulche",category:"street-food",price:139,origPrice:179,img:"https://images.unsplash.com/photo-1606491956689-2ea866880049?w=400&h=300&fit=crop",desc:"Spicy chickpeas with soft kulcha bread",rating:4.6,reviews:178,veg:true,best:false,time:"15 min",emoji:"🍛"},
  {id:77,name:"Dahi Bhalle (4pcs)",category:"street-food",price:99,origPrice:139,img:"https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&h=300&fit=crop",desc:"Soft lentil fritters in sweet yogurt & chutneys",rating:4.4,reviews:145,veg:true,best:false,time:"10 min",emoji:"🥛"},
  {id:78,name:"Kachori (2pcs)",category:"street-food",price:69,origPrice:99,img:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=400&h=300&fit=crop",desc:"Deep-fried pastry with spiced lentil filling",rating:4.3,reviews:112,veg:true,best:false,time:"10 min",emoji:"🥟"},
  {id:79,name:"Sev Puri (6pcs)",category:"street-food",price:89,origPrice:129,img:"https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&h=300&fit=crop",desc:"Crispy puris topped with sev, onions & chutneys",rating:4.4,reviews:134,veg:true,best:false,time:"5 min",emoji:"🥗"},

  // === ROLLS & WRAPS (8) ===
  {id:80,name:"Chicken Roll",category:"rolls",price:149,origPrice:199,img:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",desc:"Spicy chicken wrapped in paratha with onions",rating:4.6,reviews:234,veg:false,best:true,time:"15 min",emoji:"🌯"},
  {id:81,name:"Paneer Roll",category:"rolls",price:129,origPrice:179,img:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",desc:"Grilled paneer tikka wrapped in rumali roti",rating:4.5,reviews:178,veg:true,best:false,time:"15 min",emoji:"🌯"},
  {id:82,name:"Egg Roll",category:"rolls",price:109,origPrice:149,img:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",desc:"Egg omelette roll with onions & green chutney",rating:4.4,reviews:198,veg:false,best:false,time:"10 min",emoji:"🥚"},
  {id:83,name:"Chicken Shawarma",category:"rolls",price:179,origPrice:229,img:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",desc:"Middle Eastern spiced chicken in pita bread",rating:4.7,reviews:289,veg:false,best:true,time:"15 min",emoji:"🥙"},
  {id:84,name:"Veg Shawarma",category:"rolls",price:149,origPrice:199,img:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",desc:"Grilled veggies in pita with garlic sauce",rating:4.4,reviews:145,veg:true,best:false,time:"15 min",emoji:"🥙"},
  {id:85,name:"Chicken Frankie",category:"rolls",price:139,origPrice:189,img:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",desc:"Spicy chicken keema in thin roti roll",rating:4.5,reviews:167,veg:false,best:false,time:"12 min",emoji:"🌯"},
  {id:86,name:"Kathi Roll",category:"rolls",price:159,origPrice:209,img:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",desc:"Kolkata-style egg paratha roll with kebab",rating:4.6,reviews:178,veg:false,best:false,time:"15 min",emoji:"🌯"},
  {id:87,name:"Paneer Tikka Wrap",category:"rolls",price:149,origPrice:199,img:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",desc:"Tandoori paneer wrapped with fresh veggies",rating:4.5,reviews:134,veg:true,best:false,time:"15 min",emoji:"🌯"},

  // === DESSERTS (12) ===
  {id:88,name:"Gulab Jamun (4pcs)",category:"desserts",price:99,origPrice:139,img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",desc:"Soft milk dumplings soaked in rose sugar syrup",rating:4.7,reviews:345,veg:true,best:true,time:"10 min",emoji:"🍩"},
  {id:89,name:"Rasgulla (4pcs)",category:"desserts",price:89,origPrice:129,img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",desc:"Spongy cottage cheese balls in sugar syrup",rating:4.5,reviews:198,veg:true,best:false,time:"5 min",emoji:"⚪"},
  {id:90,name:"Chocolate Cake Slice",category:"desserts",price:149,origPrice:199,img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",desc:"Rich Belgian chocolate layered cake",rating:4.8,reviews:289,veg:true,best:true,time:"5 min",emoji:"🎂"},
  {id:91,name:"Vanilla Ice Cream",category:"desserts",price:79,origPrice:109,img:"https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop",desc:"Creamy vanilla bean ice cream, 2 scoops",rating:4.4,reviews:234,veg:true,best:false,time:"2 min",emoji:"🍨"},
  {id:92,name:"Brownie with Ice Cream",category:"desserts",price:179,origPrice:229,img:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",desc:"Warm chocolate brownie with vanilla ice cream",rating:4.8,reviews:312,veg:true,best:true,time:"5 min",emoji:"🍫"},
  {id:93,name:"Kulfi",category:"desserts",price:69,origPrice:99,img:"https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop",desc:"Traditional Indian frozen dessert with cardamom",rating:4.5,reviews:178,veg:true,best:false,time:"2 min",emoji:"🍦"},
  {id:94,name:"Rasmalai (3pcs)",category:"desserts",price:119,origPrice:159,img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",desc:"Soft paneer discs in saffron-flavored milk",rating:4.7,reviews:198,veg:true,best:false,time:"5 min",emoji:"🥛"},
  {id:95,name:"Gajar Halwa",category:"desserts",price:129,origPrice:169,img:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",desc:"Slow-cooked carrot pudding with nuts & khoya",rating:4.6,reviews:167,veg:true,best:false,time:"10 min",emoji:"🥕"},
  {id:96,name:"Kheer",category:"desserts",price:99,origPrice:139,img:"https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop",desc:"Creamy rice pudding with cardamom & nuts",rating:4.5,reviews:145,veg:true,best:false,time:"5 min",emoji:"🍚"},
  {id:97,name:"Jalebi (250g)",category:"desserts",price:89,origPrice:129,img:"https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",desc:"Crispy spiral sweets soaked in saffron syrup",rating:4.4,reviews:267,veg:true,best:false,time:"5 min",emoji:"🌀"},
  {id:98,name:"Chocolate Mousse",category:"desserts",price:159,origPrice:209,img:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",desc:"Light & airy dark chocolate mousse",rating:4.7,reviews:178,veg:true,best:false,time:"5 min",emoji:"🍫"},
  {id:99,name:"Fruit Custard",category:"desserts",price:109,origPrice:149,img:"https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop",desc:"Chilled custard with seasonal fresh fruits",rating:4.3,reviews:123,veg:true,best:false,time:"5 min",emoji:"🍇"},

  // === BEVERAGES (12) ===
  {id:100,name:"Masala Chai",category:"beverages",price:39,origPrice:59,img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",desc:"Authentic Indian spiced tea with ginger",rating:4.6,reviews:456,veg:true,best:true,time:"5 min",emoji:"☕"},
  {id:101,name:"Cold Coffee",category:"beverages",price:129,origPrice:169,img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",desc:"Chilled blended coffee with ice cream",rating:4.7,reviews:298,veg:true,best:true,time:"5 min",emoji:"☕"},
  {id:102,name:"Mango Lassi",category:"beverages",price:99,origPrice:139,img:"https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop",desc:"Thick mango & yogurt smoothie drink",rating:4.6,reviews:234,veg:true,best:false,time:"3 min",emoji:"🥭"},
  {id:103,name:"Fresh Lime Soda",category:"beverages",price:59,origPrice:89,img:"https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",desc:"Refreshing lime soda — sweet or salty",rating:4.4,reviews:198,veg:true,best:false,time:"3 min",emoji:"🍋"},
  {id:104,name:"Orange Juice",category:"beverages",price:89,origPrice:119,img:"https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop",desc:"Freshly squeezed orange juice",rating:4.5,reviews:167,veg:true,best:false,time:"5 min",emoji:"🍊"},
  {id:105,name:"Watermelon Juice",category:"beverages",price:79,origPrice:109,img:"https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",desc:"Cool & refreshing watermelon juice",rating:4.4,reviews:145,veg:true,best:false,time:"5 min",emoji:"🍉"},
  {id:106,name:"Buttermilk",category:"beverages",price:49,origPrice:69,img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",desc:"Spiced chilled buttermilk with mint",rating:4.3,reviews:134,veg:true,best:false,time:"3 min",emoji:"🥛"},
  {id:107,name:"Rose Milk",category:"beverages",price:69,origPrice:99,img:"https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop",desc:"Sweet rose-flavored chilled milk",rating:4.4,reviews:112,veg:true,best:false,time:"3 min",emoji:"🌹"},
  {id:108,name:"Hot Chocolate",category:"beverages",price:119,origPrice:159,img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",desc:"Rich & creamy hot chocolate with marshmallows",rating:4.6,reviews:178,veg:true,best:false,time:"5 min",emoji:"🍫"},
  {id:109,name:"Green Tea",category:"beverages",price:49,origPrice:69,img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",desc:"Light & healthy green tea with honey",rating:4.2,reviews:89,veg:true,best:false,time:"5 min",emoji:"🍵"},
  {id:110,name:"Virgin Mojito",category:"beverages",price:109,origPrice:149,img:"https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",desc:"Refreshing mint & lime mocktail with soda",rating:4.5,reviews:198,veg:true,best:false,time:"5 min",emoji:"🍹"},
  {id:111,name:"Strawberry Shake",category:"beverages",price:129,origPrice:169,img:"https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop",desc:"Thick strawberry milkshake with real berries",rating:4.6,reviews:189,veg:true,best:false,time:"5 min",emoji:"🍓"}
];

/* ========== RECIPE DATA (20 RECIPES) ========== */
const recipes = [
  {id:1,name:"Butter Chicken",category:"main",difficulty:"medium",prepTime:"20 min",cookTime:"35 min",servings:4,img:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop",desc:"Rich & creamy butter chicken — restaurant style at home!",emoji:"🍗",
   ingredients:["500g chicken (bone-in)","1 cup tomato puree","2 tbsp butter","1/2 cup cream","1 tsp ginger-garlic paste","1 tsp red chilli powder","1 tsp garam masala","1/2 tsp turmeric","1 tsp kasuri methi","Salt to taste","1 tbsp oil"],
   steps:["Marinate chicken with yogurt, turmeric, chilli powder and salt for 30 min.","Grill or pan-fry chicken until 80% cooked. Set aside.","Heat butter + oil, add ginger-garlic paste and sauté 1 min.","Add tomato puree, cook 10-12 min until oil separates.","Add chilli powder, garam masala, salt. Cook 2 min.","Add cream, mix well. Simmer 5 min on low heat.","Add cooked chicken, simmer 10 min in the gravy.","Crush kasuri methi, sprinkle on top. Add a dollop of butter."],
   tips:"Use kasuri methi at the end for authentic restaurant flavor.",nutrition:{calories:380,protein:"28g",carbs:"12g",fat:"24g"}},
  {id:2,name:"Paneer Butter Masala",category:"main",difficulty:"easy",prepTime:"15 min",cookTime:"25 min",servings:4,img:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&h=400&fit=crop",desc:"Creamy paneer in rich tomato-butter gravy",emoji:"🧀",
   ingredients:["250g paneer (cubed)","2 large tomatoes (pureed)","2 tbsp butter","1/4 cup cream","1 tsp ginger-garlic paste","1 tsp red chilli powder","1/2 tsp garam masala","1/2 tsp sugar","1 tsp kasuri methi","Salt to taste","1 tbsp oil"],
   steps:["Heat butter + oil, add ginger-garlic paste, sauté 1 min.","Add tomato puree, cook 8-10 min until thick.","Add chilli powder, salt, sugar. Cook 2 min.","Add cream, mix well, simmer 5 min.","Add paneer cubes, gently fold in.","Simmer 5 min on low heat. Don't overcook paneer.","Add kasuri methi, garam masala. Finish with butter."],
   tips:"Soak paneer in warm water for 10 min for softer texture.",nutrition:{calories:320,protein:"18g",carbs:"14g",fat:"22g"}},
  {id:3,name:"Chicken Biryani",category:"main",difficulty:"hard",prepTime:"30 min",cookTime:"45 min",servings:4,img:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop",desc:"Aromatic layered biryani with tender chicken",emoji:"🍛",
   ingredients:["500g chicken","2 cups basmati rice (soaked 30 min)","2 large onions (sliced)","1 cup yogurt","1 tsp biryani masala","4 green cardamom","2 bay leaves","1/2 tsp saffron in warm milk","Fresh mint & coriander","4 tbsp ghee","Salt to taste"],
   steps:["Marinate chicken with yogurt, biryani masala, ginger-garlic paste — 30 min.","Par-boil rice with whole spices until 70% done. Drain.","Fry sliced onions in ghee until golden brown (birista).","In heavy pot, layer: half chicken, half rice, fried onions, mint, coriander.","Repeat layers. Pour saffron milk on top.","Seal pot with dough/foil. Cook on high 5 min, then low 25 min.","Rest 10 min before opening. Gently mix while serving."],
   tips:"The key is DUM cooking — sealed pot on very low heat.",nutrition:{calories:450,protein:"32g",carbs:"45g",fat:"16g"}},
  {id:4,name:"Dal Makhani",category:"main",difficulty:"medium",prepTime:"15 min",cookTime:"40 min",servings:4,img:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop",desc:"Creamy slow-cooked black lentils — North Indian classic",emoji:"🍲",
   ingredients:["1 cup whole black urad dal (soaked overnight)","1/4 cup rajma","2 tbsp butter","1/4 cup cream","1 tomato (pureed)","1 tsp ginger-garlic paste","1 tsp red chilli powder","1/2 tsp garam masala","Salt to taste"],
   steps:["Pressure cook soaked dal & rajma with salt — 5-6 whistles until soft.","Heat butter, add ginger-garlic paste, sauté 1 min.","Add tomato puree, cook 5-7 min until oil separates.","Add chilli powder, salt. Cook 2 min.","Add cooked dal, mix well. Simmer 20 min on low heat.","Add cream, butter, garam masala. Stir well.","Simmer 10 more minutes. The longer it cooks, the better!"],
   tips:"Overnight soaking + long simmering = restaurant-quality dal.",nutrition:{calories:280,protein:"16g",carbs:"32g",fat:"10g"}},
  {id:5,name:"Masala Dosa",category:"snack",difficulty:"medium",prepTime:"8 hours",cookTime:"15 min",servings:4,img:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&h=400&fit=crop",desc:"Crispy South Indian dosa with spiced potato filling",emoji:"🥞",
   ingredients:["2 cups rice","1/2 cup urad dal","1/4 tsp fenugreek seeds","Salt","For filling: 4 potatoes, 2 onions, mustard seeds, curry leaves, turmeric, green chillies"],
   steps:["Soak rice and dal separately for 6 hours. Grind to smooth batter.","Ferment batter overnight (8-12 hours) until doubled.","For filling: Boil & mash potatoes. Temper mustard seeds, curry leaves, onions.","Add turmeric, green chillies, mashed potatoes. Mix well.","Heat tawa, pour ladle of batter, spread thin in circular motion.","Drizzle oil, cook until golden and crispy.","Place potato filling in center, fold dosa. Serve with sambar & chutney."],
   tips:"Fermentation is key — batter should be bubbly and slightly sour.",nutrition:{calories:250,protein:"8g",carbs:"42g",fat:"6g"}},
  {id:6,name:"Chole Bhature",category:"main",difficulty:"medium",prepTime:"20 min",cookTime:"30 min",servings:4,img:"https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&h=400&fit=crop",desc:"Spicy chickpea curry with puffy fried bread",emoji:"🍛",
   ingredients:["2 cups chickpeas (soaked overnight)","2 onions","2 tomatoes","2 tsp chole masala","1 tsp amchur","For bhature: 2 cups maida, yogurt, baking soda, oil"],
   steps:["Pressure cook chickpeas until soft (4-5 whistles).","Make bhature dough with maida, yogurt, salt, baking soda. Rest 2 hours.","For chole: sauté onions until golden, add tomato puree.","Add chole masala, amchur, salt. Cook 5 min.","Add chickpeas with some water. Simmer 15-20 min.","Roll bhature and deep fry until puffed and golden.","Serve hot chole with bhature, onion rings & pickle."],
   tips:"Add a tea bag while boiling chickpeas for dark color.",nutrition:{calories:420,protein:"15g",carbs:"52g",fat:"18g"}},
  {id:7,name:"Samosa",category:"snack",difficulty:"medium",prepTime:"30 min",cookTime:"20 min",servings:8,img:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=600&h=400&fit=crop",desc:"Crispy pastry triangles with spiced potato filling",emoji:"📐",
   ingredients:["2 cups maida","4 potatoes (boiled & mashed)","1/2 cup green peas","1 tsp cumin seeds","1 tsp garam masala","Green chillies","Oil for frying","Salt"],
   steps:["Make dough with maida, oil, salt, water. Rest 30 min.","Boil & mash potatoes. Heat oil, add cumin seeds.","Add green peas, chillies, garam masala, salt. Mix with potatoes.","Roll dough into oval, cut in half. Form cone shape.","Fill with potato mixture, seal edges with water paste.","Deep fry on medium heat until golden and crispy.","Drain on paper towel. Serve hot with chutney."],
   tips:"Fry on medium heat for crispy layers — not too hot!",nutrition:{calories:180,protein:"4g",carbs:"24g",fat:"8g"}},
  {id:8,name:"Gulab Jamun",category:"dessert",difficulty:"medium",prepTime:"20 min",cookTime:"25 min",servings:6,img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",desc:"Soft milk dumplings soaked in rose-cardamom syrup",emoji:"🍩",
   ingredients:["1 cup khoya/mawa","1/4 cup maida","1/4 cup milk powder","Cardamom powder","1 cup sugar","2 cups water","Rose water","Saffron strands","Oil/ghee for frying"],
   steps:["Make sugar syrup — boil sugar + water until one-string consistency.","Add cardamom, rose water, saffron to syrup. Keep warm.","Crumble khoya, add maida, milk powder. Mix gently.","Add milk little by little to make soft dough. Don't overknead.","Make small smooth balls (no cracks). They'll expand!","Deep fry on LOW heat until dark golden brown (8-10 min).","Soak fried balls in warm syrup for at least 2 hours."],
   tips:"Fry on VERY low heat for even cooking inside. Cracks = too dry dough.",nutrition:{calories:220,protein:"4g",carbs:"35g",fat:"8g"}},
  {id:9,name:"Pav Bhaji",category:"main",difficulty:"easy",prepTime:"15 min",cookTime:"25 min",servings:4,img:"https://images.unsplash.com/photo-1606491956689-2ea866880049?w=600&h=400&fit=crop",desc:"Mumbai street-style mashed vegetable curry with buttery pav",emoji:"🍞",
   ingredients:["4 potatoes","2 tomatoes","1 capsicum","1/2 cauliflower","1 cup peas","2 tbsp pav bhaji masala","4 tbsp butter","Pav buns","Onion, lemon for serving"],
   steps:["Boil & mash all vegetables (potato, cauliflower, peas, capsicum).","Heat butter, sauté chopped onions until golden.","Add tomato puree, cook 5 min. Add pav bhaji masala.","Add mashed vegetables, mix well. Add water to adjust consistency.","Mash everything on the pan with masher. Cook 10 min.","Add more butter, cook until bhaji is thick and well-blended.","Toast pav buns in butter. Serve bhaji with buttery pav, onions & lemon."],
   tips:"More butter = more flavor! Don't hold back.",nutrition:{calories:350,protein:"10g",carbs:"42g",fat:"16g"}},
  {id:10,name:"Palak Paneer",category:"main",difficulty:"easy",prepTime:"15 min",cookTime:"20 min",servings:4,img:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&h=400&fit=crop",desc:"Creamy spinach curry with cottage cheese cubes",emoji:"🌿",
   ingredients:["250g paneer","2 bunches spinach","1 onion","2 tomatoes","1 tsp ginger-garlic paste","1 green chilli","1/2 tsp cumin","Cream","Salt"],
   steps:["Blanch spinach in boiling water 2 min. Ice bath immediately.","Blend blanched spinach into smooth puree.","Heat oil, add cumin, ginger-garlic paste, sauté 1 min.","Add chopped onion, cook 3 min. Add tomato, cook 5 min.","Add spinach puree, salt, green chilli. Simmer 8 min.","Add paneer cubes, gently fold in. Cook 3 min.","Finish with cream. Serve with naan or rice."],
   tips:"Ice bath after blanching keeps spinach bright green!",nutrition:{calories:280,protein:"16g",carbs:"10g",fat:"20g"}},
  {id:11,name:"Rajma Chawal",category:"main",difficulty:"easy",prepTime:"10 min",cookTime:"35 min",servings:4,img:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop",desc:"Comfort food — kidney bean curry with steamed rice",emoji:"🍚",
   ingredients:["1.5 cups rajma (soaked overnight)","2 onions","2 tomatoes","1 tsp ginger-garlic paste","1 tsp cumin","1 tsp rajma masala","Salt","Basmati rice"],
   steps:["Pressure cook soaked rajma with salt — 5-6 whistles.","Heat oil, add cumin. Sauté onions until golden.","Add ginger-garlic paste, cook 1 min.","Add tomato puree, rajma masala. Cook 5 min.","Add cooked rajma with liquid. Simmer 15 min.","Mash some rajma for thick gravy. Adjust salt.","Cook basmati rice. Serve rajma over hot rice with onion salad."],
   tips:"Overnight soaking + extra simmering = best rajma ever.",nutrition:{calories:320,protein:"14g",carbs:"48g",fat:"6g"}},
  {id:12,name:"Veg Fried Rice",category:"main",difficulty:"easy",prepTime:"10 min",cookTime:"15 min",servings:2,img:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop",desc:"Quick Indo-Chinese fried rice with crunchy veggies",emoji:"🍚",
   ingredients:["2 cups cooked rice (cold/day-old)","1 carrot (diced)","1/2 cup beans","1/2 cup cabbage","1 capsicum","2 tbsp soy sauce","1 tbsp vinegar","Spring onions","Oil","Salt & pepper"],
   steps:["Use cold/day-old rice — essential for non-sticky fried rice.","Heat oil in wok on HIGH heat. Add chopped garlic.","Add all vegetables, stir-fry 2-3 min on high heat.","Add rice, toss well. Break any clumps.","Add soy sauce, vinegar, salt, pepper. Toss continuously.","Cook 3-4 min on high heat for smoky wok flavor.","Garnish with spring onions. Serve hot."],
   tips:"Cold leftover rice + very hot wok = perfect fried rice.",nutrition:{calories:280,protein:"6g",carbs:"42g",fat:"10g"}},
  {id:13,name:"Chicken Tikka",category:"starter",difficulty:"easy",prepTime:"30 min",cookTime:"20 min",servings:4,img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",desc:"Smoky grilled chicken marinated in yogurt & spices",emoji:"🍗",
   ingredients:["500g boneless chicken","1 cup yogurt","1 tbsp tikka masala","1 tsp red chilli powder","1 tsp ginger-garlic paste","Lemon juice","Salt","Oil","Chaat masala for serving"],
   steps:["Cut chicken into 2-inch cubes.","Mix yogurt, tikka masala, chilli powder, ginger-garlic paste, lemon juice, salt.","Marinate chicken for at least 30 min (overnight is best).","Thread onto skewers or place on grill tray.","Grill/bake at 220°C for 15-18 min, flipping once.","Baste with butter/oil during cooking.","Sprinkle chaat masala, serve with mint chutney & onion rings."],
   tips:"Overnight marination = most flavorful tikka.",nutrition:{calories:250,protein:"30g",carbs:"8g",fat:"12g"}},
  {id:14,name:"Naan Bread",category:"bread",difficulty:"easy",prepTime:"90 min",cookTime:"15 min",servings:6,img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",desc:"Soft & fluffy tandoor-style naan at home",emoji:"🫓",
   ingredients:["2 cups maida","1/2 cup yogurt","1 tsp sugar","1 tsp baking powder","1/2 tsp baking soda","2 tbsp oil","Butter","Garlic (optional)","Salt"],
   steps:["Mix maida, salt, sugar, baking powder, baking soda.","Add yogurt, oil, warm water. Knead soft dough (8 min).","Cover with damp cloth. Rest 1-2 hours until doubled.","Divide into balls. Roll each into oval/teardrop shape.","Heat tawa/cast iron on HIGH. Place naan, cook 1 min until bubbles.","Flip, cook other side 30 sec. Or hold over flame for charred spots.","Brush with butter (& garlic if desired). Serve immediately."],
   tips:"High heat + short cooking time = soft, pillowy naan.",nutrition:{calories:180,protein:"5g",carbs:"30g",fat:"5g"}},
  {id:15,name:"Mango Lassi",category:"beverage",difficulty:"easy",prepTime:"5 min",cookTime:"0 min",servings:2,img:"https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&h=400&fit=crop",desc:"Thick creamy mango yogurt drink — summer favorite!",emoji:"🥭",
   ingredients:["1 cup mango pulp (fresh or canned)","1 cup thick yogurt/curd","1/4 cup milk","2-3 tbsp sugar","1/4 tsp cardamom powder","Ice cubes","Saffron for garnish"],
   steps:["Add mango pulp, yogurt, milk, sugar to blender.","Add cardamom powder and ice cubes.","Blend until smooth and frothy (30 seconds).","Taste and adjust sweetness.","Pour into tall glasses.","Garnish with saffron strands or chopped pistachios."],
   tips:"Use Alphonso mango pulp for the best authentic flavor.",nutrition:{calories:180,protein:"6g",carbs:"32g",fat:"4g"}},
  {id:16,name:"Gajar Halwa",category:"dessert",difficulty:"medium",prepTime:"15 min",cookTime:"45 min",servings:6,img:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=400&fit=crop",desc:"Winter special — slow-cooked carrot pudding with nuts",emoji:"🥕",
   ingredients:["1 kg carrots (grated)","1 litre full-fat milk","1/2 cup sugar","4 tbsp ghee","1/4 cup khoya/mawa","Cardamom powder","Cashews, almonds, raisins"],
   steps:["Grate carrots finely. Heat ghee in heavy pan.","Add grated carrots, sauté 5 min on medium heat.","Add milk, bring to boil. Then simmer on low heat.","Cook 30-35 min, stirring occasionally, until milk is absorbed.","Add sugar, mix well. Cook 5 more minutes.","Add khoya, cardamom, mix well.","Fry nuts in ghee, add to halwa. Serve warm."],
   tips:"Low & slow cooking with full-fat milk = richest halwa.",nutrition:{calories:300,protein:"8g",carbs:"38g",fat:"14g"}},
  {id:17,name:"Aloo Gobi",category:"main",difficulty:"easy",prepTime:"10 min",cookTime:"20 min",servings:4,img:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop",desc:"Simple dry curry of potato & cauliflower with turmeric",emoji:"🥔",
   ingredients:["3 potatoes (cubed)","1 small cauliflower (florets)","1 onion","1 tomato","1 tsp cumin","1/2 tsp turmeric","1 tsp coriander powder","Green chillies","Coriander leaves","Salt","Oil"],
   steps:["Heat oil, add cumin seeds. Sauté onion 3 min.","Add tomato, cook until soft. Add all dry spices.","Add potato cubes, stir-fry 5 min with lid on.","Add cauliflower florets, green chillies. Mix gently.","Cover and cook 12-15 min on low heat. Stir occasionally.","Cook until veggies are tender but not mushy.","Garnish with fresh coriander. Serve with roti."],
   tips:"Don't add water — the steam from covered cooking is enough!",nutrition:{calories:180,protein:"5g",carbs:"28g",fat:"6g"}},
  {id:18,name:"Raita",category:"side",difficulty:"easy",prepTime:"5 min",cookTime:"0 min",servings:4,img:"https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop",desc:"Cool yogurt side dish — perfect with biryani!",emoji:"🥛",
   ingredients:["2 cups thick yogurt","1 cucumber (grated)","1 onion (finely chopped)","1 tomato (chopped)","1/2 tsp roasted cumin powder","Fresh mint","Salt","Red chilli powder (pinch)"],
   steps:["Whisk yogurt until smooth in a bowl.","Add grated cucumber (squeeze out water), onion, tomato.","Add roasted cumin powder, salt, mix well.","Garnish with fresh mint, pinch of red chilli powder.","Chill in fridge for 15 min before serving.","Serve cold alongside biryani, pulao, or kebabs."],
   tips:"Squeeze excess water from cucumber to prevent watery raita.",nutrition:{calories:80,protein:"4g",carbs:"8g",fat:"3g"}},
  {id:19,name:"Pasta Alfredo",category:"main",difficulty:"easy",prepTime:"5 min",cookTime:"15 min",servings:2,img:"https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&h=400&fit=crop",desc:"Creamy white sauce pasta — quick Italian comfort food",emoji:"🍝",
   ingredients:["200g penne/fettuccine","2 tbsp butter","2 cloves garlic","1 cup cream","1/2 cup parmesan cheese","Salt & pepper","Fresh parsley","Mushrooms (optional)"],
   steps:["Boil pasta in salted water until al dente. Reserve 1/2 cup pasta water.","Melt butter in pan, sauté minced garlic 30 seconds.","Add mushrooms if using, cook 3 min.","Pour in cream, bring to gentle simmer.","Add parmesan cheese, stir until melted and smooth.","Add cooked pasta, toss well. Add pasta water to adjust consistency.","Season with salt, pepper. Garnish with parsley."],
   tips:"Pasta water has starch that makes sauce silky — don't skip it!",nutrition:{calories:420,protein:"14g",carbs:"38g",fat:"24g"}},
  {id:20,name:"Tandoori Pizza Dough",category:"bread",difficulty:"easy",prepTime:"90 min",cookTime:"15 min",servings:2,img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",desc:"Make restaurant-quality pizza dough at home!",emoji:"🍕",
   ingredients:["2 cups maida","1 tsp instant yeast","1 tsp sugar","1/2 tsp salt","2 tbsp olive oil","3/4 cup warm water","Semolina for dusting"],
   steps:["Mix warm water, yeast, sugar. Wait 10 min until foamy.","Add maida, salt, olive oil. Knead smooth dough (10 min).","Cover, let rise 1-1.5 hours until doubled.","Punch down dough, divide into 2 balls.","On floured surface, stretch/roll each to thin circle.","Add your favorite sauce, cheese, toppings.","Bake at 230°C for 12-15 min until crust is golden & cheese bubbles."],
   tips:"High oven temperature is key — preheat well! Use a pizza stone if you have one.",nutrition:{calories:300,protein:"8g",carbs:"48g",fat:"8g"}}
];

/* ========== AI SUGGESTIONS ========== */
function getAISuggestions() {
  const hour = new Date().getHours();
  let period, message, icon, categories;
  if (hour >= 6 && hour < 10) {
    period = "Breakfast Time"; message = "Good Morning! ☀️ Start your day with a hearty breakfast"; icon = "🌅";
    categories = ["south-indian","beverages"];
  } else if (hour >= 10 && hour < 12) {
    period = "Brunch Time"; message = "Late morning cravings? Try these brunch favorites!"; icon = "🍳";
    categories = ["street-food","indian","south-indian"];
  } else if (hour >= 12 && hour < 15) {
    period = "Lunch Time"; message = "Lunch hour! 🍽️ Grab a filling meal"; icon = "☀️";
    categories = ["biryani","indian","chinese"];
  } else if (hour >= 15 && hour < 17) {
    period = "Snack Time"; message = "Afternoon munchies? 🍿 Light bites perfect for now"; icon = "🫖";
    categories = ["street-food","chinese","beverages"];
  } else if (hour >= 17 && hour < 19) {
    period = "Evening Cravings"; message = "Evening vibes! 🌇 Street food & chai time"; icon = "🌆";
    categories = ["street-food","rolls","beverages"];
  } else if (hour >= 19 && hour < 22) {
    period = "Dinner Time"; message = "Dinner is served! 🌙 Full meals & favorites"; icon = "🍽️";
    categories = ["indian","biryani","pizza","chinese"];
  } else {
    period = "Late Night"; message = "Late night hunger? 🌜 Quick bites & comfort food"; icon = "🌙";
    categories = ["burger","rolls","desserts","beverages"];
  }
  const suggestions = foodItems.filter(item => categories.includes(item.category)).sort(() => 0.5 - Math.random()).slice(0, 6);
  return { period, message, icon, suggestions };
}

/* ========== CART MANAGEMENT ========== */
let cart = JSON.parse(localStorage.getItem('foodieCart')) || [];

function saveCart() { localStorage.setItem('foodieCart', JSON.stringify(cart)); }

function addToCart(id) {
  const item = foodItems.find(f => f.id === id);
  if (!item) return;
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty++; } else { cart.push({ ...item, qty: 1 }); }
  saveCart(); updateCartUI(); showToast(`${item.emoji} ${item.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart(); updateCartUI();
}

function updateQuantity(id, change) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += change;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart(); updateCartUI();
}

function calculateTotal() { return cart.reduce((sum, item) => sum + item.price * item.qty, 0); }

function toggleCart() {
  document.getElementById('cartOverlay')?.classList.toggle('show');
  document.getElementById('cartSidebar')?.classList.toggle('show');
}

function updateCartUI() {
  const countEls = document.querySelectorAll('#cartCount');
  countEls.forEach(el => el.textContent = cart.reduce((s, i) => s + i.qty, 0));
  const cartItemsEl = document.getElementById('cartItems');
  if (!cartItemsEl) return;
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<div class="empty-cart"><div class="empty-cart-icon">🛒</div><p>Your cart is empty</p><a href="menu.html" class="btn btn-primary btn-sm">Browse Menu</a></div>';
  } else {
    cartItemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.emoji} ${item.name}</div>
          <div class="cart-item-price">₹${item.price * item.qty}</div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateQuantity(${item.id},-1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateQuantity(${item.id},1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
      </div>
    `).join('');
  }
  const totalEl = document.getElementById('cartTotal');
  if (totalEl) totalEl.textContent = '₹' + calculateTotal();
}

/* ========== MENU RENDERING ========== */
function renderMenu(items) {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;
  const list = items || foodItems;
  grid.innerHTML = list.map(item => `
    <div class="dish-card fade-in">
      <div class="dish-image">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
        <div class="dish-badge">${item.veg ? '<span class="badge badge-veg">🟢 Veg</span>' : '<span class="badge badge-nonveg">🔴 Non-Veg</span>'}</div>
        ${item.best ? '<div class="dish-badge-right"><span class="badge badge-best">⭐ Best Seller</span></div>' : ''}
      </div>
      <div class="dish-info">
        <div class="dish-name">${item.emoji} ${item.name}</div>
        <div class="dish-desc">${item.desc}</div>
        <div class="dish-meta">
          <div class="dish-price">₹${item.price} <span class="original-price">₹${item.origPrice}</span></div>
          <div class="dish-rating">⭐ ${item.rating} (${item.reviews})</div>
        </div>
        <div class="dish-time">⏱️ ${item.time}</div>
        <button class="add-btn" onclick="addToCart(${item.id})">🛒 Add to Cart</button>
      </div>
    </div>
  `).join('');
  const countEl = document.getElementById('itemCount');
  if (countEl) countEl.textContent = `Showing ${list.length} items`;
  setTimeout(() => document.querySelectorAll('.dish-card.fade-in').forEach(el => el.classList.add('visible')), 100);
}

function filterMenu(category) {
  document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');
  const filtered = category === 'all' ? foodItems : foodItems.filter(i => i.category === category);
  renderMenu(filtered);
}

function searchMenu(query) {
  const q = query.toLowerCase();
  const filtered = foodItems.filter(i => i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q) || i.category.toLowerCase().includes(q));
  renderMenu(filtered);
}

/* ========== FEATURED / AI RENDERING ========== */
function renderFeatured() {
  const grid = document.getElementById('featuredDishes');
  if (!grid) return;
  const best = foodItems.filter(i => i.best).slice(0, 8);
  grid.innerHTML = best.map(item => `
    <div class="dish-card fade-in">
      <div class="dish-image">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
        <div class="dish-badge-right"><span class="badge badge-best">⭐ Best Seller</span></div>
      </div>
      <div class="dish-info">
        <div class="dish-name">${item.emoji} ${item.name}</div>
        <div class="dish-desc">${item.desc}</div>
        <div class="dish-meta">
          <div class="dish-price">₹${item.price}</div>
          <div class="dish-rating">⭐ ${item.rating}</div>
        </div>
        <button class="add-btn" onclick="addToCart(${item.id})">🛒 Add to Cart</button>
      </div>
    </div>
  `).join('');
}

function renderAISuggestions() {
  const container = document.getElementById('aiSuggestions');
  const badgeEl = document.getElementById('aiBadge');
  const msgEl = document.getElementById('aiMessage');
  if (!container) return;
  const ai = getAISuggestions();
  if (badgeEl) badgeEl.textContent = `${ai.icon} ${ai.period}`;
  if (msgEl) msgEl.textContent = ai.message;
  container.innerHTML = ai.suggestions.map(item => `
    <div class="suggestion-card" onclick="addToCart(${item.id})">
      <img src="${item.img}" alt="${item.name}" loading="lazy">
      <div class="suggestion-info">
        <h4>${item.emoji} ${item.name}</h4>
        <p>${item.desc}</p>
        <span class="suggestion-tag">🤖 AI Recommended</span>
        <div class="suggestion-price">₹${item.price}</div>
      </div>
    </div>
  `).join('');
}

/* ========== ORDER PAGE ========== */
function renderOrderSummary() {
  const container = document.getElementById('orderItems');
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = '<div class="empty-cart"><div class="empty-cart-icon">🛒</div><p>Your cart is empty</p><a href="menu.html" class="btn btn-primary">Browse Menu</a></div>';
    return;
  }
  const subtotal = calculateTotal();
  const tax = Math.round(subtotal * 0.05);
  const delivery = subtotal >= 499 ? 0 : 40;
  const total = subtotal + tax + delivery;
  container.innerHTML = cart.map(item => `
    <div class="order-item">
      <span class="order-item-name">${item.emoji} ${item.name} × ${item.qty}</span>
      <span class="order-item-price">₹${item.price * item.qty}</span>
    </div>
  `).join('') + `
    <div class="order-totals">
      <div class="order-row"><span>Subtotal</span><span>₹${subtotal}</span></div>
      <div class="order-row"><span>GST (5%)</span><span>₹${tax}</span></div>
      <div class="order-row"><span>Delivery ${delivery === 0 ? '(FREE! 🎉)' : ''}</span><span>₹${delivery}</span></div>
      <div class="order-row total"><span>Total</span><span>₹${total}</span></div>
    </div>`;
}

function selectPayment(type) {
  document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('active'));
  event.currentTarget.classList.add('active');
  document.getElementById('qrPayment').style.display = type === 'upi' ? 'block' : 'none';
  document.getElementById('codPayment').style.display = type === 'cod' ? 'block' : 'none';
}

function placeOrder() {
  if (cart.length === 0) { showToast('❌ Cart is empty!'); return; }
  const name = document.getElementById('orderName')?.value;
  const phone = document.getElementById('orderPhone')?.value;
  const address = document.getElementById('orderAddress')?.value;
  if (!name || !phone || !address) { showToast('❌ Please fill delivery details!'); return; }
  const orderId = 'FE' + Date.now().toString().slice(-8);
  document.getElementById('orderId').textContent = orderId;
  document.getElementById('orderSuccessModal').classList.add('show');
  cart = []; saveCart(); updateCartUI();
}

/* ========== TABLE BOOKING ========== */
function generateTimeSlots() {
  const container = document.getElementById('timeSlots');
  if (!container) return;
  const bookedSlots = [3, 7, 11, 15];
  let html = '';
  for (let h = 11; h <= 21; h++) {
    for (let m = 0; m < 60; m += 30) {
      const idx = (h - 11) * 2 + (m === 30 ? 1 : 0);
      const hour12 = h > 12 ? h - 12 : h;
      const ampm = h >= 12 ? 'PM' : 'AM';
      const timeStr = `${hour12}:${m === 0 ? '00' : '30'} ${ampm}`;
      const isBooked = bookedSlots.includes(idx);
      html += `<div class="time-slot ${isBooked ? 'booked' : ''}" onclick="${isBooked ? '' : 'selectTimeSlot(this)'}">${timeStr}${isBooked ? ' (Booked)' : ''}</div>`;
    }
  }
  container.innerHTML = html;
}

function selectTimeSlot(el) {
  document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}

function submitBooking(e) {
  e.preventDefault();
  const name = document.getElementById('bookName')?.value;
  const phone = document.getElementById('bookPhone')?.value;
  const date = document.getElementById('bookDate')?.value;
  const activeSlot = document.querySelector('.time-slot.active');
  if (!name || !phone || !date) { showToast('❌ Please fill all details!'); return; }
  if (!activeSlot) { showToast('❌ Please select a time slot!'); return; }
  const bookingId = 'BK' + Date.now().toString().slice(-6);
  document.getElementById('bookingId').textContent = bookingId;
  document.getElementById('bookingDetails').textContent = `${name} | ${date} | ${activeSlot.textContent}`;
  document.getElementById('bookingModal').classList.add('show');
  showToast('✅ Table booked successfully!');
}

/* ========== RECIPE PAGE ========== */
function renderRecipes(list) {
  const grid = document.getElementById('recipeGrid');
  if (!grid) return;
  const items = list || recipes;
  grid.innerHTML = items.map(r => `
    <div class="recipe-card fade-in" onclick="showRecipeDetail(${r.id})">
      <div class="recipe-image">
        <img src="${r.img}" alt="${r.name}" loading="lazy">
        <span class="recipe-difficulty ${r.difficulty}">${r.difficulty.charAt(0).toUpperCase() + r.difficulty.slice(1)}</span>
      </div>
      <div class="recipe-info">
        <div class="recipe-title">${r.emoji} ${r.name}</div>
        <div class="recipe-meta">
          <span>⏱️ Prep: ${r.prepTime}</span>
          <span>🔥 Cook: ${r.cookTime}</span>
          <span>🍽️ Serves: ${r.servings}</span>
        </div>
        <p class="dish-desc">${r.desc}</p>
        <div class="recipe-tags">
          <span class="recipe-tag">${r.category}</span>
          <span class="recipe-tag">${r.difficulty}</span>
        </div>
      </div>
    </div>
  `).join('');
  setTimeout(() => document.querySelectorAll('.recipe-card.fade-in').forEach(el => el.classList.add('visible')), 100);
}

function showRecipeDetail(id) {
  const r = recipes.find(rec => rec.id === id);
  if (!r) return;
  document.getElementById('recipeModalImage').src = r.img;
  document.getElementById('recipeModalTitle').textContent = r.emoji + ' ' + r.name;
  document.getElementById('recipeModalMeta').innerHTML = `<span>⏱️ Prep: ${r.prepTime}</span><span>🔥 Cook: ${r.cookTime}</span><span>🍽️ Serves: ${r.servings}</span><span>📊 ${r.difficulty}</span>`;
  document.getElementById('recipeModalNutrition').innerHTML = r.nutrition ? `<div class="nutrition-grid">
    <div class="nutrition-item"><div class="val">${r.nutrition.calories}</div><div class="label">Calories</div></div>
    <div class="nutrition-item"><div class="val">${r.nutrition.protein}</div><div class="label">Protein</div></div>
    <div class="nutrition-item"><div class="val">${r.nutrition.carbs}</div><div class="label">Carbs</div></div>
    <div class="nutrition-item"><div class="val">${r.nutrition.fat}</div><div class="label">Fat</div></div>
  </div>` : '';
  document.getElementById('recipeModalIngredients').innerHTML = r.ingredients.map(i => `<li>${i}</li>`).join('');
  document.getElementById('recipeModalSteps').innerHTML = r.steps.map(s => `<li>${s}</li>`).join('');
  document.getElementById('recipeModalTips').innerHTML = r.tips ? `<div class="chef-tip"><h4>👨‍🍳 Chef's Tip</h4><p>${r.tips}</p></div>` : '';
  document.getElementById('recipeModal').classList.add('show');
}

function filterRecipes(cat) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  if (cat === 'all') { renderRecipes(); return; }
  if (['easy','medium','hard'].includes(cat)) {
    renderRecipes(recipes.filter(r => r.difficulty === cat));
  } else {
    renderRecipes(recipes.filter(r => r.category === cat));
  }
}

function closeModal() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('show'));
}

/* ========== UI FUNCTIONS ========== */
function toggleMenu() {
  document.getElementById('navLinks')?.classList.toggle('show');
}

function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 3000);
}

function backToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

function toggleFaq(el) {
  const answer = el.nextElementSibling;
  const arrow = el.querySelector('.faq-arrow');
  answer.classList.toggle('show');
  if (arrow) arrow.textContent = answer.classList.contains('show') ? '−' : '+';
}

/* ========== INIT ========== */
document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    document.querySelector('.navbar')?.classList.toggle('scrolled', window.scrollY > 50);
    const btn = document.getElementById('backToTop');
    if (btn) btn.classList.toggle('show', window.scrollY > 500);
  });

  // Init page-specific content
  renderAISuggestions();
  renderFeatured();
  if (document.getElementById('menuGrid')) renderMenu();
  if (document.getElementById('orderItems')) renderOrderSummary();
  if (document.getElementById('timeSlots')) generateTimeSlots();
  if (document.getElementById('recipeGrid')) renderRecipes();

  // Set min date for booking
  const dateInput = document.getElementById('bookDate');
  if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];

  // Update cart UI
  updateCartUI();

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Close mobile menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => document.getElementById('navLinks')?.classList.remove('show'));
  });

  // Close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  });
});
