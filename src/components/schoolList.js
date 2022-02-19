/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Card, Container, Table } from "react-bootstrap";
const SchoolList = () => {
  const [schools, setSchool] = useState([]);

  useEffect(() => {
    getSchool();
  }, []);

  const getSchool = async () => {
    const schools = await axios.get("http://localhost:5000/siswa");
    setSchool(schools.data);
  };

  const deleteSchool = async (id) => {
    await axios.delete(`http://localhost:5000/siswa/${id}`);
    getSchool();
  };

  return (
    <Container>
      <main className="pt-3" style={{ marginTop: "60px" }}>
        <div className="row">
          <div className="col-md-12">
            <h4 style={{textAlign:"center"}}>DAFTAR SISWA</h4>
          </div>
        </div>
        <Card.Header className="text-white" style={{backgroundColor:"rgb(0, 174, 255)"}}>
          <h6 className="pt-2">
            <i class="fas fa-plus-circle"></i>{" "}
            <Link to="/addSchool" className="text-light noUnderline">
              Tambahkan Siswa Baru
            </Link>
          </h6>
        </Card.Header>
        <Table hover style={{backgroundColor:"rgb(0, 174, 255)"}} className="text-center">
          <thead>
            <tr>
              <th style={{color:"white"}}>No</th>
              <th style={{color:"white"}}>Nama</th>
              <th style={{color:"white"}}>Kelas</th>
              <th style={{color:"white"}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {schools.map((school, index) => (
              <tr key={school.id}>
                <td style={{color:"white"}}>{index + 1}</td>
                <td style={{color:"white"}}>{school.nama}</td>
                <td style={{color:"white"}}>{school.kelas}</td>
                <td>
                  <Link to={`/EditSchool/${school.id}`}>
                    <Button variant="outline-light" size="sm">
                      Edit
                    </Button>
                  </Link>{" "}
                  <Button
                    onClick={() => deleteSchool(school.id)}
                    className="button"
                    variant="outline-light"
                    size="sm"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </main>
    </Container>
  );
};

export default SchoolList;
