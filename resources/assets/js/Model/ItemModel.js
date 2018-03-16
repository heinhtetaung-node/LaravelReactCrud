import BaseModel from './BaseModel';

class ItemModel extends BaseModel{
	getItemLatest(callback) {
		this.getData('items/latest', function(response){
			callback(response);
		});
	}
	save(products, callback) {
		this.saveData('items', products, function(response){
          	callback(response);
        });
	}
	getAll(callback){
        this.getData('items', function(response){
            callback(response);
        });
    }
    remove(id, callback){
    	this.deleteData('items/'+id, function(response){
        	callback(response);
        });      
	}
}

export default ItemModel;