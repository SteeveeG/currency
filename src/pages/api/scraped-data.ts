import type { NextApiRequest, NextApiResponse } from 'next';
import { scrapeWebsite } from '../../../lib/scraper';  

type Data = {
  scrapedData?: string;
  error?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const url = process.env.WEBSITE_URL as string;
  const cssClass = process.env.CLASS_NAME as string;

  try {
    const data = await scrapeWebsite(url, cssClass);
    res.status(200).json({ scrapedData: data });
  } catch (error) {
    console.error('Error fetching scraped data:', error);
    res.status(500).json({ error: 'Failed to fetch scraped data' });
  }
}