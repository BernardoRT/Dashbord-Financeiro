import './App.css'

function App() {
 return(
  <div className="container">
    <h1>Minhas Finanças</h1>

    <form className="finance-form"> 
      <input type="text" placeholder="Descrição (ex: Almoço)"/>
      <input type="number" placeholder="Valor (R$)"/>
      <input type="date"/> 

      <select>
        <option value="">Selecione uma Categoria</option>  
        <option value="">Alimentação</option>
        <option value="">Lazer</option>      
        <option value="">Trabalho</option>
      </select> 
    
      <button type="submit">Adicionar Transação</button>    
    </form>
  </div> 
 )
}

export default App