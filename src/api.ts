import { IdiomResponse } from "./types";

const options: RequestInit = {
  method: 'GET',
  headers: {
    accept: 'application/x-www-form-urlencoded',
  }
};

const apiBaseUrl = 'http://apis.juhe.cn'

// 每天只有 50 次免费调用
const API_KEY = logseq.settings?.['idiomApiKey'] || '693e8050c9d18b06775f99bc5470bfb5'

const fetchFn = async <T>(url: string, params?: string) =>
  new Promise<T>((resolve, reject) => {
    fetch(`${apiBaseUrl}${url}?${params}`, options)
      .then(response => response.json())
      .then(response => {
        resolve(response)
      })
      .catch(err => {
        reject(err)
        console.error(err)
      });
  })

export const api = {
  fetchIdioms: (name: string): Promise<IdiomResponse> => fetchFn('/idioms/query', `key=${API_KEY}&wd=${name}`),
}
