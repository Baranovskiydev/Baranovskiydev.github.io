import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"

export const presentUserAPI = createApi({
    reducerPath: "presentUser",
    baseQuery: fetchBaseQuery({baseUrl: ''}),
    endpoints: (build) => ({
        fetchAllQuitUsers: build.query({
            query: () => ({
                url: '/userspresent'
            })
        })
    })
})