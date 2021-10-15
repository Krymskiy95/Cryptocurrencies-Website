import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '3bd50207bbmshd336dda4055792fp1e73dajsna6ed5bbfc45c'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
})

export const {useGetCryptosQuery} = cryptoApi