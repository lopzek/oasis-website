export interface DocData {
  content: string;
  filename: string;
  gitUrl: string;
  lang: string;
  path: string;
  title: string;
  type: string;
  weight: number;
}
export async function fetchDocList(): Promise<DocData[]> {
  return await fetch('http://oasisbe-afx-38287.gz00b.dev.alipay.net/api2/doc/dir/docs', {
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res?.success) {
        return res.data.list;
      } else {
        throw new Error('');
      }
    });
}
