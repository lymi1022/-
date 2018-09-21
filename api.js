function getCompany() {
  return callApi('rpt/real/cpy')
}
function getLp(companyId) {
  return callApi('rpt/real/landing_page', {
    data: {
      companyId
    },
  })
}

function getTableList(data) {
  return callApi(`rpt/real/list`, {
    data
  })
}
function nowLogin(data) {
  return callApi(`rpt/real/login`, {
    data
  })
}

function getTableReqList(data) {
  return callApi(`rpt/real/req`, {
    data
  })
}