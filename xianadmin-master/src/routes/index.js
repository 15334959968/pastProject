/**
 * @file
 * 路由配置
 */

import system from './system';
import problem from './problem';

const Login = r => require(['views/login'], r);
const Main = r => require(['views/main'], r);
const Shizhen = r => require(['views/shizhen'], r);
const Dishang = r => require(['views/dishang'], r);
const Shinei = r => require(['views/shinei'], r);
const Dixia = r => require(['views/dixia'], r);
const Modeltree = r => require(['views/modeltree'], r);
const Empty = r => require(['views/empty'], r);
const Syscount = r => require(['views/syscount'], r);
const Sysapp = r => require(['views/sysapp'], r);

const Jidian = r => require(['views/jidian'], r);
const System = r => require(['views/system'], r);
const Systemset = r => require(['views/systemset'], r);
const Huanxing = r => require(['views/huanxing'], r);
const huandao  = r => require(['views/huandao'], r);



const Management = r => require(['views/management'], r);
const Meetings = r => require(['views/meetings'], r);
const scene = r => require(['views/scene/scene'], r);
const newscene = r => require(['views/scene/newscene'], r);



const resetPassword = r => require(['views/resetPassword'], r);

const indexFlex = r => require(['views/index'], r);
const Synergy = r => require(['views/synergy'], r);
const Contractor = r => require(['views/contractor'], r);
const mission = r => require(['views/mission'], r);
const missionBrief = r => require(['views/missionBrief'], r);
const Growth = r => require(['views/growth'], r);
const Question = r => require(['views/question'], r);
const Browse = r => require(['views/browse'], r);
const Times = r => require(['views/times'], r);
const Admin = r => require(['views/admin'], r);
const Mdocuments = r => require(['views/mdocuments'], r);
const Mtype = r => require(['views/mtype'], r);
const Madmin = r => require(['views/madmin'], r);
const madminup = r => require(['views/madminup'], r);
const Meeting = r => require(['views/meeting'], r);

const Actype = r => require(['views/actype'], r);

// 根目录
const rootPath = '';
/**
 * 页面路由对象
 * animate参数代表的是 当前路由开启哪些three场景渲染 逗号分隔
 * @type {any[]}
 */
