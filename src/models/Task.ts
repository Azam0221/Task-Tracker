import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
  userId: mongoose.Types.ObjectId;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
}

const TaskSchema = new Schema<ITask>({
  userId:      { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title:       { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  completed:   { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model<ITask>('Task', TaskSchema);