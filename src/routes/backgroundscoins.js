const express = require("express");
const router = new express.Router();
const { Op, where } = require('sequelize');

router.get('/:id', async(req, res) => {
    try {
        const coins = await req.orm.BackgroundsCoin.findAll({
            where: {
                background_id: req.params.id
            },
            include: {
                model: req.orm.Coin
            }
        });

        if(coins != []){
            let response = []
            for(let i = 0; i < coins.length; i++){
                let coin = {
                    id: coins[i].coin_id,
                    name: coins[i].Coin.name,
                    value: coins[i].Coin.value,
                    value_string: coins[i].Coin.value_string,
                    amount: coins[i].amount,
                    option: coins[i].option,
                    item: 'coin'
                }
                response.push(coin);
            }

            res.status(200).json(response);
        }
        else {
            res.status(404).json({ error: 'Coins not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

module.exports = router;