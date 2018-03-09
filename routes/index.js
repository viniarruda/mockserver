let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
      servicesAvailable: [
          {Login: 'http://' + req.headers.host +'/v1/login/:usr/:password'},

          {CustomerByCpf: 'http://' + req.headers.host +'/v1/customer/:cpf'},
          {CustomerLastPurchaseByCpf: 'http://' + req.headers.host +'/v1/customer/last-purchase/:cpf'},
          {CustomerVouchersByCpf: 'http://' + req.headers.host +'/v1/customer/voucher-exchange/:cpf'},
          {CustomerCardInfoByCpf: 'http://' + req.headers.host +'/v1/customer/card-info/:cpf'},

          {ProductById: 'http://' + req.headers.host +'/v1/products/:id'},
          {ProductSimilarById: 'http://' + req.headers.host +'/v1/products/similar/:id'},
          {ProductPromotionById: 'http://' + req.headers.host +'/v1/products/promotion/:id'},
          {ProductGridStocksById: 'http://' + req.headers.host +'/v1/products/grid_stocks/:id'},
      ]
  });
});

module.exports = router;
