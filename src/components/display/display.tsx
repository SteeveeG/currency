import React, { useEffect, useState } from 'react'
import css from './display.module.css'
import Box from '../displayBox/displayBox'

const Display = () => {
  const [euroValue, setEuroValue] = useState<string>("");


  useEffect(() => {
    let isActive = true;

    const startScraping = async () => {
      while (isActive) {
        try {
          const response = await fetch('/api/scraped-data');
          const data: { scrapedData?: string; error?: string } = await response.json();
          setEuroValue(data.scrapedData || '');

          await new Promise(resolve => setTimeout(resolve, 5000));
        } catch (error) {
          console.error("error while calling data error:", error);
        }
      }

      if (isActive) startScraping();
    };

    startScraping();

    return () => { isActive = false };
  }, []);

  return (
    <div className={css.wrapper}>
      <div className={css.currencyWrapper}>
        <Box currency={"euro"} euroValue={"1,0000€"} isPositive={parseFloat((euroValue as string).replace(',', '.')) > 1.0000} />
        <p className={css.equals}>=</p>
        <Box currency={"dollar"} euroValue={euroValue as string + "$"} isPositive={parseFloat((euroValue as string).replace(',', '.')) < 1.0000} />
      </div>
      <p className={css.comparison}>1 Euro {(parseFloat((euroValue as string).replace(',', '.')) > 1.0000) ? ">" : "<" } 1 USD</p>
    </div>
  )
}

export default Display