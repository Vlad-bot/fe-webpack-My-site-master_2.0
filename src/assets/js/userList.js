'use strict';


import noneAvatar from '../images/User.png';
const teamsContent = document.getElementsByClassName('teamsContent')[0];

const linksMap = new Map();
linksMap.set('facebook.com', 'fab fa-facebook-f');
linksMap.set('twitter.com', 'fab fa-twitter');
linksMap.set('linkedin.com', 'fab fa-linkedin-in');
linksMap.set('google.com', 'fab fa-google-plus-g');
linksMap.set('reddit.com', 'fas fa-dribble');

fetch('../users.json')
    .then(response => response.json())
    .then(teams => {
        teams.forEach((team) => {
            teamsContent.appendChild(createTeamCard(team));
        })
    }).catch(console.error);

function createTeamCard(team) {
    const teamCard = document.createElement('div');
    teamCard.classList.add('teamCard');

    const teamImage = createTeamImageElem(team);
    teamCard.appendChild(teamImage);

    const teamFullName = createFullNameElem(team);
    teamCard.appendChild(teamFullName);

    const teamRole = createTeamRoleElem(team);
    teamCard.appendChild(teamRole);

    const teamDescription = createTeamDescriptionElem(team);
    teamCard.appendChild(teamDescription);

    const teamSocialNetworks = createSocialNetworksListElem(team);
    teamCard.appendChild(teamSocialNetworks);

    return teamCard;
}

function createTeamImageElem(team) {
    const teamImageContainer = document.createElement('div');
    teamImageContainer.classList.add('teamImageContainer');

    const teamImage = new Image();
    teamImage.src = team.userAvatar;
    teamImage.alt = 'avatar';

    teamImage.onerror = () => {
        teamImage.src = noneAvatar;
        teamImage.style.border = '1px solid black';
    };

    teamImageContainer.appendChild(teamImage);

    return teamImageContainer;
}

function createFullNameElem(team) {
    const fullName = document.createElement('h4');
    fullName.classList.add('fullName');
    fullName.innerText = team.name || '';

    return fullName;
}

function createTeamRoleElem(team) {
    const teamRole = document.createElement('h5');
    teamRole.classList.add('teamRole');
    teamRole.innerText = team.position || '';

    return teamRole;
}

function createTeamDescriptionElem(team) {
    const teamDescription = document.createElement('p');
    teamDescription.classList.add('teamDescription');
    teamDescription.innerText = team.description || '';

    return teamDescription;
}

function createSocialNetworksListElem(team) {
    const socialNetworkListContainer = document.createElement('div');
    socialNetworkListContainer.classList.add('socialNetworkList');

    if (Array.isArray(team.contacts)) {
        team.contacts.forEach(socialLink => {

            if (linksMap.get(new URL(socialLink).host)) {
                const link = document.createElement('a');
                link.href = socialLink;
                const icon = document.createElement('i');
                link.appendChild(icon);
                socialNetworkListContainer.appendChild(link);
                icon.setAttribute('class', `${linksMap.get(new URL(socialLink).host)}`)
            }
        });
    }
    return socialNetworkListContainer;
}




















