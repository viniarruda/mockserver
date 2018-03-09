let express = require('express');
let router = express.Router();


/* GET similar products listing. */
router.get('/similar/:id', function (req, res, next) {
    res.json({
        products:[
            {
                id: '00000000001',
                description: 'Drescrição do produto',
                color: 'ROS',
                size: 'PP',
                price: 22.955555,
                stock: '5'
            },
            {
                id: '00000000006',
                description: 'Drescrição do produto',
                color: 'ROS',
                size: 'PP',
                price: 22.955555,
                stock: '5'
            },
            {
                id: '00000000002',
                description: 'Drescrição do produto',
                color: 'ROS',
                size: 'PP',
                price: 22.955555,
                stock: '5'
            },
            {
                id: '00000000004',
                description: 'Drescrição do produto',
                color: 'ROS',
                size: 'PP',
                price: 22.955555,
                stock: '5'
            }
        ]
    });
});

/* GET promotion for product. */
router.get('/promotion/:id', function (req, res, next) {
    res.json({
        promotion: {
            offer: '10%',
            paymentType: 'Cartão Marisa',
            initialDate: '10/02/2018',
            finalDate: '30/03/2018'
        }
    });
});


/* GET products load more. */
router.get('/grid_stocks/:id', function (req, res, next) {
    res.json({
        details: [
            {
                StockOnHand: "6.000000000",
                StoreName: "LOJA 0010 - DIREITA",
                ERPPrice: "99.990000000"
            },
            {
                StockOnHand: "4.000000000",
                StoreName: "LOJA 0113 - PINHEIROS",
                ERPPrice: "99.990000000"
            },
            {
                StockOnHand: "3.000000000",
                StoreName: "LOJA 0133 - SH INTERLAGOS SP",
                ERPPrice: "119.950000000"
            },
            {
                StockOnHand: "3.000000000",
                StoreName: "LOJA 0515 - STO AMARO",
                ERPPrice: "99.950000000"
            },
            {
                StockOnHand: "1.000000000",
                StoreName: "LOJA 0579 - SH CAMPO LIMPO",
                ERPPrice: "119.950000000"
            },
            {
                StockOnHand: "1.000000000",
                StoreName: "LOJA 0767 SACOMA SP",
                ERPPrice: "119.950000000"
            }
        ]
    });
});


/* GET products. */
router.get('/:id', function (req, res, next) {
    res.json({
        products: [
            [
                {
                    "id": "10025718218",
                    "styleId": "10025718140",
                    "description": "BLUSA JVM GOLA BONECA, BEG, 36",
                    "color": "BEG",
                    "size": "36",
                    "order": "36",
                    "stock": "0.000000000",
                    "price": "9.990000000"
                },
                {
                    "id": "000000010025970968",
                    "styleId": "10025718140",
                    "description": "BLUSA JVM GOLA BONECA, BEG, PP",
                    "color": "BEG",
                    "size": "PP",
                    "order": "0",
                    "stock": "0.000000000",
                    "price": "9.990000000"
                },
                {
                    "id": "000000010025970982",
                    "styleId": "10025718140",
                    "description": "BLUSA JVM GOLA BONECA, BEG, M",
                    "color": "BEG",
                    "size": "M",
                    "order": "2",
                    "stock": "0.000000000",
                    "price": "9.990000000"
                }
            ],
            [
                {
                    "id": "10025718218",
                    "styleId": "10025718140",
                    "description": "BLUSA JVM GOLA BONECA, BEG, 36",
                    "color": "BEG",
                    "size": "36",
                    "order": "36",
                    "stock": "0.000000000",
                    "price": "9.990000000"
                },
                {
                    "id": "000000010025970968",
                    "styleId": "10025718140",
                    "description": "BLUSA JVM GOLA BONECA, BEG, PP",
                    "color": "BEG",
                    "size": "PP",
                    "order": "0",
                    "stock": "0.000000000",
                    "price": "9.990000000"
                },
                {
                    "id": "000000010025970982",
                    "styleId": "10025718140",
                    "description": "BLUSA JVM GOLA BONECA, BEG, M",
                    "color": "BEG",
                    "size": "M",
                    "order": "2",
                    "stock": "0.000000000",
                    "price": "9.990000000"
                }
            ]
        ]
    });
});

module.exports = router;