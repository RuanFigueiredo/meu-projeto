let produtoController = {
        viewform: (req,res)=>{
            return res.render('produto');
        },
        salvarForm: (req,res)=>{
          let {nomeProduto, precoProduto} = req.body;
          res.send("o produto:"+nomeProduto+"custa:"+precoProduto+"R$");   
          res.redirect('/produtos/sucesso');

        },
        sucesso:(req,res)=>{
           return res.render('sucesso');
        }

    }

module.exports = produtoController; 