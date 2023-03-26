import React from 'react';
import { Route, Navigate } from 'react-router-dom';

//import { userService } from '@/_services';

const user = { firstName: 'Darryll', role: 'Admin' };

// function PrivateRoute({ component: Component, roles, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         // const user = userService.userValue;

//         if (!user) {
//           // not logged in so redirect (now Navigate in react-router-dom v6+) to login page with the return url
//           return (
//             <Navigate
//               to={{ pathname: '/user/login', state: { from: props.location } }}
//             />
//           );
//         }

//         // check if route is restricted by role
//         if (roles && roles.indexOf(user.role) === -1) {
//           // role not authorised so Navigate to home page
//           return <Navigate to={{ pathname: '/' }} />;
//         }

//         // authorized so return component
//         return <Component {...props} />;
//       }}
//     />
//   );
// }

function PrivateRoute() {
  return null;
}
export { PrivateRoute };
