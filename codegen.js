// 一个扩展分为两个部分
//
// [多个]语法高亮
//   - 其中包括语法配置相关和一些 `.scm` 语法高亮相关文件
//
// [多个]语言服务
//   - 一个用 rust 实现的 LSP 配置
//
// 当然了, 还有一个配置相关的配置

// TODO: 需要实现 {Zed.Runnable} 接口
export default class {
  /**
  * @param config {Zed.manifest}
  */
  constructor(config) {
    this.config = config;
  }
}