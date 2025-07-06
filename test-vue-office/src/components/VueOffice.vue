
<template>
    <div>

        <!-- <vue-office-docx 
        :src="docx"
        @rendered="rendered"/> -->
 
        <!-- <vue-office-excel 
         style="height: 100vh;"
        :src="excel"
         @rendered="rendered"/> -->


        <vue-office-pdf 
        style="height: 100%;" 
        :src="pdf"
         @rendered="rendered"/>
  </div>
</template>

<script>
//引入相关样式
import '@vue-office/docx/lib/index.css'
import '@vue-office/excel/lib/index.css'

//引入VueOffice组件
import VueOfficeDocx from '@vue-office/docx'
import VueOfficeExcel from '@vue-office/excel'
import VueOfficePdf from '@vue-office/pdf'

export default {
  name: 'VueOffice',
  components: {
    VueOfficeDocx,
    VueOfficeExcel,
    VueOfficePdf
  },
  data() {
    return {
      pdf: 'http://localhost:8080/static/特工训练手册.pdf',
      docx: 'http://localhost:8080/static/Nginx讲义.docx',
      excel: 'http://localhost:8080/static/testExcel.xlsx',
    }
  },
  methods: {
    rendered() {
      console.log('渲染完成')
    },

    //post接口返回的文件
    // getFile(){
    //     fetch('你的API文件地址', {
    //         method: 'post'
    //     }).then(res=>{
    //         //读取文件的arrayBuffer
    //         res.arrayBuffer().then(res=>{
    //             this.docx = res
    //         })
    //     })
    // }
    
  }
}
</script>

<style lang="scss" scoped>

</style>