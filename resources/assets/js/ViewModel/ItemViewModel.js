import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import BaseViewModel from './BaseViewModel';
import ItemModel from '../Model/ItemModel';
import DefineMap from 'can-define/map/map';

var $this;
// class ItemViewModel extends DefineMap {
//     constructor(props){
//         super(props);
//         // this.state = {productName: '', productPrice: '', value: '', items: ''};        
//         // this.itemmodel = new ItemModel();   
//         // this.handleChange1 = this.handleChange1.bind(this);
//         // this.handleChange2 = this.handleChange2.bind(this);
//         // this.handleSubmit = this.handleSubmit.bind(this);
//         // $this = this;
//         this.count = 1;
//     }
//     increment() {
//         return this.count++;
//     }
//     handleChange1(e){
//         alert("ei");
//         this.setState({
//           productName: e.target.value
//         })
//         console.log(this.state.productName)
//     }
//     handleChange2(e){
//         this.setState({
//           productPrice: e.target.value
//         })
//     }
//     handleSubmit(e){
//         e.preventDefault();
//         const products = {
//           name: this.state.productName,
//           price: this.state.productPrice
//         }
//         console.log(products);
//         this.itemmodel.save(products, function(response){
//           console.log(response);
//           browserHistory.push('/display-item');
//         });
//     }
//     getData($obj=null){
//         this.itemmodel.getAll(function(response){
//             $this.setState({ items: response.data });
//             if($obj!=null){
//                 $obj.setState({ items: response.data });
//             }
//         });
//     }
//     deleteItemSuper(id, callback){
//         $this.itemmodel.remove(id, function(response){            
//             callback(response);            
//         });        
//     }
// }

const ItemViewModel = DefineMap.extend({
    count: 'number',
    productName: {
        default: ''
    },
    productPrice: {
        default: ''
    },
    itemmodel: {
        default: new ItemModel(),
    },
    increment: function() {
      return this.count++;
    },
    handleSubmit: function(e){
        alert("ei");
    },
    handleChange1: function(e){
        this.productName = e.target.value;        
    },
    handleChange2: function(e){
        this.productPrice = e.target.value;
    },
    handleSubmit:function(e){
        e.preventDefault();
        const products = {
            name: this.productName,
            price: this.productPrice
        }
        this.itemmodel.save(products, function(response){
            console.log(response);
            browserHistory.push('/display-item');
        });
    }
});

  
export default ItemViewModel;