import { Context } from '../../../types/setup/context'
import { Consumer } from '../../../types/consumer'
import { Review } from '../../../types/review'
import { formatDateTime } from '../../_utils/handleFormats/formatDateTime'

export default {
  Review: {
    consumer: async (
      review: Review,
      _args: undefined,
      context: Context
    ): Promise<Consumer> => {
      if (!review?.consumerId) return {}

      const consumer: Consumer = await context.dataloaders.consumers.byId.load(
        review.consumerId
      )
      return consumer
    },

    createdAt: async (review: Review): Promise<string> => {
      return formatDateTime(review?.createdAt, true)
    },

    updatedAt: async (review: Review): Promise<string> => {
      return formatDateTime(review?.updatedAt, true)
    }
  }
}
