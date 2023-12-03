#! /usr/bin/env node

module.exports = function (plop) {
    plop.setWelcomeMessage('请选择需要创建的模板');
    // 第一个参数为对应名称
    // 第二个参数为 prompts 的地址
    plop.setGenerator('components', require('./template/prompt.cjs'));
 };