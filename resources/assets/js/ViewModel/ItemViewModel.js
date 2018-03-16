import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import BaseViewModel from './BaseViewModel';
import ItemModel from '../Model/ItemModel';

var $this;
class ItemViewModel extends BaseViewModel {
    constructor(props){
        super(props);
        this.state = {productName: '', productPrice: '', value: '', items: ''};        
        this.itemmodel = new ItemModel();   
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        $this = this;
    }
    handleChange1(e){
        this.setState({
          productName: e.target.value
        })
    }
    handleChange2(e){
        this.setState({
          productPrice: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const products = {
          name: this.state.productName,
          price: this.state.productPrice
        }
        this.itemmodel.save(products, function(response){
          console.log(response);
          browserHistory.push('/display-item');
        });
    }
    getData($obj=null){
        this.itemmodel.getAll(function(response){
            $this.setState({ items: response.data });
            if($obj!=null){
                $obj.setState({ items: response.data });
            }
        });
    }
    deleteItemSuper(id, callback){
        $this.itemmodel.remove(id, function(response){            
            callback(response);            
        });        
    }
}

export default ItemViewModel;