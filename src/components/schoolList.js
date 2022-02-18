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
    const schools = await axios.get("http://localhost:4000/school");
    setSchool(schools.data);
  };

  const deleteSchool = async (id) => {
    await axios.delete(`http://localhost:4000/school/${id}`);
    getSchool();
  };

  return (
    <Container>
      <main className="pt-3" style={{ marginTop: "60px" }}>
        <div className="row">
          <div className="col-md-12">
            <h4>TAMBAH SEKOLAH</h4>
          </div>
        </div>
        <Card.Header className="bg-dark text-white">
          <h6 className="pt-2">
            <i class="fas fa-plus-circle"></i>{" "}
            <Link to="/addSchool" className="text-light noUnderline">
              Tambahkan Data baru
            </Link>
          </h6>
        </Card.Header>
        <Table striped bordered hover variant="dark" className="text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {schools.map((school, index) => (
              <tr key={school.id}>
                <td>{index + 1}</td>
                <td>{school.nama}</td>
                <td>{school.alamat}</td>
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
