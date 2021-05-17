export default function (context: any) {
  const { $axios } = context;
  // 设置请求头信息
  $axios.setHeader('authorization', process.env.GITHUB_TOKEN);
  // 请求拦截
  $axios.onRequest((config: any) => {
    // console.log(config);
  });
  // 返回拦截
  $axios.onResponse((response: any) => {
    // console.log(response);
  });
  // 错误拦截
  $axios.onError((error: any) => {
    // console.log(error);
  });
}
