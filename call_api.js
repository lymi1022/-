const API_ROOT = 'http://localhost:8502/api/v2/'
function callApi(url, config = { }) {
  const _url = (url.indexOf('http://') === 0 || url.indexOf('https://') === 0 || url.indexOf('//') === 0)
    ? url
    : API_ROOT + url
  const data = config && config.data
  const token = window.sessionStorage.getItem('token')

  const promise = new Promise((resolve, reject) => {
    $.ajax({    
      url: _url,    //请求的url地址   
      dataType: "json",   //返回格式为json       
      type: "GET",   //请求方式   
      ...config,
      data,
      beforeSend: (request) => {
        request.setRequestHeader('Authorization', token)
      },
      success: function(data) {   
        if (Array.isArray(data.errors)) {
          showDialog(1)
          reject(data.errors)
          window.sessionStorage.removeItem('token')
        } else {
          resolve(data.data || data)
        }
      },   
    })
  })
  return promise
}