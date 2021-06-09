const musicUrl = `https://chenkun8561musicapi.vercel.app/`;
export default ({ app }, inject) => {
  inject("api", {
    // 登录网易云音乐
    musicLoginByPhone(params) {
      return app.$axios({
        method: "get",
        url:
          musicUrl +
          `login/cellphone?phone=${params.phone}&password=${params.password}`
      });
    }
  });
};
