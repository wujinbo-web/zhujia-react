import React, { Component } from 'react';
import { ImagePicker, SegmentedControl } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121'
}, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122'
}];

class ImagePickerExample extends React.Component {
  state = {
      files: data,
      multiple: true
  }
  onChange = (files, type, index) => {
      console.log(files, type, index);
      this.setState({
          files
      });
  }

  render() {
      const { files } = this.state;
      return (
          <div>
              <ImagePicker
                  style={{ 'width': '10rem' }}
                  files={files}
                  onChange={this.onChange}
                  onImageClick={(index, fs) => console.log(index, fs)}
                  selectable={files.length < 5}
                  multiple={this.state.multiple}
              />
          </div>
      );
  }
}

export default ImagePickerExample
