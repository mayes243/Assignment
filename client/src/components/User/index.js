import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { styles } from "../../constants";
import { createCustomer, getAddress } from "../../Feature/Action/userAction";
import Input from "../Form/Input";
import { Customervalidation } from "../Form/validation";

const User = () => {
  const { allAddress } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const formHandler = async (values, submitProps) => {
    await dispatch(createCustomer({ ...values, toast }));
    submitProps.resetForm();
  };

  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md w-full">
        <Formik
          initialValues={{
            name: "",
            email: "",
            addressId: "",
          }}
          validationSchema={Customervalidation}
          onSubmit={formHandler}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
            handleBlur,
            setFieldValue,
          }) => (
            <Form onSubmit={handleSubmit}>
              <select
                name="addressId"
                className="w-full px-3 py-2 border border-black outline-none rounded-md"
                onChange={handleChange}
              >
                <option value="">Select a city</option>{" "}
                {allAddress?.map((item) => (
                  <option
                    key={item._id}
                    value={item._id}
                    className="capitalize"
                  >
                    {item.cityName}
                  </option>
                ))}
              </select>
              {errors.addressId && touched.addressId ? (
                <div style={{ color: "red" }}> {errors.addressId} </div>
              ) : null}
              <Input
                label="Full Name"
                type="text"
                value={values.name}
                name="name"
                onChange={handleChange}
              />

              <Input
                label="email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />

              <div className="mt-8">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className={styles.fullWidthButton}
                >
                  Create a User
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default User;
