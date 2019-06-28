// 校验密码
export function checkPassword(value, errText = ['密码不能为空', '密码必须包含字母和数字']) {
	// 不能为空
	if (!value) {
		return alert(errText[0])
	}
	// 密码必须包含字母和数字
	if (!/[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(value)) {
		return alert(errText[1])
	}
	// 满足条件
	return true;
}
// 定义校验函数
// 校验用户名
export function checkUserName(value, errText = ['请输入用户名', '用户名是4-10位的字母数字下划线']) {
	// 不能为空
	if (!value) {
		return alert(errText[0])
	}
	// 用户名是4-10位的字母数字下划线
	if (!/^\w{4,10}$/.test(value)) {
		return alert(errText[1])
	}
	// 通过了
	return true;
}