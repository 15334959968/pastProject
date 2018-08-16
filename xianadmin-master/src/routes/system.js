const LevelManage= r => require(['views/system/Level'], r);
const ProjectManage= r => require(['views/system/Project'], r);
const SpecialtyManage= r => require(['views/system/Specialty'], r);

const router = [
  { path: '/levelManage', component: LevelManage },
  { path: '/projectManage', component: ProjectManage },
  { path: '/specialtyManage1', component: SpecialtyManage }
];

export default router;



