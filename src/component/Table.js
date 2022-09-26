import React from 'react'

const Table = (props) => {
  return props?.decimal?.map(item => (
    <table class="table">
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>{item?.input}</td>
        <td>{item?.decimal}</td>
      </tr>
    </tbody>
  </table>
  ))
}

export default Table