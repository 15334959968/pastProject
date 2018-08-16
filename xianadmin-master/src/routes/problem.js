const problemdis = r => require(['views/problem/problemdis'], r);
const problemupdata = r => require(['views/problem/problemupdata'], r);
const problemselect = r => require(['views/problem/problemselect'], r);
const problemList = r => require(['views/problem/problemList'], r);
const Questype = r => require(['views/problem/questype'], r);
const Questatus = r => require(['views/problem/questatus'], r);
const IssueTracker = r => require(['views/problem/IssueTracker'], r);

const router = [
  {
    path: '/problemselect',
    component:problemselect,
    name: 'problemselect',
    meta: {
        requireAuth: false,
        animate:'',
    }
},
  {
    path: '/problemList',
    component:problemList,
    name: 'problemList',
    meta: {
        requireAuth: false,
        animate:'',
    }
},
{
    path: '/problemdis',
    component:problemdis,
    name: 'problemdis',
    meta: {
        requireAuth: false,
        animate:'',
    }
},
{
    path: '/problemupdata',
    component:problemupdata,
    name: 'problemupdata',
    meta: {
        requireAuth: false,
        animate:'',
    }
},

{
  path: '/questype',
  component:Questype,
  name: 'questype',
  meta: {
      requireAuth: false,
      animate:'',
}
},
{
  path: '/questatus',
  component:Questatus,
  name: 'questatus',
  meta: {
      requireAuth: false,
      animate:'',
}


},
// 问题追踪
{
  path: '/issueTracker',
  component:IssueTracker,
  name: 'IssueTracker',
  meta: {
      requireAuth: false,
      animate:'',
  }
},

];

export default router;
