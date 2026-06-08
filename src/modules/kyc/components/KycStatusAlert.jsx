function KycStatusAlert({ status }) {
  if (status === "VERIFIED") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-4">
        <p className="font-medium text-green-700">
          Customer KYC has been verified
        </p>
      </div>
    );
  }

  if (status === "REJECTED") {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-4">
        <p className="font-medium text-red-700">
          Customer KYC has been rejected
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-4">
      <p className="font-medium text-yellow-700">
        Customer KYC verification is pending
      </p>
    </div>
  );
}

export default KycStatusAlert;