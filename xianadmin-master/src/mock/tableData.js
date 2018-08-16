//每个文件命名 以后台的controller 命名  后台controller  以功能模块命名
let random=((list)=>{
    return list[parseInt(Math.random(3) * 3)]
});
let database = {
    problemList: Array(20).fill({
        title: '问题1',
        type: '机电问题',
        level: '紧急',
        settlingTime: '2018-06-10',
        updateTime: '2018-06-10',
        creationTime: '2018-06-10',
        submitter: random(["魔卡", "张子龙", "张飞"]),
        submitter1: random(["魔卡", "张子龙", "张飞"]),
        personLiable2: random(["迟滞", "正常", "延迟"])
    }),
    adminList: Array(20).fill({
        title: '问题1',
        type: '机电问题',
        level: '紧急',
        settlingTime: '2018-06-10',
        updateTime: '2018-06-10',
        creationTime: '2018-06-10',
        submitter: random(["魔卡", "张子龙", "张飞"]),
        submitter1: random(["魔卡", "张子龙", "张飞"]),
        personLiable2: random(["迟滞", "正常", "延迟"])
    }),
	missionList: Array(20).fill({
		title: '问题',
		type:  random(["建设任务", "施工任务", "设计任务"]),
		level: random(["紧急", "重要", "一般"]),
		settlingTime: random(["2018-06-10", "2018-03-10", "2018-05-11"]),
		updateTime: '2018-06-10',
		creationTime: '2018-06-10',
		submitter: random(["李可可", "张珊珊1", "王少伟"]),
		submitter1: random(["李可可", "张珊珊", "王少伟"]),
		stateValue: random(["迟滞", "正常", "延迟"]),

	}),

}
let table = "table";
let tableList = {
	"problemList": {
		api: `/${table}/problemList`,
		response: function(req, res) {
			res.send(database.problemList);
		}
	},
	"missionList": {
		api: `/${table}/missionList`,
		response: function(req, res) {
			res.send(database.missionList);
		}
	}
};
module.exports = tableList;