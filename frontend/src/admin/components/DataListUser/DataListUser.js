import React, { useEffect } from 'react'
import {useSelector, useDispatch } from "react-redux";
import { TableContainer, EditBtn, DeleteBtn } from '../DataListStyle';

const DataListUser = () => {
    const dispatch = useDispatch();

    const {  users } = useSelector((state) => state.users)

    console.log(users)
  return (
    <TableContainer>
    <tr>
        <th>Name</th>
        <th>City</th>
        <th>State</th>
        <th>Contact</th>
        <th>Action</th>
    </tr>
    {
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <EditBtn />
            <DeleteBtn />
          </td>
        </tr>
    }
</TableContainer>
  )
}

export default DataListUser