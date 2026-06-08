function TransactionCard({ transaction }) {
  const isCredit =
    transaction.type === "CREDIT";

  return (
    <div className="rounded-xl border border-zinc-200 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold">
            {transaction.type}
          </h4>

          <p className="text-sm text-zinc-500">
            Transaction ID:
            {transaction.txnId}
          </p>
        </div>

        <div
          className={`font-bold ${
            isCredit
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          ₹ {transaction.amount}
        </div>
      </div>
    </div>
  );
}

export default TransactionCard;