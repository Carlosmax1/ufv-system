import moongose, {Schema} from 'mongoose';

const RoomSchema: Schema = new Schema({
  id: {type: String, required: true, unique: true},
  name: {type: String, require: true},
  time_start: {type: String, require: true},
  date_available: {type: String, require: true},
  responsible: {type: String, require: true},
  user_create: {type: String, require: true},
  surge: {type: Number, require: true},
  createDate: {type: Date, require: true},
})

export const Room = moongose.model('Room', RoomSchema);