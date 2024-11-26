import { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaFileUpload } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

import React from 'react'

const SupervisorDoc = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pdf, setPdf] = useState([]);

  const upload = async (e) => {
    try {
      e.preventDefault();

      const data = new FormData();

      data.append("name", name);
      data.append("description", description);
      for (var x = 0; x < pdf.length; x++) {
        data.append("uploaded_Image", pdf[x]);
      }

      const res = await fetch(`http://localhost:3000/marksSupervisor`, {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        alert("File Upload Successfully");
        setName("");
        setDescription("");
        setPdf(null);
        history("/SupervisorDoc");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div><br /><br /><br />
      <table width="100%" id="tble" >
        <Button variant="warning" href="/AdminDashboard">
          <FaArrowAltCircleLeft /> &nbsp;
          Dashboard
        </Button>
      </table>
      <br /><br /><br />


      <center><h1>Upload Documentation Marking Schemes For Supervisor</h1></center>
      <center>
        <br />
        {[
          'dark',
        ].map((variant) => (
          <Card bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '50rem' }}
            className="mb-2">

            <form onSubmit={upload} encType="multipart/form-data" >

              <div className="form-group">
                <input type="text" placeholder="Name" value={name} required
                  onChange={e => { setName(e.target.value) }}
                  className="form-control" />
              </div>

              <div className="form-group">
                <input type="file" multiple required filename="uploaded_Image"
                  className="form-control-file"
                  onChange={e => { setPdf(e.target.files) }} />
              </div>

              <Button type="submit" variant="light" size="lg" >
                <b>Upload</b>
                &nbsp;<FaFileUpload />
              </Button>
            </form><br />
          </Card>
        ))}

      </center>

    </div>
  )
}

export default SupervisorDoc;