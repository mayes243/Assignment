import mongoose from "mongoose";

const customerSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "address",
    },
  },
  {
    timestamps: true,

    // __v from response
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
  }
);

export default mongoose.model("customer", customerSchema);
