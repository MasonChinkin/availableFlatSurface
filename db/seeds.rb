# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
User.destroy_all
Restaurant.destroy_all

require 'open-uri'
require 'cgi'
require 'date'

def seed_pics_res_and_saves(r, u)
  dir = "https://s3-us-west-1.amazonaws.com/availableflatsurface-seed/img/#{CGI::escape(r.name)}"
  new_dir = dir.split('%27').join('%E2%80%99')
  new_dir = new_dir.split('%C3%AD').join('i%CC%81')

  5.times do |i|
    p "#{new_dir}/#{i}.jpg"
    r.photos.attach(
      io: open("#{new_dir}/#{i}.jpg"),
      filename: "#{i}.jpg"
    )
  end

  p "#{new_dir}/profile.jpg"
  r.profile_photo.attach(
      io: open("#{new_dir}/profile.jpg"),
      filename: "profile.jpg"
    )

  p "#{new_dir}/wallpaper.jpg"
  r.wallpaper.attach(
      io: open("#{new_dir}/wallpaper.jpg"),
      filename: "wallpaper.jpg"
    )

    if [1,2,3].sample == 1
      SavedRestaurant.create!(
        restaurant_id: "#{r.id}",
        user_id: "#{u.id}"
      )
    end
    
    if [1,2,3].sample == 1
      t = Time.now()
      month = (4..12).to_a.sample * (60 * 60 * 24 * 30)
      day = (1..30).to_a.sample * (60 * 60 * 24)
      hour = (12...22).to_a.sample * (60 * 60)
      minute = [0,15,30,45].sample * (60)

      t = t + month + day + hour + minute

      Reservation.create!(
        reservation: t,
        num_people: "#{(2..10).to_a.sample}",
        restaurant_id: "#{r.id}",
        user_id: "#{u.id}"
      )
    end

    if [1,2,3,4].sample == 1
      t = Time.now()
      month = (4..12).to_a.sample * (60 * 60 * 24 * 30)
      day = (1..30).to_a.sample * (60 * 60 * 24)
      hour = (12...22).to_a.sample * (60 * 60)
      minute = [0,15,30,45].sample * (60)

      t = t - month - day - hour - minute

      Reservation.create!(
        reservation: t,
        num_people: "#{(2..10).to_a.sample}",
        restaurant_id: "#{r.id}",
        user_id: "#{u.id}"
      )
    end
end

def seed_reviews(r, r1, r2, r3, r4)
  reviews_arr = [
    "I'm happy I gave this place a try. I truly enjoyed the delicious food and good beer. The staff is pretty friendly and I met some very friendly customers at this bar. ",
    "Best Grilled Romaine Caesar! Smoked chicken with Brie sandwich was delicious as well. High quality food in a casual, friendly setting.",
    "Ok. Great spot to stop for happy hour. Very chill. Sat at the bar and had a terrific grilled Caesar salad and yummy French fries. Huge portions! Very casual and good service.",
    "Rotating taps, flights of beer, exceptional service and food. New favorite spot.",
    "Great food and decent pricing",
    "This is our favorite neighborhood spot. We love the food, drinks, staff, and homey vibe!",
    "Great locals spot. Good brews and chill and casual environment. Don't expect anything super fancy but it's good beer, good food, good people",
    "Really good. One of the best gastropubs in the city. I haven't had a bad dish here, period."
  ]

  reviewers = [r1,r2,r3,r4]

  reviewers.each do |reviewer|
    Review.create!(
      overall_rating: "#{[3,4,5].sample}",
      food_rating: "#{[3,4,5].sample}",
      service_rating: "#{[3,4,5].sample}",
      ambience_rating: "#{[3,4,5].sample}",
      body: "#{reviews_arr.shuffle.pop}",
      restaurant_id: "#{r.id}",
      user_id: "#{reviewer.id}"
    )
  end


end

# Demo user
u = User.create!(
  name: "Carol Danvers",
  password: "password",
  email: "captain.marvel@gmail.com"
)

