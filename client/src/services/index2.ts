import { BASE_URL } from "../constants/endpoints";

type ApiRequestType = {
  method?: "get" | "post" | "put" | "delete" | undefined;
  baseUrl?: string | undefined;
  url: string;
  body?: any | undefined;
  headers?: object | undefined;
};

type ApiResponseType<T> = {
  data: T | undefined;
};

const getHeaders = async (isFormData: boolean = false) => {
  if (isFormData) {
    // For multipart/form-data, headers are automatically set by the browser, so we return an empty object
    return {};
  }

  const baseHeaders = {
    "Content-Type": "application/json",
  };

  return baseHeaders;
};

async function fetcher<T>(params: ApiRequestType): Promise<ApiResponseType<T>> {
  const isFormData = params.body instanceof FormData;
  const headers = await getHeaders(isFormData);

  const _headers: any = { ...headers, ...params?.headers };

  const url = `${params.baseUrl || BASE_URL}${params.url}`;
  // console.log("url:", url);

  // const response = await fetch(`${params.baseUrl || BASE_URL}${params.url}`, {
  const response = await fetch(url, {
    method: params.method || "get",
    // body: params?.body && JSON.stringify(params.body),
    body: isFormData ? params.body : params.body && JSON.stringify(params.body),
    headers: _headers,
    credentials: "include",
  });

  // if (response.ok) {
  //   if (response.status !== 204) {
  //     const jsonResponse = await response.json();

  //     return { data: jsonResponse };
  //   }

  //   /* @ts-ignore */
  //   return { data: { status: response.status } };
  // }

  if (response.ok) {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const jsonResponse = await response.json();
      return { data: jsonResponse };
    } else {
      const blobResponse = await response.blob();
      return { data: blobResponse as any };
    }
  }

  if (!response.ok) {
    const jsonResponse = await response.json();
    throw jsonResponse;
  }

  return { data: undefined };
}

export { getHeaders, fetcher };
export type { ApiRequestType, ApiResponseType };
