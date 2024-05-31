export type DocumentProps = {
  id: string;
  path: string;
  status: string;
  application_id: string;
}


export type ApplicationProps = {
  applicantDescription: string;
  applicantEmail: string;
  applicantName: string;
  applicantPhone?: string;
  company: {
    companyLocation?: string;
    companyName: string;
    companyTaxNumber?: string;
    id: string;
  };
  createdAt: string;
  creator?: any;
  currency?: string;
  id: string;
  applicationStatus?: string;
  loanAmount: number;
  assignee: any;
  loanDocuments: DocumentProps[];
  loanType?: string;
  modifiedAt?: string;
}

export type User = {
  id: string;
  email: string;
  fullName: string;
  role: string;
}


export type ReportProps = {
  documentType?: string;
  companyName?: string;
  companyDescription?: string;
  directors?: string[];
  shareholders?: string[];
  newsArticles?: string;
  companyRisk?: string;
  shareHolderRisk?: string;
  directorsRisk?: string;
  explanation?: string;
}


export type MessageProps = {
  id: string;
  prompt: string;
  answer?: string;
  createdAt: string;
}

export type QueryProps = {
  id: string;
  user: User;
  applicationId: string;
  messages: MessageProps[];
}

export type QueryGroup = {
  last7Days: QueryProps[];
  lastMonth: QueryProps[];
  lastYear: QueryProps[];
  longAgo: QueryProps[];
}