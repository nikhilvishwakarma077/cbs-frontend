function AccountBalanceCard({ balance }) {
  return (
    <div className="rounded-2xl bg-zinc-900 p-6 text-white">
      <p className="text-sm text-zinc-300">
        Available Balance
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        ₹ {balance?.toFixed(2)}
      </h2>
    </div>
  );
}

export default AccountBalanceCard;