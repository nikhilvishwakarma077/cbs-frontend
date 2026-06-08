function NomineeCard({ nominee }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5">
      <h3 className="text-lg font-bold">
        {nominee.firstName} {nominee.lastName}
      </h3>

      <div className="mt-4 space-y-2 text-sm">
        <p>Relation: {nominee.relation}</p>

        <p>Mobile: {nominee.mobile}</p>

        <p>Age: {nominee.age}</p>

        <p>
          Share: {nominee.sharePercentage}%
        </p>
      </div>
    </div>
  );
}

export default NomineeCard;