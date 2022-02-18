///***function name unknown and this is Drawing with Login API Pseudocode***///

//login
getData() {
  return Send({
      url: '/login',
      method: 'get',
  });
},

//register
create(data) {
  return Send({
      url: '/register',
      method: 'post',
      data: data,
  });
},

//profile
getData(id) {
  return Send({
      url: `/profile/${id}`,
      method: 'get',
  });
},

//profileEdit
edit(id,data) {
  return Send({
      url: `/profile/edit/${id}`,
      method: 'put or patch',
      data: data,
  });
},

//main
getData() {
  return Send({
      url: '/main',
      method: 'get',
  });
},
//++

//postView
getData(id) { //main postView
  return Send({
      url: '/main/post',
      method: 'get',
  });
},

getData(id) { //detail postView
  return Send({
      url: `/main/post/${id}`,
      method: 'get',
  });
},

//postCreate
create(data) {
  return Send({
      url: '/main/post/write',
      method: 'post',
      data: data,
  });
},

//post
edit(id,data) {
  return Send({
      url: `/profile/edit/${id}`,
      method: 'put or patch',
      data: data,
  });
},

//timeline
getData(id) {
  return Send({
      url: `/main/timeline/${id}`,
      method: 'get',
  });
},
