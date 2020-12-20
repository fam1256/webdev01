const axios = require('axios');

axios
.get('http://api.exchangeratesapi.io/latest')
.then(function(res){
    console.log(`สกุลเงินแลกเปลี่ยน${res.data.base}`);
    console.log(`ต่อเงินไทย${res.data.rates.THB}`);
});