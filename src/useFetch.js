import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const abortCont = new AbortController();
    const signal = abortCont.signal;

    fetch(url, { signal })
      .then(res => {
        if (!res.ok){
          throw Error('Unfortunatly there was a error')
        }
         return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null)
      })
      .catch(err => {
        setError(err.message)
        setIsPending(false)
      })

      return () => abortCont.abort()
  }, [url]);

  return {data, isPending, error }
}

export default useFetch
