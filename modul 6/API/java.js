async function getAPI() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const body = await response.json();
  console.log(body);
}

const post = {
  title: "Title",
  body: "Spaß Post",
  usid: 1,
};

const putPost = {
  title: "Title",
  body: "Spaß Posts",
  usid: 1,
  id: 1,
};

async function postAPI() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const result = await response.json();
  console.log(result);
}
// patch ist genauso
async function putAPI() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify(putPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const result = await response.json();
  console.log(result);
}

async function deleteAPI() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
  console.log(response);
  const result = await response.json();
  console.log(result);
}
async function main() {
  await getAPI();
  await postAPI();
  await putAPI();
  await deleteAPI();
}
main();
