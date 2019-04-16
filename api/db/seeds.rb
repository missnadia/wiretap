# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Contact.create(
    [{
        first_name: 'Finn',
        last_name: 'Mertens',
        email: 'finn.mertens@at.com',
        mobile: 1234567890,
        work: 1234567890,
        home: 1234567890,
        fax: 1234567890,
        home_address: '123 Land of Oo',
        work_address: '123 Land of Oo',
        img: 'https://t6.rbxcdn.com/1fe03c714e0d3976e6c1207759e39b90',
        wire: "Discuss new hero adventures with Jake"
    },
    {
        first_name: "Jake",
        last_name: "Dog",
        email: "jakethedog@at.com",
        mobile: 123456789,
        work: 123456789,
        home: 123456789,
        fax: 123456789,
        home_address: "Land of Oo",
        work_address: "Land of Oo",
        created_at: "2019-04-13T19:37:15.448Z",
        updated_at: "2019-04-13T23:45:08.599Z",
        img: "https://vignette.wikia.nocookie.net/parody/images/f/fb/JakeRJS.png/revision/latest?cb=20141209233937",
        wire: "Meet Lady Rainicorn to discuss childcare"
    },
    {
        first_name: "Princess Bonnibel",
        last_name: "Bubblegum",
        email: "princess.bubblegum@at.com",
        mobile: 123456789,
        work: 123456789,
        home: 123456789,
        fax: 123456789,
        home_address: "The Candy Castle",
        work_address: "The Candy Castle",
        created_at: "2019-04-13T23:19:30.019Z",
        updated_at: "2019-04-13T23:28:03.584Z",
        img: "https://banner2.kisspng.com/20180424/vgq/kisspng-princess-bubblegum-marceline-the-vampire-queen-fin-love-for-all-seasons-5adff241c52394.0726832015246259858075.jpg",
        wire: "Eat lunch with Marceline"
    }]
)