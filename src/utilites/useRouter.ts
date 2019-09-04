function parseUrl(url: string){
  const query = url.split("?")[1];
  if (!query) return {}
  const queryArr = query.split("&");
  let obj: any = {};
  queryArr.forEach(function(item){
    const value = item.split("=")[1];
    const key = item.split("=")[0];
    obj[key] = value;
  });
  return obj;
}

export default function useRouter<Params extends { [key: string]: string }>() {
  const href = window.location.href
  const param: Params = parseUrl(window.location.href)
  return { param, href }
}
