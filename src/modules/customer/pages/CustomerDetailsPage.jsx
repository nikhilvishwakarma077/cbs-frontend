import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCustomerById } from "../services/customer.service";
import CustomerStatusBadge from "../components/CustomerStatusBadge";

import KycVerificationCard from "../../kyc/components/KycVerificationCard";
import KycStatusAlert from "../../kyc/components/KycStatusAlert";

import DocumentUploadForm from "../../document/components/DocumentUploadForm";
import DocumentList from "../../document/components/DocumentList";

import useDocuments from "../../document/hooks/useDocuments";

import AccountCreateCard from "../../account/components/AccountCreateCard";
import AccountCard from "../../account/components/AccountCard";

import { getCustomerAccounts } from "../../account/services/account.service";

function CustomerDetailsPage() {
  const { id } = useParams();

  const [customer, setCustomer] =
    useState(null);

  const [accounts, setAccounts] =
    useState([]);

  const {
    documents,
    loading: documentsLoading,
    fetchDocuments,
  } = useDocuments(id);

  const fetchCustomer =
    async () => {
      try {
        const data =
          await getCustomerById(id);

        setCustomer(data);
      } catch (error) {
        console.error(error);
      }
    };

  const fetchAccounts =
    async () => {
      try {
        const data =
          await getCustomerAccounts(id);

        setAccounts(data);
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    fetchCustomer();
    fetchAccounts();
  }, [id]);

  if (!customer) {
    return (
      <p>Loading customer...</p>
    );
  }

  return (
    <div className="space-y-8">
      {/* HEADER */}

      <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900">
              {customer.firstName}
              {" "}
              {customer.lastName}
            </h1>

            <p className="mt-2 text-zinc-500">
              Customer ID:
              {" "}
              {
                customer.customerId
              }
            </p>
          </div>

          <CustomerStatusBadge
            status={
              customer.status
            }
          />
        </div>

        <div className="mt-6">
          <KycStatusAlert
            status={
              customer.status
            }
          />
        </div>
      </div>

      {/* CUSTOMER INFO */}

      <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-zinc-900">
            Customer
            Information
          </h2>

          <p className="mt-1 text-zinc-500">
            Personal and contact
            information
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl bg-zinc-50 p-5">
            <h3 className="mb-4 font-semibold">
              Personal
            </h3>

            <div className="space-y-2">
              <p>
                DOB:
                {" "}
                {
                  customer.dateOfBirth
                }
              </p>

              <p>
                Gender:
                {" "}
                {
                  customer.gender
                }
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-zinc-50 p-5">
            <h3 className="mb-4 font-semibold">
              Contact
            </h3>

            <div className="space-y-2">
              <p>
                Mobile:
                {" "}
                {
                  customer.mobile
                }
              </p>

              <p>
                Email:
                {" "}
                {
                  customer.email
                }
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-zinc-50 p-5">
            <h3 className="mb-4 font-semibold">
              Address
            </h3>

            <div className="space-y-2">
              <p>
                {
                  customer.address
                }
              </p>

              <p>
                {
                  customer.city
                }
                ,
                {" "}
                {
                  customer.state
                }
              </p>

              <p>
                {
                  customer.pincode
                }
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-zinc-50 p-5">
            <h3 className="mb-4 font-semibold">
              KYC Details
            </h3>

            <div className="space-y-2">
              <p>
                PAN:
                {" "}
                {
                  customer.panNumber
                }
              </p>

              <p>
                Aadhaar:
                {" "}
                {
                  customer.aadhaarNumber
                }
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* KYC & DOCUMENTS */}

      <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-zinc-900">
            KYC &
            Documents
          </h2>

          <p className="mt-1 text-zinc-500">
            Verification and
            document management
          </p>
        </div>

        <div className="space-y-8">
          <KycVerificationCard
            customerId={
              customer.customerId
            }
            status={
              customer.status
            }
            onSuccess={
              fetchCustomer
            }
          />

          <DocumentUploadForm
            customerId={
              customer.customerId
            }
            onSuccess={
              fetchDocuments
            }
          />

          <DocumentList
            documents={
              documents
            }
            loading={
              documentsLoading
            }
          />
        </div>
      </div>

      {/* ACCOUNTS */}

      <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-zinc-900">
            Banking Accounts
          </h2>

          <p className="mt-1 text-zinc-500">
            Accounts linked to
            this customer
          </p>
        </div>

        {accounts.length === 0 && (
          <AccountCreateCard
            customer={
              customer
            }
            onSuccess={
              fetchAccounts
            }
          />
        )}

        {accounts.length > 0 && (
          <div className="space-y-6">
            {accounts.map(
              (account) => (
                <AccountCard
                  key={
                    account.accountId
                  }
                  account={
                    account
                  }
                  onAccountUpdate={
                    fetchAccounts
                  }
                />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomerDetailsPage;