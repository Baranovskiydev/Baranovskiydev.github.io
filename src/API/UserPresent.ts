import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"

export const quitUserAPI = createApi({
    reducerPath: "quitUser",
    baseQuery: fetchBaseQuery({baseUrl: ''}),
    endpoints: (build) => ({
        fetchAllQuitUsers: build.query({
            query: () => ({
                url: '/usersquited'
            })
        })
    })
})