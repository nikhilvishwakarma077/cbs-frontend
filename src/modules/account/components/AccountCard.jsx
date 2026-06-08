import { useEffect, useState } from "react";

import AccountStatusBadge from "./AccountStatusBadge";

import NomineeForm from "../../nominee/components/NomineeForm";
import NomineeList from "../../nominee/components/NomineeList";

import DepositForm from "../../transaction/components/DepositForm";
import WithdrawForm from "../../transaction/components/WithdrawForm";
import TransferForm from "../../transaction/components/TransferForm";
import TransactionList from "../../transaction/components/TransactionList";

import { getNomineesByAccount } from "../../nominee/services/nominee.service";
import { getTransactionsByAccount } from "../../transaction/services/transaction.service";

function AccountCard({
  account,
  onAccountUpdate,
}) {
  const [activeTab, setActiveTab] =
    useState("overview");

  const [nominees, setNominees] =
    useState([]);

  const [transactions, setTransactions] =
    useState([]);

  const [nomineeLoading, setNomineeLoading] =
    useState(true);

  const [
    transactionLoading,
    setTransactionLoading,
  ] = useState(true);

  const fetchNominees = async () => {
    try {
      setNomineeLoading(true);

      const data =
        await getNomineesByAccount(
          account.accountId
        );

      setNominees(data);
    } catch (error) {
      console.error(error);
    } finally {
      setNomineeLoading(false);
    }
  };

  const fetchTransactions =
    async () => {
      try {
        setTransactionLoading(true);

        const data =
          await getTransactionsByAccount(
            account.accountId
          );

        setTransactions(data);
      } catch (error) {
        console.error(error);
      } finally {
        setTransactionLoading(false);
      }
    };

  useEffect(() => {
    fetchNominees();
    fetchTransactions();
  }, [account.accountId]);

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      {/* HEADER */}

      <div className="border-b border-zinc-200 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-bold text-zinc-900">
              {account.accountType}
              {" "}
              Account
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Account ID:
              {" "}
              {account.accountId}
            </p>
          </div>

          <AccountStatusBadge
            status={account.status}
          />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-zinc-50 p-4">
            <p className="text-sm text-zinc-500">
              Account Number
            </p>

            <p className="mt-2 text-lg font-semibold tracking-wider">
              {account.accountNumber}
            </p>
          </div>

          <div className="rounded-xl bg-zinc-50 p-4">
            <p className="text-sm text-zinc-500">
              Current Balance
            </p>

            <p className="mt-2 text-2xl font-bold">
              ₹
              {" "}
              {account.balance?.toFixed(
                2
              )}
            </p>
          </div>
        </div>
      </div>

      {/* TABS */}

      <div className="border-b border-zinc-200">
        <div className="flex flex-wrap">
          {[
            "overview",
            "nominees",
            "operations",
            "transactions",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() =>
                setActiveTab(tab)
              }
              className={`px-5 py-4 text-sm font-medium capitalize transition ${
                activeTab === tab
                  ? "border-b-2 border-zinc-900 text-zinc-900"
                  : "text-zinc-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}

      <div className="p-6">
        {activeTab ===
          "overview" && (
          <div className="space-y-4">
            <div className="rounded-xl bg-zinc-50 p-5">
              <p className="text-sm text-zinc-500">
                Account Type
              </p>

              <p className="mt-2 font-semibold">
                {
                  account.accountType
                }
              </p>
            </div>

            <div className="rounded-xl bg-zinc-50 p-5">
              <p className="text-sm text-zinc-500">
                Status
              </p>

              <p className="mt-2 font-semibold">
                {account.status}
              </p>
            </div>
          </div>
        )}

        {activeTab ===
          "nominees" && (
          <div>
            <NomineeForm
              accountId={
                account.accountId
              }
              onSuccess={
                fetchNominees
              }
            />

            <div className="mt-8">
              <NomineeList
                nominees={nominees}
                loading={
                  nomineeLoading
                }
              />
            </div>
          </div>
        )}

        {activeTab ===
          "operations" && (
          <div className="grid gap-5 xl:grid-cols-3">
            <DepositForm
              accountId={
                account.accountId
              }
              onSuccess={() => {
                fetchTransactions();
                onAccountUpdate?.();
              }}
            />

            <WithdrawForm
              accountId={
                account.accountId
              }
              onSuccess={() => {
                fetchTransactions();
                onAccountUpdate?.();
              }}
            />

            <TransferForm
              accountId={
                account.accountId
              }
              onSuccess={() => {
                fetchTransactions();
                onAccountUpdate?.();
              }}
            />
          </div>
        )}

        {activeTab ===
          "transactions" && (
          <TransactionList
            transactions={
              transactions
            }
            loading={
              transactionLoading
            }
          />
        )}
      </div>
    </div>
  );
}

export default AccountCard;