import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import ItemViewModel from '../ViewModel/ItemViewModel';
import { Link } from 'react-router';
import TableRow from './TableRow';
var $this;
class DisplayItem extends ItemViewModel {
    constructor(props) {
       super(props);
       this.getData();
    }
    componentDidMount(){
       $this = this;
       this.itemmodel.getItemLatest(function(response){
          console.log(response);
       });
    }
    tabRow(){
        if(this.state.items instanceof Array){
            return this.state.items.map(function(object, i){
                return <TableRow obj={object} key={i} deleteItem={$this.deleteItem} />;
            })
        }
    }
    deleteItem(id){
        $this.deleteItemSuper(id, function(){
            $this.getData($this);
        });        
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