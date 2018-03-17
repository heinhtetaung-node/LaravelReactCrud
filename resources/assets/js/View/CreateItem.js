import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import reactViewModel from 'react-view-model';
import ItemViewModel from '../ViewModel/ItemViewModel';
import BaseViewModel from '../ViewModel/BaseViewModel';

const AppComponent = reactViewModel(ItemViewModel, (vm) => {
    return (
        
        <div onClick={ () => vm.increment() }>
            Count: {vm.count} (Click Me)
        </div>
  
        // <div>
        //     <h1>Create An Item</h1>
        //     <form onSubmit={ () => vm.handleSubmit() }>
        //         <div className="row">
        //             <div className="col-md-6">
        //                 <div className="form-group">
        //                     <label>Item Name: {vm.productName} </label>
        //                     <input type="text" className="form-control" onChange={vm.handleChange1} />
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col-md-6">
        //                 <div className="form-group">
        //                     <label>Item Price:</label>
        //                     <input type="text" className="form-control col-md-6" onChange={vm.handleChange2} />
        //                 </div>
        //             </div>
        //         </div>
        //         <br />
        //         <div className="form-group">
        //             <button className="btn btn-primary">Add Item</button>
        //         </div>
        //     </form>
        // </div>
    );
});

class CreateItem extends BaseViewModel {
    constructor(props){
        super(props);                
    }
    render() {
        return (
            <AppComponent count={0} />
        )
    }
}
export default CreateItem;
