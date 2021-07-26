import axios from "./axios";
import { LoginByPhone } from "../types/interface";

export const MUSIC_URL = `https://chenkun8561musicapi.vercel.app/`;

// 手机登录网易云音乐
export const musicLoginByPhone = (params: LoginByPhone): any => {
  return axios({
    method: "get",
    url:
      MUSIC_URL +
      `login/cellphone?phone=${params.phone}&password=${params.password}`
  });
};
