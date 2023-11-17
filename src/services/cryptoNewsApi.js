import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/*const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news',
    params: {
      safeSearch: 'Off',
      textFormat: 'Raw'
    },
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': '1c982b7e7emsh5f7e2394efaa3bfp1fce82jsn72aef5d7e7f4',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  };

  */

  const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '1c982b7e7emsh5f7e2394efaa3bfp1fce82jsn72aef5d7e7f4',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
  }

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

 const createRequest = (url) => ({ url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;