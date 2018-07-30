const {Opportunity} = require('../models/opportunity');
module.exports = (app) => {

    app.get("/opportunities", (req,res) => {
        Opportunity.find().then((opportunities) => {
            res.send({
                opportunities,
                code: 200
            })
        }, (e) => {
            res.status(400).send(e);
        })
    })

    app.post("/opportunities", (req, res) => {
        let opp = new Opportunity({
            'name': req.body.name,
            'status': req.body.status,
            'demands': req.body.demands
        })

        opp.save().then((doc) => {
            res.send(doc);
        }, (e) => {
            res.status(400).send(e);
        })

    })

    app.put("/opportunity/:opp_id/demand/:demand_id", (req,res) => {
        Opportunity.findOneAndUpdate({
                    _id: req.params.opp_id,
                    "demands._id" : req.params.demand_id
               },{
                   "$set" : {
                       "demands.$" : req.body
                   }
                }, {
                    new: true
                }, (err, doc) => {
                    if(err) {
                        return handleError(err);
                    }
                    res.send(doc)
                })
        
        
    })

    app.put("/opportunity/:opp_id", (req, res) => {
        console.log(req.params.opp_id);
        Opportunity.findByIdAndUpdate(req.params.opp_id, req.body, {
            new: true
        },(err, doc) => {
           console.log("error is ",err);
           res.send(doc)

        })
    })
}