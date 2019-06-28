//   var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>sheet</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>{htmldata}</body></html>';
//   var Excel_URL = 'data:application/vnd.ms-excel;base64,'
    
/**
*导出excel表格
*
*/
export default class ToExcel {
    /**
    *定义倒数表格的方法
    *@template 前端请求字符串
    *@Excel_URL excel路径
    *@data 出入的模板字符串
    */
    constructor(template,Excel_URL,data){
        //存储数据
        this.template = template;
        this.Excel_URL = Excel_URL;
        this.data = data;
        console.log(data,"data");
        console.log(template,"template");
        console.log(Excel_URL,"Excel_URL");
        //初始化数据
        this.init(data)
    }
    init(data){
        //兼容ie
        var isIE = window.navigator.userAgent.toLocaleLowerCase().indexOf("trident");
        if(isIE !== -1){
            // IE 系列的浏览器
                this._IEExport(data)
        }else{
            // 其他浏览器
                this._OtherExport(data)
        }
    }
    _OtherExport(data) {
        var content = '';
        if(typeof data === "string"){
            //获取穿过表格的id
            var ele = document.querySelector(data);
            //替换模板字符串
            content = this.template.replace('{htmldata}',ele.outerHTML)
            console.log(content,"content");
        }else{

        }
        var aEle = document.createElement('a');
        aEle.href = this.Excel_URL + window.btoa(unescape(encodeURIComponent(content)));
        aEle.download ="导出表格.xls";
        aEle.click();

    }


}