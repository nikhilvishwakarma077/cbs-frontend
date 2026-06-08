import CustomerForm from "../components/CustomerForm";

function CreateCustomerPage() {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold text-zinc-900">
        Create Customer
      </h1>

      <p className="text-zinc-600">
        Register a new banking customer
      </p>

      <CustomerForm />
    </div>
  );
}

export default CreateCustomerPage;
