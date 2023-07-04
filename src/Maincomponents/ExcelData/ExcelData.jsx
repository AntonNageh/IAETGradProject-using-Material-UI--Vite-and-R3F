import { useState } from 'react';
import * as XLSX from 'xlsx';

function ExcelData() {
  const [data, setData] = useState(null);

  function handleFileChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      setData(json);
    };

    reader.onerror = (e) => {
      console.error(e);
    };
  }

  if (!data) {
    return (
      <div>
        <input className='text-white' type="file" onChange={handleFileChange} />
      </div>
    );
  }

  return (
    <table className='text-white md:mx-auto'>
      <thead>
        <tr>
          {data[0].map((cell, index) => (
            <th key={index}>{cell}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.slice(1).map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default ExcelData