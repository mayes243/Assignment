import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerProfile } from "../../Feature/Action/userAction";

const UserDetails = () => {
  const dispatch = useDispatch();

  const { profile } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getCustomerProfile());
  }, []);

  return (
    <div className="mx-2 grid md:grid-cols-2 lg:grid-col-3">
      {profile?.map((user) => (
        <div className="text-center mt-2" key={user._id}>
          <h3 className="text-4xl font-semibold leading-normal text-blue-700 mb-2 capitalize">
            👤 {user.name}
          </h3>
          <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
            🌏 {`${user.address.cityName} (${user.address.postalCode})`}
          </div>
          <div className="mb-2 text-green-600 mt-2 font-sans lowercase">
            ✉️ {user.email}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
