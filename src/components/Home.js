import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Table, Button } from 'react-bootstrap';



export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <h3>CRUD Operations</h3>
        <ProductConsumer>
          {(value) => {
            return (
              <Table size="sm" variant="dark" striped bordered hover>
                <tbody>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Information</th>
                    <th>Company</th>
                    <th>Actions</th>
                  </tr>
                  <tr>
                    <td><input type="text" value={value.title} onChange={(e)=>{value.updateValue(e,"title")}}/></td>
                    <td><input type="text" value={value.info} onChange={(e)=>{value.updateValue(e,"info")}}/></td>
                    <td><input type="text" value={value.price} onChange={(e)=>{value.updateValue(e,"price")}}/></td>
                    <td><input type="text" value={value.company} onChange={(e)=>{value.updateValue(e,"company")}}/></td>
                    <td><Button size="sm" onClick={()=>{value.onSave(value.id)}}>{value.id?"Save":"Add new row"}</Button></td>
                    </tr>
                
                
                  {value.Alldata.map(product => (
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>{product.info}</td>
                      <td>{product.company}</td>
                      <td>
                        <Button size="sm" variant="primary" onClick={() => value.onEdit(product.id)}>
                          Edit
                        </Button>|
                        <Button size="sm" variant="danger" onClick={() => value.onDelete(product.id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}

