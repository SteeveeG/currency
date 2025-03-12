import axios from 'axios';

export async function scrapeWebsite(url: string, cssClass: string): Promise<string> {
     try {
          const response = await axios.get(url);        
          const regex = new RegExp(`<div\\s+class=["']${cssClass}["'][^>]*>(.*?)<\\/div>`, 'i');
          const match = regex.exec(response.data);
          if (match && match[1]) {
               const value = match[1].trim();
               return value;
             } else {
               return "0";
          }  
     } catch (error) {
          return "0";
     }
}