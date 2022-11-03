export const cookieStringify = (cookie: Record<string, any>) => Object
    .entries(cookie)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join("; ");