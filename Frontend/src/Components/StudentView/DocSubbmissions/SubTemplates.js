import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaFileDownload, FaFilePowerpoint, FaFileUpload } from 'react-icons/fa';

const SubTemplates = () => {
  const [templates, setTemplates] = useState([]);
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("")

  const history = useHistory();


  useEffect(() => {
    const fetchTemplates = async () => {
      const res = await fetch(`http://localhost:3000/templates`);
      const data = await res.json();
      setTemplates(data);
      console.log("test", data);
    };
    fetchTemplates();
  }, []);

  return (
    <div>
      <br /><br /><br />
      <table width="100%" id="tble" >
        <Button variant="warning" href="/StudentDashboard">
          <FaArrowAltCircleLeft /> &nbsp;
          Dashboard
        </Button>
      </table>
      <br />


      <div style={{ marginTop: 20, }} className='container'>

        <div id="containerJoin">
          <center>
            <h1 className="gifJoin">All Documentation Templates & Presentation Guidelines</h1>
          </center>
        </div><br />

        <Table striped>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th><FaFileDownload /></th>

            </tr>
          </thead>
          <tbody>
            {templates.map((templates) =>
              <tr key={templates.id}>
                <td>{templates.name}</td>
                <td>{templates.description}</td>
                <td>{<a href={templates.pdf} download>{templates.name}</a>}</td>

              </tr>
            )
            }
          </tbody>
        </Table>

        <br />

        <div className="mb-2">
          <Button variant="warning" size="lg" href="/SFinalDocs">
            Upload Final Document
            &nbsp;<FaFileUpload />
          </Button>{' '}<br /><br />
          <Button variant="warning" size="lg" href="/STopicRegDocs">
            Upload Topic Registration Document
            &nbsp;<FaFileUpload />
          </Button>
        </div>


      </div>


    </div>
  )
}

export default SubTemplates;