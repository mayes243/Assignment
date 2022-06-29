import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { styles } from "../../constants";
import { createAddress } from "../../Feature/Action/userAction";
import Input from "../Form/Input";
import { Addressvalidation } from "../Form/validation";

const Address = () => {
  const dispatch = useDispatch();

  const formHandler = async (values, submitProps) => {
    await dispatch(createAddress({ ...values, toast }));
    submitProps.resetForm();
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md w-full">
        <Formik
          initialValues={{
            postalCode: "",
            cityName: "",
          }}
          validationSchema={Addressvalidation}
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
              <Input
                label="city name"
                type="text"
                name="cityName"
                value={values.cityName}
                onChange={handleChange}
              />

              <Input
                label="Postal Code"
                type="text"
                name="postalCode"
                value={values.postalCode}
                onChange={handleChange}
              />

              <div className="mt-8">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className={styles.fullWidthButton}
                >
                  Add a Address
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Address;
