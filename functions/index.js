import { onUserCreated } from 'firebase-functions/v2/identity';
export const testOnUserCreatedv2 = onUserCreated(async (event) => {
  console.log('user created:', event.data.uid);
});


// // testing if v1 works

// import * as functions from 'firebase-functions/v1';

// export const testOnUserCreatedv1 = functions.auth.user().onCreate((user) => {
//   console.log('user created:', user.uid);
// });