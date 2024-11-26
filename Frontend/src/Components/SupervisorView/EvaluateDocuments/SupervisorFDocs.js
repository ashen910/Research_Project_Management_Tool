import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { FaFileDownload, FaFilePdf, FaFileUpload } from 'react-icons/fa'

const SupervisorFDocs = () => {
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
        <Button variant="warning" href="/SupervisorDashboard">
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

      </div>




    </div>
  )
}

export default SupervisorFDocs;