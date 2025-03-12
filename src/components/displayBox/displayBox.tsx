import React  from 'react';
import css from './DisplayBox.module.css';
 

interface DisplayBoxProps {
  currency: string,
  euroValue: string,
  isPositive: boolean
}

const DisplayBox: React.FC<DisplayBoxProps> = ({ currency, euroValue, isPositive}) => {

 
return (
  <div className={isPositive ? css.positiveWrapper : css.negativeWrapper}>
    <p>{euroValue}</p>
    <p className={css.currency}>{currency}</p>
  </div>
);
}

export default DisplayBox;


