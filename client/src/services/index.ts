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

const getHeaders = async () => {
  const baseHeaders = {
    "Content-Type": "application/json",
  };

  return baseHeaders;
};

async function fetcher<T>(params: ApiRequestType): Promise<ApiResponseType<T>> {
  const headers = await getHeaders();
  // console.log("headers:", headers);

  const _headers: any = { ...headers, ...params?.headers };
  // console.log("_headers:", _headers);

  const response = await fetch(`${params.baseUrl || BASE_URL}${params.url}`, {
    method: params.method || "get",
    body: params?.body && JSON.stringify(params.body),
    headers: _headers,
    credentials: "include",
  });
  // console.log("response:", response);

  if (response.ok) {
    if (response.status !== 204) {
      const jsonResponse = await response.json();
      // console.log("jsonResponse:", jsonResponse);

      return { data: jsonResponse };
    }

    /* @ts-ignore */
    return { data: { status: response.status } };
  }

  if (!response.ok) {
    const jsonResponse = await response.json();
    throw jsonResponse;
  }

  return { data: undefined };
}

export { getHeaders, fetcher };
export type { ApiRequestType, ApiResponseType };
