import classes from './productDetails.module.css';
import ProductData from '../Utils/productdata';

const ProductDetails = (props) => {
    const colorOptions = props.data.colorOptions.map((item,pos)=>{
      const classArr = [classes.ProductImage]
      if (pos === props.currentPreviewImagePos){
        classArr.push(classes.SelectedProductImage);
      }
      return(
        <img key={pos} className={classArr.join('')} src={item.imageUrl} alt={item.styleName} onClick={ () => props.onColorOptionClick(pos)/>
      );
      
    })

    const featureList = props.data.featureList.map((item,pos)=>{
      const classArr = [classes.featureItem];

      if( pos ===props.currentSelectedFeature){
        classArr.push(classes.SelectedFeatureItem);
      }else if(pos === 0 && (props.showHeartBeatSection){
        classArr.push(classes.SelectedFeatureItem);
      }
      return(
        <button onClick={ () => props.onFeatureItemClick(pos)} key = {pos} className={classArr.join('')}>{item}</button>
      )
    })


    return(
        <div className={classes.ProductData}>
      <h1 className={classes.ProductTitle}>{props.data.title}</h1>
      <p className={classes.productDescription}>{props.Data.description}</p>
      <h3 className={classes.SectionHeading}>Select Color</h3>
      <div>
        {colorOptions}
        {/* <img className={[classes.ProductImage,classes.SelectedProductImage].join('')} src="https://imgur.com/PTgQlim.png" alt="Red Colored  Watch"/>
        <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Colored  Watch"/>
        <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple Colored  Watch"/> */}

      </div>
      <h3 className={classes.SectionHeading}>Features</h3>
      <div>
        {/* <button className={[classes.FeatureItem ,classes.SelectedFeatureItem].join('')}>Time</button>
        <button className={classes.FeatureItem}>Heart Rate</button> */}
        {featureList}
      </div>
      <button className={classes.PrimaryButton}>Buy Now</button>

    </div>
     

    )
}