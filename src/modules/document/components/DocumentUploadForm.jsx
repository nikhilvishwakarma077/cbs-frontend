import { useState } from "react";

import { uploadDocument } from "../services/document.service";

function DocumentUploadForm({
  customerId,
  onSuccess,
}) {
  const [docType, setDocType] = useState("");
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!docType || !file) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await uploadDocument({
        customerId,
        docType,
        file,
      });

      setDocType("");
      setFile(null);

      if (onSuccess) {
        onSuccess();
      }

      alert("Document uploaded successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to upload document");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-zinc-200 bg-white p-6"
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold text-zinc-900">
          Upload Document
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Upload customer KYC documents
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <select
          value={docType}
          onChange={(e) =>
            setDocType(e.target.value)
          }
          className="rounded-xl border border-zinc-300 p-3"
        >
          <option value="">
            Select Document Type
          </option>

          <option value="AADHAAR">
            Aadhaar Card
          </option>

          <option value="PAN">
            PAN Card
          </option>
        </select>

        <input
          type="file"
          onChange={(e) =>
            setFile(e.target.files[0])
          }
          className="rounded-xl border border-zinc-300 p-3"
        />
      </div>

      <button
        disabled={loading}
        className="mt-5 rounded-xl bg-zinc-900 px-5 py-3 text-white"
      >
        {loading
          ? "Uploading..."
          : "Upload Document"}
      </button>
    </form>
  );
}

export default DocumentUploadForm;