r1 = User.create!(
  name: "Rick Vanwinkle",
  password: "password",
  email: "captain.marvel1@gmail.com"
)

r2 = User.create!(
  name: "Sarah Vanwinkle",
  password: "password",
  email: "captain.marvel2@gmail.com"
)

r3 = User.create!(
  name: "Andrew Vanwinkle",
  password: "password",
  email: "captain.marvel3@gmail.com"
)

r4 = User.create!(
  name: "Ashley Vanwinkle",
  password: "password",
  email: "captain.marvel4@gmail.com"
)

r = Restaurant.create!(
  name: "The First Ever Restaurant!",
  address: "825 Battery Street, San Francisco, USA, 94111",
  description: "The first restaurant to bless this glorious website.",
  user: u,
  cuisine: "Jewish-Chinese fusion",
  rating: "#{[2,3,4,5].sample}",
  email: "firstever@gmail.com",
  phone: "555-555-5555",
  website: "firstever.com",
  payment_options: "Visa",
  dress_code: "formal",
  neighborhood: "FiDi",
  cross_street: "Broadway",
  parking_details: "don't drive here",
  cost: "#{[1,2,3,4].sample}",
  hours: "24/7",
  booked_times_today: "#{(5..50).to_a.sample}",
  tables_left: "#{(5..12).to_a.sample}"
)

seed_pics_res_and_saves(r, u)
seed_reviews(r, r1, r2, r3, r4)

r = Restaurant.create!(
  name: "Schroeder's",
  address: "240 Front Street San Francisco, CA 94111",
  description: "Originally founded in 1893, Schroeder’s longstanding history has made the Bavarian inspired beer hall a favorite of San Francisco for the past 120 years. With a new page beginning in Schroeder’s history, the restaurant is reinventing the way San Francisco views German Fare. The restaurant’s décor pays homage to its Bavarian Heritage with Herman Richter murals, Historical Wall of Steins, and the original millwork throughout. A rosewood bar stretching the length of the beer hall with 22 German beers on tap is sure to captivate the thirsty. Prost!",
  cuisine: "German",
  rating: "#{[2,3,4,5].sample}",
  cost: "#{[1,2,3,4].sample}",
  user: u,
  email: "firstever@gmail.com",
  website: "http://www.schroederssf.com/",
  hours: "24/7",
  booked_times_today: "#{(5..50).to_a.sample}",
  tables_left: "#{(5..12).to_a.sample}"
)

seed_pics_res_and_saves(r, u)
seed_reviews(r, r1, r2, r3, r4)

r = Restaurant.create!(
  name: "Aliment",
  address: "786 Bush Street San Francisco, CA 94108",
  description: "Located on the corner of Bush and Mason, we are a friendly neighborhood restaurant serving chef driven cuisine in a cozy atmosphere. We strive to source our ingredients locally, make everything in house, and change our menu with the seasons so our diners always have new interesting dishes to look forward to. Join us for dinner and try a beer from our rotating taps and bottle list, or a glass of wine from our dynamic wine menu. We’re sure you’ll enjoy our unique and creative twist on classic American dishes.",
  cuisine: "American",
  rating: "#{[2,3,4,5].sample}",
  cost: "#{[1,2,3,4].sample}",
  user: u,
  email: "firstever@gmail.com",
  website: "http://www.alimentsf.com/home.html",
  hours: "24/7",
  booked_times_today: "#{(5..50).to_a.sample}",
  tables_left: "#{(5..12).to_a.sample}"
)

seed_pics_res_and_saves(r, u)
seed_reviews(r, r1, r2, r3, r4)

