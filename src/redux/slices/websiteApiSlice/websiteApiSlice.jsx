import { supabase } from "../../client/supabaseData";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const websiteApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fakeBaseQuery(),

  endpoints: (builder) => ({
    getBagGames: builder.query({
      async queryFn() {
        const { data, error } = await supabase.from("bagGames").select("*");

        if (error) {
          return {
            error: {
              status: error.code,
              error: error.message,
            },
          };
        }

        return {
          data,
        };
      },
    }),
    getBagNews: builder.query({
      async queryFn() {
        const { data, error } = await supabase.from("bagNews").select("*");

        if (error) {
          return {
            error: {
              status: error.code,
              error: error.message,
            },
          };
        }

        return {
          data,
        };
      },
    }),
    getBagNewsById: builder.query({
      async queryFn(id) {
        const { data, error } = await supabase
          .from("bagNews")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          return {
            error: {
              status: error.code,
              error: error.message,
            },
          };
        }

        return { data };
      },
    }),
  }),
});

export const {
  useGetBagGamesQuery,
  useGetBagNewsQuery,
  useGetBagNewsByIdQuery,
} = websiteApiSlice;
