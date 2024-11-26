import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaFileDownload, FaFilePdf, FaFileUpload } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa'


const STopicRegDocs = () => {
  const [topicRegDoc, setTopicRegDoc] = useState([]);
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("")

  const history = useHistory();


  useEffect(() => {
    const fetchTemplates = async () => {
      const res = await fetch(`http://localhost:3000/topicRegDoc`);
      const data = await res.json();
      setTopicRegDoc(data);
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
            <h1 className="gifJoin">Topic Registration Documentations <FaFilePdf /></h1>
          </center>
        </div><br />
        <Table striped>
          <thead>
            <tr>
              <th>Group ID</th>
              <th>Uploaded Date</th>
              <th><FaFileDownload /></th>

            </tr>
          </thead>
          <tbody>
            {topicRegDoc.map((topicRegDoc) =>
              <tr key={topicRegDoc.id}>
                <td>{topicRegDoc.name}</td>
                <td>{topicRegDoc.date}</td>
                <td>{<a href={topicRegDoc.pdf} download>{topicRegDoc.name}</a>}</td>

              </tr>
            )
            }
          </tbody>
        </Table>

        <br />


        <div className="mb-2">
          <Button variant="warning" size="lg" href="/UploadTRD">
            Upload Topic Registration Document
            &nbsp;<FaFileUpload />
          </Button>{' '}
        </div>
      </div><br />
      <br />
      <br />
      <br />
      <br />






    </div>
  )
}

export default STopicRegDocs;