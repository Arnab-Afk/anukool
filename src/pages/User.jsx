import { useState, useEffect, useContext } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { FileUpload } from "../components/FileUpload.jsx"; // Import FileUpload component
import { Modal } from "@material-ui/core"; // Install @material-ui/core for modal
import UserContext from "../context/UserContext";
import axios from 'axios';

const User = () => {
  const [jobListings, setJobListings] = useState([]);
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [files, setFiles] = useState([]);

  const user = useContext(UserContext);

  useEffect(() => {
    // Dummy data for job listings
    // const dummyData = [
    //   { id: 1, title: "Software Engineer", company: "Tech Corp", location: "New York", postedDate: "2023-09-01" },
    //   { id: 2, title: "Product Manager", company: "Business Inc.", location: "San Francisco", postedDate: "2023-08-15" },
    //   { id: 3, title: "UX Designer", company: "Creative Studio", location: "Los Angeles", postedDate: "2023-07-21" },
    //   { id: 4, title: "Data Scientist", company: "Analytics LLC", location: "Boston", postedDate: "2023-06-30" }
    // ];

    fetch('http://localhost:8000/api/job', {
      method: 'GET'
    }).then(res => res.json())
    .then(data => setJobListings(data))
    .catch(err => console.error(err));

  }, []);

  const columns = [
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      width: 50
    },
    { headerName: "Job Title", field: "title", sortable: true, filter: true },
    { headerName: "Company", field: "company", sortable: true, filter: true },
    { headerName: "Location", field: "location", sortable: true, filter: true },
    { headerName: "Job Description", field: "description", sortable: false, filter: false },
    { headerName: "Posted Date", field: "postedDate", sortable: true, filter: true },
  ];

  const onSelectionChanged = (event) => {
    const selectedNodes = event.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    setSelectedJobs(selectedData);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = async () => {
    
    var formData = new FormData();
    formData.append('resume', files[0]);
    formData.append('jd', '...');
    const flaskResponse = await fetch(
      "http://localhost:5000/match",
      {
        method: 'POST',
        body: formData
      }
    ); // flask
    const { similarity, resume_str } = await flaskResponse.json();
    console.log(JSON.stringify({similarity: similarity, resume_str: resume_str, job_id: selectedJobs[0]._id, user_id: user._id}));

    const response = await axios.post('http://localhost:8000/api/applications/apply', {
      similarity: similarity,
      resume_str: resume_str,
      job_id: selectedJobs[0]._id,
      user_id: user._id
    });
    console.log("response");
    console.log(response);
    setIsModalOpen(false);
  };

  return (
    <div className="user-grid">
      {selectedJobs.length > 0 && (
        <button onClick={handleOpenModal} className="open-modal-btn">Upload File</button>
      )}
      <div className="ag-theme-alpine" style={{ height: 210, width: 875 }}>
        <AgGridReact
          rowData={jobListings}
          columnDefs={columns}
          rowSelection="multiple"
          onSelectionChanged={onSelectionChanged}
        />
      </div>
      <AgGridReact
          rowData={jobListings}
          columnDefs={columns}
          rowSelection="multiple"
          onSelectionChanged={onSelectionChanged}
        />
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <div className="modal-content">
          <FileUpload files={files} setFiles={setFiles}/>
        </div>
      </Modal>
      <style jsx>{`
        .open-modal-btn {
          margin-bottom: 10px;
          padding: 8px 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .modal-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          padding: 20px;
          box-shadow: 24px 24px 24px rgba(0, 0, 0, 0.25);
          border-radius: 8px;
        }
        .user-grid {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default User;
