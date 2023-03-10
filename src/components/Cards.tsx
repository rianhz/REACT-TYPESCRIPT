import { Card } from 'antd';

import { NewsType } from '../Models';

const { Meta } = Card;

type Props = {
  news: NewsType[];
  showModal: (e: string) => void;
};

const Cards: React.FC<Props> = ({ news, showModal }) => {
  return (
    <div style={{ padding: '20px 100px', display: 'flex', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
      {news.map((el) => {
        return (
          <>
            <Card onClick={() => showModal(el.author)} hoverable style={{ width: 240 }} cover={<img alt='images' src={el.urlToImage} style={{ height: '100%' }} />}>
              <Meta title={el.title} description={new Date(el.publishedAt).toDateString()}></Meta>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default Cards;
