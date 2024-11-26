import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaFileDownload, FaFilePdf, FaFileUpload } from 'react-icons/fa'
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const SFinalDocs = () => {
  const [finalDoc, setFinalDoc] = useState([]);
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("")

  const history = useHistory();


  useEffect(() => {
    const fetchTemplates = async () => {
      const res = await fetch(`http://localhost:3000/finalDoc`);
      const data = await res.json();
      setFinalDoc(data);
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
            <h1 className="gifJoin">Final Documentations <FaFilePdf /></h1>
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
            {finalDoc.map((finalDoc) =>
              <tr key={finalDoc.id}>
                <td>{finalDoc.name}</td>
                <td>{finalDoc.date}</td>
                <td>{<a href={finalDoc.pdf} download>{finalDoc.name}</a>}</td>

              </tr>
            )
            }
          </tbody>
        </Table>

        <br />

        <div className="mb-2">
          <Button variant="warning" size="lg" href="/UploadFinalDoc">
            Upload Final Document
            &nbsp;<FaFileUpload />
          </Button>{' '}
        </div>


      </div><br /><br /><br />




    </div>
  )
}

export default SFinalDocs;