const BASE_URL = 'http://{IP.DO.SEU.RASPBERRY.NA.REDE}:3000/api/v1/';
//script clonado de https://apiko.com/blog/how-to-build-home-automation-app-with-raspberry-pi-and-javascript
class Api {

/**
* Base call api methods with auth header. Can be extended via params
* @param  {String} url          enpoint url
* @param  {Object} [options={}] options object which be passed to fetch
* @param  {[Object]} body       request body
* @return {[Promise]}           Fetch promise
*/

_callApi(url, options = {}) {

const fetchOptions = {
  method: options.method || 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  ...options,
};

if (options.body) {
  fetchOptions.body = JSON.stringify(options.body);
}

console.log( // eslint-disable-line
  `${fetchOptions.method} request \nto /${url}
${fetchOptions.body ? `with body: ${fetchOptions.body}` : ''}`);

return fetch(`${BASE_URL}/${url}`, fetchOptions);
}


/**
* Light on
*/
lightOn() {
return this._callApi('light/on', {method: 'POST'});
}

/**
* Light off
*/
lightOff() {
return this._callApi('light/off', {method: 'POST'});
}
/**
* set Time
*/
setTime(from, to) {
return this._callApi('time/set', {method: 'POST', body: { from, to } });
}
/**
* unset Time
*/
unSetTime() {
return this._callApi('time/unset', {method: 'POST'});
}
}

export default new Api();
