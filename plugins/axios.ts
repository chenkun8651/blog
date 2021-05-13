export default function ({ $axios, redirect }: any) {
    console.log($axios);
    $axios.setHeader("authorization", "*");
    $axios.setHeader("Access-Control-Allow-Oriain", "*");
    $axios.setHeader("Access-Control-Allow-Credentials", true);

    // 请求拦截
    $axios.onRequest((config: any) => {
        console.log(config);
    });
    // 返回拦截
    $axios.onResponse((response: any) => {
        console.log(response);
    });
    // 错误拦截
    $axios.onError((error: any) => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/400')
        } else if (code === 500) {
            redirect('/500');
        }
    })
}

