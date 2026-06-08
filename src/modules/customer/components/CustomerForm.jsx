import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createCustomer } from "../services/customer.service";
import { validateCustomerForm } from "../validators/customer.validator";

const initialState = {
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  dateOfBirth: "",
  gender: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  panNumber: "",
  aadhaarNumber: "",
};

function CustomerForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateCustomerForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log("error")
      return;
    }

    try {
      setLoading(true);

      const payload = {
        ...formData,
        email: formData.email.trim().toLowerCase(),
        panNumber: formData.panNumber.trim().toUpperCase(),
      };

      await createCustomer(payload);

      navigate("/customers");
    } catch (error) {
      console.error(error);
      alert("Failed to create customer");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 rounded-2xl bg-white p-6 shadow-sm"
    >
      <div>
        <h2 className="mb-4 text-xl font-bold">Personal Information</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <input name="firstName" placeholder="First Name" onChange={handleChange} className="rounded-lg border p-3" />
          <input name="lastName" placeholder="Last Name" onChange={handleChange} className="rounded-lg border p-3" />
          <input type="date" name="dateOfBirth" onChange={handleChange} className="rounded-lg border p-3" />
          
          <select name="gender" onChange={handleChange} className="rounded-lg border p-3">
            <option value="">Select Gender</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-bold">Contact Information</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <input name="mobile" placeholder="Mobile Number" onChange={handleChange} className="rounded-lg border p-3" />
          <input name="email" placeholder="Email Address" onChange={handleChange} className="rounded-lg border p-3" />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-bold">Address Information</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <textarea name="address" placeholder="Address" onChange={handleChange} className="rounded-lg border p-3 md:col-span-2" />
          <input name="city" placeholder="City" onChange={handleChange} className="rounded-lg border p-3" />
          <input name="state" placeholder="State" onChange={handleChange} className="rounded-lg border p-3" />
          <input name="pincode" placeholder="Pincode" onChange={handleChange} className="rounded-lg border p-3" />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-bold">Government IDs</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <input name="panNumber" placeholder="PAN Number" onChange={handleChange} className="rounded-lg border p-3" />
          <input name="aadhaarNumber" placeholder="Aadhaar Number" onChange={handleChange} className="rounded-lg border p-3" />
        </div>
      </div>
 
      <button
        disabled={loading}
        type="submit"
        className="rounded-lg bg-zinc-900 px-6 py-3 text-white"
      >
        {loading ? "Creating..." : "Create Customer"}
      </button>
    </form>
  );
}

export default CustomerForm;
