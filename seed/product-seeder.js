var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({

    imagePath:'https://rukminim1.flixcart.com/image/832/832/top/g/f/e/1-1-em15-043-envy-me-s-original-imae99ystunzxuaz.jpeg?q=70',
    title:'Easy Polo Black Edition',
    description:'The dress makes you look adorable and sexy!!!',
    price:900
}),
    new Product({

            imagePath:'https://rukminim1.flixcart.com/image/832/832/t-shirt/g/z/g/nyc-collar-maniac-s-original-imae7c2qvp7secqf.jpeg?q=70',
            title:'Peter England White Edition',
            description:'The shirt is specially is made for you',
            price:500
        }),

    new Product({

            imagePath:'https://rukminim1.flixcart.com/image/832/832/top/j/2/f/1410cltopcracpleatbei-1410-l-original-imaegqpcktcraugq.jpeg?q=70',
            title:'Polo Special Edition',
            description:'The dress is cheap and has the best quality',
            price:1200
        }),

    new Product({

            imagePath:'https://rukminim1.flixcart.com/image/832/832/top/f/k/4/newdss9073d-cottinfab-m-original-imaegzvzjavwzgfm.jpeg?q=70',
            title:'Wrangler Women T-shirt',
            description:'This is suitable for causal wear',
            price:800
        }),
    new Product ({

            imagePath:'https://rukminim1.flixcart.com/image/832/832/top/8/h/6/ar2044-ar2-s-original-imaeeh24vedgpkgx.jpeg?q=70',
            title:'United Colors of Benetton Women T-shirt',
            description:'This is full sleeve T-shirt for winter wear',
            price:2000
        }),
    new Product ({

            imagePath:'https://rukminim1.flixcart.com/image/832/832/top/p/n/j/s2-519-s2-fashion-m-original-imaedkzfkcpvdfgr.jpeg?q=70',
            title:'Roadster T-shirt',
            description:'The T-shirt is for women and is for casual wear',
            price:500
        })
    ];

var done = 0;

for(var i = 0;i < products.length;i++){

    products[i].save(function(err,result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit()
{
    mongoose.disconnect();
}
