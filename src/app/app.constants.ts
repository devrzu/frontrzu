/**
 * Created by gr4ce on 22/01/2019.
 */
export const apiHost = 'http://35.236.172.109:9200/';

function createUrl(actionName: string): string {
  return `${apiHost}${actionName}`;
}

export const appApiResources = {
  baseUrl: apiHost,
  comments: createUrl('comments/finder/_search'),
  articles: createUrl('articles'),
};

export const appVariables = {
  defaultContentTypeHeader: 'application/json',
  errorInputClass: 'has-error',
  successInputClass: 'has-success',
};

export const validationMessages = {
  tttt: {
    required: 'tttt is required.',
    digitsOnly() { return `Only digits are allowed in Pincode.`; },
  },
  bbbb: {
    required: 'bbbb is required.',
  },
};
