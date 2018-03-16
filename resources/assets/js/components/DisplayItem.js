import React, {Component} from 'react';
import { Link } from 'react-router';
import TableRow from './TableRow';
import BaseComponent from '../Base/BaseComponent';
import ItemModel from '../Models/ItemModel';

var $this;
class DisplayItem extends BaseComponent {
    constructor(props) {
       super(props);
       this.state = {value: '', items: ''};    
       this.itemmodel = new ItemModel();   
    }
    componentDidMount(){
       $this = this;
       this.getData();
       this.itemmodel.getItemLatest(function(response){
          console.log(response);
       });
    }
    getData(){
       $this.model.getData('items', function(response){
         $this.setState({ items: response.data });
       });
    }
    tabRow(){
        if(this.state.items instanceof Array){
            return this.state.items.map(function(object, i){
                return <TableRow obj={object} key={i} getData={$this.getData} />;
            })
        }
    }

    render(){
        return (
            <div>
                <h1>Items</h1>

                <div className="row">
                  <div className="col-md-10"></div>
                  <div className="col-md-2">
                    <Link to="/add-item">Create Item</Link>
                  </div>
                </div><br />

                <table className="table table-hover">
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Item Name</td>
                        <td>Item Price</td>
                        <td>Actions</td>
                    </tr>
                    </thead>
                    <tbody>
                      {this.tabRow()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default DisplayItem;
