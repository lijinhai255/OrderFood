import Mock from 'mockjs';
//定义消息类型
export const LOGIN = 'LOGIN'

export  const data = Mock.mock({
    'list|30': [{
        // 属性 orderid是一个自增数，起始值为 1，每次增 1
        'orderid|+1': 1,
        'userid|1-10': 1, // 
        'charge|100-1000': 1, //确定数据类型
        'datatime|1523343536767-1553343536767': 1,
        'commission|1-20.1-2': 1.1 // 
    }]
})

export const Conts = {
        template : '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>sheet</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>{htmldata}</body></html>',
        Excel_URL :'data:application/vnd.ms-excel;base64,'
}