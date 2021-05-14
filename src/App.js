import React, {component} from 'react';
import classes from './App.module.css'
import Topbar from './Topbar/Topbar'
import ProductDetails from './ProductDetails/ProductDetails'
import ProductPreview from './ProductPreview/ProductPreview'
import { render } from '@testing-library/react'
import productData from './Utils/Productdata'
class App extends component {
  state = {
    productData : ProductData,
    currentPreviewImagepos:0,
    showHeartBeatSection:false,
    currentSelectedFeature:0,
  }
}
 onColorOptionClick = (pos) => {
  //  const updatedPreviewImage = this.state.ProductData.colorOptions[pos].imageUrl
  this.setState({currentPreviewImagepos:pos});
 }
 onFeatureItemClick = (pos) => {
  // let updatedState = false;
  // if(pos=== 1){
  //   updatedState = true;
  // }

   this.setState({currentSelectedFeature: pos});
  
 }

  render() {
    return (
      <div className="App">
         <Topbar />
     
  
       <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
             <ProductPreview  currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} currentSelectedFeature={this.state.currentSelectedFeature}
           />
          </div>
                                 
      
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.ProductData} onColorOptionClick ={this.onColorOptionClick}   currentPreviewImagePos={this.state.currentPreviewImagePos}
            onFeatureItemClick={this.onFeatureItemClick} currentSelectedFeature={this.state.currentSelectedFeature}/>
          </div>
       </div>
      </div>
    );
  }
  




export default App;
