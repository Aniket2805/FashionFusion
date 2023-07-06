// Script for navigation bar
const navMenu = document.getElementById("icon");
const nav = document.getElementById("navbar");
const navBag = document.getElementById("bag");
const navClose = document.getElementById("close");
var productData = {
    1: {
        h4: "Men's Fashion Shirt",
        h5: 'Relaxed Fit Patterned resort shirt',
        color: 'Black/Leaf-patterned',
        description: 'Relaxed-fit shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.',
        image: "img/products/1/1.webp",
        simg: ['img/products/1/1.webp', 'img/products/1/2.webp', 'img/products/1/3.webp', 'img/products/1/4.webp'],
        price: '$90'
    },
    2: {
        h4: "Men's Fashion Shirt",
        h5: 'Relaxed Fit Patterned resort shirt',
        color: 'Orange/Leaf-patterned',
        description: 'Relaxed-fit shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.',
        image: "img/products/2/1.webp",
        simg: ['img/products/2/1.webp', 'img/products/2/2.webp', 'img/products/2/3.webp', 'img/products/2/4.webp'],
        price: '$90'
    },
    3: {
        h4: "Men's Fashion Shirt",
        h5: 'Relaxed Fit Patterned resort shirt',
        color: 'Black/Leaf-patterned',
        description: 'Relaxed-fit shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.',
        image: "img/products/3/1.webp",
        simg: ['img/products/3/1.webp', 'img/products/3/2.webp', 'img/products/3/3.webp', 'img/products/3/4.webp'],
        price: '$90'
    },
    4: {
        h4: "Men's Fashion Shirt",
        h5: 'Relaxed Fit Patterned resort shirt',
        color: 'Light beige/Flowers',
        description: 'Relaxed-fit shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.',
        image: "img/products/4/1.webp",
        simg: ['img/products/4/1.webp', 'img/products/4/2.webp', 'img/products/4/3.webp', 'img/products/4/4.webp'],
        price: '$90'
    },
    5: {
        h4: "Men's Fashion Shirt",
        h5: 'Regular Fit Short-sleeved lyocell shirt',
        color: 'Dark brown/Patterned',
        description: 'Short-sleeved shirt in patterned lyocell. Regular fit with a turn-down collar, French front and straight-cut hem with a slit in each side. Fabric made from lyocell is super soft, wrinkle resistant and drapes beautifully.',
        image: "img/products/5/1.webp",
        simg: ['img/products/5/1.webp', 'img/products/5/2.webp', 'img/products/5/3.webp', 'img/products/5/4.webp'],
        price: '$90'
    },
    6: {
        h4: "Men's Fashion Shirt",
        h5: 'Regular Fit Short-sleeved lyocell shirt',
        color: 'Sky Blue/Patterned',
        description: 'Short-sleeved shirt in patterned lyocell. Regular fit with a turn-down collar, French front and straight-cut hem with a slit in each side. Fabric made from lyocell is super soft, wrinkle resistant and drapes beautifully.',
        image: "img/products/6/1.webp",
        simg: ['img/products/6/1.webp', 'img/products/6/2.webp', 'img/products/6/3.webp', 'img/products/6/4.webp'],
        price: '$90'
    },
    7: {
        h4: "Men's Fashion Shirt",
        h5: 'Regular Fit Short-sleeved lyocell shirt',
        color: 'Black Leaf//Patterned',
        description: 'Short-sleeved shirt in patterned lyocell. Regular fit with a turn-down collar, French front and straight-cut hem with a slit in each side. Fabric made from lyocell is super soft, wrinkle resistant and drapes beautifully.',
        image: "img/products/7/1.webp",
        simg: ['img/products/7/1.webp', 'img/products/7/2.webp', 'img/products/7/3.webp', 'img/products/7/4.webp'],
        price: '$90'
    },
    8: {
        h4: "Men's Fashion Shirt",
        h5: 'Relaxed Fit Patterned resort shirt',
        color: 'Black/White striped',
        description: 'Relaxed-fit shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.',
        image: "img/products/8/1.webp",
        simg: ['img/products/8/1.webp', 'img/products/8/2.webp', 'img/products/8/3.webp', 'img/products/8/4.webp'],
        price: '$90'
    },
    9: {
        h4: "Men's Fashion Shirt",
        h5: 'Relaxed Fit Patterned resort shirt',
        color: 'Red/Palm trees',
        description: 'Relaxed-fit shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.',
        image: "img/products/9/1.webp",
        simg: ['img/products/9/1.webp', 'img/products/9/2.webp', 'img/products/9/3.webp', 'img/products/9/4.webp'],
        price: '$90'
    },
    10: {
        h4: "Men's Fashion Shirt",
        h5: 'Relaxed Fit Terry shirt',
        color: 'Black/White checked',
        description: 'Relaxed-fit shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.',
        image: "img/products/10/1.webp",
        simg: ['img/products/10/1.webp', 'img/products/10/2.webp', 'img/products/10/3.webp', 'img/products/10/4.webp'],
        price: '$90'
    },
    11: {
        h4: "Men's Fashion Shirt",
        h5: 'Relaxed Fit Terry shirt',
        color: 'Purple',
        description: 'Relaxed-fit shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.',
        image: "img/products/11/1.webp",
        simg: ['img/products/11/1.webp', 'img/products/11/2.webp', 'img/products/11/3.webp', 'img/products/11/4.webp'],
        price: '$90'
    },
    12: {
        h4: "Men's Fashion Shirt",
        h5: 'Relaxed Fit Linen resort shirt',
        color: 'Light beige/Flower',
        description: 'Relaxed-fit shirt in a patterned viscose weave with a resort collar, French front, short sleeves and a straight-cut hem.',
        image: "img/products/12/1.webp",
        simg: ['img/products/12/1.webp', 'img/products/12/2.webp', 'img/products/12/3.webp', 'img/products/12/4.webp'],
        price: '$90'
    },
    13: {
        h4: "Men's Fashion Jeans",
        h5: 'Slim Jeans',
        color: 'Black',
        description: '5-pocket jeans in cotton denim with a slight stretch for good comfort. Straight leg and a slim fit from the waist through the thigh to the hem. Regular waist and a zip fly. Easily styled for sleek or sporty.',
        image: "img/products/13/1.webp",
        simg: ['img/products/13/1.webp', 'img/products/13/2.webp', 'img/products/13/3.webp', 'img/products/13/4.webp'],
        price: '$90'
    },
    14: {
        h4: "Men's Fashion Jeans",
        h5: 'Slim Jeans',
        color: 'Dark grey',
        description: '5-pocket jeans in cotton denim with a slight stretch for good comfort. Straight leg and a slim fit from the waist through the thigh to the hem. Regular waist and a zip fly. Easily styled for sleek or sporty.',
        image: "img/products/14/1.webp",
        simg: ['img/products/14/1.webp', 'img/products/14/2.webp', 'img/products/14/3.webp', 'img/products/14/4.webp'],
        price: '$90'
    },
    15: {
        h4: "Men's Fashion Jeans",
        h5: 'Slim Jeans',
        color: 'Dark Blue',
        description: '5-pocket jeans in cotton denim with a slight stretch for good comfort. Straight leg and a slim fit from the waist through the thigh to the hem. Regular waist and a zip fly. Easily styled for sleek or sporty.',
        image: "img/products/15/1.webp",
        simg: ['img/products/15/1.webp', 'img/products/15/2.webp', 'img/products/15/3.webp', 'img/products/15/4.webp'],
        price: '$90'
    },
    16: {
        h4: "Men's Fashion Jeans",
        h5: 'Loose Jeans',
        color: 'Olive green',
        description: '5-pocket jeans in rigid cotton denim with a rounded leg and a loose fit from the seat to the hem with a dropped crotch and extra room around the whole leg. Regular waist and a zip fly. All you need to conquer the full denim look.',
        image: "img/products/16/1.webp",
        simg: ['img/products/16/1.webp', 'img/products/16/2.webp', 'img/products/16/3.webp', 'img/products/16/4.webp'],
        price: '$90'
    },
    17: {
        h4: "Men's Fashion Jeans",
        h5: 'Slim Jeans',
        color: 'White',
        description: '5-pocket jeans in rigid cotton denim with a rounded leg and a loose fit from the seat to the hem with a dropped crotch and extra room around the whole leg. Regular waist and a zip fly. All you need to conquer the full denim look.',
        image: "img/products/17/1.webp",
        simg: ['img/products/17/1.webp', 'img/products/17/2.webp', 'img/products/17/3.webp', 'img/products/17/4.webp'],
        price: '$90'
    },
    18: {
        h4: "Men's Fashion Jeans",
        h5: 'Slim Jeans',
        color: 'Dark denim blue',
        description: '5-pocket jeans in rigid cotton denim with a rounded leg and a loose fit from the seat to the hem with a dropped crotch and extra room around the whole leg. Regular waist and a zip fly. All you need to conquer the full denim look.',
        image: "img/products/18/1.webp",
        simg: ['img/products/18/1.webp', 'img/products/18/2.webp', 'img/products/18/3.webp', 'img/products/18/4.webp'],
        price: '$90'
    },
    19: {
        h4: "Men's Fashion Pants",
        h5: 'Regular Fit Ripstop cargo trousers',
        color: 'Khaki green/Patterned',
        description: 'Regular-fit cargo trousers in a hard-wearing ripstop weave. Covered elastication and a drawstring at the waist, and a zip fly and button. Side, back and leg pockets with a flap and concealed press-studs, and covered elastication at the hems.',
        image: "img/products/19/1.webp",
        simg: ['img/products/19/1.webp', 'img/products/19/2.jpeg', 'img/products/19/3.webp', 'img/products/19/4.webp'],
        price: '$90'
    },
    20: {
        h4: "Men's Fashion Pants",
        h5: 'Regular Fit Ripstop cargo trousers',
        color: 'Light beige',
        description: 'Regular-fit cargo trousers in a hard-wearing ripstop weave. Covered elastication and a drawstring at the waist, and a zip fly and button. Side, back and leg pockets with a flap and concealed press-studs, and covered elastication at the hems.',
        image: "img/products/20/1.webp",
        simg: ['img/products/20/1.webp', 'img/products/20/2.webp', 'img/products/20/3.webp', 'img/products/20/4.webp'],
        price: '$90'
    },
    21: {
        h4: "Men's Fashion Pants",
        h5: 'Regular Fit Ripstop cargo trousers',
        color: 'Black',
        description: 'Regular-fit cargo trousers in a hard-wearing ripstop weave. Covered elastication and a drawstring at the waist, and a zip fly and button. Side, back and leg pockets with a flap and concealed press-studs, and covered elastication at the hems.',
        image: "img/products/21/1.webp",
        simg: ['img/products/21/1.webp', 'img/products/21/2.jpeg', 'img/products/21/3.webp', 'img/products/21/4.webp'],
        price: '$90'
    },
    22: {
        h4: "Men's Fashion Pants",
        h5: 'Regular Fit Sweatpants',
        color: 'Beige',
        description: 'Regular-fit sweatpants in sweatshirt fabric made from a cotton blend. Covered elastication and a drawstring at the waist, pockets in the side seams and ribbed hems. Soft brushed inside.',
        image: "img/products/22/1.webp",
        simg: ['img/products/22/1.webp', 'img/products/22/2.webp', 'img/products/22/3.webp', 'img/products/22/4.webp'],
        price: '$90'
    },
    23: {
        h4: "Men's Fashion Pants",
        h5: 'Regular Fit Sweatpants',
        color: 'Beige',
        description: 'Regular-fit sweatpants in sweatshirt fabric made from a cotton blend. Covered elastication and a drawstring at the waist, pockets in the side seams and ribbed hems. Soft brushed inside.',
        image: "img/products/23/1.webp",
        simg: ['img/products/23/1.webp', 'img/products/23/2.webp', 'img/products/23/3.webp', 'img/products/23/4.webp'],
        price: '$90'
    },
    24: {
        h4: "Men's Fashion Pants",
        h5: 'Regular Fit Sweatpants',
        color: 'Black',
        description: 'Regular-fit sweatpants in sweatshirt fabric made from a cotton blend. Covered elastication and a drawstring at the waist, pockets in the side seams and ribbed hems. Soft brushed inside.',
        image: "img/products/24/1.webp",
        simg: ['img/products/24/1.webp', 'img/products/24/2.jpeg', 'img/products/24/3.webp', 'img/products/24/4.webp'],
        price: '$90'
    },
    25: {
        h4: "Ladies's Fashion Dresses",
        h5: 'A-line dress',
        color: 'White/Blue floral',
        description: 'Short, A-line dress in an airy weave with a deep V-neckline and a gathered seam at the waist. Long, raglan-cut balloon sleeves with elasticated cuffs. Unlined.',
        image: "img/products/25/1.webp",
        simg: ['img/products/25/1.webp', 'img/products/25/2.webp', 'img/products/25/3.webp', 'img/products/25/4.webp'],
        price: '$90'
    },
    26: {
        h4: "Ladies's Fashion Dresses",
        h5: 'A-line dress',
        color: 'Cream/Beige patterned',
        description: 'Short, A-line dress in an airy weave with a deep V-neckline and a gathered seam at the waist. Long, raglan-cut balloon sleeves with elasticated cuffs. Unlined.',
        image: "img/products/26/1.webp",
        simg: ['img/products/26/1.webp', 'img/products/26/2.webp', 'img/products/26/3.webp', 'img/products/26/4.webp'],
        price: '$90'
    },
    27: {
        h4: "Ladies's Fashion Dresses",
        h5: 'A-line dress',
        color: 'Cream/Black patterned',
        description: 'Short, A-line dress in an airy weave with a deep V-neckline and a gathered seam at the waist. Long, raglan-cut balloon sleeves with elasticated cuffs. Unlined.',
        image: "img/products/27/1.webp",
        simg: ['img/products/27/1.webp', 'img/products/27/2.webp', 'img/products/27/3.webp', 'img/products/27/4.webp'],
        price: '$90'
    },
    28: {
        h4: "Ladies's Fashion Dresses",
        h5: 'A-line dress',
        color: 'Cerise/Floral',
        description: 'Short, A-line dress in an airy weave with a deep V-neckline and a gathered seam at the waist. Long, raglan-cut balloon sleeves with elasticated cuffs. Unlined.',
        image: "img/products/28/1.webp",
        simg: ['img/products/28/1.webp', 'img/products/28/2.jpeg', 'img/products/28/3.webp', 'img/products/28/4.webp'],
        price: '$90'
    },
    29: {
        h4: "Ladies's Fashion Dresses",
        h5: 'Patterned satin shirt',
        color: 'Blue/Patterned',
        description: 'Shirt in patterned satin with a collar, buttons down the front, gently dropped shoulders and long, wide sleeves with a slit and button at the cuffs. Straight-cut hem with a slit at each side.',
        image: "img/products/29/1.webp",
        simg: ['img/products/29/1.webp', 'img/products/29/2.jpeg', 'img/products/29/3.webp', 'img/products/29/4.webp'],
        price: '$90'
    },
    30: {
        h4: "Ladies's Fashion Dresses",
        h5: 'Wide trousers',
        color: 'Blue/Patterned',
        description: 'Loose-fit trousers in woven fabric with a slight sheen. High waist with covered elastication at the back and pleats at the front. Wide legs.',
        image: "img/products/30/1.webp",
        simg: ['img/products/30/1.webp', 'img/products/30/2.webp', 'img/products/30/3.webp', 'img/products/30/4.webp'],
        price: '$90'
    },
    31: {
        h4: "Ladies's Fashion Dresses",
        h5: 'Satin cami top',
        color: 'Cream/Patterned',
        description: 'Cami top in softly draping satin with a deep V-neckline and spaghetti shoulder straps that cross at the back. Lined.',
        image: "img/products/31/1.webp",
        simg: ['img/products/31/1.webp', 'img/products/31/2.jpeg', 'img/products/31/3.webp', 'img/products/31/4.webp'],
        price: '$90'
    },
    32: {
        h4: "Ladies's Fashion Dresses",
        h5: 'Wide trousers',
        color: 'Cream/Patterned',
        description: 'Loose-fit trousers in woven fabric with a slight sheen. High waist with covered elastication at the back and pleats at the front. Wide legs.',
        image: "img/products/32/1.webp",
        simg: ['img/products/32/1.webp', 'img/products/32/2.webp', 'img/products/32/3.webp', 'img/products/32/4.webp'],
        price: '$90'
    },
    33: {
        h4: "Ladies's Fashion Dresses",
        h5: 'Crinkled chiffon shirt',
        color: 'Light beige/Leaf-patterned',
        description: 'Shirt in a crinkled chiffon weave with a collar and buttons down the front. Relaxed fit with dropped shoulders, long sleeves with buttoned cuffs and a rounded hem. Slightly longer at the back.',
        image: "img/products/33/1.webp",
        simg: ['img/products/33/1.webp', 'img/products/33/2.webp', 'img/products/33/3.webp', 'img/products/33/4.webp'],
        price: '$90'
    },
    34: {
        h4: "Ladies's Fashion Dresses",
        h5: 'Flared trousers',
        color: 'Light beige/Leaf-patterned',
        description: 'Trousers in woven fabric made from a viscose blend with a zip fly and button, diagonal side pockets and legs with gently flared hems.',
        image: "img/products/34/1.webp",
        simg: ['img/products/34/1.webp', 'img/products/34/2.webp', 'img/products/34/3.webp', 'img/products/34/4.webp'],
        price: '$90'
    },
    35: {
        h4: "Ladies's Fashion Dresses",
        h5: 'Balloon-sleeved cotton dress',
        color: 'Bright blue/Patterned',
        description: 'Calf-length dress in an airy cotton weave. Deep V-neckline and 3/4-length balloon sleeves with narrow elastication at the cuffs. Narrow drawstring at the waist and a gently flared skirt. Unlined.',
        image: "img/products/35/1.webp",
        simg: ['img/products/35/1.webp', 'img/products/35/2.webp', 'img/products/35/3.webp', 'img/products/35/4.webp'],
        price: '$90'
    },
    36: {
        h4: "Ladies's Fashion Dresses",
        h5: 'Balloon-sleeved cotton dress',
        color: 'Black/Patterned',
        description: 'Calf-length dress in an airy cotton weave. Deep V-neckline and 3/4-length balloon sleeves with narrow elastication at the cuffs. Narrow drawstring at the waist and a gently flared skirt. Unlined.',
        image: "img/products/36/1.webp",
        simg: ['img/products/36/1.webp', 'img/products/36/2.webp', 'img/products/36/3.webp', 'img/products/36/4.webp'],
        price: '$90'
    },
    37: {
        h4: "Ladies's Fashion Dresses",
        h5: 'Patterned cotton dress',
        color: 'Bright blue/Patterned',
        description: 'Calf-length dress in a patterned cotton weave. Loose fit with a small stand-up collar and a V-shaped opening with narrow ties at the top. Long, voluminous balloon sleeves in a raglan cut with narrow, buttoned cuffs. Drawstring at the waist with narrow ties at the sides. Unlined.',
        image: "img/products/37/1.webp",
        simg: ['img/products/37/1.webp', 'img/products/37/2.jpeg', 'img/products/37/3.webp', 'img/products/37/4.webp'],
        price: '$90'
    },
    38: {
        h4: "Ladies's Fashion Dresses",
        h5: 'Collared dress',
        color: 'Yellow',
        description: 'Calf-length dress in a patterned cotton weave. Loose fit with a small stand-up collar and a V-shaped opening with narrow ties at the top. Long, voluminous balloon sleeves in a raglan cut with narrow, buttoned cuffs. Drawstring at the waist with narrow ties at the sides. Unlined.',
        image: "img/products/38/1.webp",
        simg: ['img/products/38/1.webp', 'img/products/38/2.jpeg', 'img/products/38/3.webp', 'img/products/38/4.webp'],
        price: '$90'
    },
    39: {
        h4: "Ladies's Fashion Dresses",
        h5: 'Oversized off-the-shoulder dress',
        color: 'Black/Patterned',
        description: 'Calf-length, oversized, off-the-shoulder dress in an airy crêpe weave with elasticated smocking at the top. Long, voluminous balloon sleeves with narrow elastication at the cuffs and a gathered seam below the hip. Unlined.',
        image: "img/products/39/1.webp",
        simg: ['img/products/39/1.webp', 'img/products/39/2.jpeg', 'img/products/39/3.webp', 'img/products/39/4.webp'],
        price: '$90'
    },
    40: {
        h4: "Ladies's Fashion Dresses",
        h5: 'Embroidered tunic dress',
        color: 'White',
        description: 'Short tunic dress in an airy cotton and linen weave with a round neckline, V-shaped opening and long, wide sleeves. Contrasting colour embroidery at the cuffs and hem. Straight-cut hem. Unlined.',
        image: "img/products/40/1.webp",
        simg: ['img/products/40/1.webp', 'img/products/40/2.webp', 'img/products/40/3.webp', 'img/products/40/4.webp'],
        price: '$90'
    },
    41: {
        h4: "Ladies's Fashion Dresses",
        h5: 'Patterned shirt',
        color: 'Blue/Patterned',
        description: 'Shirt in a patterned weave with a collar and buttons down the front. Loose fit with dropped shoulders and long, wide sleeves with a slit and button at the cuffs.',
        image: "img/products/41/1.webp",
        simg: ['img/products/41/1.webp', 'img/products/41/2.webp', 'img/products/41/3.webp', 'img/products/41/4.webp'],
        price: '$90'
    },
    42: {
        h4: "Ladies's Fashion Dresses",
        h5: 'Patterned Trousers',
        color: 'Blue/Patterned',
        description: 'Trousers in a patterned viscose weave. Relaxed fit with a drawstring waist, zip fly with a button, and elasticated smocking at the back. Fake welt pocket at the back and straight legs.',
        image: "img/products/42/1.webp",
        simg: ['img/products/42/1.webp', 'img/products/42/2.webp', 'img/products/42/3.webp', 'img/products/42/4.webp'],
        price: '$90'
    },
    43: {
        h4: "Ladies's Fashion Dresses",
        h5: 'Oversized shirt',
        color: 'Bright green/Striped',
        description: 'Oversized shirt in a viscose weave with a collar and buttons down the front. Dropped shoulders and long sleeves with a slit at the cuffs. Straight hem with a slit at each side.',
        image: "img/products/43/1.webp",
        simg: ['img/products/43/1.webp', 'img/products/43/2.webp', 'img/products/43/3.webp', 'img/products/43/4.webp'],
        price: '$90'
    },
    44: {
        h4: "Ladies's Fashion Dresses",
        h5: 'Patterned Trousers',
        color: 'Bright green/Striped',
        description: 'Trousers in a patterned viscose weave. Relaxed fit with a drawstring waist, zip fly with a button, and elasticated smocking at the back. Fake welt pocket at the back and straight legs.',
        image: "img/products/44/1.webp",
        simg: ['img/products/44/1.webp', 'img/products/44/2.webp', 'img/products/44/3.webp', 'img/products/44/4.webp'],
        price: '$90'
    }
};
if (navMenu) {
    navMenu.addEventListener("click", () => {
        nav.classList.add("active");
        navBag.classList.remove("fa-beat");
    })
}
if (navClose) {
    navClose.addEventListener("click", () => {
        nav.classList.remove("active");
        navBag.classList.add("fa-beat");
    })      
}
function openProductPage(productId) {
    window.location.href = "sproduct.html?id=" + productId;
}
function updateProductDetails(productId) {
    var mainImage = document.getElementById('mainimg');
    var simg = document.getElementsByClassName('small_img');
    var h4 = document.querySelector('#pro_detail h4');
    var p = document.querySelector('#pro_detail p');
    var h5 = document.querySelector('#pro_detail h5');
    var productDescription = document.querySelector('#pro_detail span');
    var productPrice = document.querySelector('#pro_detail h2');
    var selectedProduct = productData[productId];
    mainImage.src = selectedProduct.image;
    for (let i = 0; i < 4; i++) {
        simg[i].src = selectedProduct.simg[i];
    }
    h4.textContent = selectedProduct.h4;
    p.textContent = selectedProduct.color;
    h5.textContent = selectedProduct.h5;
    productDescription.textContent = selectedProduct.description;
    productPrice.textContent = selectedProduct.price;
}

function refreshCart(){
    var price=document.querySelectorAll(".price");
    var input=document.querySelectorAll("#cart-items input");
    var totalPrice=document.querySelectorAll("#cart-items .totalPrice");
    var totalAmount=document.getElementsByClassName("total-amount");
    let total=0;
    for(let i=0;i<price.length;i++){
        totalPrice[i].textContent="$"+(parseInt(price[i].textContent.substring(1)))*(input[i].value);
        total+=(parseInt(price[i].textContent.substring(1)))*(input[i].value);
        totalAmount[0].textContent="$"+(total);
        totalAmount[1].textContent="$"+(total-20);
    }
}
function deleteItems(item){
    var tableRow=document.getElementsByClassName(item);
    tableRow[0].remove();
    refreshCart();
}
var numberInput = document.getElementById("myNumberInput");
numberInput.addEventListener("input", function() {
  if (numberInput.value < 0) {
    numberInput.value = 0;
  }
});