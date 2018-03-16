import BaseModel from '../Base/BaseModel';

class ItemModel extends BaseModel{
	getItemLatest(callback) {
		this.getData('items/latest', function(response){
			callback(response);
		});
	}
}

export default ItemModel;