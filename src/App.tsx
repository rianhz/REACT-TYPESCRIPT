import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import 'antd/dist/reset.css';
import Cards from './components/Cards';
import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { NewsType } from './Models';
import PopupModal from './components/PopupModal';

const App = () => {
  const [news, setNews] = useState<NewsType[]>([]);
  const [newsSearch, setNewsSearch] = useState<NewsType[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (que: string) => {
    setIsModalOpen(true);

    const b = news.filter((el) => el.author === que);
    setNewsSearch(b);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios.get('https://newsapi.org/v2/everything?q=apple&from=2023-03-06&to=2023-03-06&sortBy=popularity&apiKey=4cf9be61c4e440d3b168f3b77cc750b0').then((response) => {
      setNews(response.data.articles);
    });
  }, []);

  return (
    <div className='App'>
      <Layout>
        <Header style={{ color: 'white' }}>NEWS APP</Header>
        <Content>
          <Cards news={news} showModal={showModal} />
          <PopupModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} newSearch={newsSearch} />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
