import { useState } from "react";

import { withdrawAmount } from "../services/transaction.service";

function WithdrawForm({
  accountId,
  onSuccess,
}) {
  const [amount, setAmount] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const withdrawValue =
      Number(amount);

    if (withdrawValue <= 0) {
      alert("Enter valid amount");
      return;
    }

    try {
      await withdrawAmount({
        accountId,
        amount: withdrawValue,
      });

      setAmount("");

      onSuccess?.();
    } catch (error) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
          "Withdrawal failed"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-zinc-200 p-5"
    >
      <h3 className="mb-4 text-lg font-bold">
        Withdraw
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

      <button className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-white">
        Withdraw Money
      </button>
    </form>
  );
}

export default WithdrawForm;