import React from 'react'
import Selects from '../my/Selects';
import Modal from '../my/Modal';
import Pagination from '../my/Pagination';
import { connect } from 'react-redux';
import { fetchImages, voteForImage } from '../../store/actions';
import { storeState } from '../../store/store';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
const { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardHeader } = require('mdbreact');

type GalleryPageProps = {
  token: string|null;
  isLoading: boolean;
  filters: any;
  images: Array<any>;
	dispatch: ThunkDispatch<storeState, {}, AnyAction>;
}


class GalleryPage extends React.Component<GalleryPageProps, {}> {

  componentDidMount() {
    if (this.props.images.length === 0) {
      this.props.dispatch(fetchImages());
    }
  }

  onSelectImage = (index: number, image: HTMLElement) => {
    this.props.dispatch(voteForImage(index));
  }


  render() {
    return (
      <MDBRow>

        <Modal/>

        <MDBCol md="12">

          <MDBCard>
            <MDBCardHeader>Контролы</MDBCardHeader>
            <MDBCardBody
              className = "text-center"
              style={{ width: '100%' }}
            >
              <Selects/>
              <Pagination/>
            </MDBCardBody>
          </MDBCard>

          <MDBCard className="mt-3">
            <MDBCardHeader>Галерея</MDBCardHeader>
            <MDBCardBody
              className = "text-center"
              style={{ width: '100%', minHeight: `calc(${document.documentElement.clientHeight}px - 391px - 7rem)` }}
            />
  
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}


export default connect(
  (store: storeState) => ({
    token: store.user.token,
    isLoading: store.loading,
    filters: store.filters,
    images: store.images,
  }),
)(GalleryPage);