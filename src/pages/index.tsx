import Header from './Header';
import Content from './Content';
import { store } from './modules';
import Provider from '@/component/react-redux/Provider'

const Index = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Content />
      </Provider>
    </>
  );
};

export default Index;
