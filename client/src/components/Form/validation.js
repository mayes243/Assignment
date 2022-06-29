import * as Yup from "yup";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

// signin validation
export const SignInvalidation = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

// signup validation
export const SignUpvalidation = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
  name: Yup.string().required("Name is required"),
  // file validation with png, jpg, jpeg, gif
  avatar: Yup.mixed()
    .nullable()
    .required("A file is required")
    .test(
      "Fichier taille",
      "uploaded file must be less than 5MB",
      (value) => !value || (value && value.size <= 1024 * 1024 * 5)
    )
    .test(
      "format",
      "uploaded file must be in jpg, jpeg, gif or png format",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
});

/* --------------------------- customer validation -------------------------- */
export const Customervalidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  addressId: Yup.string().required("Address is required"),
});

/* --------------------------- address validation --------------------------- */
export const Addressvalidation = Yup.object().shape({
  cityName: Yup.string().required("City name is required"),
  postalCode: Yup.number("Must be number")
    .typeError("Postal code must be a number")
    .required("Postal code is required")
    .positive("Must be a positive number")
    .integer("Must be an integer"),
});
