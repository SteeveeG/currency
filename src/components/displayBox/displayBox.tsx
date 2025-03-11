import React, {useEffect, useState} from 'react'
import css from './displayBox.module.css'
import axios from 'axios';
import * as cheerio from 'cheerio';

function displayBox({currency}){
     const [euroValue, setEuroValue] = useState<string | null>(null);

  useEffect(() => {
    const fetchEuroValue = async () => {
      try {
        const url = "website";
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        // Element mit der Klasse 'YMlKec fxKbKc' finden
        const euroValueElement = $('div.classname');
        const value = euroValueElement.text();

        setEuroValue(value);
      } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
      }
    };

    fetchEuroValue();
  }, []);
   
     
  return (
      <div className={css.wrapper}>
          
          <p>1,0000</p>
          <p>{currency}</p>

     </div>
  )
}

export default displayBox