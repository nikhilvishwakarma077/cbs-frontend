import TransactionCard from "./TransactionCard";

function TransactionList({
  transactions,
  loading,
}) {
  if (loading) {
    return <p>Loading transactions...</p>;
  }

  if (transactions.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-zinc-300 p-6 text-center">
        No transactions found
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {transactions.map((transaction) => (
        <TransactionCard
          key={transaction.txnId}
          transaction={transaction}
        />
      ))}
    </div>
  );
}

export default TransactionList;