r = Restaurant.create!(
  name: "Brenda’s Soul Food Kitchen",
  address: "652 Polk St, San Francisco, CA 94102",
  description: "Fresh takes on beignets, po' boys & other Big Easy bites draw crowds to this narrow but airy spot.",
  rating: "#{[2,3,4,5].sample}",
  cost: "#{[1,2,3,4].sample}",
  user: u,
  cuisine: "Creole, Soul",
  email: "email1@gmail.com",
  phone: "(415) 345-8100",
  payment_options: "All credit cards, cash, debit",
  dress_code: "casual",
  neighborhood: "Tenderloin",
  hours: "24/7",
  booked_times_today: "#{(5..50).to_a.sample}",
  tables_left: "#{(5..12).to_a.sample}"
)

seed_pics_res_and_saves(r, u)
seed_reviews(r, r1, r2, r3, r4)

r = Restaurant.create!(
  name: "Tony’s Pizza Napoletana",
  address: "1570 Stockton St, San Francisco, CA 94133",
  description: "Bustling Italian eatery with varied pizza options from coal-fired to Roman-style, plus beer on tap.",
  rating: "#{[2,3,4,5].sample}",
  cost: "#{[1,2,3,4].sample}",
  user: u,
  cuisine: "Italian, Pizza",
  email: "email2@gmail.com",
  phone: "(415) 835-9888",
  website: "tonyspizzanapoletana.com",
  dress_code: "casual",
  neighborhood: "North Beach",
  cross_street: "Union",
  hours: "24/7",
  booked_times_today: "#{(5..50).to_a.sample}",
  tables_left: "#{(5..12).to_a.sample}"
)

seed_pics_res_and_saves(r, u)
seed_reviews(r, r1, r2, r3, r4)

r = Restaurant.create!(
  name: "Mensho Tokyo SF",
  address: "672 Geary St, San Francisco, CA 94102",
  description: "American spin-off of Tokyo’s standout ramen brand brings a variety of combos to  petite, modern digs.",
  rating: "#{[2,3,4,5].sample}",
  cost: "#{[1,2,3,4].sample}",
  user: u,
  cuisine: "Japanese, Ramen",
  email: "email3@gmail.com",
  phone: "(415) 800-8345",
  dress_code: "casual",
  neighborhood: "Nob Hill",
  cross_street: "Leavenworth",
  parking_details: "occasional street parking",
  hours: "24/7",
  booked_times_today: "#{(5..50).to_a.sample}",
  tables_left: "#{(5..12).to_a.sample}"
)

seed_pics_res_and_saves(r, u)
seed_reviews(r, r1, r2, r3, r4)

r = Restaurant.create!(
  name: "Yank Sing",
  address: "49 Stevenson St, San Francisco, CA 94105",
  description: "Classic dim sum served from carts is the main draw at this bustling Chinese standby.",
  rating: "#{[2,3,4,5].sample}",
  cost: "#{[1,2,3,4].sample}",
  user: u,
  cuisine: "Asian, Dim Sum",
  email: "email4@gmail.com",
  phone: "(415) 541-4949",
  website: "yanksing.com",
  payment_options: "Visa",
  dress_code: "casual",
  neighborhood: "SoMa",
  hours: "24/7",
  booked_times_today: "#{(5..50).to_a.sample}",
  tables_left: "#{(5..12).to_a.sample}"
)

seed_pics_res_and_saves(r, u)
seed_reviews(r, r1, r2, r3, r4)

r = Restaurant.create!(
  name: "Azalina’s",
  address: "1355 Market St, San Francisco, CA 94103",
  description: "Storefront in The Market for creative, casual Malaysian fare, from curries to tea-leaf salads.",
  rating: "#{[2,3,4,5].sample}",
  cost: "#{[1,2,3,4].sample}",
  user: u,
  cuisine: "Malaysian",
  email: "email5@gmail.com",
  phone: "(415) 660-2020",
  website: "azalinaa.com",
  neighborhood: "SoMa",
  hours: "24/7",
  booked_times_today: "#{(5..50).to_a.sample}",
  tables_left: "#{(5..12).to_a.sample}"
)

seed_pics_res_and_saves(r, u)
seed_reviews(r, r1, r2, r3, r4)

