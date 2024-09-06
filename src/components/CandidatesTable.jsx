import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import candidateData from './candidateData.json';
import axios from 'axios';

const CandidateBoardList = () => {
  const [rowData, setRowData] = useState([]);
  const [columnDefss] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/api/applications')
      .then((response) => {
        console.log(response.data);
        setRowData(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  , []);

  

  const [columnDefs] = useState([
    {
      field: 'user.name',
      headerName: 'Candidate Name',
      cellClass: 'font-medium text-gray-900',
      filter: false  // Disable filter
    },
    {
      field: 'user.email',
      headerName: 'Email',
      cellClass: 'text-gray-600',
      filter: 'agTextColumnFilter'    // Enable filter
    },
    
    {
      field: 'candiditate_relevancy',
      headerName: 'Match %',
      cellRenderer: (params) => `${params.value}%`,
      cellClass: 'text-gray-600',
      filter: false  // Disable filter
    },
    {
      field: 'jobpost.title',
      headerName: 'Applying for',
      cellClass: 'text-gray-600',
      filter: 'agTextColumnFilter'    // Enable filter
    },
    {
      field: 'jobpost.description',
      headerName: 'Job Description',
      cellClass: 'text-gray-600',
      filter: 'agTextColumnFilter'    // Enable filter
    },
    {
      field: 'jobpost.createdAt',
      headerName: 'Time',
      cellRenderer: (params) => Date(params.value).toString().toLocaleUpperCase(),
      cellClass: 'text-gray-600',
      filter: 'agTextColumnFilter'    // Enable filter
    }
    
  ]);

  const defaultColDef = {
    sortable: true,
    filter: false  // Set default filter to false and override per column when needed
  };

  return (
    <div className="p-4 -mt-14">
      <h1 className="text-2xl scale-125 font-bold mb-14">Candidates Relevancy score</h1>
      <div className="ag-theme-alpine scale-125 h-auto w-full">
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
