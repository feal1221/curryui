
export const useApi = (
  url, 
  options
) => {
    const config = useRuntimeConfig()
    const baseURL = config.public.apiBase
  // 建立預設配置
  const defaults = {
    
    baseURL: baseURL, 
    
    onResponse({ response }) {
      console.log('Response Success:', response._data)
    },

    onResponseError({ response }) {
      console.log('Response Error:', response.status, response._data)
    }
  }

  return useFetch(url, { ...defaults, ...options })
}