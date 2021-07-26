import axios from "./axios";
import { LoginByPhone } from "../types/interface";
import { paramsToString } from "../utils/tool";

export const MUSIC_URL = `https://chenkun8561musicapi.vercel.app`;

// 手机登录网易云音乐
export function musicLoginByPhone(params: LoginByPhone): any {
  return axios({
    method: "get",
    url: `${MUSIC_URL}/login/cellphone${paramsToString(params)}`
  });
}
