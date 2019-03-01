# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

User.destroy_all

# Demo user
u = User.create!(
  name: "James Bond",
  password: "password",
  email: "007@gmail.com",
)

Restaurant.destroy_all

Restaurant.create!(
  name: "The First Ever Restaurant!",
  address: "825 Battery Street, San Francisco, USA, 94111",
  description: "The first restaurant to bless this glorious website.",
  user: u,
  email: "firstever@gmail.com",
  phone: "555-555-5555",
  website: "firstever.com",
  payment_options: "Visa",
  dress_code: "formal",
  neighborhood: "FiDi",
  cross_street: "Broadway",
  parking_details: "don't drive here",
  cost: "20"
)

Restaurant.create!(
  name: "Schroeder's",
  address: "240 Front Street San Francisco, CA 94111",
  description: "Originally founded in 1893, Schroeder’s longstanding history has made the Bavarian inspired beer hall a favorite of San Francisco for the past 120 years. With a new page beginning in Schroeder’s history, the restaurant is reinventing the way San Francisco views German Fare. The restaurant’s décor pays homage to its Bavarian Heritage with Herman Richter murals, Historical Wall of Steins, and the original millwork throughout. A rosewood bar stretching the length of the beer hall with 22 German beers on tap is sure to captivate the thirsty. Prost!",
  user: u,
  email: "firstever@gmail.com",
  website: "http://www.schroederssf.com/",
)

Restaurant.create!(
  name: "Aliment",
  address: "786 Bush Street San Francisco, CA 94108",
  description: "Located on the corner of Bush and Mason, we are a friendly neighborhood restaurant serving chef driven cuisine in a cozy atmosphere. We strive to source our ingredients locally, make everything in house, and change our menu with the seasons so our diners always have new interesting dishes to look forward to. Join us for dinner and try a beer from our rotating taps and bottle list, or a glass of wine from our dynamic wine menu. We’re sure you’ll enjoy our unique and creative twist on classic American dishes.",
  user: u,
  email: "firstever@gmail.com",
  website: "http://www.alimentsf.com/home.html",
)
