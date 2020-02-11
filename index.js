const request = require('request-promise');

const getData = async function(){
    const json = await request({
        url: 'https://www.thecocktaildb.com/api/json/v2/9973533/random.php',
        json: true
    });

    console.log(json);
};

(async function(){
    try{
        await getData();
    } catch (e) {
        console.log('our error', e);
    }
    debugger;
})();