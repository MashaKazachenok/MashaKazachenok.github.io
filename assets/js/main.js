/* Define all the functions */
const setTitle = data => {
    // Set page title
    document.querySelector('#profileName').innerHTML = data.name;
    document.querySelector('#profileSubTitle').innerHTML = data.sub_title;

    const overviewList = document.querySelector('#overview');

    data.about.overview.forEach((item) => {
        const li = document.createElement('li');

        const summaryItem = document.createElement('div');
        summaryItem.innerHTML = item;

        li.appendChild(summaryItem);
        overviewList.appendChild(li);
    });
};

const setLinks = links => {
    const linksList = document.querySelector('#linksList');
    links.forEach(link => {
        const li = document.createElement('li');
        li.className = "contact-list-item";
        const a = document.createElement('a');
        a.target = '_blank';
        a.href = link.src;
        a.textContent = link.value;

        const span = document.createElement('span');
        span.className = "contact-info";
        const i = document.createElement('i');
        i.className = link.class;
        i.style = "min-width: 20px;";

        span.appendChild(i);
        a.prepend(span);
        li.appendChild(a);

        linksList.appendChild(li);
    });
};

const setEducation = education => {
    const listDiv = document.querySelector('#educationList');
    education.forEach(edu => {
        const div = document.createElement('div');

        const eduHeader = document.createElement('div');
        eduHeader.className = 'edu-header';
        eduHeader.innerHTML = edu.name;
        div.appendChild(eduHeader);

        const eduDuration = document.createElement('div');
        eduDuration.className = 'edu-duration';
        eduDuration.innerHTML = edu.duration;
        div.appendChild(eduDuration);

        const eduClassData = document.createElement('div');
        eduClassData.className = 'edu-class-data';

        const eduStd = document.createElement('span');
        eduStd.className = 'edu-std';
        eduStd.innerHTML = edu.std;
        eduClassData.appendChild(eduStd);
        div.appendChild(eduClassData);

        listDiv.appendChild(div);
    });
};

const setProjects = projects => {
    const ul = document.querySelector('#projectList');
    projects.forEach(project => {
        const li = document.createElement('li');

        const projectHeader = document.createElement('div');
        projectHeader.className = 'project-header';

        const projectTitle = document.createElement('span');
        projectTitle.className = 'project-title';
        projectTitle.innerHTML = project.title;
        projectHeader.appendChild(projectTitle);

        const projectOrganiz = document.createElement('span');
        projectOrganiz.className = 'organiz-name';
        projectOrganiz.innerHTML = project.organization;
        projectHeader.appendChild(projectOrganiz);

        li.appendChild(projectHeader);

        const projectDuration = document.createElement('span');
        projectDuration.className = 'project-duration';
        projectDuration.innerHTML = project.duration;
        li.appendChild(projectDuration);

        const projectDomain = document.createElement('div');
        projectDomain.className = 'project-domain';
        projectDomain.innerHTML = project.domain;

        li.appendChild(projectDomain);

        const projectDesc = document.createElement('ul');
        projectDesc.className = 'project-desc';

        project.responsabilities.forEach(prResp => {
            const resp = document.createElement('li');
            resp.className = 'project-desc-item';
            resp.innerHTML = prResp;
            projectDesc.appendChild(resp);
        })

        li.appendChild(projectDesc);

        const techCont = document.createElement('div');
        techCont.className = 'project-tech-cont';
        li.appendChild(techCont);

        project.technologies.forEach(topic => {
            const projectTech = document.createElement('div');
            projectTech.className = 'project-tech';
            projectTech.innerHTML = topic;
            techCont.appendChild(projectTech);
        })

        ul.appendChild(li);
    });
};

