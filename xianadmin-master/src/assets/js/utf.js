/**
 * Created by Administrator on 2018/7/3 0003.
 */
//--------把中文字符转换成Utf8编码------------------------//

export function chineseToUtf(pValue){
	return pValue.replace(/[^\u0000-\u00FF]/g,function($0){return escape($0).replace(/(%u)(\w{4})/gi,"&#x$2;")});
}
