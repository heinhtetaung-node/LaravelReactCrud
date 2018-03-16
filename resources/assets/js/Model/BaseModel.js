import React, {Component} from 'react';
import config from '../config';

class BaseModel{
	getData(url, callback) {
		axios.get(config.baseurl+url).then(response => {
         	callback(response);
       	}).catch(function (error) {
         	console.log(error);
       	})
	}
	deleteData(url, callback){
		axios.delete(config.baseurl+url).then(response => {
			callback(response);			
		}).catch(function(error){
			console.log(error);
		})
	}
	updateData(url, data, callback){
		axios.patch(config.baseurl+url, data).then((response) => {
          	callback(response);
    	}).catch(function(error){
			console.log(error);
		})
	}
	saveData(url, data, callback){
		axios.post(config.baseurl+url, data).then((response) => {
          	callback(response);
    	}).catch(function(error){
			console.log(error);
		})
	}
}

export default BaseModel;