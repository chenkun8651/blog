export interface Repository<T> {
  repository: T;
}
export interface LabelContent {
  name: string;
  color: string;
}
export interface Labels {
  nodes: LabelContent[];
}
export interface IssueContent {
  number: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  labels: Labels;
}
export interface Issues {
  nodes: IssueContent[];
  pageInfo: {
    hasNextPage: boolean;
    endCursor: string;
  };
  totalCount: number;
}
export interface IssueContentHtml extends IssueContent {
  url: string;
  bodyHTML: string;
}

export type RepositoryIssue = Repository<{ issue: IssueContentHtml }>;
export type RepositoryIssues = Repository<{ issues: Issues }>;

export interface LoginByPhone {
  phone: number;
  password: string;
  countrycode?: number;
  md5_password?: string;
}
