# @webpart/process-normal

处理标准模式的插件。 即命令行中**不**含有 `compat` 参数的命令。 
需要配合 `@webpart/master` 使用。

## 主要完成的功能

 - 1，删除所有元数据 `data-meta` 属性里含有 `mode="compat"` 的 `<script>` 标签。