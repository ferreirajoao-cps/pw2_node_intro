const Ideia = require('../models/Ideia')
const User = require('../models/User')

const { Op } = require('sequelize')

module.exports = class IdeiaController{
    static async dashboard(req, res){
        const userId = req.session.userId

        const user = await User.findOne({
            where:{id: userId},
             include: Ideia,
             plain:true
        })

        const ideias = user.Ideia.map((result) => result.dataValues)

        let emptyIdeias = true

        if(ideia.length > 0){
            emptyIdeias
        }

        console.log(ideias)
        console.log(emptyIdeias)

        res.render('ideias/dashboard')
    }
}