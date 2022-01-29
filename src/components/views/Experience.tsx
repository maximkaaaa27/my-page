import React from "react";
import { Table } from "react-bootstrap";

export const Experience = () => (

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Год</th>
          <th>Компания</th>
          <th>Должность</th>
          <th>Описание</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2021 - н.в.</td>
          <td>MZNM Studio</td>
          <td>Frontend-разработчик</td>
          <td>HTML, SASS, React-Redux, Bootstrap, Firebase</td>
        </tr>
        <tr>
          <td>2014-2020</td>
          <td>ИП Дрютов М.А.</td>
          <td>Frontend-разработчик</td>
          <td>HTML, CSS3, JavaScript(ES5/ES6)</td>
        </tr>
        <tr>
          <td>2008-2011</td>
          <td>АО "КОНЦЕРН "СОЗВЕЗДИЕ"</td>
          <td>Приборист КИПиА</td>
          <td>Delphi, WASM</td>
        </tr>
      </tbody>
    </Table>
  )
