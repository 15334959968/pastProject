import Vue from 'vue';
import { formatDate } from '@/utils/common.js';

Vue.filter('date', (val, model = 'YYYY-MM-DD') => {
  if (val === undefined) {
    return '';
  }
  return formatDate(val, model);
});

Vue.filter('datetime', (val, model = 'YYYY-MM-DD hh:mm') => {
  if (val === undefined) {
    return '';
  }
  return formatDate(val, model);
});

Vue.filter('greetings', val => {
  const greetings = [
    [5, '晚上好'],
    [8, '早上好'],
    [11, '上午好'],
    [13, '中午好'],
    [19, '下午好']
  ];
  const date = new Date(val);
  const hour = date.getHours();
  for (const item of greetings) {
    if (hour < item[0]) {
      return item[1];
    }
  }
  return '晚上好';
});
