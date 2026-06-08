import DocumentCard from "./DocumentCard";

function DocumentList({ documents, loading }) {
  if (loading) {
    return (
      <div className="rounded-2xl bg-white p-6">
        <p>Loading documents...</p>
      </div>
    );
  }

  if (documents.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-8 text-center">
        <p className="text-zinc-500">
          No documents uploaded yet
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {documents.map((document) => (
        <DocumentCard
          key={document.docId}
          document={document}
        />
      ))}
    </div>
  );
}

export default DocumentList;