async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  const options = {
    method: 'GET'
  };
  try {
    const result = await fetch(url, options).then(response => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      }
      return Promise.reject();
    });
    document.writeln(result.name);
  } catch (error) {
    console.error(error);
  }
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