const setSkills = skills => {
    const skillList = document.querySelector('#skillList');
    skills.forEach(skill => {
        let type_klass = 'cat-skill-type force-inline';
        let body_klass = 'cat-skill-body-gen';

        const catSkillItem = document.createElement('li');
        catSkillItem.className = 'cat-skill-item';

        const catSkillType = document.createElement('div');
        catSkillType.className = type_klass;
        catSkillType.innerHTML = skill.category;
        catSkillItem.appendChild(catSkillType);

        const catSkillBody = document.createElement('div');
        catSkillBody.className = body_klass;

        skill.topics.forEach(topic => {
            const skillGen = document.createElement('div');
            skillGen.className = 'skill-gen';
            skillGen.innerHTML = topic;
            catSkillBody.appendChild(skillGen);
        });

        catSkillItem.appendChild(catSkillBody);

        skillList.appendChild(catSkillItem);
    });
};

const setCertification = certifications => {
    const certList = document.getElementById('certList');

    certifications.forEach(evt => {
        const li = document.createElement('li');

        const achItem = document.createElement('div');
        achItem.className = 'ach-item';

        const achTitle = document.createElement('div');
        achTitle.className = 'ach-title';
        achTitle.innerHTML = evt.desc;
        achItem.appendChild(achTitle);

        const achDuration = document.createElement('div');
        achDuration.className = 'ach-duration';
        achDuration.innerHTML = evt.date;
        achItem.appendChild(achDuration);

        li.appendChild(achItem);
        certList.appendChild(li);
    });
};

const setCatagoryHeader = title => {
    const catHeader = document.createElement('div');
    catHeader.className = 'cat-header';

    const catIndicator = document.createElement('span');
    catIndicator.className = 'cat-indicator';

    const i = document.createElement('i');
    i.className = 'fa fa-chevron-right';
    i['area-hidden'] = 'true';
    catIndicator.appendChild(i);
    catHeader.appendChild(catIndicator);

    const catTitle = document.createElement('span');
    catTitle.className = 'cat-title';
    catTitle.innerHTML = title;
    catHeader.appendChild(catTitle);

    return catHeader;
};

const setHobbies = hobbies => {
    const list = document.getElementById('hobbies');

    hobbies.forEach(evt => {
        const li = document.createElement('li');

        const achItem = document.createElement('div');
        achItem.className = 'language-item';

        const achTitle = document.createElement('div');
        achTitle.className = 'ach-title';
        achTitle.innerHTML = evt;
        achItem.appendChild(achTitle);

        li.appendChild(achItem);
        list.appendChild(li);
    })
}

const setLanguages = languages => {
    const list = document.getElementById('languages');

    languages.forEach(evt => {
        const li = document.createElement('li');

        const achItem = document.createElement('div');
        achItem.className = 'language-item';

        const achTitle = document.createElement('div');
        achTitle.className = 'ach-title';
        achTitle.innerHTML = evt.name;
        achItem.appendChild(achTitle);

        const achDuration = document.createElement('div');
        achDuration.className = 'language-level';
        achDuration.innerHTML = evt.level;
        achItem.appendChild(achDuration);

        li.appendChild(achItem);
        list.appendChild(li);
    })
}

const downloadPdf = async () => {
    await html2canvas(document.body, {
        scrollY: -window.scrollY, scale: 1, onclone: function (document) {
            document.querySelector('.container').style.margin = '0';
            document.querySelector('.container').style.maxWidth = 'initial';
            document.querySelector('.main-info-section').style.justifyContent = 'start';
            document.querySelector('.links-container').style.padding = '0';
            document.querySelector('.header').style.padding = '0';
        }
    }).then(
        canvas => {
            const contentDataURL = canvas.toDataURL("image/png", 1.0);
            let pdf = new jsPDF("p", "pt", "a4"); // A4 size page of PDF

            let imgWidth = 600;
            let pageHeight = pdf.internal.pageSize.height;
            let imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save(`${profileData.saveFileName}.pdf`);
        }
    );
}

//  Entry Function, IIFE
(() => {
    // Call functions to load profile
    setTitle(profileData);
    setLinks(profileData.links);
    setProjects(profileData.projects);
    setSkills(profileData.skills);
    setEducation(profileData.education);
    setCertification(profileData.certifications);
    setLanguages(profileData.languages);
    setHobbies(profileData.hobbies);
})();