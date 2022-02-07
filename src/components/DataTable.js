import React from 'react';
import Table from 'react-bootstrap/Table';
import "../css/table.css"

const DataTable = (props) => (
    <Table responsive striped bordered hover id="table" variant="primary">
        <thead>
            <tr>
                <th>#</th>
                <th>RCS</th>
                <th>Date</th>
                <th>Message</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>raor2</td>
                <td>2/2/2022</td>
                <td>{props.type} Query 1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>raor3</td>
                <td>2/3/2022</td>
                <td>{props.type} Query 2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>raor4</td>
                <td>2/4/2022</td>
                <td>{props.type} Query 3</td>
            </tr>
        </tbody>
    </Table>
);

export default DataTable;