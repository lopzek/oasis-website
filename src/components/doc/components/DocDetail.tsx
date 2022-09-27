import React, { PropsWithChildren } from 'react';
import ReactMarkdown from 'react-markdown';
import { DocData } from '../util/docUtil';

interface DocDetailProps {
  docData: DocData;
}

function DocDetail(props: PropsWithChildren<DocDetailProps>) {
  if (!props.docData?.content) {
    return null;
  }
  return (
    <div>
      <ReactMarkdown>{props.docData.content}</ReactMarkdown>
    </div>
  );
}

export default DocDetail;
