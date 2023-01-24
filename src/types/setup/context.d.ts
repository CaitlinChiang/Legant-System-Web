import { ObjectId } from 'mongodb'
import { Database } from './database'
import { Dataloaders } from './dataloaders'

export interface Context {
  adminId?: ObjectId
  consumerId?: ObjectId
  database?: Database
  dataloaders?: Dataloaders
  ip?: string | string[]
}
