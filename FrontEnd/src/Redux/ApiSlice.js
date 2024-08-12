import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const URL = 'http://localhost:8000/'

export const InvoicesApi = createApi({
    reducerPath : "InvoicesApi",
    baseQuery : fetchBaseQuery({
        baseUrl : `${URL}`
    }),
    endpoints: (builder) => ({
        getInvoices : builder.query({
            query: () => 'api/invoices',
            providesTags: ['invoice']
        }),
        addInvoice : builder.mutation({
            query: (newInvoice) => ({
                url: 'api/invoices',
                method: 'POST',
                body: newInvoice
            }),
            invalidatesTags: ['invoice']
        })
    })

}) 

