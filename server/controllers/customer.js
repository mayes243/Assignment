import customerModal from "../models/customer.js";
import { isValidId } from "../utils/index.js";

/* -------------------------- create a new customer ------------------------- */
export const createCustomer = async (req, res) => {
  const { email, name, addressId } = req.body;

  try {
    // check if mongoose id is valid or not
    if (!isValidId(addressId))
      return res.status(400).json({ message: "Invalid addressId" });

    const oldCustomer = await customerModal.findOne({ email });
    if (oldCustomer)
      return res.status(400).json({ message: "Customer already exists" });

    const result = await customerModal.create({
      email,
      name,
      address: addressId,
    });

    res.status(201).json({
      message: "New Customer created successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

/* ------------------- get customer details ------------------- */
export const getCustomerDetails = async (req, res) => {
  try {
    // pupulate & aggregate
    const customer = await customerModal
      .find({}, { name: 1, email: 1 })
      .sort({ createdAt: -1 })
      .populate("address", { cityName: 1, postalCode: 1 });

    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};
