import { useState } from "react";

import useVerifyKyc from "../hooks/useVerifyKyc";

function KycVerificationCard({
  customerId,
  status,
  onSuccess,
}) {
  const { verifyKyc, loading } = useVerifyKyc();

  const [message, setMessage] = useState("");

  const handleVerifyKyc = async () => {
    try {
      const response = await verifyKyc(customerId);

      setMessage(response);

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      setMessage("Failed to verify KYC");
    }
  };

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-zinc-900">
          KYC Verification
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Verify customer identity and documents
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <span className="text-sm font-medium text-zinc-500">
            Current Status
          </span>

          <p className="mt-1 text-lg font-semibold text-zinc-900">
            {status}
          </p>
        </div>

        {message && (
          <div className="rounded-lg bg-zinc-100 p-3 text-sm font-medium text-green-500">
            {message}
          </div>
        )}

        {status !== "VERIFIED" && (
          <button
            onClick={handleVerifyKyc}
            disabled={loading}
            className="w-full rounded-xl bg-zinc-900 px-5 py-3 font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Verify KYC"}
          </button>
        )}
      </div>
    </div>
  );
}

export default KycVerificationCard;