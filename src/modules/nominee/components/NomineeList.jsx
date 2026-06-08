import NomineeCard from "./NomineeCard";

function NomineeList({
  nominees,
  loading,
}) {
  if (loading) {
    return <p>Loading nominees...</p>;
  }

  if (nominees.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-zinc-300 p-6 text-center">
        No nominees added
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {nominees.map((nominee) => (
        <NomineeCard
          key={nominee.nomineeId}
          nominee={nominee}
        />
      ))}
    </div>
  );
}

export default NomineeList;