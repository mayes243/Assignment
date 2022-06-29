import mongoose from "mongoose";

const addressSchema = mongoose.Schema(
  {
    postalCode: { type: String, required: true },
    cityName: { type: String, required: true },
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

export default mongoose.model("address", addressSchema);
