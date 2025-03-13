// src/lib/utils/json.ts

/**
 * Type that replaces all BigInt properties in an object with numbers
 */
export type WithoutBigInt<T> = T extends bigint
  ? number
  : T extends Array<infer U>
  ? Array<WithoutBigInt<U>>
  : T extends object
  ? { [K in keyof T]: WithoutBigInt<T[K]> }
  : T;


export function serializable<T>(obj: T): WithoutBigInt<T> {
  return JSON.parse(
    JSON.stringify(obj, (key, value) => 
      typeof value === 'bigint' ? Number(value) : value
    )
  );
}

/**
 * Response data with success status and optional error
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  error?: string | Record<string, any>;
  data?: T;
  [key: string]: any;
}

/**
 * Custom JSON response function that handles BigInt serialization
 * 
 * @param data The data to serialize
 * @param init Response options
 * @returns JSON response with serialized data
 */
export function safeJson<T>(data: T, init?: ResponseInit): Response {
  const serializedData = serializable(data);
  return new Response(
    JSON.stringify(serializedData),
    {
      ...init,
      headers: {
        ...init?.headers,
        'content-type': 'application/json'
      }
    }
  );
}

/**
 * Creates a standard success response
 */
export function successResponse<T>(data: T, message = 'Success', status = 200): Response {
  return safeJson<ApiResponse<T>>({
    success: true,
    message,
    data
  }, { status });
}

/**
 * Creates a standard error response
 */
export function errorResponse(error: string | Record<string, any>, status = 400): Response {
  return safeJson<ApiResponse>({
    success: false,
    error
  }, { status });
}