import useContractForm from '../hooks/useContractForm';

const FormContract = () => {
  const { formData, errors, handleChange, handleSubmit } = useContractForm();

  return (
    <div className="h-full flex items-center justify-center md:p-6 bg-gray-50">
      <div className="w-full bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">CONTRACT FORM</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Cột 1: Thông tin khách hàng */}
          <div className="space-y-4">
            <div>
              <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 uppercase">
                Client Name
              </label>
              <input
                type="text"
                id="clientName"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 hover:border-blue-300"
                placeholder="Enter client name"
                required
              />
            </div>
            <div>
              <label htmlFor="clientEmail" className="block text-sm font-medium text-gray-700 uppercase">
                Client Email
              </label>
              <input
                type="email"
                id="clientEmail"
                name="clientEmail"
                value={formData.clientEmail}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 hover:border-blue-300"
                placeholder="Enter client email"
                required
              />
            </div>
            <div>
              <label htmlFor="clientPhone" className="block text-sm font-medium text-gray-700 uppercase">
                Client Phone
              </label>
              <input
                type="tel"
                id="clientPhone"
                name="clientPhone"
                value={formData.clientPhone}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 hover:border-blue-300"
                placeholder="Enter client phone"
              />
            </div>
            <div>
              <label htmlFor="clientAddress" className="block text-sm font-medium text-gray-700 uppercase">
                Client Address
              </label>
              <input
                type="text"
                id="clientAddress"
                name="clientAddress"
                value={formData.clientAddress}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 hover:border-blue-300"
                placeholder="Enter client address"
              />
            </div>
          </div>

          {/* Cột 2: Thông tin hợp đồng */}
          <div className="space-y-4">
            <div>
              <label htmlFor="contractNumber" className="block text-sm font-medium text-gray-700 uppercase">
                Contract Number
              </label>
              <input
                type="text"
                id="contractNumber"
                name="contractNumber"
                value={formData.contractNumber}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 hover:border-blue-300"
                placeholder="Enter contract number"
                required
              />
            </div>
            <div>
              <label htmlFor="contractDate" className="block text-sm font-medium text-gray-700 uppercase">
                Contract Date
              </label>
              <input
                type="date"
                id="contractDate"
                name="contractDate"
                value={formData.contractDate}
                onChange={handleChange}
                className={`mt-1 w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 hover:border-blue-300 ${errors.contractDate ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {errors.contractDate && (
                <p className="mt-1 text-sm text-red-500">{errors.contractDate}</p>
              )}
            </div>
            <div>
              <label htmlFor="contractValue" className="block text-sm font-medium text-gray-700 uppercase">
                Contract Value
              </label>
              <input
                type="number"
                id="contractValue"
                name="contractValue"
                value={formData.contractValue}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 hover:border-blue-300"
                placeholder="Enter contract value"
                required
              />
            </div>
            <div>
              <label htmlFor="contractDescription" className="block text-sm font-medium text-gray-700 uppercase">
                Contract Description
              </label>
              <textarea
                id="contractDescription"
                name="contractDescription"
                value={formData.contractDescription}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 hover:border-blue-300"
                placeholder="Enter contract description"
                rows={4}
              />
            </div>
          </div>

          {/* Nút Submit */}
          <div className="col-span-1 md:col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              disabled={!!errors.contractDate}
              className={`px-6 py-2 rounded-md shadow-md text-white font-semibold transition duration-200 ${
                errors.contractDate
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
              }`}
            >
              Submit Contract
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContract;