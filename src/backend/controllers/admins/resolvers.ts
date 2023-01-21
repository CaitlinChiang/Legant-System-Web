import { Admin } from '../../../types/Admin'
import { formatDateTime } from '../../_utils/handleFormats/formatDateTime'

export default {
  Admin: {
    createdAt: async (admin: Admin): Promise<string> => {
      return formatDateTime(admin?.createdAt, true)
    },

    updatedAt: async (admin: Admin): Promise<string> => {
      return formatDateTime(admin?.updatedAt, true)
    }
  }
}