const routes = [
  {
    path: '',
    redirect: {
    name: 'login'},
    meta: {
      requireAuth: false,
      animate:'',
    }
   },
    {
        path: '/management',
        component:Management,
        name: 'management',
        meta: {
            requireAuth: false,
            animate:'',
        }
    },
    {
        path: '/meetings',
        component:Meetings,
        name: 'meetings',
        meta: {
            requireAuth: false,
            animate:'',
        }
    },
   

 
    {
        path: '/huanxing',
        component:Huanxing,
        name: 'huanxing',
        meta: {
            requireAuth: false,
            animate:'three',
            istop:true
        }
    },
    {
        path: '/huandao',
        component:huandao,
        name: 'huandao',
        meta: {
            requireAuth: false,
            animate:'three',
            istop:true
        }
    },
  {
     path: '/login',
     component:Login,
      name: 'login',
      meta: {
          requireAuth: false,
          animate:'',
      }
  },
  {
        path: '/main',
        component:Main,
        name: 'main',
        meta: {
            requireAuth: false,
            animate:'three',
            istop:true
        }

  },
  {
    path: '/index',
    component:indexFlex,
    name: 'index',
    meta: {
        requireAuth: false,
        animate:'',
    }
},
    {
        path: '/shizhen',
        component:Shizhen,
        name: 'shizhen',
        meta: {
            requireAuth: false,
            animate:'three',
            istop:true
        }

    },
    {
        path: '/dishang',
        component:Dishang,
        name: 'dishang',
        meta: {
            requireAuth: false,
            animate:'three',
        }
    },
    {
        path: '/dixia',
        component:Dixia,
        name: 'dixia',
        meta: {
            requireAuth: false,
            animate:'three',
            istop:true,
        }
    },
    {
        path: '/shinei',
        component:Shinei,
        name: 'shinei',
        meta: {
            requireAuth: false,
            animate:'three',
        }
    },
    {
        path: '/modeltree',
        component:Modeltree,
        name: 'modeltree',
        meta: {
            requireAuth: false,
            animate:'three,threet',
        }
    },
    {
        path: '/sysapp',
        component:Sysapp,
        name: 'sysapp',
        meta: {
            requireAuth: false,
            animate:'',
            app:true
        }
    },

    {
        path: '/scene',
        component:scene,
        name: 'scene',
        meta: {
            requireAuth: false,
            animate:'',
        }
    },
    {
        path: '/newscene',
        component:newscene,
        name: 'newscene',
        meta: {
            requireAuth: false,
            animate:'',
        }
    },


    {
        path: '/empty',
        component:Empty,
        name: 'empty',
        meta: {
            requireAuth: false,
            animate:'',
        }
    },
    {
        path: '/syscount',
        component:Syscount,
        name: 'syscount',
        meta: {
            requireAuth: false,
            animate:'',
        }
    },
    {
        path: '/jidian',
        component:Jidian,
        name: 'jidian',
        meta: {
            requireAuth: false,
            animate:'three',
        }
    },
    {
        path: '/growth',
        component:Growth,
        name: 'growth',
        meta: {
            requireAuth: false,
            animate:'three',
        }
    },
    {
        path: '/system',
        component:System,
        name: 'system',
        meta: {
            requireAuth: false,
            animate:'',
        }
    },
    {
        path: '/systemset',
        component:Systemset,
        name: 'systemset',
        meta: {
            requireAuth: false,
            animate:'',
        }
    },
    {
        path: '/resetPassword',
        component:resetPassword,
        name: 'resetPassword',
        meta: {
            requireAuth: false,
            animate:'',
        }

    },//问题协同列表
    
  

    //协同资料管理
    {
        path: '/mission',
        component:mission,
        name: 'mission',
        meta: {
            requireAuth: false,
            animate:'',
        }

    }
    ,
    //协同资料管理
    {
        path: '/missionBrief',
        component:missionBrief,
        name: 'missionBrief',
        meta: {
            requireAuth: false,
            animate:'',
        }

    },
    {
        path: '/synergy',
        component:Synergy,
        name: 'synergy',
        meta: {
            requireAuth: false,
            animate:'',
        }

    },
    {
        path: '/contractor',
        component:Contractor,
        name: 'contractor',
        meta: {
            requireAuth: false,
            animate:'',
        }

    },
    {
        path: '/synergy',
        component:Synergy,
        name: 'synergy',
        meta: {
            requireAuth: false,
            animate:'',
        }

    },
    {
        path: '/question',
        component:Question,
        name: 'question',
        meta: {
            requireAuth: false,
            animate:'',
        }

    },
    {
        path: '/browse',
        component:Browse,
        name: 'browse',
        meta: {
            requireAuth: false,
            animate:'',
        }

    },
    {
        path: '/times',
        component:Times,
        name: 'times',
        meta: {
            requireAuth: false,
            animate:false,
        }
    
    }
    ,
    {
        path: '/admin',
        component:Admin,
        name: 'admin',
        meta: {
            requireAuth: false,
            animate:'',
        }

    },
    {
        path: '/madminup',
        component:madminup,
        name: 'madminup',
        meta: {
            requireAuth: false,
            animate:'',
        }

    },

    // 会议文档管理
    {
        path: '/mdocuments',
        component:Mdocuments,
        name: 'mdocuments',
        meta: {
            requireAuth: false,
            animate:'',
        }

    },
    // 会议类型管理
    {
        path: '/mtype',
        component:Mtype,
        name: 'mtype',
        meta: {
            requireAuth: false,
            animate:'',
        }

    },
    // 会议管理
    {
        path: '/madmin',
        component:Madmin,
        name: 'madmin',
        meta: {
            requireAuth: false,
            animate:'',
        }
    },
    // 我的会议
    {
        path: '/meeting',
        component:Meeting,
        name: 'meeting',
        meta: {
            requireAuth: false,
            animate:'',
        }
    },
    
    ...system,
    ...problem
    

].map(route => {
  route.path = rootPath + route.path;
  return route;
});

// 404 页
routes.push({path: '*', component: Login, name: 'login'});
export default routes;
