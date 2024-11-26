import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { FaFile, FaFileDownload, FaFilePowerpoint } from 'react-icons/fa';


const VivaMarking = () => {
  const [marksPannel, setMarksPannel] = useState([]);
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("")

  const history = useHistory();


  useEffect(() => {
    const fetchMarksPannel = async () => {
      const res = await fetch(`http://localhost:3000/marksPannel`);
      const data = await res.json();
      setMarksPannel(data);
      console.log("test", data);
    };
    fetchMarksPannel();
  }, []);

  return (
    <div>
      <br /><br /><br />
      <table width="100%" id="tble" >
        <Button variant="warning" href="/PannelMemberDashboard">
          <FaArrowAltCircleLeft /> &nbsp;
          Dashboard
        </Button>
      </table>
      <br />

      <div style={{ marginTop: 20, }} className='container'>

        <div id="containerJoin">
          <center>
            <h1 className="gifJoin">All Presentation Marking Schemes <FaFilePowerpoint /></h1>
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
            {marksPannel.map((marksPannel) =>
              <tr key={marksPannel.id}>
                <td>{marksPannel.name}</td>
                <td>{marksPannel.description}</td>
                <td>{<a href={marksPannel.pdf} download>{marksPannel.name}</a>}</td>

              </tr>
            )
            }
          </tbody>
        </Table>

      </div>



    </div>
  )
}

export default VivaMarking;