import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import { IPresentUser } from "../models/IPresentUser"

export const presentUserAPI = createApi({
    reducerPath: "presentUser",
    baseQuery: fetchBaseQuery({baseUrl: 'https://json.extendsclass.com/bin'}),
    endpoints: (build) => ({
        fetchAllQuitUsers: build.query<IPresentUser[], number>({
            query: (limit: number = 20) => ({
                url: '/41059fc433d9'
            })
        })
    })
})