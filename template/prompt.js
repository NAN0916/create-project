const fs = require('fs');
const path = require('path');
const process = require('process')
const baseFile = path.join(__dirname, '../');

module.exports = {
   // 编写对模板件的描述
   description: '创建组件',
   // 编写命令行交互逻辑，可在命名行中获取参数
   prompts: [
      {
        name: 'type', // 创建的类型
        type: 'list', // 选择
        message: '请选择创建类型',
        choices: ['file', 'folder'] // 文件 文件夹
      },
      {
         name: 'pageName', 
         type: 'input', // 输入
         message: '请输入页面名称', // 该交互的提示信息
         validate: (dirName) => { // 校验参数
            if (!dirName || dirName.trim === '') { 
               return '组件名称不能为空'; 
            } else {
               return true; 
            }
         },
      },
      {
        name: 'path', // 创建的路径
        type: 'input', 
        message: '请输入创建的路径', 
     },
   ],
   // 编写接收完参数后需要执行的操作
   actions: (data) => {
      const actions = []
      if(data.type === 'file') {
        // 如果是文件
        actions.push({
            type: 'add',
            path: path.join(`${baseFile}/${data.path}`, `${data.pageName}.vue`),
            templateFile: path.join(__dirname, './index.hbs'),
          });
      } else {
        // 如果是文件夹 新创建文件夹
        fs.mkdirSync(path.join(`${baseFile}/${data.path}`, `./${data.pageName}`));

        actions.push({
            type: 'add',
            path: path.join(`${baseFile}/${data.path}/${data.pageName}`, `${data.pageName}.vue`),
            templateFile: path.join(__dirname, './index.hbs'),
          });
      }
        
      return actions;
   },
};