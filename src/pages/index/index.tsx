import * as React from 'react';
import './style.scss';

class GoodsDetail extends React.Component {
  render() {
    return (
      <div>
        <div className="search">
          <div>
            <i className="iconfont icon-sousuo" />
            <span>搜索商品</span>
          </div>
        </div>

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

export default GoodsDetail;
