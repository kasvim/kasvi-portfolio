AOS.init();

    // Data for the portfolio sections
    const portfolioData = {
        projects: [
            {
                id: 'project-covid',
                type: 'project',
                title: 'Disease Modeling: COVID-19 in France',
                subtitle: 'Epidemiological SVIR Model (2024)',
                imageSrc: 'assets/Covid-19_img.jpg',
                description: 'Curated data for COVID-19 cases in France in 2021, developed an SVIR disease model and performed a detailed statistical analysis using MATLAB and Python.',
                rating: 4.5,
                achievementsHeading: 'Key Technical Achievements:',
                achievementsListItems: [
                    'Implemented SVIR system using MATLAB’s ode45',
                    'Fitted exponential growth/decay functions to real data',
                    'Computed basic reproduction number R0 and conducted stability analysis',
                    'Validated results through residual analysis and parameter tuning'
                ],
                viewPaperLink: 'assets/Covid-19 France_Kasvi_Mahajan_FinalProject.pdf',
                exploreProjectLink: null,
                skills: ['skillMatlab', 'skillPython', 'skillMathModeling', 'skillDataViz']
            },
            {
                id: 'project-adventure',
                type: 'project',
                title: 'Adventure Works Data Analysis',
                subtitle: 'Sales & Efficiency with Excel & SQL (2023)',
                imageSrc: 'assets/adventure_img.jpg',
                description: 'Analyzed data for a fictitious company using MS Excel, Pivot tables, and VBA. Improved company data formatting, repetitions, and clarity, which increased sales and streamlined day-to-day business.',
                rating: 3.0,
                achievementsHeading: 'Key Skills Demonstrated:',
                achievementsListItems: [
                    'Data analysis in Microsoft Excel and SQL',
                    'Utilization of Pivot tables for data summarization',
                    'VBA for automation and efficiency gains',
                    'Data cleaning and formatting for improved clarity and business operations'
                ],
                viewPaperLink: null,
                exploreProjectLink: '#',
                skills: ['skillSql']
            },
            {
                id: 'project-socio',
                type: 'project',
                title: 'Socio-Economic Factor Analysis',
                subtitle: 'Python Regression Model (2023)',
                imageSrc: 'assets/income_img.jpg',
                description: 'Engineered and analyzed a dataset of 8,000 individuals using Python, handling missing values and encoding 8 categorical variables to model the impact of demographic factors on income.',
                rating: 3.5,
                achievementsHeading: 'Key Technical Achievements:',
                achievementsListItems: [
                    'Dataset engineering and cleaning for 8,000 individuals using Python',
                    'Handling missing values and encoding categorical variables',
                    'Developed a multiple linear regression model to predict income',
                    'Identified significant demographic factors influencing earnings'
                ],
                viewPaperLink: null,
                exploreProjectLink: '#',
                skills: ['skillPython', 'skillDataViz']
            }
        ],
        experience: [
            {
                id: 'historyResearch',
                type: 'experience',
                title: 'Undergraduate Research Assistant',
                subtitle: 'Western University (History) (May 2025 – Present)',
                description: '<strong>University of Western Ontario</strong><br>London, ON',
                achievementsHeading: 'Role & Responsibilities:',
                achievementsListItems: [
                    'Collected and evaluated data from 36 Canadian universities offering IR-related programs, enabling comparative analysis to guide departmental improvements at Western.',
                    'Built an interactive Excel dashboard to visualise key metrics, trends, and strategic benchmarks, enhancing decision-making for long-term program enhancement.',
                    'Developing a data-driven quality control strategy for the IR program using peer-reviewed research conducted on higher education teaching strategies, along with utilising current resources available at Western.'
                ]
            },
            {
                id: 'mathResearch',
                type: 'experience',
                title: 'Undergraduate Research Assistant',
                subtitle: 'Western University (Mathematics) (May 2024 – September 2024)',
                description: '<strong>University of Western Ontario</strong><br>London, ON',
                achievementsHeading: 'Role & Responsibilities:',
                achievementsListItems: [
                    'Analysed fitness landscapes and genome mutations, improving research accuracy through data simulations in Python.',
                    'Refined computational efficiency by 40% using MATLAB/Python, saving 6-7 hours in repetitive computations.'
                ]
            },
            {
                id: 'earthResearch',
                type: 'experience',
                title: 'Undergraduate Research Assistant',
                subtitle: 'Western University (Earth Sciences) (June 2023 – April 2024)',
                description: '<strong>University of Western Ontario</strong><br>London, ON',
                achievementsHeading: 'Role & Responsibilities:',
                achievementsListItems: [
                    'Conducted in-depth research on 15+ peer-reviewed papers, ensuring research was aligned with ongoing project needs.',
                    'Collaborated with PhD candidates to analyse geological datasets, contributing to a research project that improved data accuracy.',
                    'This resulted in enhanced overall research quality for hundreds of samples.'
                ]
            },
            {
                id: 'eyIntern',
                type: 'experience',
                title: 'Project Intern',
                subtitle: 'Ernst & Young (EY) India (May 2023 – August 2023)',
                description: '<strong>Ernst & Young (EY) India</strong><br>New Delhi, India',
                achievementsHeading: 'Role & Responsibilities:',
                achievementsListItems: [
                    'Conducted real-time research utilising corporate business activities of over 50 companies with a focus on organisations like PowerGrid and Tata Enterprise, and their tenders to procure them as potential clients.',
                    'Provided the collected data in an organised format using Microsoft Excel.',
                    'Curated data from websites like psuwatch.com for ongoing news and changes in companies for updated information, and furnished my supervisors weekly.',
                    'Utilised VBA and Pivot tables to automate data entry, calculations and formatting tasks.'
                ]
            }
        ],
        skills: [
            {
                id: 'skillPython',
                type: 'skill',
                title: 'Python',
                proficiency: 4.5,
                iconSrc: 'assets/python_logo.png',
                description: 'Utilized for comprehensive data analysis, machine learning model development, scripting automated tasks, and building web applications. Strong command over libraries like Pandas, NumPy, Scikit-learn, and Matplotlib.',
                toolsAndConcepts: ['Pandas, NumPy, Scikit-learn', 'Automated data processing', 'Web scraping and API integration'],
                projectsFeaturingSkill: ['project-covid', 'project-socio']
            },
            {
                id: 'skillMatlab',
                type: 'skill',
                title: 'MATLAB',
                proficiency: 5,
                iconSrc: 'assets/matlab_logo.png',
                description: 'Proficient in mathematical modeling, simulation, and algorithm development, particularly in numerical analysis and differential equations. Applied extensively in disease modeling and scientific computing.',
                toolsAndConcepts: ['Numerical Analysis, ODE solvers', 'Signal processing, Image processing', 'Toolbox utilization (Simulink)'],
                projectsFeaturingSkill: ['project-covid']
            },
            {
                id: 'skillR',
                type: 'skill',
                title: 'R',
                proficiency: 4,
                iconSrc: 'assets/r_logo.png',
                description: 'Experienced in statistical computing, graphical techniques, and data analysis. Used for complex statistical modeling and creating high-quality data visualizations.',
                toolsAndConcepts: ['Statistical modeling (glm, lm)', 'Data visualization (ggplot2)', 'Package development'],
                projectsFeaturingSkill: []
            },
            {
                id: 'skillSql',
                type: 'skill',
                title: 'SQL',
                proficiency: 3,
                iconSrc: 'assets/sql_logo.png',
                description: 'Competent in querying and managing relational databases, including data extraction, manipulation, and analysis. Experience with various SQL dialects.',
                toolsAndConcepts: ['Database querying & optimization', 'Data integrity & consistency', 'Reporting & analytics'],
                projectsFeaturingSkill: ['project-adventure']
            },
            {
                id: 'skillDataViz',
                type: 'skill',
                title: 'Data Visualization',
                proficiency: 4.5,
                iconSrc: 'assets/dataviz_icon.png',
                description: 'Skilled in transforming complex data into clear, compelling, and aesthetically pleasing visual narratives using tools like Matplotlib, Seaborn, and Power BI.',
                toolsAndConcepts: ['Interactive dashboards (Power BI)', 'Information design', 'Visual storytelling'],
                projectsFeaturingSkill: ['project-covid', 'project-socio']
            },
            {
                id: 'skillMathModeling',
                type: 'skill',
                title: 'Mathematical Modeling',
                proficiency: 5,
                iconSrc: 'assets/math_modeling_icon.png',
                description: 'Expert in developing and analyzing mathematical models for real-world phenomena, including epidemiological systems and complex simulations, using differential equations and computational methods.',
                toolsAndConcepts: ['Epidemiological modeling', 'Differential equations', 'Parameter fitting & analysis'],
                projectsFeaturingSkill: ['project-covid']
            }
        ],
        leadership: [
            {
                id: 'womenInMath',
                type: 'leadership',
                title: 'Director of Outreach',
                organization: 'Women in Mathematics',
                date: '2023 – Present',
                summary: 'Leading initiatives to promote gender diversity in STEM fields and creating inclusive opportunities for women in mathematics.',
                description: 'As Director of Outreach, I spearhead initiatives to promote gender diversity in STEM fields, specifically encouraging more women to pursue careers in mathematics. This involves designing and implementing programs that bridge the gap between academic mathematics and real-world applications.',
                listItems: [
                    'Organized and hosted over 10 workshops and seminars focusing on diverse mathematical topics and career paths, engaging over 200 students annually.',
                    'Established and managed a mentorship program connecting undergraduate students with female faculty members and industry professionals.',
                    'Developed and executed community outreach events, collaborating with local schools to introduce mathematics to young girls, increasing participation by 30%.',
                    'Managed communication and promotional campaigns for all events, utilizing social media and university platforms.'
                ]
            },
            {
                id: 'teamLead',
                type: 'leadership',
                title: 'Team Lead',
                organization: 'Leadership and Mentorship Program',
                date: '2022 – 2024',
                summary: 'Guiding and mentoring fellow students in their academic and professional development.',
                description: 'I led a team within the university\'s mentorship program, dedicated to fostering academic and professional growth among students. My responsibilities included guiding new mentors and ensuring program effectiveness.',
                listItems: [
                    'Coordinated and facilitated weekly team meetings, ensuring effective communication and task delegation among mentors.',
                    'Developed and delivered training modules for new mentors on effective communication, active listening, and goal setting techniques.',
                    'Mentored a cohort of 15 students, providing academic guidance, career advice, and personal development support.',
                    'Organized peer-led study groups and workshops on challenging course material, resulting in a 10% improvement in mentee academic performance.'
                ]
            },
            {
                id: 'committeeMember',
                type: 'leadership',
                title: 'Committee Member',
                organization: 'Western Science Students\' Council',
                date: '2022 – Present',
                summary: 'Contributing to student governance and representing the interests of science students.',
                description: 'As a member of the International Committee, I actively contributed to student governance and advocated for the needs of international science students at Western University.',
                listItems: [
                    'Represented the interests of international science students in council meetings and decision-making processes.',
                    'Organized and promoted cultural integration events for international students, increasing attendance by 25%.',
                    'Contributed to the development of student policies related to academic support and community engagement for diverse student populations.',
                    'Collaborated with university administration to address student concerns and improve overall student experience.'
                ]
            }
        ]
    };

  
    function createProjectCard(project) {
        // Get the stars using the existing function
        const projectRatingStars = generateStars(project.rating || 0);

        return `
            <div id="${project.id}" class="project-card" data-aos="fade-up" data-type="${project.type}" data-id="${project.id}">
                <div class="project-image-wrapper">
                    <img class="project-image" src="${project.imageSrc}" alt="${project.title}">
                </div>
                <div class="project-overlay">
                    <div class="project-overlay-content">
                        <div class="project-title">${project.title}</div>
                        <div class="project-subtitle">${project.subtitle}</div>
                        <div class="project-rating">
                            ${projectRatingStars}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function createExperienceCard(experience) {
        return `
            <div id="${experience.id}" class="experience-card" data-aos="fade-up" data-type="${experience.type}" data-id="${experience.id}">
                <div class="card-visible-content">
                    <div class="card-icon">🧮</div>
                    <h3 class="card-title">${experience.title}</h3>
                    <p class="card-company">${experience.subtitle}</p>
                    <span class="card-date">${experience.date}</span>
                </div>
            </div>
        `;
    }

    function createSkillCard(skill) {
        const projectsWithSkill = portfolioData.projects.filter(p => p.skills.includes(skill.id)).map(p => p.id);
        const projectsDataAttr = projectsWithSkill.join(',');

        return `
            <div id="${skill.id}" class="skill-item" data-aos="zoom-in" data-type="${skill.type}" data-id="${skill.id}">
                <div class="skill-icon-wrapper">
                    <img src="${skill.iconSrc}" alt="${skill.title} Logo" class="skill-icon-img">
                </div>
                <h3 class="skill-name">${skill.title}</h3>
                <div class="proficiency-rating" data-proficiency="${skill.proficiency}">
                    ${generateStars(skill.proficiency)}
                </div>
            </div>
        `;
    }

    function createLeadershipCard(leadership) {
        return `
            <div id="${leadership.id}" class="leadership-card" data-aos="zoom-in" data-type="${leadership.type}" data-id="${leadership.id}">
                <div class="card-header">
                    <h3>👑 ${leadership.title}</h3>
                    <p class="org">${leadership.organization}</p>
                </div>
                <div class="card-body">
                    <div class="date-tag">${leadership.date}</div>
                    <p>${leadership.summary}</p>
                </div>
            </div>
        `;
    }
    
    function generateStars(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        return stars;
    }

    function renderPortfolio() {
        document.getElementById('projects-container').innerHTML = portfolioData.projects.map(createProjectCard).join('');
        document.getElementById('experience-grid').innerHTML = portfolioData.experience.map(createExperienceCard).join('');
        document.getElementById('all-skills-grid').innerHTML = portfolioData.skills.map(createSkillCard).join('');
        document.getElementById('leadership-grid').innerHTML = portfolioData.leadership.map(createLeadershipCard).join('');
    }

    document.addEventListener('DOMContentLoaded', () => {
        renderPortfolio();
        AOS.init();
        AOS.refresh();
    });

    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    function enableDarkMode() {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        darkModeToggle.textContent = '🌙';
    }

    function disableDarkMode() {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        darkModeToggle.textContent = '☀️';
    }

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    darkModeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    const projectModal = document.getElementById('projectModal');
    const modalCloseButton = projectModal.querySelector('.modal-close');
    const modalOverlay = projectModal.querySelector('.modal-overlay');
    const modalImageWrapper = projectModal.querySelector('.modal-image-wrapper');
    const modalProjectImage = projectModal.querySelector('.modal-project-image');
    const modalProjectTitle = projectModal.querySelector('.modal-project-title');
    const modalProjectSubtitle = projectModal.querySelector('.modal-project-subtitle');
    const modalProjectDescription = projectModal.querySelector('.modal-project-description');
    const modalAchievementsHeading = projectModal.querySelector('.modal-achievements-heading');
    const modalAchievementsList = projectModal.querySelector('.modal-achievements-list');
    const modalButtonsContainer = projectModal.querySelector('.modal-buttons');
    const modalViewPaperButton = projectModal.querySelector('.modal-view-paper');
    const modalExploreProjectButton = projectModal.querySelector('.modal-explore-project');
    const modalSkillContent = projectModal.querySelector('.modal-skill-content');
    const skillModalStarsContainer = projectModal.querySelector('.skill-modal-stars');
    const modalSkillProjectsGrid = projectModal.querySelector('.modal-skill-projects-grid');
    const modalSkillProjectsHeading = projectModal.querySelector('.modal-skill-projects-heading');
    const modalSkillToolsList = projectModal.querySelector('.modal-skill-tools-list');
    const modalSkillToolsHeading = projectModal.querySelector('.modal-skill-tools-heading');

    function populateAndOpenModal(data) {
        modalImageWrapper.style.display = 'none';
        modalAchievementsHeading.style.display = 'none';
        modalAchievementsList.style.display = 'none';
        modalButtonsContainer.style.display = 'none';
        modalSkillContent.style.display = 'none';
        projectModal.classList.remove('skill-modal');
        modalProjectTitle.textContent = data.title;
        if (data.subtitle) {
            modalProjectSubtitle.textContent = data.subtitle;
            modalProjectSubtitle.style.display = 'block';
        } else {
            modalProjectSubtitle.style.display = 'none';
        }
        if (data.description) {
            modalProjectDescription.innerHTML = data.description;
            modalProjectDescription.style.display = 'block';
        } else {
            modalProjectDescription.style.display = 'none';
        }
        if (data.type === 'project') {
            modalImageWrapper.style.display = 'block';
            modalProjectImage.src = data.imageSrc;
            modalProjectImage.alt = data.title;
            if (data.achievementsListItems && data.achievementsListItems.length > 0) {
                modalAchievementsHeading.textContent = data.achievementsHeading;
                modalAchievementsHeading.style.display = 'block';
                modalAchievementsList.innerHTML = data.achievementsListItems.map(item => `<li>${item}</li>`).join('');
                modalAchievementsList.style.display = 'block';
            }
            let hasButtons = false;
            if (data.viewPaperLink && data.viewPaperLink !== '#') {
                modalViewPaperButton.href = data.viewPaperLink;
                modalViewPaperButton.style.display = 'inline-block';
                hasButtons = true;
            } else {
                modalViewPaperButton.style.display = 'none';
            }
            if (data.exploreProjectLink && data.exploreProjectLink !== '#') {
                modalExploreProjectButton.href = data.exploreProjectLink;
                modalExploreProjectButton.style.display = 'inline-block';
                hasButtons = true;
            } else {
                modalExploreProjectButton.style.display = 'none';
            }
            if (hasButtons) {
                modalButtonsContainer.style.display = 'flex';
            }
        } else if (data.type === 'experience' || data.type === 'leadership') {
            if (data.listItems && data.listItems.length > 0) {
                modalAchievementsHeading.textContent = data.achievementsHeading;
                modalAchievementsHeading.style.display = 'block';
                modalAchievementsList.innerHTML = data.listItems.map(item => `<li>${item}</li>`).join('');
                modalAchievementsList.style.display = 'block';
            }
        } else if (data.type === 'skill') {
            projectModal.classList.add('skill-modal');
            modalSkillContent.style.display = 'block';
            skillModalStarsContainer.innerHTML = generateStars(data.proficiency);
            modalSkillProjectsGrid.innerHTML = '';
            if (data.projectsFeaturingSkill && data.projectsFeaturingSkill.length > 0) {
                modalSkillProjectsHeading.style.display = 'block';
                data.projectsFeaturingSkill.forEach(projectId => {
                    const project = portfolioData.projects.find(p => p.id === projectId);
                    if (project) {
                        const miniCardHtml = `
                            <a href="#projects" class="modal-mini-project-card" data-project-id="${projectId}">
                                <div class="modal-mini-project-image-wrapper">
                                    <img src="${project.imageSrc}" alt="${project.title}" class="modal-mini-project-image">
                                </div>
                                <div class="modal-mini-project-title">${project.title}</div>
                            </a>
                        `;
                        modalSkillProjectsGrid.innerHTML += miniCardHtml;
                    }
                });
                modalSkillProjectsGrid.style.display = 'grid';
            } else {
                modalSkillProjectsHeading.style.display = 'none';
                modalSkillProjectsGrid.style.display = 'none';
            }
            modalSkillToolsList.innerHTML = '';
            if (data.toolsAndConcepts && data.toolsAndConcepts.length > 0) {
                modalSkillToolsHeading.style.display = 'block';
                modalSkillToolsList.innerHTML = data.toolsAndConcepts.map(tool => `<li>${tool}</li>`).join('');
                modalSkillToolsList.style.display = 'flex';
            } else {
                modalSkillToolsHeading.style.display = 'none';
                modalSkillToolsList.style.display = 'none';
            }
        }
        projectModal.classList.add('is-open');
        body.classList.add('modal-open');
    }

    function closeGenericModal() {
        projectModal.classList.remove('is-open');
        body.classList.remove('modal-open');
        modalProjectImage.src = '';
    }

    modalCloseButton.addEventListener('click', closeGenericModal);
    modalOverlay.addEventListener('click', closeGenericModal);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && projectModal.classList.contains('is-open')) {
            closeGenericModal();
        }
    });

    document.addEventListener('click', (event) => {
        let clickedCard = event.target.closest('[data-id]');
        if (clickedCard) {
            const type = clickedCard.dataset.type;
            const id = clickedCard.dataset.id;
            const data = portfolioData[type + 's'].find(item => item.id === id);
            if (data) {
                populateAndOpenModal(data);
            }
        }
    });

    projectModal.addEventListener('click', (event) => {
        if (event.target.closest('.modal-mini-project-card')) {
            const miniProjectCard = event.target.closest('.modal-mini-project-card');
            const projectId = miniProjectCard.dataset.projectId;
            closeGenericModal();
            setTimeout(() => {
                const project = portfolioData.projects.find(p => p.id === projectId);
                if (project) {
                    populateAndOpenModal(project);
                }
            }, 300);
        }
    });
    
    // --- About Me Slider Logic ---
    const sliderTrack = document.querySelector('.about-cards-track');
    const slides = document.querySelectorAll('.about-cards-track .info-card');
    const prevArrow = document.querySelector('.slider-arrow.prev-slide');
    const nextArrow = document.querySelector('.slider-arrow.next-slide');
    const sliderDots = document.querySelectorAll('.slider-dots .dot');

    let currentSlideIndex = 0;
    const totalSlides = slides.length;

    function goToSlide(index) {
        if (index < 0) {
            currentSlideIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentSlideIndex = 0;
        } else {
            currentSlideIndex = index;
        }
        const offset = -currentSlideIndex * 100;
        sliderTrack.style.transform = `translateX(${offset}%)`;
        sliderDots.forEach((dot, idx) => {
            if (idx === currentSlideIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    if (prevArrow && nextArrow) {
      prevArrow.addEventListener('click', () => {
          goToSlide(currentSlideIndex - 1);
      });
      nextArrow.addEventListener('click', () => {
          goToSlide(currentSlideIndex + 1);
      });
    }

    if (sliderDots) {
      sliderDots.forEach((dot, index) => {
          dot.addEventListener('click', () => {
              goToSlide(index);
          });
      });
    }
    
    const topBtn = document.getElementById("scrollToTopBtn");
    const progressBar = document.getElementById("progress-bar");
    window.onscroll = function () {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        if (progressBar) {
            progressBar.style.width = progress + "%";
        }
        if (topBtn) {
            topBtn.style.display = (scrollTop > 300) ? "block" : "none";
        }
    };

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 100 && pageYOffset < sectionTop + sectionHeight - 100) {
                current = section.getAttribute("id");
            }
        });
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mainNavUl = document.querySelector('nav ul');

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            mainNavUl.classList.toggle('show');
        });
    }

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", () => {
            const navUl = document.querySelector("nav ul");
            if (navUl.classList.contains("show")) {
                navUl.classList.remove("show");
            }
        });
    });

    // --- Search Functionality ---
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase().trim();
        const allCards = document.querySelectorAll('[data-id]');
        
        allCards.forEach(card => {
            const id = card.dataset.id;
            let found = false;
            
            // Search projects
            if (id.startsWith('project-')) {
                const project = portfolioData.projects.find(p => p.id === id);
                if (project && (project.title.toLowerCase().includes(query) || project.subtitle.toLowerCase().includes(query) || project.description.toLowerCase().includes(query))) {
                    found = true;
                }
            }
            
            // Search skills
            if (id.startsWith('skill')) {
                const skill = portfolioData.skills.find(s => s.id === id);
                if (skill && (skill.title.toLowerCase().includes(query) || skill.description.toLowerCase().includes(query))) {
                    found = true;
                }
            }
            
            // Search experiences
            if (id.startsWith('history') || id.startsWith('math') || id.startsWith('earth') || id.startsWith('ey')) {
                 const experience = portfolioData.experience.find(e => e.id === id);
                 if (experience && (experience.title.toLowerCase().includes(query) || experience.subtitle.toLowerCase().includes(query) || (experience.description && experience.description.toLowerCase().includes(query)))) {
                    found = true;
                 }
            }
            
            // Search leadership
            if (id.startsWith('women') || id.startsWith('team') || id.startsWith('committee')) {
                const leadership = portfolioData.leadership.find(l => l.id === id);
                if (leadership && (leadership.title.toLowerCase().includes(query) || leadership.organization.toLowerCase().includes(query) || leadership.summary.toLowerCase().includes(query))) {
                    found = true;
                }
            }

            if (found) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    if (topBtn) {
        topBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }