

import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    const fetchData = async () => {
      setState(() => ({ data: null, loading: true }));
      const result = await axios(url);
      setState({ data: result.data, loading: false });
    };
    fetchData();
  }, [url]);
  return state;
};


import { useEffect, useState } from "react";

export const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));
    fetch(url)
      .then(x => x.json())
      .then(y => {
        console.log(y);
        setState({ data: y, loading: false });
      });
  }, [url]);

  return state;
};

