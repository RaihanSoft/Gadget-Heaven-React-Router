import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ProductBarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetching the data from the API (or you can replace with local data as shown above)
    fetch('../gadget.json') 
      .then(response => response.json())
      .then(data => {
        // Transform data to only include necessary fields for the chart
        const chartData = data.map(product => ({
          name: product.product_title,
          price: product.price,
          rating: product.rating
        }));
        setData(chartData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-2xl font-semibold text-center mb-4">Product Prices and Ratings</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#8884d8" name="Price ($)" />
          <Bar dataKey="rating" fill="#82ca9d" name="Rating" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductBarChart;
