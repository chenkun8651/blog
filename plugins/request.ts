export default function (context: any, inject: any) {
  const { $axios } = context;
  inject('request', {
    get(url: string, params: any) {
      return $axios({
        method: 'get',
        url,
        params
      });
    },
    post(url: string, params: any) {
      return $axios({
        method: 'post',
        url,
        params
      });
    },
  });
}
