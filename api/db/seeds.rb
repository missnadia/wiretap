# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Contact.create(
    {
        first_name: 'Finn',
        last_name: 'Mertens',
        email: 'finn.mertens@at.com',
        mobile: 1234567890,
        work: 1234567890,
        home: 1234567890,
        fax: 1234567890,
        home_address: '123 Land of Oo',
        work_address: '123 Land of Oo',
        img: 'https://t6.rbxcdn.com/1fe03c714e0d3976e6c1207759e39b90'
    }
)