function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  //use fetch to fork it!
  fetch("https://api.github./com/repos/"+repo, {
    method: "POST",
    headers:{
      Authorization: `token ${getToken}`
    }
  }).then(res=>res.json().then(json=>showForkedRepo));
}

function showForkedRepo(res){
  $("#results").html(res);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '3a993896292a1951c00e088811ec867de9ca741d';
}
