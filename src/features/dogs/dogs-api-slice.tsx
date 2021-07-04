import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const DOGS_API_KEY = '9697ea2f-71a1-46fe-9c55-5bad74690a6f';

interface Breed {
    id: string;
    name: string;
    image: {
        url: string;
    }
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders(headers) {
            headers.set('x-api-key', DOGS_API_KEY);
            return headers;
        }
    }),
    endpoints(builder) {
        return {
            fetchBreeds: builder.query<Breed[], number | void> ({
                query(limit = 10) {
                    return `/breeds?limit=${limit}`;
                }
            })
        }
    }
})

export const { useFetchBreedsQuery } = apiSlice;
