let produtoController = {
        viewform: (req,res)=>{
            return res.render('produto');
        },
        salvarForm: (req,res)=>{
            return res.send(req.body);
        }

    }

module.exports = produtoController; 