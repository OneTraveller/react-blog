import React, { Component } from 'react';
import { List, Avatar, Skeleton, Input, Button, Modal, message } from 'antd';
import { post, HTTP_ORIGIN } from '../../../server/api';
import './nba.scss'

export default class NBA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalVisible: false,
      type: '',
      loading: false,
      list: [],
      title: '',
      content: '',
      fileName: '',
      data: {},
    };
    this.getList = this.getList.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentWillMount () {
    this.getList();
  }

  async getList (title = '') {
    const url = '/home/nba/list';
    const list = await post(url, { title });
    if (list && list.length) this.setState({ list })
    else this.setState({ list: [] });
  }

  handleSearch (title) {
    this.getList(title);
  }

  handleAdd () {
    this.setState({ ModalVisible: true, type: 'add' });
  }

  handleDetail (id) {
    this.props.history.push({ pathname: `/home/nba/nbaDetail/${id}` });
  }

  handleEdit (data) {
    this.setState({
      ModalVisible: true,
      title: data.title,
      content: data.content,
      type: 'edit',
      data,
    })
  }

  handleDelete (_this, data) {
    Modal.confirm({
      title: '消息提示',
      content: '确定要删除吗？',
      okText: "确认",
      cancelText: "取消",
      onOk () {
        _this.delete(data);
      },
    });
  }

  async delete (data) {
    const res = await post('/home/nba/del', data) || {};
    const type = res.state ? 'success' : 'error';
    message[type](res.msg);
    this.getList();
  }

  async handleModify () {
    const { type, title, content, fileName, data } = this.state;
    if (title && content && fileName) {
      let id = ''
      const url = `/home/nba/${type}`;
      if (type === 'edit') id = data.nba_id;

      const res = await post(url, { title, content, fileName, id }) || {};
      if (res.state) {
        this.getList();
        this.hideModal();
      }
      const msgType = res.state ? 'success' : 'error';
      message[msgType](res.msg);

    } else {
      message.error('请填写完整信息');
    }
  }

  hideModal () {
    this.setState({ ModalVisible: false, title: '', content: '' })
  }

  // form
  changeTitle (e) {
    const title = e.target.value;
    this.setState({ title });
  }
  changeContent (e) {
    const content = e.target.value;
    this.setState({ content })
  }
  async changeFile () {
    const file = (this.refs.upload.files || [])[0];
    const formData = new FormData();
    formData.append('img', file);
    const res = await post('/home/nba/upload', formData, 'upload') || {};
    if (res.state) {
      this.setState({ fileName: res.fileName })
    }
  }

  render () {
    const { list } = this.state;
    return (
      <div className="nba-page">
        <div className="search-outer">
          <Input.Search placeholder="input search text" onSearch={val => this.handleSearch(val)} enterButton />
          <Button className="add-btn" type="primary" onClick={() => this.handleAdd()}>添加</Button>
        </div>

        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={list}
          pagination={true}
          renderItem={item => (
            <List.Item
              actions={
                [
                  <span onClick={() => this.handleDetail(item.nba_id)}>详情</span>,
                  <span onClick={() => this.handleEdit(item)}>修改</span>,
                  <span onClick={() => this.handleDelete(this, item)}>删除</span>
                ]}
            >
              <Skeleton avatar loading={item.loading} active>
                <List.Item.Meta
                  avatar={
                    <Avatar src={HTTP_ORIGIN + item.img} alt="" />
                  }
                  title={item.title}
                  description={item.content}
                />
              </Skeleton>
            </List.Item>
          )}
        />

        <Modal
          title="添加"
          visible={this.state.ModalVisible}
          onOk={this.handleModify.bind(this)}
          onCancel={this.hideModal.bind(this)}
          okText="确认"
          cancelText="取消"
        >
          <p>
            <span>标题</span>
            <Input value={this.state.title} onChange={(e) => this.changeTitle(e)} />
          </p>
          <p>
            <span>内容</span>
            <Input.TextArea value={this.state.content} onChange={(e) => this.changeContent(e)} />
          </p>
          <div>
            <span>上传图片</span><br />
            <input type="file" onChange={() => this.changeFile()} ref="upload" />
          </div>
        </Modal>
      </div>
    );
  }
}
