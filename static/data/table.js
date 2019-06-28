import Mock from 'mockjs';
module.export = data = Mock.mock({
    'list|10': [{
        // 属性 orderid是一个自增数，起始值为 1，每次增 1
        'orderid|+1': 1,
        'userid|100-110': 1, // 
        'charge|100-1000': 1, //确定数据类型
        'datatime|1523343536767-1553343536767': 1,
        'commission|1-20.1-2': 1.1 // 
    }]
})