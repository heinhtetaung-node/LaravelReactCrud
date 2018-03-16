import React, {Component} from 'react';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';
import BaseComponent from '../Base/BaseComponent';

let $this;
class EditItem extends BaseComponent {
  constructor(props) {
      super(props);
      this.state = {name: '', price: ''};
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      $this = this;
  }

  componentDidMount(){
    $this.model.getData(`items/${this.props.params.id}/edit`, function(res){
      $this.setState({ name: res.data.name, price: res.data.price });
    })
  }
  handleChange1(e){
    this.setState({
      name: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      price: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const products = {
      name: this.state.name,
      price: this.state.price
    }
    $this.model.updateData('items/'+this.props.params.id, products, function(res){
        browserHistory.push('/display-item');
    });
  }
  render(){
    return (
      <div>
        <h1>Update Item</h1>
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/display-item" className="btn btn-success">Return to Items</Link>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Item Name</label>
                <input type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.handleChange1} />
            </div>

            <div className="form-group">
                <label name="product_price">Item Price</label>
                <input type="text" className="form-control"
                  value={this.state.price}
                  onChange={this.handleChange2} />
            </div>

            <div className="form-group">
                <button className="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
    )
  }
}
export default EditItem;