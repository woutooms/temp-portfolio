import { useEffect, useState } from "react";
import api from "../api/api.json";

interface Api {
  [key: string]: any;
}

function getValueByPath<T>(
  objects: Array<Record<string, unknown>>,
  path: string
): T | undefined {
  const keys = path.split("/").filter(Boolean);

  for (const obj of objects) {
    let current: any = obj;
    let found = true;

    for (const key of keys) {
      if (current[key] === undefined) {
        found = false;
        break;
      }
      current = current[key];
    }

    if (found) {
      return current as T;
    }
  }

  return undefined;
}

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const _api: Api[] = api as Api[];
        const found = getValueByPath(_api, url);

        if (!found) {
          throw new Error(`Route ${url} not found`);
        }

        const result = found as T;
        setData(result);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
