import config from './env';

const {googleMapKey, strapiUrl = null} = config;

export const GOOGLE_MAP_KEY = googleMapKey;

export const STRAPI_URL = strapiUrl || '';
