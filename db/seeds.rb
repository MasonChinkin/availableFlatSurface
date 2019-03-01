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

Restaurant.create!(
  name: "The First Ever Restaurant!",
  street_address: "825 Battery Street",
  description: "The first restaurant to bless this glorious website.",
  cost: "20",
  city: "San Francisco",
  state: "California",
  country: "USA",
  email: "firstever@gmail.com",
  phone: "555-555-5555",
  website: "firstever.com",
  payment_options: "Visa",
  dress_code: "formal",
  neighborhood: "FiDi",
  cross_street: "Broadway",
  parking_details: "don't drive here",
  user: u,
)
