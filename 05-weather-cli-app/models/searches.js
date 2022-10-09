import fs from 'fs';

import axios from 'axios';

import { DEFAULT_LANGUAGE } from '../settings/settings.js';
import { MAPBOX_DEFAULT_LIMIT } from '../settings/mapbox.js';
import {
  DEFAULT_OPENWEATHER_UNITS,
  DEFAULT_OPENWEATHER_UNITS_SYMBOL,
} from '../settings/openweather.js';

export default class Searches {
  #placesRecord = [];
  #dbPath = './db/database.json';

  constructor() {
    this.#readDB();
  }

  get #defaultParamsMapBox() {
    return {
      access_token: process.env.MAPBOX_TOKEN,
      limit: process.env.MAPBOX_LIMIT || MAPBOX_DEFAULT_LIMIT,
      language: process.env.LANGUAGE || DEFAULT_LANGUAGE,
    };
  }

  get #defaultParamsOpenWeather() {
    return {
      appid: process.env.OPENWEATHER_API_KEY,
      units: process.env.OPENWEATHER_UNITS || DEFAULT_OPENWEATHER_UNITS,
      lang: process.env.LANGUAGE || DEFAULT_LANGUAGE,
    };
  }

  async searchPlacesByKeyword(searchPlace = '') {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchPlace}.json `,
        params: this.#defaultParamsMapBox,
      });

      const response = await instance.get();

      return response.data.features.map((place) => {
        return {
          id: place.id,
          name: place.place_name,
          lon: place.center[0],
          lat: place.center[1],
        };
      });
    } catch (error) {}

    return [];
  }

  async weatherByCoordinates(lat, lon) {
    try {
      const symbol =
        process.env.OPENWEATHER_UNITS_SYMBOL ||
        DEFAULT_OPENWEATHER_UNITS_SYMBOL;
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: { ...this.#defaultParamsOpenWeather, lat, lon },
      });

      const response = await instance.get();
      const { weather, main: temperature } = response.data;

      return {
        description: weather[0].description,
        temperature: `${temperature.temp} ${symbol}`,
        min: `${temperature.temp_min} ${symbol}`,
        max: `${temperature.temp_max} ${symbol}`,
      };
    } catch (error) {
      console.error(error);
    }

    return {};
  }

  addPlaceRecord(place = '') {
    if (this.#placesRecord.includes(place.toLocaleLowerCase())) return;

    this.#placesRecord = this.#placesRecord.splice(0, 6); //! warning: splice modify the original array

    this.#placesRecord.unshift(place.toLocaleLowerCase());
    this.#saveOnDB();
  }

  get placesRecord() {
    // TODO: capitalize records
    return this.#placesRecord.map((place) => {
      let letters = place.split(' ');
      letters = letters.map(
        (letter) => letter.charAt(0).toUpperCase() + letter.slice(1)
      );

      return letters.join(' ');
    });
  }

  #saveOnDB() {
    const payload = {
      places: this.#placesRecord,
    };

    fs.writeFileSync(this.#dbPath, JSON.stringify(payload));
  }

  #readDB() {
    try {
      if (!fs.existsSync(this.#dbPath)) return;

      const payload = JSON.parse(
        fs.readFileSync(this.#dbPath, { encoding: 'utf-8' })
      );
      if (payload) {
        this.#placesRecord = payload.places;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
