export const validateCustomerForm = (formData) => {
  const errors = {};

  if (!formData.firstName.trim()) {
    errors.firstName = "First name is required";
  }

  if (!formData.lastName.trim()) {
    errors.lastName = "Last name is required";
  }

  if (!/^\d{10}$/.test(formData.mobile)) {
    errors.mobile = "Mobile must be 10 digits";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Invalid email address";
  }

  if (!/^\d{6}$/.test(formData.pincode)) {
    errors.pincode = "Invalid pincode";
  }

  if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNumber)) {
    errors.panNumber = "Invalid PAN number";
  }

  if (!/^\d{12}$/.test(formData.aadhaarNumber)) {
    errors.aadhaarNumber = "Invalid Aadhaar number";
  }

  return errors;
};
