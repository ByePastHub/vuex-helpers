const globals = {
  echarts: {},
  event: {},
};

export function setGlobals(key, value) {
  globals[key] = value;
}

export default globals;
