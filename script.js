var getInputData = document.querySelector('[data-user-name]');
var getInputDataBtn = document.querySelector('[data-search-user]');

var userName = "himanshuu03";
fetchDevData();

getInputDataBtn.addEventListener('click',()=>{
    userName = getInputData.value;
    fetchDevData();
})

async function fetchDevData(){
    const api = await fetch(`https://api.github.com/users/${userName}`);
    const result = await api.json();
    if(result?.name === null){
        document.querySelector('.user-data').classList.remove('active');
        document.querySelector('.error').classList.add('active');
    }
    else{
        document.querySelector('.user-data').classList.add('active');
        document.querySelector('.error').classList.remove('active');
        renderData(result);
    }
}

function renderData(result){
    const userDataName = document.querySelector('[data-name]');
    const userImg = document.querySelector('[data-img]');
    const userDate = document.querySelector('[data-date]');
    const userLink = document.querySelector('[data-link]');
    const userDes = document.querySelector('[data-des]');
    const userRepo = document.querySelector('[data-repo]');
    const userFollower = document.querySelector('[data-follower]');
    const userFollowing = document.querySelector('[data-following]');
    const userLocation = document.querySelector('[data-user-location]');

    userImg.src = `${result.avatar_url}`
    userDataName.innerText = `${result?.name}`;
    userDate.innerText = `Joined ${result?.created_at.split('T')?.[0]}`
    userLink.innerText =`@${result?.login}`;
    userLink.href =`${result?.html_url}`;
    userDes.innerText =`Bio:${result?.bio}`
    userRepo.innerText =`${result?.public_repos}`
    userFollower.innerText =`${result?.followers}`
    userFollowing.innerText=`${result?.following}`
    userLocation.innerText =`${result?.location}` 
}
