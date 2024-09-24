import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../features/transactions/transactionsSlice";
import Loading from "../Loading";
import Transaction from "./Transaction";

export default function Transactions() {
  const dispatch = useDispatch();
  const { transactions, isLoading, isError, error } = useSelector(
    (state) => state.transaction
  );

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  //decide what to render
  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <p className="error">There was an error occured</p>;
  if (!isError && !isLoading && transactions?.length > 0) {
    content = transactions.map((transaction) => (
      <Transaction key={transaction.id} transaction={transaction} />
    ));
  }
  if (!isError && !isLoading && transactions?.length === 0) {
    content = <p>No Transaction Found</p>;
  }
  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </>
  );
}
