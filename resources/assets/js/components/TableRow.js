import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import BaseComponent from '../Base/BaseComponent';
var $this;
class TableRow extends BaseComponent {
  constructor(props) {
      super(props);
      $this = this;
      this.handleSubmit = this.handleSubmit.bind(this);           
  }
  handleSubmit(event) {
    event.preventDefault();
    let uri = `items/${this.props.obj.id}`;
    this.model.deleteData(uri, function(res){
        browserHistory.push('/display-item');
        $this.props.getData();
    });      
  }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.price}
          </td>
          <td>
            <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
          <form onSubmit={this.handleSubmit}>
           <input type="submit" value="Delete" className="btn btn-danger"/>
         </form>
          </td>
        </tr>
    );
  }
}

export default TableRow;