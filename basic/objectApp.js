/*
    1- Sipariş bilgilerini object içerisinde sakla.
    2- Her siparişin KDV dahil toplam fiyatını hesapla. (KDV : 0.18)
    3- Tüm siparişlerin KDV dahil toplam fiyatını hesapla.
    
        ürün başlığı: Lenovo Laptop
        ürün url: https://beyzaparlak.com/lenovo-laptop-mavi?123
        ürün rengi: mavi
        ürün fiyatı: 25000
    müşteri:
        müşteri ID: 120
    satıcı:
        satıcı ID: 92560
        satıc adı: Lenovo Türkiye
        
    sipariş ID: 10082
    sipariş tarihi: 04.10.2023
    ödeme şekli: Kredi Kartı
    kargo adresi: Dörtyol / Hatay
        ürün ID: 00025
        ürün başlığı: Samsung Çamaşır Makinesi
        ürün url: https://beyzaparlak.com/samsung-camasir-makinesi?209
        ürün rengi: beyaz
        ürün fiyatı: 15000
    müşteri:
        müşteri ID: 020
    satıcı:
        satıcı ID: 00017
        satıc adı: Samsung Türkiye
*/

let order_1 = {
        "order_ID": 10001,
        "order_date": "01.10.2023",
        "payment_method": "bank card",
        "shipping_address":{
                                "province":"Erzurum",
                                "County":"Palandöken"
        },
        "products":[
            {
                "product_ID": 5,
                "product_title": "Lenovo Notebook",
                "product_url": "https://beyzaparlak.com/lenovo-notebook-blue?123",
                "product_color": "white",
                "product_price": 750
            },
            {
                "product_ID": 9,
                "product_title": "Razer Keyboard",
                "product_url": "https://beyzaparlak.com/razer-keyboard?109",
                "product_color": "blue",
                "product_price": 50
            }
        ]
};

let order_2 = {
    "order_ID": 10988,
    "order_date": "09.10.2023",
    "payment_method": "credit card",
    "shipping_address":{
                            "province":"Hatay",
                            "County":"Dörtyol"
    },
    "products":[
        {
            "product_ID": 5,
            "product_title": "Samsung Washing Machine",
            "product_url": "https://beyzaparlak.com/samsung-washing-machine?1001",
            "product_color": "white",
            "product_price": 520
        }
    ]
};

let orders = [order_1, order_2];

let order1_sum = (order_1.products[0].product_price + order_1.products[1].product_price) * 1.18;
//let order2_sum = order_2.products[0].product_price * 1.18;
//let order_sum = order1_sum + order2_sum;

console.log("Order 1 Amount: $ " + order1_sum);
//console.log("Order 2 Amount: $ " + order2_sum);

