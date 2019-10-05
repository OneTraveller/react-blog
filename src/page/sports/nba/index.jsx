import React, { Component } from 'react';
import { List, Avatar, Skeleton, Input, Button, Modal, Upload, Icon, message } from 'antd';
import './nba.scss'

export default class NBA extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      ModalVisible: false,
      imageUrl: '',
      loading: false,
    };
  }

  handleSearch (value) {
    console.log(value)
  }

  handleAdd () {
    this.setState({ ModalVisible: true })
  }

  handleDetail() {
    this.props.history.push({ pathname: '/home/nba/nbaDetail' });
  }

  handleEdit () {
    this.setState({ ModalVisible: true })
  }

  handleDelete () {
    Modal.confirm({
      title: '消息提示',
      content: '确定要删除吗？',
      okText: "确认",
      cancelText: "取消",
      onOk () {
        // todo
      },
    });
  }

  hideModal() {
    this.setState({ ModalVisible: false })
  }

  // -------- upload -------
  getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  UploadChange(info) {
    console.log(info)
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  }

  render () {
    const { imageUrl } = this.state;
    return (
      <div className="nba-page">
        <div className="search-outer">
          <Input.Search placeholder="input search text" onSearch={value => this.handleSearch} enterButton />
          <Button className="add-btn" type="primary" onClick={() => this.handleAdd()}>添加</Button>
        </div>

        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={[{}, {}]}
          pagination={true}
          renderItem={item => (
            <List.Item
              actions={
                [
                  <span onClick={() => this.handleDetail()}>详情</span>,
                  <span onClick={() => this.handleEdit()}>修改</span>,
                  <span onClick={() => this.handleDelete()}>删除</span>
                ]}
            >
              <Skeleton avatar loading={item.loading} active>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="..." />
                  }
                  title="test"
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </Skeleton>
            </List.Item>
          )}
        />

        <Modal
          title="添加"
          visible={this.state.ModalVisible}
          onOk={this.hideModal.bind(this)}
          onCancel={this.hideModal.bind(this)}
          okText="确认"
          cancelText="取消"
        >
          <p>
            <span>标题</span>
            <Input/>
          </p>
          <p>
            <span>内容</span>
            <Input.TextArea/>
          </p>
          <div>
            <span>上传图片</span>
            <Upload
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={this.beforeUpload}
              onChange={() => this.handleChange()}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
                : <Icon type={this.state.loading ? 'loading' : 'plus'} />}
            </Upload>
          </div>
        </Modal>
      </div>
    );
  }
}
