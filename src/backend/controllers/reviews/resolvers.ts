import { Review } from '../../../types/review'
import { formatDateTime } from '../../_utils/handleFormats/formatDateTime'

export default {
  Review: {
    createdAt: async (review: Review): Promise<string> => {
      return formatDateTime(review?.createdAt, true)
    },

    updatedAt: async (review: Review): Promise<string> => {
      return formatDateTime(review?.updatedAt, true)
    }
  }
}
