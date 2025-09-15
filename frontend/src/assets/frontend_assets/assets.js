import p_img1 from '../images/Hoodies/hodi11.jpg'
import p_img2_1 from '../images/Hoodies/hodi21.jpg'
import p_img2_2 from '../images/Hoodies/hodi22.jpg'
import p_img2_3 from '../images/Hoodies/hodi23.jpg'
import p_img2_4 from '../images/Hoodies/hodi24.jpg'
import p_img3 from '../images/Hoodies/hodi31.jpg'
import p_img4 from '../images/Hoodies/hodi41.jpg'
import p_img5 from '../images/Hoodies/hodi51.jpg'
import p_img6 from '../images/Hoodies/hodi61.jpg'
import p_img7 from '../images/Hoodies/hodi71.jpg'
import p_img8 from '../images/Hoodies/hodi81.jpg'
import p_img9 from '../images/T-Shirts/tsh11.jpg'
import p_img10 from '../images/T-Shirts/tsh21.jpg'
import p_img11 from '../images/T-Shirts/tsh31.jpg'
import p_img12 from '../images/T-Shirts/tsh41.jpg'
import p_img13 from '../images/T-Shirts/tsh51.jpg'
import p_img14 from '../images/T-Shirts/tsh61.jpg'
import p_img15 from '../images/T-Shirts/tsh71.jpg'
import p_img16 from '../images/T-Shirts/sh81.jpg'
import p_img17 from '../images/Accessories/acc11.jpg'
import p_img18 from '../images/Accessories/acc21.jpg'
import p_img19 from '../images/Accessories/acc31.jpg'
import p_img20 from '../images/Accessories/acc41.jpg'
import p_img21 from '../images/Accessories/acc51.jpg'
import p_img22 from '../images/Accessories/acc61.jpg'
import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './hero_img.png'
import contact_img from './contact_img.png'
import reflect from './reflect.jpg'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    reflect,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        _id: "aaaaa",
        name: "Anrabess Hoodies ",
        description: "This oversized women's hoodie is made of soft fleece and features a comfortable crew neck, long sleeves with dropped shoulders, and a convenient pocket. Perfect for any occasion, wear it for casual outings, vacations, school, running, and the gym.",
        price: 100,
        image: [p_img1],
        category: "Hoodies",
        subCategory: "Women",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Hanes Sweatshirt",
        description: "Classic heavyweight hoodie in pill-resistant faux-fleece featuring a jersey-lined drawstring hood.",
        price: 200,
        image: [p_img2_1,p_img2_2,p_img2_3,p_img2_4],
        category: "Hoodies",
        subCategory: "Men",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Remido Women's Shirt",
        description: "Long-sleeved crop top with drawstring hoodie, solid color balloon sleeve shirt, and drop shoulder pullover sweatshirt",
        price: 220,
        image: [p_img3],
        category: "Hoodies",
        subCategory: "Women",
        sizes: ["S", "L", "XL"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "Carhartt Men's Sweatshirt",
        description: "Jersey-lined hooded jacket with drawcord, antique brass zip collar, two front pockets with hidden security pocket, and spandex-reinforced knit cuffs and bottom band.",
        price: 110,
        image: [p_img4],
        category: "Hoodies",
        subCategory: "Men",
        sizes: ["S", "M", "XXL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Women's High-Quality Natural Cotton Blend Hoodies",
        description: "This light gray hoodie for women is made from a premium blend of 80% cotton and 20% polyester, ensuring comfort without being overly loose. Perfect for fall and winter, this lightweight light gray sweatshirt is perfect for women.",
        price: 130,
        image: [p_img5],
        category: "Hoodies",
        subCategory: "Women",
        sizes: ["M", "L", "XL"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "Under Armour Men's Rival Fleece Hoodie",
        description: "The UA Rival hoodie in black is made from a super-soft cotton blend with a warm inner lining, featuring a front kangaroo pocket and ribbed cuffs and hem for everyday comfort and style.",
        price: 140,
        image: [p_img6],
        category: "Hoodies",
        subCategory: "Men",
        sizes: ["S", "L", "XL"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Autumn Fleece Hoodies for Women",
        description: "Women's Half Zip Hoodies Sweatshirt, Drop Shoulder Collar, Long Sleeve, Half Zip Hooded, Solid Color, Cropped Length, Fleece Lining, Relaxed Fit, Cropped Tops, Autumn Winter Clothes for Women and Teen Girls, Fashion and Casual Design.",
        price: 190,
        image: [p_img7],
        category: "Hoodies",
        subCategory: "Women",
        sizes: ["S", "L", "XL"],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Carhartt Men's Heavyweight Hooded Shirt",
        description: "Carhartt 3-piece hoodie with drawstring, front handwarmer pocket, spandex-reinforced ribbed knit cuffs and waistband, and triple-stitched main seams for durability.",
        price: 140,
        image: [p_img8],
        category: "Hoodies",
        subCategory: "Men",
        sizes: ["S", "M", "L", "XL"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaai",
        name: "Women’s Essential T-Shirt",
        description: " A women’s t-shirt designed with a flattering feminine fit, made from premium cotton for a soft feel and a touch of effortless elegance.",
        price: 100,
        image: [p_img9],
        category: "T-Shirts",
        subCategory: "women",
        sizes: ["M", "L", "XL"],
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Women’s Essential T-Shirt",
        description: "A women’s t-shirt designed with a flattering feminine fit, made from premium cotton for a soft feel and a touch of effortless elegance.",
        price: 110,
        image: [p_img10],
        category: "T-Shirts",
        subCategory: "women",
        sizes: ["S", "L", "XL"],
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "Men’s Classic T-Shirt",
        description: "A men’s t-shirt with a simple and modern design, crafted from soft and lightweight cotton for all-day comfort – perfect for casual everyday looks.",
        price: 120,
        image: [p_img11],
        category: "T-Shirts",
        subCategory: "Men",
        sizes: ["S", "M", "L"],
        date: 1716623345448,
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Women’s Essential T-Shirt",
        description: "A women’s t-shirt designed with a flattering feminine fit, made from premium cotton for a soft feel and a touch of effortless elegance.",
        price: 150,
        image: [p_img12],
        category: "T-Shirts",
        subCategory: "Women",
        sizes: ["S", "M", "L", "XL"],
        date: 1716624445448,
        bestseller: false
    },
    {
        _id: "aaaam",
        name: "Men’s Classic T-Shirt",
        description: "A men’s t-shirt with a simple and modern design, crafted from soft and lightweight cotton for all-day comfort – perfect for casual everyday looks.",
        price: 130,
        image: [p_img13],
        category: "T-Shirts",
        subCategory: "Men",
        sizes: ["S", "M", "L", "XL"],
        date: 1716625545448,
        bestseller: false
    },
    {
        _id: "aaaan",
        name: "Women’s Essential T-Shirt",
        description: "A women’s t-shirt designed with a flattering feminine fit, made from premium cotton for a soft feel and a touch of effortless elegance.",
        price: 160,
        image: [p_img14],
        category: "T-Shirts",
        subCategory: "Women",
        sizes: ["S", "M", "L", "XL"],
        date: 1716626645448,
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "Men’s Classic T-Shirt",
        description: "A men’s t-shirt with a simple and modern design, crafted from soft and lightweight cotton for all-day comfort – perfect for casual everyday looks.",
        price: 140,
        image: [p_img15],
        category: "T-Shirts",
        subCategory: "Men",
        sizes: ["S", "M", "L", "XL"],
        date: 1716627745448,
        bestseller: false
    },
    {
        _id: "aaaap",
        name: "Men’s Classic T-Shirt",
        description: "A men’s t-shirt with a simple and modern design, crafted from soft and lightweight cotton for all-day comfort – perfect for casual everyday looks.",
        price: 170,
        image: [p_img16],
        category: "T-Shirts",
        subCategory: "Men",
        sizes: ["S", "M", "L", "XL"],
        date: 1716628845448,
        bestseller: false
    },
    {
        _id: "aaaaq",
        name: "T-Shop Accessories",
        description: "English (Description): Stylish and modern accessories including bracelets, necklaces, and earrings – carefully designed to complete your look and add a unique touch to your everyday style.",
        price: 150,
        image: [p_img17],
        category: "Accessories",
        subCategory: "women",
        sizes: ["One Size"],
        date: 1716629945448,
        bestseller: false
    },
    {
        _id: "aaaar",
        name: "T-Shop Accessories",
        description: "English (Description): Stylish and modern accessories including bracelets, necklaces, and earrings – carefully designed to complete your look and add a unique touch to your everyday style.",
        price: 180,
        image: [p_img18],
        category: "Accessories",
        subCategory: "Women",
        sizes: ["One Size"],
        date: 1716631045448,
        bestseller: false
    },
    {
        _id: "aaaas",
        name: "T-Shop Accessories",
        description: "English (Description): Stylish and modern accessories including bracelets, necklaces, and earrings – carefully designed to complete your look and add a unique touch to your everyday style.",
        price: 160,
        image: [p_img19],
        category: "Accessories",
        subCategory: "Women",
        sizes: ["One Size"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaas",
        name: "T-Shop Accessories",
        description: "English (Description): Stylish and modern accessories including bracelets, necklaces, and earrings – carefully designed to complete your look and add a unique touch to your everyday style.",
        price: 160,
        image: [p_img20],
        category: "Accessories",
        subCategory: "Women",
        sizes: ["One Size"],
        date: 1716632145448,
        bestseller: false
    },
        {
        _id: "aaaas",
        name: "T-Shop Accessories",
        description: "English (Description): Stylish and modern accessories including bracelets, necklaces, and earrings – carefully designed to complete your look and add a unique touch to your everyday style.",
        price: 160,
        image: [p_img21],
        category: "Accessories",
        subCategory: "Women",
        sizes: ["One Size"],
        date: 1716632145448,
        bestseller: false
    },
        {
        _id: "aaaas",
        name: "T-Shop Accessories",
        description: "English (Description): Stylish and modern accessories including bracelets, necklaces, and earrings – carefully designed to complete your look and add a unique touch to your everyday style.",
        price: 160,
        image: [p_img22],
        category: "Accessories",
        subCategory: "Women",
        sizes: ["One Size"],
        date: 1716632145448,
        bestseller: false
    }
]