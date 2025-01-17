import { useState } from 'react';
import countries from './constants/countries';
import countryTableSchema from './constants/countryTableSchema';
import { Country } from './interfaces/country';

function App() {
  const [data, setData] = useState(countries);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Country;
    direction: 'asc' | 'desc';
  } | null>(null);

  const onSort = (key: keyof Country) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    setSortConfig({ key, direction });
    setData(sortedData);
  };

  return (
    <div>
      <table>
        <thead>
          {countryTableSchema.map((column) => (
            <th
              style={{ cursor: 'pointer' }}
              key={column.keyName}
              onClick={() => onSort(column.keyName)}
            >
              {column.name}
            </th>
          ))}
        </thead>
        <tbody>
          {data.map((country) => (
            <tr key={country.country}>
              {countryTableSchema.map((column) => (
                <td key={`${country.country}-${column.keyName}`}>
                  {country[column.keyName]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;