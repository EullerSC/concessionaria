class Tabelas {
    init(conexao) {
        this.conexao = conexao
        
        this.criarTabelas()
        this.criarRegistros()

    }
 
    criarTabelas() {
        const sql = ` CREATE TABLE if not exists veiculo (
            id int NOT NULL AUTO_INCREMENT, 
            vendedor varchar(100) NOT NULL,
            comprador varchar(100) NOT NULL,
            carro varchar(100) NOT NULL,
            anoCarro varchar(10) NOT NULL,
            marcaCarro varchar(50) NOT NULL,
            corCarro varchar(50) NOT NULL,data datetime NOT NULL, 
            dataCriacao datetime NOT NULL, 
            PRIMARY KEY(id))`
 
            
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela criada com sucesso')
            }
        })
    }

    criarRegistros(){

        const sqlInsert =  [`INSERT INTO veiculo (id,vendedor,comprador,carro,anoCarro,marcaCarro,corCarro,data,dataCriacao) values (default, 'Marcos', 'Geovana', 'Celta','2009','Chevrolet','Cinza', '2022/06/03', '2022/05/31');`,
        
        `INSERT INTO veiculo (id,vendedor,comprador,carro,anoCarro,marcaCarro,corCarro,data,dataCriacao) values (default, 'Maria', 'Juliana', 'Virtus','2019','Volkswagen','Prata','2022/06/04', '2022/05/31');`,
        
        `INSERT INTO veiculo (id,vendedor,comprador,carro,anoCarro,marcaCarro,corCarro,data,dataCriacao) values (default, 'Rogrigo', 'Rafael', 'Hilux','2022','Toyata','Branco','2022/06/05', '2022/05/31');`,
       
        `INSERT INTO veiculo (id,vendedor,comprador,carro,anoCarro,marcaCarro,corCarro,data,dataCriacao) values (default, 'Iury', 'José', 'Fiesta','2021','Ford','Vermelho','2022/06/06', '2022/05/31');`,
        
        `INSERT INTO veiculo (id,vendedor,comprador,carro,anoCarro,marcaCarro,corCarro,data,dataCriacao) values (default, 'Roberto', 'João', 'QQ','2017','Chery','Azul','2022/06/07', '2022/05/31');`,
        
       
        `INSERT INTO veiculo (id,vendedor,comprador,carro,anoCarro,marcaCarro,corCarro,data,dataCriacao) values (default, 'Elisson', 'Marlene', 'Pálio','2018','Fiat','Branco','2022/06/08', '2022/05/31');`,
        
        `INSERT INTO veiculo (id,vendedor,comprador,carro,anoCarro,marcaCarro,corCarro,data,dataCriacao) values (default, 'Marcelo', 'Patricia', 'Prisma','2022','Chevrolet','Prata','2022/06/09', '2022/05/31');`,
        
        `INSERT INTO veiculo (id,vendedor,comprador,carro,anoCarro,marcaCarro,corCarro,data,dataCriacao) values (default, 'Euller', 'Gabriela', 'Honda','2020','Civic','Preto','2022/06/10', '2022/05/31');`,
        
        `INSERT INTO veiculo (id,vendedor,comprador,carro,anoCarro,marcaCarro,corCarro,data,dataCriacao) values (default, 'Nicolai', 'Beatriz', 'Compass','2021','Jeep','Cinza','2022/06/11', '2022/05/31');`,
        
        `INSERT INTO veiculo (id,vendedor,comprador,carro,anoCarro,marcaCarro,corCarro,data,dataCriacao) values (default, 'Julio', 'Thaislane', 'Onix','2019','Chevrolet','Prata','2022/06/12', '2022/05/31');`
    
    
     ]
        this.conexao.query('SELECT COUNT(*) AS count FROM veiculo', (erro, result) => {

           const totalRegistros = result[0].count
               
           if(erro){
            console.log(erro)
           }else{
               if(totalRegistros > 0){
                console.log('Registros iniciais já inseridos. Total de registros: ' + totalRegistros);
               }else{
                    for(let i=0;i<sqlInsert.length;i++){
                        this.conexao.query(sqlInsert[i], erroInsert => {
                            if(erroInsert) {
                                console.log(erroInsert)
                            }else if(i == 9){
                                console.log('10 Inserts inseridos com sucesso!')
                            }
                        })               
                    }    
               }
           }
        })
    }
}
 
module.exports = new Tabelas