r = Restaurant.create!(
  name: "Ace Wasabi Rock-N-Roll Sushi",
  address: "3339 Steiner St, San Francisco, CA 94123",
  description: "Modern Japanese dishes, sushi & more in a trendy hangout featuring music & happy-hour bingo.",
  rating: "#{[2,3,4,5].sample}",
  cost: "#{[1,2,3,4].sample}",
  user: u,
  cuisine: "Sushi",
  email: "email6@gmail.com",
  phone: "(415) 567-4903",
  website: "aceasabisf.com",
  payment_options: "Credit, debit, cash",
  neighborhood: "Marina",
  hours: "24/7",
  booked_times_today: "#{(5..50).to_a.sample}",
  tables_left: "#{(5..12).to_a.sample}"
)

seed_pics_res_and_saves(r, u)
seed_reviews(r, r1, r2, r3, r4)

r = Restaurant.create!(
  name: "Taquería El Farolito",
  address: "2779 Mission St, San Francisco, CA 94110",
  description: "Busy, no-frills Mexican eatery & late-night haunt serving comfort food like tacos & burritos.",
  rating: "#{[2,3,4,5].sample}",
  cost: "#{[1,2,3,4].sample}",
  user: u,
  cuisine: "Mexican",
  email: "email7@gmail.com",
  phone: "(415) 824-7877",
  website: "elfarolitosf.com",
  neighborhood: "Mission",
  hours: "24/7",
  booked_times_today: "#{(5..50).to_a.sample}",
  tables_left: "#{(5..12).to_a.sample}"
)

seed_pics_res_and_saves(r, u)
seed_reviews(r, r1, r2, r3, r4)

r = Restaurant.create!(
  name: "Kitchen Story",
  address: "3499 16th St, San Francisco, CA 94114",
  description: "Cozy eatery with wood tables & modern decor serving Californian cuisine with Asian influences.",
  rating: "#{[2,3,4,5].sample}",
  cost: "#{[1,2,3,4].sample}",
  user: u,
  cuisine: "Californian",
  email: "email8@gmail.com",
  phone: "(415) 525-4905",
  website: "kitchenstorysf.com",
  dress_code: "casual",
  neighborhood: "Mission",
  cross_street: "Sanchez",
  hours: "24/7",
  booked_times_today: "#{(5..50).to_a.sample}",
  tables_left: "#{(5..12).to_a.sample}"
)

seed_pics_res_and_saves(r, u)
seed_reviews(r, r1, r2, r3, r4)

r = Restaurant.create!(
  name: "Marnee Thai",
  address: "1243 9th Ave, San Francisco, CA 94122",
  description: "Simple spot for classic Thai fare plus non-standards like spicy “angel wings” in chile-garlic sauce.",
  rating: "#{[2,3,4,5].sample}",
  cost: "#{[1,2,3,4].sample}",
  user: u,
  cuisine: "Thai",
  email: "email9@gmail.com",
  phone: "(415) 731-9999",
  neighborhood: "Inner Sunset",
  hours: "24/7",
  booked_times_today: "#{(5..50).to_a.sample}",
  tables_left: "#{(5..12).to_a.sample}"
)

seed_pics_res_and_saves(r, u)
seed_reviews(r, r1, r2, r3, r4)

r = Restaurant.create!(
  name: "San Tung",
  address: "1031 Irving St, San Francisco, CA 94122",
  description: "Famed dry fried chicken wings, handmade noodles & other Chinese eats in a no-frills setting.",
  rating: "#{[2,3,4,5].sample}",
  cost: "#{[1,2,3,4].sample}",
  user: u,
  cuisine: "Chinese",
  email: "email10@gmail.com",
  phone: "(415) 242-0828",
  website: "santung.net",
  neighborhood: "Inner Sunset",
  hours: "24/7",
  booked_times_today: "#{(5..50).to_a.sample}",
  tables_left: "#{(5..12).to_a.sample}"
)

seed_pics_res_and_saves(r, u)
seed_reviews(r, r1, r2, r3, r4)

