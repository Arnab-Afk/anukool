import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import candidateData from './candidateData.json';

const CandidateBoardList = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    setRowData(candidateData.candidates);
  }, []);

  const [columnDefs] = useState([
    {
      field: 'name',
      headerName: 'Candidate Name',
      cellClass: 'font-medium text-gray-900',
      filter: false  // Disable filter
    },
    {
      field: 'field',
      headerName: 'Field',
      cellClass: 'text-gray-600',
      filter: 'agTextColumnFilter'    // Enable filter
    },
    {
      field: 'expertMatched',
      headerName: 'Expert Matched',
      cellClass: 'text-gray-600',
      filter: false  // Disable filter
    },
    {
      field: 'matchPercentage',
      headerName: 'Match %',
      cellRenderer: (params) => `${params.value}%`,
      cellClass: 'text-gray-600',
      filter: false  // Disable filter
    },
    {
      field: 'applyingFor',
      headerName: 'Applying for',
      cellClass: 'text-gray-600',
      filter: 'agTextColumnFilter'    // Enable filter
    },
    {
      field: 'boardAlloted',
      headerName: 'Board Alloted',
      cellRenderer: (params) => (
        <button className="bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded">
          {params.value}
        </button>
      ),
      filter: false  // Disable filter
    }
  ]);

  const defaultColDef = {
    sortable: true,
    filter: false  // Set default filter to false and override per column when needed
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Candidates - Board List</h1>
      <div className="ag-theme-alpine h-[400px] w-full">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={8}
          domLayout='autoHeight'
          headerClass="font-semibold text-green-600"
          rowClass="border-b border-gray-200"
        />
      </div>
      <div className="mt-2 text-sm text-gray-500">
        Showing data 1 to 8 of 256k entries
      </div>
    </div>
  );
};

export default CandidateBoardList;
