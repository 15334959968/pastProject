export const fNum = (n) => parseInt(n, 10) < 10 ? `0${n}` : `${n}`;

export const formatDate = (val, model = 'YYYY-MM-DD hh:mm:ss') => {
  if (typeof val === 'string') {
    val = val.replace(/-/g, '/');
  }
  let date = new Date(val);
  let chinese = ['一', '二', '三', '四', '五', '六', '日'];
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let week = date.getDay();
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let time = date.getTime();
  if (model === 'time' || model === 'Time') {
    return time;
  }
  model = model.replace(/YYYY/, year);
  model = model.replace(/YY/, (year + '').slice(2));
  model = model.replace(/MM/, fNum(month));
  model = model.replace(/M/, month);
  model = model.replace(/[wW]+/, `星期${chinese[week]}`);
  model = model.replace(/DD/, fNum(day));
  model = model.replace(/D/, day);
  model = model.replace(/hh/, fNum(hour));
  model = model.replace(/h/, hour);
  model = model.replace(/mm/, fNum(minute));
  model = model.replace(/m/, minute);
  model = model.replace(/ss/, fNum(second));
  model = model.replace(/s/, second);
  return model;
};
