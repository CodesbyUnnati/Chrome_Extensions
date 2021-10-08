import axios, { AxiosResponse } from "axios";

interface onePtdata {
  long: string;
  message: string;
  short: string;
  status: number;
}

interface isGdData {
  shorturl?: string;
  errorcode?: number;
  errormessage?: string;
}

interface goTinyData {
  long: string;
  code: string;
}

async function onePt(url: string): Promise<string | void> {
  const resp: AxiosResponse<string> = await axios.get("https://api.1pt.co/addURL", {
    params: {
      long: encodeURI(url),
    },
  });
  if (resp.status === 201) return `https://1pt.co/${(resp.data as any as onePtdata).short}`;
}

async function isGd(url: string): Promise<string | void> {
  const resp: AxiosResponse<string> = await axios.get("https://is.gd/create.php", {
    params: {
      format: "json",
      url: encodeURI(url),
    },
  });
  if (resp.status === 200) {
    if ("errormessage" in (resp.data as isGdData))
      return console.error("Error Code #%d", (resp.data as isGdData).errorcode, (resp.data as isGdData).errormessage);
    return (resp.data as isGdData).shorturl;
  }
}

async function gitIo(url: string): Promise<string | void> {
  const resp: AxiosResponse<string> = await axios.post("https://git.io/create", `?url=${encodeURI(url)}`);
  if (resp.status === 201) return `https://git.io/${resp.data}`;
}

async function goTiny(url: string): Promise<string | void> {
  const resp: AxiosResponse<string> = await axios.post(
    "https://gotiny.cc/api",
    JSON.stringify({ input: encodeURI(url) }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  if (resp.data && resp.data.length === 1) {
    const short: string = (resp.data[0] as any as goTinyData).code;
    return `https://gotiny.cc/${short}`;
  }
}

export { onePt, gitIo, goTiny, isGd };
