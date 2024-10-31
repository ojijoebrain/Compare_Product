"use server"

import axios from 'axios';
import * as cheerio from 'cheerio';
import { extractPrice } from '../utils';

export async function scrapeProduct(url: string) {
  if (!url) return;

  try {
    // Fetch the product page
    const response = await axios.get(url, {
      timeout: 1000000, // optional timeout
    });
    const $ = cheerio.load(response.data);
    // console.log(response.data)

    // Extract the product title
    const title = $('h4._24849_2Ymhg').text().trim();
    const currentPrice = extractPrice($('div._678e4_e6nqh > div'));
    // const currentPrice = currentPrice0.substring(0, 6);


    const originalPrice = extractPrice($('div._10344_3PAla > div'));
    // const originalPrice = originalPrice0.substring(0, 6);

    const image = $('picture img[data-expand="100"]').attr('src') || '{}';

    const imageUrl = Object.keys(JSON.parse(image));

    // Construct data object with scraped information
    const data = {
      url,
      image: image,
      title,
      currentPrice: Number(currentPrice) || Number(originalPrice),
      originalPrice: Number(originalPrice) || Number(currentPrice),
      priceHistory: [],
      lowestPrice: Number(currentPrice) || Number(originalPrice),
      highestPrice: Number(originalPrice) || Number(currentPrice),
      averagePrice: Number(currentPrice) || Number(originalPrice),
    }
    console.log(data)
    return data;
  } catch (error: any) {
    console.log(error);
  }
}