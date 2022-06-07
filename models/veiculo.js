const conexao = require('../controllers/infraestrutura/conexao')
const moment = require('moment')

class Veiculo {
    adiciona(veiculo, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(veiculo.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')

        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const nomeEhValido = veiculo.vendedor.length >= 5

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'vendedor',
                valido: nomeEhValido,
                mensagem: 'Vendedor deve ter pelo menos cinco caracteres'
            }
        ]


        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        

        if (existemErros) {
            res.status(400).json(erros)
        } else {

            const veiculoDatado = { ...veiculo, dataCriacao, data }
            const sql = 'INSERT INTO veiculo SET ?'

            conexao.query(sql, veiculoDatado, (erro, resultados) => {
                if (erro) {
                    res.status(400).json(erro)

                } else {
                    res.status(201).json(resultados)

                }
            })

        }
    }

    lista(res) {
        const sql = 'SELECT * FROM veiculo'
 
        conexao.query(sql, (erro, resultados) => { 
            if(erro) {
                res.status(400).json(erro)
            } else { 
                res.status(200).json(resultados)
       
            }
        })
    }


    buscaPorId(id, res) {
        const sql = `SELECT * FROM veiculo WHERE id=${id}`;
     
        conexao.query(sql, (erro, resultados) => { 
            const atendimento = resultados[0];
            if(erro) { 
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
           
        })
    }


    altera(id, valores, res) {

        if(valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }     
 
        const sql = 'UPDATE veiculo SET ? WHERE id=?'
     
        conexao.query(sql, [valores, id], (erro, resultados) => { 
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
    })

}


deleta(id, res) {
    const sql = 'DELETE FROM veiculo WHERE id=?'

    conexao.query(sql, id, (erro, resultados) => {
        if(erro) {
            res.status(400).json(erro)
        } else {
            res.status(200).json({id})
        }
    })
}











}
                

        
    










module.exports = new Veiculo