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
        },
        viewAttForm: (req,res)=>{
          let {id} = req.params;

          let produtos = [
            {
               id:1,
               nome:"chinela",
               preco:10
            },
            {
              id:2,
              nome:"kenner",
              preco:20
            }
          ]
            res.render('editarProduto', {produto:produtos[id]})
        }

    }

module.exports = produtoController; 