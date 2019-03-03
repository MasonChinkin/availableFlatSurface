# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

User.destroy_all

# Demo user
u = User.create!(
  name: "Carol Danvers",
  password: "password",
  email: "captain.marvel@gmail.com",
)

Restaurant.destroy_all

Restaurant.create!(
  name: "The First Ever Restaurant!",
  address: "825 Battery Street, San Francisco, USA, 94111",
  description: "The first restaurant to bless this glorious website.",
  user: u,
  cuisine: "Jamaican-Chinese fusion",
  rating: "#{rand(5).ceil}",
  email: "firstever@gmail.com",
  phone: "555-555-5555",
  website: "firstever.com",
  payment_options: "Visa",
  dress_code: "formal",
  neighborhood: "FiDi",
  cross_street: "Broadway",
  parking_details: "don't drive here",
  cost: "#{rand(4).ceil}",
)

Restaurant.create!(
  name: "Schroeder's",
  address: "240 Front Street San Francisco, CA 94111",
  description: "Originally founded in 1893, Schroeder’s longstanding history has made the Bavarian inspired beer hall a favorite of San Francisco for the past 120 years. With a new page beginning in Schroeder’s history, the restaurant is reinventing the way San Francisco views German Fare. The restaurant’s décor pays homage to its Bavarian Heritage with Herman Richter murals, Historical Wall of Steins, and the original millwork throughout. A rosewood bar stretching the length of the beer hall with 22 German beers on tap is sure to captivate the thirsty. Prost!",
  cuisine: "German",
  rating: "#{rand(5).ceil}",
  cost: "#{rand(4).ceil}",
  user: u,
  email: "firstever@gmail.com",
  website: "http://www.schroederssf.com/",
)

Restaurant.create!(
  name: "Aliment",
  address: "786 Bush Street San Francisco, CA 94108",
  description: "Located on the corner of Bush and Mason, we are a friendly neighborhood restaurant serving chef driven cuisine in a cozy atmosphere. We strive to source our ingredients locally, make everything in house, and change our menu with the seasons so our diners always have new interesting dishes to look forward to. Join us for dinner and try a beer from our rotating taps and bottle list, or a glass of wine from our dynamic wine menu. We’re sure you’ll enjoy our unique and creative twist on classic American dishes.",
  cuisine: "American",
  rating: "#{rand(5).ceil}",
  cost: "#{rand(4).ceil}",
  user: u,
  email: "firstever@gmail.com",
  website: "http://www.alimentsf.com/home.html",
)

Restaurant.create!(
  name: "Brenda’s Soul Food Kitchen",
  address: "652 Polk St, San Francisco, CA 94102",
  description: "Fresh takes on beignets, po' boys & other Big Easy bites draw crowds to this narrow but airy spot.",
  rating: "#{rand(5).ceil}",
  cost: "#{rand(4).ceil}",
  user: u,
  cuisine: "Creole, Soul",
  email: "email1@gmail.com",
  phone: "(415) 345-8100",
  payment_options: "All credit cards, cash, debit",
  dress_code: "casual",
  neighborhood: "Tenderloin",
)

Restaurant.create!(
  name: "Tony’s Pizza Napoletana",
  address: "1570 Stockton St, San Francisco, CA 94133",
  description: "Bustling Italian eatery with varied pizza options from coal-fired to Roman-style, plus beer on tap.",
  rating: "#{rand(5).ceil}",
  cost: "#{rand(4).ceil}",
  user: u,
  cuisine: "Italian, Pizza",
  email: "email2@gmail.com",
  phone: "(415) 835-9888",
  website: "tonyspizzanapoletana.com",
  dress_code: "casual",
  neighborhood: "North Beach",
  cross_street: "Union",
)

Restaurant.create!(
  name: "Mensho Tokyo SF",
  address: "672 Geary St, San Francisco, CA 94102",
  description: "American spin-off of Tokyo’s standout ramen brand brings a variety of combos to  petite, modern digs.",
  rating: "#{rand(5).ceil}",
  cost: "#{rand(4).ceil}",
  user: u,
  cuisine: "Japanese, Ramen",
  email: "email3@gmail.com",
  phone: "(415) 800-8345",
  dress_code: "casual",
  neighborhood: "Nob Hill",
  cross_street: "Leavenworth",
  parking_details: "occasional street parking",
)

Restaurant.create!(
  name: "Yank Sing",
  address: "49 Stevenson St, San Francisco, CA 94105",
  description: "Classic dim sum served from carts is the main draw at this bustling Chinese standby.",
  rating: "#{rand(5).ceil}",
  cost: "#{rand(4).ceil}",
  user: u,
  cuisine: "Asian, Dim Sum",
  email: "email4@gmail.com",
  phone: "(415) 541-4949",
  website: "yanksing.com",
  payment_options: "Visa",
  dress_code: "casual",
  neighborhood: "SoMa",
)

Restaurant.create!(
  name: "Azalina’s",
  address: "1355 Market St, San Francisco, CA 94103",
  description: "Storefront in The Market for creative, casual Malaysian fare, from curries to tea-leaf salads.",
  rating: "#{rand(5).ceil}",
  cost: "#{rand(4).ceil}",
  user: u,
  cuisine: "Malaysian",
  email: "email5@gmail.com",
  phone: "(415) 660-2020",
  website: "azalinaa.com",
  neighborhood: "SoMa",
)

Restaurant.create!(
  name: "Ace Wasabi Rock-N-Roll Sushi",
  address: "3339 Steiner St, San Francisco, CA 94123",
  description: "Modern Japanese dishes, sushi & more in a trendy hangout featuring music & happy-hour bingo.",
  rating: "#{rand(5).ceil}",
  cost: "#{rand(4).ceil}",
  user: u,
  cuisine: "Sushi",
  email: "email6@gmail.com",
  phone: "(415) 567-4903",
  website: "aceasabisf.com",
  payment_options: "Credit, debit, cash",
  neighborhood: "Marina",
)

Restaurant.create!(
  name: "Taquería El Farolito",
  address: "2779 Mission St, San Francisco, CA 94110",
  description: "Busy, no-frills Mexican eatery & late-night haunt serving comfort food like tacos & burritos.",
  rating: "#{rand(5).ceil}",
  cost: "#{rand(4).ceil}",
  user: u,
  cuisine: "Mexican",
  email: "email7@gmail.com",
  phone: "(415) 824-7877",
  website: "elfarolitosf.com",
  neighborhood: "Mission",
)

Restaurant.create!(
  name: "Kitchen Story",
  address: "3499 16th St, San Francisco, CA 94114",
  description: "Cozy eatery with wood tables & modern decor serving Californian cuisine with Asian influences.",
  rating: "#{rand(5).ceil}",
  cost: "#{rand(4).ceil}",
  user: u,
  cuisine: "Californian",
  email: "email8@gmail.com",
  phone: "(415) 525-4905",
  website: "kitchenstorysf.com",
  dress_code: "casual",
  neighborhood: "Mission",
  cross_street: "Sanchez",
)

Restaurant.create!(
  name: "Marnee Thai",
  address: "1243 9th Ave, San Francisco, CA 94122",
  description: "Simple spot for classic Thai fare plus non-standards like spicy “angel wings” in chile-garlic sauce.",
  rating: "#{rand(5).ceil}",
  cost: "#{rand(4).ceil}",
  user: u,
  cuisine: "Thai",
  email: "email9@gmail.com",
  phone: "(415) 731-9999",
  neighborhood: "Inner Sunset",
)

Restaurant.create!(
  name: "San Tung",
  address: "1031 Irving St, San Francisco, CA 94122",
  description: "Famed dry fried chicken wings, handmade noodles & other Chinese eats in a no-frills setting.",
  rating: "#{rand(5).ceil}",
  cost: "#{rand(4).ceil}",
  user: u,
  cuisine: "Chinese",
  email: "email10@gmail.com",
  phone: "(415) 242-0828",
  website: "santung.net",
  neighborhood: "Inner Sunset",
)

Restaurant.create!(
  name: "Cassava",
  address: "3519 Balboa St, San Francisco, CA 94121",
  description: "New American restaurant serving Californian cuisine, wine, beer & brunch in a cozy space.",
  rating: "#{rand(5).ceil}",
  cost: "#{rand(4).ceil}",
  user: u,
  cuisine: "New American",
  email: "email11@gmail.com",
  phone: "(415) 640-8990",
  website: "cassavasf.com",
  neighborhood: "Outer Richmond",
)

Restaurant.create!(
  name: "Purple Kow",
  address: "3620 Balboa St, San Francisco, CA 94121",
  description: "Asian-influenced sweets menu featuring flavored teas, jelly drinks & assorted snacks & desserts.",
  rating: "#{rand(5).ceil}",
  cost: "#{rand(4).ceil}",
  user: u,
  cuisine: "Bubble Tea",
  email: "email12@gmail.com",
  phone: "(415) 387-9009",
  website: "purplekow.com",
  neighborhood: "Outer Richmond",
  parking_details: "street parking",
)

Restaurant.create!(
  name: "Shabu Club",
  address: "951 Clement St, San Francisco, CA 94118",
  description: "Trendy eatery serving up Japanese fare with Korean, Mexican & Chinese influences in modern digs.",
  rating: "#{rand(5).ceil}",
  cost: "#{rand(4).ceil}",
  user: u,
  cuisine: "Japanese-Korean-Mexican-Chinese Fusion",
  email: "email13@gmail.com",
  phone: "(415) 742-5265",
  neighborhood: "Inner Richmond",
)

Restaurant.create!(
  name: "The Pot’s",
  address: "2652 Judah St, San Francisco, CA 941221",
  description: "Energetic locale featuring classic Chinese hot pot with meat & veggie options, plus dumplings.",
  rating: "#{rand(5).ceil}",
  cost: "#{rand(4).ceil}",
  user: u,
  cuisine: "Chinese Hot Pot",
  email: "email14@gmail.com",
  phone: "(415) 682-7889",
  neighborhood: "Outer Sunset",
)

Restaurant.create!(
  name: "Emmy’s Spaghetti Shack",
  address: "3230 Mission St, San Francisco, CA 94110",
  description: "Vibrant spot serving pasta, other Italian standards, plus cocktails, in an offbeat, hip space",
  rating: "#{rand(5).ceil}",
  cost: "#{rand(4).ceil}",
  user: u,
  cuisine: "Italian",
  email: "email15@gmail.com",
  phone: "(415) 206-2086",
  dress_code: "casual",
  neighborhood: "Bernal Heights",
)
