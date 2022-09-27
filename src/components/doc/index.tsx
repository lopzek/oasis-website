import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import DocDetail from './components/DocDetail';
import DocMenu from './components/DocMenu';
import { DocData, fetchDocList } from './util/docUtil';
import { Col, Row } from 'antd';
import Footer from '../footer';

function Doc() {
  const [docData, setDocData] = useState<DocData[]>([]);
  useEffect(() => {
    fetchDocList().then((list) => {
      setDocData(list);
    });
  }, []);
  return (
    <>
      <Row>
        <Col xxl={4} xl={5} lg={6} md={24} sm={24} xs={24} className='main-menu'>
          <DocMenu></DocMenu>
        </Col>
        <Col xxl={20} xl={19} lg={18} md={24} sm={24} xs={24}>
          <DocDetail docData={docData[0]}></DocDetail>
        </Col>
      </Row>
      <Footer></Footer>
    </>
  );
}

export default Doc;
