import axios from 'axios';
import {
  MAPBOX_DEFAULT_LIMIT,
  MAPBOX_DEFAULT_LANGUAGE,
} from '../settings/mapbox.js';

export default class Searches {
  #record = [];

  constructor() {
    // TODO: READ DB IF EXISTS
  }

  get #paramsMapBox() {
    return {
      access_token: process.env.MAPBOX_TOKEN,
      limit: process.env.MAPBOX_LIMIT || MAPBOX_DEFAULT_LIMIT,
      language: process.env.MAPBOX_LANGUAGE || MAPBOX_DEFAULT_LANGUAGE,
    };
  }

  async city(searchPlace = '') {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchPlace}.json `,
        params: this.#paramsMapBox,
      });

      const resp = await instance.get();

      return resp.data.features.map((place) => {
        return {
          id: place.id,
          name: place.place_name,
          lng: place.center[0],
          lat: place.center[1],
        }
      });
    } catch (error) {}

    return [];
  }
}
