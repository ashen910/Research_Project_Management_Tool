import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import Button from 'react-bootstrap/Button'
import { useEffect } from "react";
import React from 'react'
import Table from 'react-bootstrap/Table';
import { FaFile, FaFileDownload } from 'react-icons/fa';


const DocMarking = () => {
  const [marksSupervisor, setMarksSupervisor] = useState([]);
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("")

  const history = useHistory();


  useEffect(() => {
    const fetchMarksSupervisor = async () => {
      const res = await fetch(`http://localhost:3000/marksSupervisor`);
      const data = await res.json();
      setMarksSupervisor(data);
      console.log("test", data);
    };
    fetchMarksSupervisor();
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
            <h1 className="gifJoin">All Documentation Marking Schemes <FaFile /></h1>
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
            {marksSupervisor.map((marksSupervisor) =>
              <tr key={marksSupervisor.id}>
                <td>{marksSupervisor.name}</td>
                <td>{marksSupervisor.description}</td>
                <td>{<a href={marksSupervisor.pdf} download>{marksSupervisor.name}</a>}</td>

              </tr>
            )
            }
          </tbody>
        </Table>

      </div>





    </div>
  )
}

export default DocMarking;