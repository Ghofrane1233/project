var productModel = require('./ProductModel');

module.exports.getDataFromDBService = () => {

    return new Promise(function checkURL(resolve, reject) {
 
        productModel.find({}, function returnData(error, result) {
 
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
 
    });
 
 }

 module.exports.createProductDBService = (productDetails) => {


    return new Promise(function myFn(resolve, reject) {
 
        var productModelData = new productModel();
 
        productModelData.name = productDetails.name;
        productModelData.prix = productDetails.prix;
        productModelData.desc = productDetails.desc;

        productModelData.save(function resultHandle(error, result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    });
 
 }


 module.exports.updateProductDBService = (id,productDetails) => {     
    console.log(productDetails);
    return new Promise(function myFn(resolve, reject) {
        productModel.findByIdAndUpdate(id,productDetails, function returnData(error, result) {
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }
        });
 
    });
 }

 module.exports.removeProductDBService = (id) => { 
    return new Promise(function myFn(resolve, reject) {
        productModel.findByIdAndDelete(id, function returnData(error, result) {
 
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }          
        });
    });
 
 }