export const USER_AVATAR = "https://example.com/jane-q-user/profile.jpg"


export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+import.meta.env.VITE_TMDB_BEARER_TOKEN
    }
};

export const IMG_CDN = 'https://image.tmdb.org/t/p/w500/'

export const LANGUAGES = ['English','Hindi','Tamil'] 

export const OPENAI_KEY = "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"