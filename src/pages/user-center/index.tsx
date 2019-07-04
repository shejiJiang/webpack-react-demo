import * as React from 'react';

class UserCenter extends React.Component {
  render() {
    return (
      <div>
        我是购个人中心页
        <div className="navigator">
          <a href="/">
            <span>首页</span>
          </a>
          <a href="/classify">
            <span>分类</span>
          </a>

          <a href="/shopping-cart">
            <span>购物车</span>
          </a>
          <a href="/user-center">
            <span>我的</span>
          </a>
        </div>
      </div>
    );
  }
}

export default UserCenter;
