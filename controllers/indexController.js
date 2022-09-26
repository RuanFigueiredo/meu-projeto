let indexController = {
    viewContato:(req,res)=>{
        let{nome}= req.query;
        res.render('contato ', {nomeUser:nome})
    },
    confirmarContato: (req,res)=>{
        let {nome, email} = req.query;
        res.send("olá, recebido com sucesso!"+nome)/redirect
    }
}

module.exports = indexController; 