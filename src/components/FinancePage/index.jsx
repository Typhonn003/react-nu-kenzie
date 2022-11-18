import "./style.css";
import { Header } from "./Header";
import { Form } from "./Form";
import { TotalMoney } from "./TotalMoney";
import { List } from "./List";

export function FinancePage({ SetEnterFinancePage, listTransactions, addTransaction, removeTransaction }) {

  const exitPage = () => SetEnterFinancePage(false);

  return (
    <div className="finance_page">
      <Header exitPage={exitPage} />

      <main className="container">
        <Form addTransaction={addTransaction} />
        <TotalMoney listTransactions={listTransactions} />
        <List listTransactions={listTransactions} removeTransaction={removeTransaction} />
      </main>
    </div>
  );
}
