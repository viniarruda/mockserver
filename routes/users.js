var express = require('express');
var router = express.Router();

/* GET customer last purchase. */
router.get('/last-purchase/:cpf', function (req, res, next) {
    res.json({
        store: 'Paulista',
        storeId: '1300023',
        date: '19/02/2018',
        total: 316.98888888,
        receipt: '25598216500000031698',
        products: [
            {
                id: '00000000002',
                description: 'Vestido PP ROS'
            },
            {
                id: '10010000005',
                description: 'Jaqueta GG PRT'
            },
            {
                id: '10000000088',
                description: 'Salto 36 BRC'
            }
        ]
    });
});

/* GET customer vouchers. */
router.get('/voucher-exchange/:cpf', function (req, res, next) {
    res.json({vouchers:
        [
            {
                store: 'Paulista',
                storeId: '1300023',
                initialDate: '19/02/2018',
                finalDate: '20/03/2018',
                price: 316.98888888,
                status: 'aberto'
            },
            {
                store: 'Augusta',
                storeId: '1300055',
                initialDate: '18/02/2018',
                finalDate: '20/02/2018',
                price: 32.98888888,
                status: 'fechado'
            },
            {
                store: 'Paulista',
                storeId: '1300023',
                initialDate: '19/02/2018',
                finalDate: '20/03/2018',
                price: 58.98888888,
                status: 'aberto'
            }
        ]
    });
});

/* GET customer by cpf. */
router.get('/card-info/:cpf', function (req, res, next) {
    res.json({
        cardInfo: {
            cardNumber: '****-****-****-1245',
            avaibleLimit: 50.55,
            totalLimit: 500,
            invoicePrice: 449.45,
            expireDate: '12/03/2018'
        }
    });
});

/* GET customer by cpf. */
router.get('/:cpf', function (req, res, next) {
    res.json({
        cpf: req.param('cpf'),
        updated_at: "2018-01-22T20:06:20Z",
        full_name: "vvvv",
        gender: null,
        birthdate: null,
        email: "teste@marisa.com.br",
        full_address: null,
        address_type: null,
        address_name: null,
        address_number: null,
        address_complement: null,
        address_neighborhood: null,
        zipcode: null,
        city: null,
        state: null,
        ddd_1: "",
        phone_1: "11111111111",
        phone_type_1: null,
        ddd_2: null,
        phone_2: null,
        phone_type_2: null,
        ddd_3: null,
        phone_3: null,
        phone_type_3: null
    });
});

module.exports = router;
