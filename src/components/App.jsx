import { Component } from 'react';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { RequestApi } from '../ServiceApi/service';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
//------------------------------------------------------------//
const STATUS = {
  idle: 'idle',
  loading: 'loading',
  error: 'error',
  success: 'success',
};

export class App extends Component {
  state = {
    image: '',
    query: '',
    page: 1,
    imageList: [],
    status: STATUS.idle,
    totalHits: null,
    error: '',
  };

  handlerOpenModal = img => {
    this.setState({ image: img });
  };

  handlerCloseModal = () => {
    this.setState({ image: '' });
  };

  handlerForm = query => {
    this.setState({ query });
    this.setState({ page: 1 });
    this.setState({ imageList: [] });
    this.setState({ status: STATUS.loading });
  };

  //------------------------------------------------------//
  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      RequestApi(query, page)
        .then(res => {
          const { data } = res;
          this.setState(prevState => ({
            imageList: [...prevState.imageList, ...data.hits],
            totalHits: data.totalHits,
            status: STATUS.success,
          }));
        })
        .catch(error => {
          this.setState({ status: STATUS.error, error: error.message });
        });
    }
  }

  loadMore = () => {
    this.setState(pr => ({ page: pr.page + 1 }));
  };

  render() {
    const { image, page, totalHits, imageList, status, error } = this.state;
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr0',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.handlerForm} />
        {status === STATUS.loading && <Loader />}
        {status === STATUS.error && <p>{error}</p>}
        {!imageList.length && (
          <p
            style={{ margin: '100px auto', fontSize: '40px' }}
          >{`Please, enter the search request`}</p>
        )}
        {status === STATUS.success && (
          <ImageGallery
            imageList={imageList}
            handlerOpenModal={this.handlerOpenModal}
          />
        )}
        {image && <Modal image={image} onClose={this.handlerCloseModal} />}
        {totalHits >= 12 * page && <Button onClick={this.loadMore} />}
        <ToastContainer />
      </div>
    );
  }
}
