import { child, get, getDatabase, push, ref } from "firebase/database";
import { app } from "../firebase";
import CookiesService from "../../interaction/service/Cookies";

const cookiesService = new CookiesService()
const database = getDatabase(app)
const userId = cookiesService.getJson('userId')

export const AddDataUser = (name: string, age: number) => {
  push(ref(database, 'users/' + userId), { name, age });
}

export const GetDataUser = () => {
  get(child(ref(database), `users/${userId}`)).then((res) => {
    if (res.exists()) {
      console.log(res.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}