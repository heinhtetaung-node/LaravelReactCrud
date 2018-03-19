import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import reactViewModel from 'react-view-model';
import ItemViewModel from '../ViewModel/ItemViewModel';
import BaseViewModel from '../ViewModel/BaseViewModel';

const AppComponent = reactViewModel(ItemViewModel, (vm) => {
    return (
        
        <div>
            <h1>Create An Item</h1>
            
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Item Name: {vm.productName} </label>
                        <input type="text" className="form-control" onChange={vm.handleChange1} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Item Price:</label>
                        <input type="text" className="form-control col-md-6" onChange={vm.handleChange2} />
                    </div>
                </div>
            </div>
            <br />
            <div className="form-group">
                <button type="button" className="btn btn-primary" onClick={ (e) => vm.handleSubmit(e) }>Add Item</button>
            </div>
            
        </div>
    );
});

class CreateItem extends BaseViewModel {
    constructor(props){
        super(props);                
    }
    render() {
        return (
            <AppComponent count={0} productName="" />
        )
    }
}
export default CreateItem;
