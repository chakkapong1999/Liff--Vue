import liff from "@line/liff";
import store from "@/store";

export default function initLineLiff() {
  const LIFF_ID = "1656822330-nQ5ka9PA";
  return new Promise(function (resolve, reject) {
    liff.init(
      {
        liffId: LIFF_ID,
      },
      () => {
        if (liff.isLoggedIn()) {
          getProfile().then(
            (result) => resolve(result),
            (error) => reject(error)
          );
        } else {
          loginLine().then(
            (result) => resolve(result),
            (error) => reject(error)
          );
        }
      }
    );
  });
}

function getProfile() {
  return new Promise(function (resolve, reject) {
    liff
      .getProfile()
      .then((profile) => {
        console.log(profile)
        store.dispatch("lineProfile/setUserId", profile.userId);
        store.dispatch("lineProfile/setDisplayName", profile.displayName);
        store.dispatch("lineProfile/setStatusMessage", profile.statusMessage);
        store.dispatch("lineProfile/setPictureUrl", profile.pictureUrl);
        resolve(true);
      })
      .catch((err) => reject(new Error(err)));
  });
}

function loginLine() {
  return new Promise(function (resolve, reject) {
    liff
      .login()
      .then(
        liff.getProfile().then((profile) => {
          store.dispatch("lineProfile/setUserId", profile.userId);
          store.dispatch("lineProfile/setDisplayName", profile.displayName);
          store.dispatch("lineProfile/setStatusMessage", profile.statusMessage);
          store.dispatch("lineProfile/setPictureUrl", profile.pictureUrl);
          resolve(true);
        })
      )
      .catch((err) => reject(new Error(err)));
  });
}
