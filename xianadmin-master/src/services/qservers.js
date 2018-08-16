/**
 * 具体http 服务
 * 秦帅
 */
import http from './fetch';

//接口url
const apis={
    //用户管理
    getRoleList:"boss/user/paging.html",
    getNewRole:"boss/user/view.html",
    saveRoles:"boss/user/save.html",
    deleteRoles:"boss/user/delete.html",
    queryRoles:"boss/user/query.html",
    findRoles:"boss/user/paging.html",
    //部门管理
    getDepartmentList:"boss/department/paging.html",
    addDepartment:"boss/department/save.html",
    deleteDepartment:"boss/department/delete.html",
    editDepartmentList:"boss/department/save.html",
    queryDepartmentList:"boss/department/query.html",
    //产权管理
    getPropertyList:"boss/company/paging.html",
    addProperty:"boss/company/save.html",
    deleteProperty:"boss/company/delete.html",
    editPropertyList:"boss/company/save.html",
    queryPropertyList:"boss/company/query.html",
    //会议管理
    getMeetingList:"boss/meeting/category/paging.html",
    addMeeting:"boss/meeting/category/save.html",
    deleteMeeting:"boss/meeting/category/delete.html",
    editMeetingList:"boss/meeting/category/save.html",
    editFromMeetingList:"boss/meeting/category/view.html",
    queryMeetingList:"boss/meeting/category/paging.html"
}
//具体server
const qservers={
        //角色列表
    getRoleList (param) {
        return new Promise((resolve, reject) => {
                http.get(apis.getRoleList, param).then(data => {
                resolve(data);
    }).catch(error => {
            reject(error);
    });
    });
    },
    getNewRole:(params={})=>{
        return http.get(apis.getNewRole,params);
    },

    saveRoles(param) {
        return new Promise((resolve, reject) => {
                http.post(apis.saveRoles, param).then(data => {
                resolve(data);
        }).catch(error => {
                reject(error);
        });
        });
        },
    deleteRoles(param){
    return new Promise((resolve, reject) => {
            http.post(apis.deleteRoles, param).then(data => {
            resolve(data);
        }).catch(error =>{
                reject(error);
        });
        });
        },
    findRoles (param) {
        return new Promise((resolve, reject) => {
                http.get(apis.findRoles, param).then(data => {
                resolve(data);
    }).catch(error => {
            reject(error);
    });
    });
    },
//部门列表
    getDepartmentList (param) {
        return new Promise((resolve, reject) => {
                http.get(apis.getDepartmentList, param)
                    .then(data => {
                resolve(data);
            }).catch(error => {
                reject(error);
             });
             });
     },
    addDepartment (param) {
        return new Promise((resolve, reject) => {
                http.post(apis.addDepartment, param).then(data => {
                resolve(data);
    }).catch(error => {
            reject(error);
    });
    });
    },
    deleteDepartment (param) {
    return new Promise((resolve, reject) => {
            http.post(apis.deleteDepartment, param)
            .then(data => {
            resolve(data);
}).catch(error => {
        reject(error);
});
});
},
    editDepartmentList (param) {
    return new Promise((resolve, reject) => {
            http.post(apis.editDepartmentList, param)
            .then(data => {
            resolve(data);
}).catch(error => {
        reject(error);
});
});
},
    queryDepartmentList (param) {
    return new Promise((resolve, reject) => {
            http.get(apis.queryDepartmentList, param)
            .then(data => {
            resolve(data);
}).catch(error => {
        reject(error);
});
});
},
//产权
getPropertyList (param) {
    return new Promise((resolve, reject) => {
            http.get(apis.getPropertyList, param)
            .then(data => {
            resolve(data);
}).catch(error => {
        reject(error);
});
});
},
addProperty (param) {
    return new Promise((resolve, reject) => {
            http.post(apis.addProperty, param).then(data => {
            resolve(data);
}).catch(error => {
        reject(error);
});
});
},
deleteProperty (param) {
    return new Promise((resolve, reject) => {
            http.post(apis.deleteProperty, param)
            .then(data => {
            resolve(data);
}).catch(error => {
        reject(error);
});
});
},
editPropertyList (param) {
    return new Promise((resolve, reject) => {
            http.post(apis.editPropertyList, param)
            .then(data => {
            resolve(data);
}).catch(error => {
        reject(error);
});
});
},
queryPropertyList (param) {
    return new Promise((resolve, reject) => {
            http.get(apis.queryPropertyList, param)
            .then(data => {
            resolve(data);
}).catch(error => {
        reject(error);
});
});
},
//会议管理
getMeetingList (param) {
    return new Promise((resolve, reject) => {
            http.get(apis.getMeetingList, param)
            .then(data => {
            resolve(data);
}).catch(error => {
        reject(error);
});
});
},
getaddMeeting (param) {
    return new Promise((resolve, reject) => {
            http.post(apis.addMeeting, param).then(data => {
            resolve(data);
}).catch(error => {
        reject(error);
});
});
},
deleteMeeting (param) {
    return new Promise((resolve, reject) => {
            http.post(apis.deleteMeeting, param)
            .then(data => {
            resolve(data);
}).catch(error => {
        reject(error);
});
});
},
editMeetingList (param) {
    return new Promise((resolve, reject) => {
            http.post(apis.editMeetingList, param)
            .then(data => {
            resolve(data);
}).catch(error => {
        reject(error);
});
});
},
editFromMeetingList (param) {
    return new Promise((resolve, reject) => {
            http.get(apis.editFromMeetingList, param)
            .then(data => {
            resolve(data);
}).catch(error => {
        reject(error);
});
});
},
queryMeetingList (param) {
    return new Promise((resolve, reject) => {
            http.get(apis.queryMeetingList, param)
            .then(data => {
            resolve(data);
}).catch(error => {
        reject(error);
});
});
},



}

export  default qservers