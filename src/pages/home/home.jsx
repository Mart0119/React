import React from 'react'
import 'element-theme-default';
import { Button, Input, Select, Checkbox, Radio } from 'element-react';
import store from '../../store'
import { sendAction } from '../../action'
class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      checkList: ['复选框 A', '选中且禁用']
    }
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
      console.log('subscribe', store.getState())
    })
  }
  render() {
    return (
      <div>
        <p>home index</p>
        <Button onClick={val => this.handClick('btn', val)} type="primary">默认按钮</Button>
        <p>{store.getState().value}</p>
        <Input onChange={val => this.change('name', val)} value={this.state.name} placeholder="请输入内容" />
        <div>
          {/* <Select onChange={val => this.change('value', val)} value={this.state.value} placeholder="请选择">
            {
              this.state.options.map(el => {
                return <Select.Option key={el.value} label={el.label} value={el.value} />
              })
            }
          </Select>
          <p>{this.state.value}</p> */}
          <div className="check">
            <Checkbox.Group onChange={val => this.change('check', val)} value={this.state.checkList}>
              <Checkbox label="复选框 A"></Checkbox>
              <Checkbox label="复选框 B"></Checkbox>
              <Checkbox label="复选框 C"></Checkbox>
              <Checkbox label="禁用" ></Checkbox>
              <Checkbox label="选中且禁用" ></Checkbox>
            </Checkbox.Group>
          </div>
          <div className="rideo">
            <div>
              <Radio value="1" checked={this.state.value === 1} onChange={val => this.change('Radio', val)}>备选项</Radio>
              <Radio value="2" Radioed={this.state.value === 2} onChange={val => this.change('Radio', val)}>备选项</Radio>
            </div>
          </div>
        </div>
      </div>

    )
  }
  change(filed, val) {
    this.setState({ [filed]: val })
    console.log(this.state, filed, val)
  }
  check(filed, val) {
    console.log(this.state, filed, val)
  }
  handClick(filed, val) {
    const action = sendAction()
    store.dispatch(action)
  }
}

export default home;