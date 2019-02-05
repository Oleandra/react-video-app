import React, { Component } from 'react';
import HomeLayout from '../components/HomeLayout';
import Categories from '../components/Categories';
import Related from '../components/Related';
import Modal from './Modal';
import ModalContent from '../components/ModalContent';
import CatchError from '../components/Error';
import VideoPlayer from '../components/VideoPlayer'
import data from '../../src/api.json';



class Home extends Component {
  state = {
    modalVisible: false,
  }
  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media
    })
  }
  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false,
    })
  }
  render() {
    return ( 
      <CatchError> 
<HomeLayout className="HomeLayout">
<Related />

  <Categories 
  categories={this.props.data.categories} 
  handleOpenModal={this.handleOpenModal}/>
  {
    this.state.modalVisible &&
  <Modal>
    <ModalContent
    closeHandle={this.handleCloseModal}
    >
      <VideoPlayer 
    autoplay
    src={this.state.media.src}
    title={this.state.media.title}
    />
      </ModalContent>
    </Modal>
  }
</HomeLayout>
</CatchError>  
    )
  }
}

export default Home