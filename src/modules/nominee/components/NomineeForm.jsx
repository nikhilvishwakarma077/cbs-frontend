import { useState } from "react";

import { addNominee } from "../services/nominee.service";

function NomineeForm({
  accountId,
  onSuccess,
}) {
  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      relation: "",
      mobile: "",
      age: "",
      sharePercentage: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addNominee({
        accountId,
        ...formData,
      });

      setFormData({
        firstName: "",
        lastName: "",
        relation: "",
        mobile: "",
        age: "",
        sharePercentage: "",
      });

      onSuccess?.();
    } catch (error) {
      console.error(error);
      alert("Failed to add nominee");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-zinc-200 bg-white p-6"
    >
      <h2 className="mb-5 text-xl font-bold">
        Add Nominee
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="firstName"
          required
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="rounded-xl border p-3"
        />

        <input
          name="lastName"
          required
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="rounded-xl border p-3"
        />

        <input
          name="relation"
          required
          placeholder="Relation"
          value={formData.relation}
          onChange={handleChange}
          className="rounded-xl border p-3"
        />

        <input
          name="mobile"
          required
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="rounded-xl border p-3"
        />

        <input
          name="age"
          required
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="rounded-xl border p-3"
        />

        <input
          name="sharePercentage"
          required
          type="number"
          placeholder="Share %"
          value={formData.sharePercentage}
          onChange={handleChange}
          className="rounded-xl border p-3"
        />
      </div>

      <button
        className="mt-5 rounded-xl bg-zinc-900 px-5 py-3 text-white"
      >
        Add Nominee
      </button>
    </form>
  );
}

export default NomineeForm;