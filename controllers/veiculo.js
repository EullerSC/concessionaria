const Veiculo = require('../models/veiculo')


module.exports = app => {
    
    app.get('/veiculo/:id', (req, res) => {
         const id = parseInt(req.params.id);
         Veiculo.buscaPorId(id, res);

    });




    app.post('/veiculo', (req, res) => {
        const veiculo = req.body
        Veiculo.adiciona(veiculo, res)

    })


    app.patch('/veiculo/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
     
        Veiculo.altera(id, valores, res)
    })

    app.delete('/veiculo/:id', (req, res) => {
        const id = parseInt(req.params.id)
 
       Veiculo.deleta(id, res)
    })
    

}