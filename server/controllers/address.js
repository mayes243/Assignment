import addressModal from "../models/address.js";

/* -------------------------- create a new customer ------------------------- */
export const addAddress = async (req, res) => {
  const { postalCode, cityName } = req.body;

  try {
    const address = await addressModal.findOne({ cityName });
    if (address)
      return res.status(400).json({ message: "Address already exists" });

    const result = await addressModal.create({
      postalCode,
      cityName,
    });

    res.status(201).json({
      message: "New Address created successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

/* ------------------------------- get address ------------------------------ */

export const getAddress = async (req, res) => {
  try {
    const address = await addressModal.find();
    res.status(200).json(address);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};
