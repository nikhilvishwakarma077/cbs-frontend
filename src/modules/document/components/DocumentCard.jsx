function DocumentCard({ document }) {
  console.log(document.fileUrl)
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900">
            {document.docType}
          </h3>

          <p className="mt-1 text-sm text-zinc-500">
            Document ID: {document.docId}
          </p>
        </div>

        <div className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
          Uploaded
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-zinc-600">
          File Name:
        </p>

        <p className="break-all text-sm font-medium text-zinc-900">
          {document.fileName || "N/A"}
        </p>
      </div>

      <div className="mt-5">
        {document.fileUrl ? (
          <a
            href={`${document.fileUrl}#toolbar=0`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center
              rounded-xl
              bg-blue-600
              px-4 py-2
              text-sm font-medium
              text-white
              transition
              hover:bg-blue-700
            "
          >
            View Document
          </a>
        ) : (
          <div
            className="
              inline-flex items-center
              rounded-xl
              bg-zinc-100
              px-4 py-2
              text-sm font-medium
              text-zinc-500
            "
          >
            Document Not Available
          </div>
        )}
      </div>
    </div>
  );
}

export default DocumentCard;