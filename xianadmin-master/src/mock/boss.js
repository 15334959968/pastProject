//每个文件命名 以后台的controller 命名  后台controller  以功能模块命名
let controllername = "boss";
let bosscontroller = {
    "SelectUserAll": {
        api: `/${controllername}/user/paging.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    "SelectAdminList": {
        api: `/${controllername}/user/role/paging.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    "Userlogin": {
        api: `/${controllername}/user/login.html`,
        response: function(req, res) {
            res.send(req);
        }
    },
    "getNewRoles": {
        api: `/${controllername}/user/view.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    "saveRoles": {
        api: `/${controllername}/user/save.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    "getRoleList": {
        api: `/${controllername}/user/role/paging.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    //问题类型新增提交
    "addSave": {
        api: `/${controllername}/question/category/save.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    // 获取列表
    getPageList: {
        api: `/${controllername}/question/category/paging.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    // 删除
    "deleteLine": {
        api: `/${controllername}/question/category/view.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    //问题状态新增提交
    "statusSave": {
        api: `/${controllername}/question/status/save.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    // 获取列表
    "statusPageList": {
        api: `/${controllername}/question/status/paging.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    // 删除
    "statusDelete": {
        api: `/${controllername}/question/status/view.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    "getNewRoles": {
        api: `/${controllername}/user/view.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    "saveRoles": {
        api: `/${controllername}/user/save.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    "deleteRoles": {
        api: `/${controllername}/user/delete.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    //部门管理
    //获取部门列表
    "getDepartmentList": {
        api: `/${controllername}/department/paging.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    "addDepartment": {
        api: `/${controllername}/department/view.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    "editDepartment": {
        api: `/${controllername}/department/view.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    "deleteDepartment": {
        api: `/${controllername}/department/delete.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    "queryDepartmentList": {
        api: `/${controllername}/department/query.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    //产权方
    //获取列表
    "getPropertyList": {
        api: `/${controllername}/company/paging.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    "addProperty": {
        api: `/${controllername}/company/view.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    "editProperty": {
        api: `/${controllername}/company/view.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    "deleteProperty": {
        api: `/${controllername}/company/delete.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    "queryPropertyList": {
        api: `/${controllername}/company/query.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    //会议
    //获取列表
    "getMeetingList": {
        api: `/${controllername}/meeting/category/paging.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    "editFromMeeting": {
        api: `/${controllername}/meeting/category/view.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    "addMeeting": {
        api: `/${controllername}/meeting/category/save.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    "editMeeting": {
        api: `/${controllername}/meeting/category/save.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    "deleteMeeting": {
        api: `/${controllername}/meeting/category/delete.html`,
        response: function(req, res) {
            res.send([]);
        }
    },
    "queryMeetingList": {
        api: `/${controllername}/meeting/category/query.html`,
        response: function(req, res) {
            res.send([]);
        }
    },


};

module.exports = bosscontroller;