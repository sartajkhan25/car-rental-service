import React, { useState } from 'react';
import DateRangePicker from '../component/DateRangePicker';
import CarCard from '../component/CarCard';
import { fetchAvailableCars } from '../services/api';

interface CarAvailability {
  brand: string;
  model: string;
  available: number;
  totalPrice: string;
  averagePrice: string;
}

const Availability: React.FC = () => {
  const [dateRange, setDateRange] = useState({ from: '', to: '' });
  const [loading, setLoading] = useState(false);
  const [cars, setCars] = useState<CarAvailability[]>([]);
  const [error, setError] = useState('');

  const handleCheckAvailability = async () => {
    setError('');
    setLoading(true);
    try {
      const { from, to } = dateRange;

      if (!from || !to) {
        setError('Please select both start and end dates.');
        setLoading(false);
        return;
      }

      const data = await fetchAvailableCars({ from, to });
      setCars(data);
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8 mt-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 border-b pb-2">🚗 Check Car Availability</h1>

      <div className="mb-4">
        <DateRangePicker value={dateRange} onChange={setDateRange} />
      </div>

      <button
        className={`mt-2 px-6 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-md font-semibold shadow hover:shadow-lg transition duration-200 ${
          loading ? 'opacity-70 cursor-not-allowed' : ''
        }`}
        onClick={handleCheckAvailability}
        disabled={loading}
      >
        {loading ? 'Checking...' : '🔍 Check Availability'}
      </button>

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded border border-red-300">
          ⚠️ {error}
        </div>
      )}

      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2">
        {cars.map((car, index) => (
          <CarCard
            key={index}
            brand={car.brand}
            model={car.model}
            available={car.available}
            totalPrice={car.totalPrice}
            averagePrice={car.averagePrice}
          />
        ))}
      </div>

      {!loading && cars.length === 0 && (
        <p className="mt-8 text-gray-500 italic text-center">No cars found for the selected dates.</p>
      )}
    </div>
  );
};

export default Availability;