r = Restaurant.create!(
  name: "Cassava",
  address: "3519 Balboa St, San Francisco, CA 94121",
  description: "New American restaurant serving Californian cuisine, wine, beer & brunch in a cozy space.",
  rating: "#{[2,3,4,5].sample}",
  cost: "#{[1,2,3,4].sample}",
  user: u,
  cuisine: "New American",
  email: "email11@gmail.com",
  phone: "(415) 640-8990",
  website: "cassavasf.com",
  neighborhood: "Outer Richmond",
  hours: "24/7",
  booked_times_today: "#{(5..50).to_a.sample}",
  tables_left: "#{(5..12).to_a.sample}"
)

seed_pics_res_and_saves(r, u)
seed_reviews(r, r1, r2, r3, r4)

r = Restaurant.create!(
  name: "Purple Kow",
  address: "3620 Balboa St, San Francisco, CA 94121",
  description: "Asian-influenced sweets menu featuring flavored teas, jelly drinks & assorted snacks & desserts.",
  rating: "#{[2,3,4,5].sample}",
  cost: "#{[1,2,3,4].sample}",
  user: u,
  cuisine: "Bubble Tea",
  email: "email12@gmail.com",
  phone: "(415) 387-9009",
  website: "purplekow.com",
  neighborhood: "Outer Richmond",
  parking_details: "street parking",
  hours: "24/7",
  booked_times_today: "#{(5..50).to_a.sample}",
  tables_left: "#{(5..12).to_a.sample}"
)

seed_pics_res_and_saves(r, u)
seed_reviews(r, r1, r2, r3, r4)

r = Restaurant.create!(
  name: "Shabu Club",
  address: "951 Clement St, San Francisco, CA 94118",
  description: "Trendy eatery serving up Japanese fare with Korean, Mexican & Chinese influences in modern digs.",
  rating: "#{[2,3,4,5].sample}",
  cost: "#{[1,2,3,4].sample}",
  user: u,
  cuisine: "Japanese-Korean-Mexican-Chinese Fusion",
  email: "email13@gmail.com",
  phone: "(415) 742-5265",
  neighborhood: "Inner Richmond",
  hours: "24/7",
  booked_times_today: "#{(5..50).to_a.sample}",
  tables_left: "#{(5..12).to_a.sample}"
)

seed_pics_res_and_saves(r, u)
seed_reviews(r, r1, r2, r3, r4)

r = Restaurant.create!(
  name: "The Pot’s",
  address: "2652 Judah St, San Francisco, CA 941221",
  description: "Energetic locale featuring classic Chinese hot pot with meat & veggie options, plus dumplings.",
  rating: "#{[2,3,4,5].sample}",
  cost: "#{[1,2,3,4].sample}",
  user: u,
  cuisine: "Chinese Hot Pot",
  email: "email14@gmail.com",
  phone: "(415) 682-7889",
  neighborhood: "Outer Sunset",
  hours: "24/7",
  booked_times_today: "#{(5..50).to_a.sample}",
  tables_left: "#{(5..12).to_a.sample}"
)

seed_pics_res_and_saves(r, u)
seed_reviews(r, r1, r2, r3, r4)

r = Restaurant.create!(
  name: "Emmy’s Spaghetti Shack",
  address: "3230 Mission St, San Francisco, CA 94110",
  description: "Vibrant spot serving pasta, other Italian standards, plus cocktails, in an offbeat, hip space",
  rating: "#{[2,3,4,5].sample}",
  cost: "#{[1,2,3,4].sample}",
  user: u,
  cuisine: "Italian",
  email: "email15@gmail.com",
  phone: "(415) 206-2086",
  dress_code: "casual",
  neighborhood: "Bernal Heights",
  hours: "24/7",
  booked_times_today: "#{(5..50).to_a.sample}",
  tables_left: "#{(5..12).to_a.sample}"
)

seed_pics_res_and_saves(r, u)
seed_reviews(r, r1, r2, r3, r4)
