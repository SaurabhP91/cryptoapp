import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';


import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
const { Text, Title } = Typography;
const { Option } = Select;

const News = ({simplified}) => {
  const {data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency'})

  console.log(cryptoNews);
  return (
    <div>
      News
    </div>
  )
}

export default News
