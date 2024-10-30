"use server"

import axios from 'axios';
import * as cheerio from 'cheerio';
import { extractPrice } from '../utils';

export async function scrapeProduct(url: string) {
  if (!url) return;

  try {
    // Fetch the product page
    const response = await axios.get(url, {
      timeout: 100000, // optional timeout
    });
    // const $ = cheerio.load(response.data);
    console.log(response.data)

    // Extract the product title
    const title = $('h1.-fs20.-pts.-pbxs').text().trim();
    const currentPrice = extractPrice(
      $('span.-b.-ubpt.-tal.-fs24.-prxs')
    );

    const originalPrice = extractPrice(
      $('-tal.-gy5.-lthr.-fs16.-pvxs.-ubpt')
    );

    // const outOfStock = $('#availability span').text().trim().toLowerCase() === 'currently unavailable';

    const image =
      $('img.-fw.-fh').attr('data-scr') || '{}';
    // ||
    // $('#landingImage').attr('data-a-dynamic-image') ||
    // '{}'

    const imageUrl = Object.keys(JSON.parse(image));

    const discountRate = $('span[data-disc]').text();

    // Construct data object with scraped information
    const data = {
      url,
      // currency: currency || '$',
      image: imageUrl[0],
      title,
      currentPrice: Number(currentPrice) || Number(originalPrice),
      originalPrice: Number(originalPrice) || Number(currentPrice),
      priceHistory: [],
      discountRate: Number(discountRate),
      // category: 'category',
      // reviewsCount: 100,
      // stars: 4.5,
      // isOutOfStock: outOfStock,
      lowestPrice: Number(currentPrice) || Number(originalPrice),
      highestPrice: Number(originalPrice) || Number(currentPrice),
      averagePrice: Number(currentPrice) || Number(originalPrice),
    }

    return data;
  } catch (error: any) {
    console.log(error);
  }
}