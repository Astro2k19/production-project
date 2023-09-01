import { Rating } from '@/entities/Rating'
import { rtkApi } from '@/shared/api/rtkApi'

interface GetProfileRating {
  userId: string
  profileId: string
}

interface PostProfileRating extends GetProfileRating {
  rate: number
  feedback?: string
}

export const profileRatingApi = rtkApi.enhanceEndpoints({ addTagTypes: ['profile_rating'] }).injectEndpoints({
  endpoints: (builder) => ({
    getProfileRating: builder.query<Rating[], GetProfileRating>({
      query: (args) => ({
        url: '/profiles-rating',
        params: args
      }),
      providesTags: (result, error, args) => result
        ? [...result.map(rating => ({ type: 'profile_rating' as const, profileId: args.profileId })), 'profile_rating']
        : ['profile_rating']
    }),
    postProfileRating: builder.mutation<undefined, PostProfileRating>({
      query: (args) => ({
        url: '/profiles-rating',
        method: 'POST',
        body: args
      }),
      invalidatesTags: (result, error, args) => [{ type: 'profile_rating', profileId: args.profileId }]
    })
  })
})

export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery
export const usePostProfileRating = profileRatingApi.usePostProfileRatingMutation
