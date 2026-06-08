import { useState } from "react";

import { depositAmount } from "../services/transaction.service";

function DepositForm({
  accountId,
  onSuccess,
}) {
  const [amount, setAmount] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const depositAmountValue =
      Number(amount);

    if (depositAmountValue < 1000) {
      alert(
        "Minimum deposit amount is ₹1000"
      );
      return;
    }

    try {
      await depositAmount({
        accountId,
        amount: depositAmountValue,
      });

      setAmount("");

      onSuccess?.();
    } catch (error) {
      console.error(error);
      alert("Deposit failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-zinc-200 p-5"
    >
      <h3 className="mb-4 text-lg font-bold">
        Deposit
      </h3>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value)
        }
        className="w-full rounded-lg border p-3"
      />

      <button className="mt-4 rounded-lg bg-green-600 px-4 py-2 text-white">
        Deposit Money
      </button>
    </form>
  );
}

export default DepositForm;