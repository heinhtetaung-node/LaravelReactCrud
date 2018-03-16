import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import ItemViewModel from '../ViewModel/ItemViewModel';
var $this;
class TableRow extends ItemViewModel {
  constructor(props) {
      super(props);
      $this = this;      
  }
  handleSubmit(event) {
      event.preventDefault();
      $this.props.deleteItem(this.props.obj.id);
      //this.deleteItem(this.props.obj.id, function(){
          
      //});    
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