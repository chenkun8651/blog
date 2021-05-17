import { QueryIssueOptions } from '../types/interface';

export default function (context: any, inject: any) {
    const { $request } = context;
    // github相关接口
    const GITHUB_URL = 'https://api.github.com/repos';
    const REPO_OWNER = 'chenkun76';
    const REPO_NAME = 'blog';
    inject('api', {
        // 查询问题列表（每一篇博客）
        queryIssues(params: QueryIssueOptions) {
            return $request.get(`${GITHUB_URL}/${REPO_OWNER}/${REPO_NAME}/issues`, params);
        },
        // 查询博客详情
        queryIssuesByNumber(params: any) {
            return $request.get(`${GITHUB_URL}/${REPO_OWNER}/${REPO_NAME}/issues/${params.ID}`, params);
        }
    });
}