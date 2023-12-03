## 基于plop开发的创建vue文件的脚手架工具

可以快速创建带有vue基础模板(vue2)的.vue文件 或 文件夹

```
// vue基础模板
<template>
       
</template>

<script>
export default {
    name: 'name',
    components: {},
    data() {
        return {
            
        }
    },
    computed: {
   
    },
    watch: {

    },
    methods: {
        
    },
    created() {
        
    },
    mounted() {

    }
</script>
<style lang="less" scoped>
    
</style>

```

## 安装npm包

npm i plop-create-vue

## 使用步骤

运行命令
```
npx create-vue
或者 yarn create-vue
```

- 执行上述命令后 需要选择创建文件还是文件夹
- 之后会可以输入文件或文件夹的名称
- 之后可以配置要创建的路径 不填写的话 默认为项目的根目录







