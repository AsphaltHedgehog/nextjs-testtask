import React from "react";

export interface IJob {
  employer_name: string;
  employer_logo: string | null;
  employer_website: string | null;
  employer_company_type: string | null;
  job_publisher: string;
  job_id: string;
  job_employment_type: string;
  job_title: string;
  job_apply_link: string;
  job_apply_is_direct: boolean;
  job_apply_quality_score: number;
  job_description: string;
  job_is_remote: boolean;
  job_posted_at_timestamp: number;
  job_posted_at_datetime_utc: string;
  job_city: string;
  job_state: string;
  job_country: string;
  job_latitude: number;
  job_longitude: number;
  job_benefits?: string[] | null; 
  job_google_link: string;
  job_offer_expiration_datetime_utc: string | null;
  job_offer_expiration_timestamp: number | null;
  job_required_experience: {
    no_experience_required: boolean;
    required_experience_in_months: number | null;
    experience_mentioned: boolean;
    experience_preferred: boolean;
  };
  job_required_skills: string[] | null;
  job_required_education: {
    postgraduate_degree: boolean;
    professional_certification: boolean;
    high_school: boolean;
    associates_degree: boolean;
    bachelors_degree: boolean;
    degree_mentioned: boolean;
    degree_preferred: boolean;
    professional_certification_mentioned: boolean;
  };
  job_experience_in_place_of_education: boolean;
  job_min_salary: number | null;
  job_max_salary: number | null;
  job_salary_currency: string | null;
  job_salary_period: string | null;
  job_highlights?: {
    Qualifications: string[];
    Responsibilities: string[];
    Benefits?: string[];
  } | {};
  job_job_title: string | null;
  job_posting_language: string;
  job_onet_soc: string;
  job_onet_job_zone: string;
  job_naics_code?: string;
  job_naics_name?: string;
  job_occupational_categories?: string[];
}


export interface fetchJobProps {
  setJobs: React.Dispatch<React.SetStateAction<IJob[]>>;
}

const initialJobs: IJob[] = [
    {
      "employer_name": "Dice",
      "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0",
      "employer_website": null,
      "employer_company_type": "Information",
      "job_publisher": "LinkedIn",
      "job_id": "8yv3oA_2-UYAAAAAAAAAAA==",
      "job_employment_type": "CONTRACTOR",
      "job_title": "Web Developer - 6-month Contract - Houston Hybrid",
      "job_apply_link": "https://www.linkedin.com/jobs/view/web-developer-6-month-contract-houston-hybrid-at-dice-3624857671",
      "job_apply_is_direct": false,
      "job_apply_quality_score": 0.5805,
      "job_description": "An established energy client of mine is looking for an experienced Web Developer to join their team on an initial 6-month contract. Starting 6/5, you will be working in an agile team to help develop a new set of web applications for their own system and sub vendors. This role is hybrid and you will be required to go in to the office 3 days p/w.\n\nFull-Stack Web Developer\n\n6-month contract (likely extension)\n\nHouston - Hybrid working\n\nW2 - $70 - $75 p/h\n\nC2C - $80 - $90 p/h\n\nStarting 06/05\n\nTechnical requirements;\n\nJavaScript, (React OR Angular OR Vue), Node, HTML, CSSS, API\n\n(NO EMPLOYERS OR RECRUTIERS)\n\nOscar Associates Limited (US) is acting as an Employment Business in relation to this vacancy.\n\nWeb Developer - 6-month Contract - Houston Hybrid",
      "job_is_remote": true,
      "job_posted_at_timestamp": 1685653019,
      "job_posted_at_datetime_utc": "2023-06-01T20:56:59.000Z",
      "job_city": "Houston",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 29.760427,
      "job_longitude": -95.369804,
      "job_benefits": null,
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=8yv3oA_2-UYAAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": "2023-07-01T20:56:59.000Z",
      "job_offer_expiration_timestamp": 1688245019,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": null,
        "experience_mentioned": true,
        "experience_preferred": false
      },
      "job_required_skills": null,
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": true,
        "degree_mentioned": false,
        "degree_preferred": false,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "JavaScript, (React OR Angular OR Vue), Node, HTML, CSSS, API"
        ],
        "Responsibilities": [
          "Starting 6/5, you will be working in an agile team to help develop a new set of web applications for their own system and sub vendors",
          "This role is hybrid and you will be required to go in to the office 3 days p/w"
        ],
        "Benefits": [
          "6-month contract (likely extension)",
          "W2 - $70 - $75 p/h",
          "C2C - $80 - $90 p/h"
        ]
      },
      "job_job_title": null,
      "job_posting_language": "en",
      "job_onet_soc": "15113400",
      "job_onet_job_zone": "3",
      "job_naics_code": "519130",
      "job_naics_name": "Internet Publishing and Broadcasting and Web Search Portals"
    },
    {
      "employer_name": "Charles Schwab",
      "employer_logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Charles_Schwab_Corporation_logo.svg/1200px-Charles_Schwab_Corporation_logo.svg.png",
      "employer_website": "http://www.schwab.com",
      "employer_company_type": "Finance",
      "job_publisher": "Schwab Jobs",
      "job_id": "G6qYxpAYyVsAAAAAAAAAAA==",
      "job_employment_type": "FULLTIME",
      "job_title": "Software Web Developer",
      "job_apply_link": "https://www.schwabjobs.com/job/austin/software-web-developer/33727/48110146896",
      "job_apply_is_direct": false,
      "job_apply_quality_score": 0.8104,
      "job_description": "Your Opportunity\n\nWe help our clients plan for their future and they are passionate about the tools and experiences we provide. We collaborate with user experience and design, business and technology partners across the enterprise to build software experiences our users’ are passionate about.\nWhat you are good at\n\nWebsite and Electronic Communications (Email, Push, SMS, etc) Templates designing, building, or maintaining. Using scripting or authoring languages, management tools, content creation tools, applications and digital media. Conferring with teams in resolving conflicts, prioritizing needs, developing content criteria, or choosing solutions. Directing or performing Website/Electronic Communications updates. Developing or validating test routines and schedules in ensuring that test cases mimic external interfaces and address all browser and device types. Editing, writing, or designing Website content, and directing team members who produce content. Maintaining an understanding of the latest Web applications and programming practices through education, studying, and participating in conferences, workshops, and groups. Identifying problems uncovered by customer feedback and testing and correcting or referring problems to appropriate personnel for correction. Evaluating code in ensuring that it meets industry standards, is valid, is properly structured, and is compatible with browsers, devices, or operating systems; and Determining user needs by analyzing technical requirements.\nWhat you have\n\nJob Requirements: Bachelor’s degree or foreign degree equivalent in Computer Science, Engineering or related field and five (5) years of experience in the job offered or related role. Skills: Experience and/or education must include: Experience in programming applications using HTML, JavaScript, CSS, Angular/React Js, XML and Json.; SQL/No-SQL databases; Experience working with the continuous integration and continuous deployment (CI/CD) pipelines; Experience in programming applications using Java/J2EE; Understanding of software quality assurance principles; Experience working in Agile teams.\n\nCharles Schwab & Company, Inc. seeks Software Web Developer in Austin, TX.",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1682726400,
      "job_posted_at_datetime_utc": "2023-04-29T00:00:00.000Z",
      "job_city": "Austin",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 30.267153,
      "job_longitude": -97.74306,
      "job_benefits": null,
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=G6qYxpAYyVsAAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": null,
      "job_offer_expiration_timestamp": null,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": 60,
        "experience_mentioned": true,
        "experience_preferred": false
      },
      "job_required_skills": null,
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": false,
        "degree_mentioned": true,
        "degree_preferred": false,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "Job Requirements: Bachelor’s degree or foreign degree equivalent in Computer Science, Engineering or related field and five (5) years of experience in the job offered or related role",
          "Skills: Experience and/or education must include: Experience in programming applications using HTML, JavaScript, CSS, Angular/React Js, XML and Json.; SQL/No-SQL databases; Experience working with the continuous integration and continuous deployment (CI/CD) pipelines; Experience in programming applications using Java/J2EE; Understanding of software quality assurance principles; Experience working in Agile teams"
        ],
        "Responsibilities": [
          "Directing or performing Website/Electronic Communications updates",
          "Developing or validating test routines and schedules in ensuring that test cases mimic external interfaces and address all browser and device types",
          "Editing, writing, or designing Website content, and directing team members who produce content",
          "Maintaining an understanding of the latest Web applications and programming practices through education, studying, and participating in conferences, workshops, and groups",
          "Identifying problems uncovered by customer feedback and testing and correcting or referring problems to appropriate personnel for correction",
          "Evaluating code in ensuring that it meets industry standards, is valid, is properly structured, and is compatible with browsers, devices, or operating systems; and Determining user needs by analyzing technical requirements"
        ]
      },
      "job_job_title": null,
      "job_posting_language": "en",
      "job_onet_soc": "15113400",
      "job_onet_job_zone": "3",
      "job_naics_code": "523920",
      "job_naics_name": "Portfolio Management"
    },
    {
      "employer_name": "Crescens",
      "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8i49TxmypL921gwSrXCigLk762K1u2Qu9yW0x&s=0",
      "employer_website": null,
      "employer_company_type": null,
      "job_publisher": "Recruit.net",
      "job_id": "tZ_zrHS5wN8AAAAAAAAAAA==",
      "job_employment_type": "CONTRACTOR",
      "job_title": "Web Developer",
      "job_apply_link": "https://www.recruit.net/job/web-developer-jobs/A8362DD6B42FD034",
      "job_apply_is_direct": false,
      "job_apply_quality_score": 0.427,
      "job_description": "Job Description Job title : Web Developer Location : Remote Duration : 5 months Type: contract Job Description : Minimum of 7 years overall IT experience: including 5 years of web UI development and integration experience Responsible for detailed UI design, development/unit testing and integration of web and applications Responsible for Angular application development using web app development tools and frameworks Produce scalable and flexible, high-quality code that satisfies both the functional and non-functional requirements Identify technical issues & coordinate the resolution of these issues with extended team members from other applications Uses secure development best practices and design patterns Create or update design and systems documentation for developed or modified software component or application Create process and data flow diagrams for data movement capture Cross train team members for full knowledge coverage on team Analyze and translate business requirements to technical design Collaborate/communicate with project team and business users as required Support functional testing and performance testing Works with technical delivery lead on project activities Ensure assigned work is implemented within project schedules Strong Automotive OEM experience Solid understanding of various enterprise services and micro-service concepts Solid understanding of MicroService concepts and 12 Factor App design principles Experience with DevOps in a cloud environment a plus Experienced with waterfall, iterative, and agile methodologies. Required Skills: Demonstrated experience using UX design tools for facilitating the UI requrirement gathering and wire frame design Experience in desiging and developing modern web applications, particualry Single Page Applicaiton design. Professional working experience in Angular development with Typescript (minimum 3 years experience) Strong HTML5, CSS3 and Javascripts skills (minimum 5 years experience) Working experience in bootstrap and jquery Professional working experience with integrating REST services with Angular front-end. Working experience with version control tools like Git, SVN Deep knowledge of Angular practices and commonly used modules based on past work experience Extensive knowledge of javascript based frameworks to provide better yet faster UI experience for end users Experience in design and creating responsive web applications Experience in developing hybrid mobile applications using IONIC (Angular/Cordova) framework Proficient with UML models, and use them for communicating and documenting application designs Knowledge of core J2EE patterns Experience with continuous integration tools (e.g. SVN/git, Jira, Jenkins, Maven, etc.) Experience implementing authentication, authorization, Single Sign On, SAML, OAuth Experience in working with various web application servers (Websphere, Tomcat etc.) Strong analytical and debugging skills. Unique skills: Creating e2e test suites for angular components and running them with Web Testing Framework like Protractor, Cucumber or Other alternatives Open to learning new Technologies as required to meet business requirements Experience with application redesign and Angular framework upgrading from version 4.x to the later one Preferred: Experience in developing iOS and Android native mobile app Knowledge and experience with IBM Mobile First product Knowledge and experience with IBM Redhat Openshift product.",
      "job_is_remote": true,
      "job_posted_at_timestamp": 1685577600,
      "job_posted_at_datetime_utc": "2023-06-01T00:00:00.000Z",
      "job_city": "Texas City",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 29.383844,
      "job_longitude": -94.9027,
      "job_benefits": null,
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=tZ_zrHS5wN8AAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": "2023-07-01T00:00:00.000Z",
      "job_offer_expiration_timestamp": 1688169600,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": 84,
        "experience_mentioned": true,
        "experience_preferred": true
      },
      "job_required_skills": null,
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": false,
        "degree_mentioned": false,
        "degree_preferred": false,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {},
      "job_job_title": null,
      "job_posting_language": "en",
      "job_onet_soc": "15113400",
      "job_onet_job_zone": "3"
    },
    {
      "employer_name": "Spurs Sports & Entertainment",
      "employer_logo": "https://firstteeaustin.org/wp-content/uploads/sites/64/2016/11/spurs-sports-and-entertainment-LOGO.jpg",
      "employer_website": "http://www.spurs.com",
      "employer_company_type": "Consulting",
      "job_publisher": "LinkedIn",
      "job_id": "UzcMt4Nb4qkAAAAAAAAAAA==",
      "job_employment_type": "FULLTIME",
      "job_title": "Senior Web Developer",
      "job_apply_link": "https://www.linkedin.com/jobs/view/senior-web-developer-at-spurs-sports-entertainment-3617222882",
      "job_apply_is_direct": false,
      "job_apply_quality_score": 0.5699,
      "job_description": "Overview\n\nWe are looking for Senior Web Developer to join our family!\n\nAt Spurs Sports & Entertainment (SS&E), we work in service of something bigger than ourselves, it’s so much more than the game or concert itself. It takes all members of our Spurs Family to harness the power of sports and entertainment to build moments that endure, memories that excite, and connections that strengthen our community.\n\nThis position will support and manage both app and website development across the Spurs Sports & Entertainment portfolio. You will develop user-focused products, develop meaningful metrics and tracking them over time to establish a program of continuous innovation and improvement.\n\nIn addition to the above, this position will also be responsible for the development and maintenance of all websites in SS&E’s portfolio. Candidates should be flexible to modern development practices, embrace emerging standards and technology while advocating for the best methodologies.\n\nOverview -NOTE: This position is not responsible for social media administration. This position focuses on front end web and mobile app development and requires coding/programming skills necessary to build and solve assets both from scratch and from within multiple CMS environments.\n\nDoes this sound like a fit? If so, we want to hear from you!\n\nIn every position, each employee is expected to: Demonstrate Alignment with SS&E’s Core Values and Mission, Collaborate with Internal/External Family Members and Demonstrate Ongoing Development.\n\nResponsibilities\n• Write clean, reusable, and accessible client-side component code for web applications.\n• Understand product requirement documentation/functional specifications and develop application based upon specifications\n• Collaborate with project partners to ensure all requirements are met\n• Interact regularly with users to capture feedback, listen to their issues and concerns, recommend solutions.\n• Apply knowledge of modern web development to build and maintain responsive web pages\n• Be responsible for quality assurance testing for all digital platforms\n• Provide technical and developmental mentorship to junior developers\n• Other duties as assigned\n\nQualifications\n• 2-4 years’ experience developing responsive, web-based applications\n• 2+ years’ experience using version control - Git, GitHub, etc.\n• Experience with front-end development languages and markups (JavaScript, CSS, HTML, etc.)\n• Experience with UI CSS and/or JavaScript frameworks (Bootstrap, Materialize, Vue.JS, React, jQuery, etc.)\n• Familiarity and knowledge of API, JSON, XML, and other common data frameworks.\n• Experience working in content management systems\n• Ability to creatively problem solve, work independently and coordinate multiple tasks\n• Strong teamwork and interpersonal skills to handle acute and confidential situations and information\n\nPreferred Qualifications\n• Javascript framework experience a plus (Node.js, React.js, Next.js)\n• Previous experience in sports or event industries\n• Understanding of UX / UI / SEO principles\n\nEEO Statement\n• SS&E is an Equal Opportunity Employer*\n\nNothing contained in this job description is intended to be a contract of employment, nor does any information contained herein represent a guarantee of employment for a specific duration. Your employment with SS&E is “at will”, which means that either you or SS&E may terminate the relationship at any time.\n\nWe will ensure that individuals with disabilities are provided reasonable accommodation to participate in the job application or interview process, to perform essential job functions, and to receive other benefits and privileges of employment. Please contact us to request accommodation.",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1685525977,
      "job_posted_at_datetime_utc": "2023-05-31T09:39:37.000Z",
      "job_city": "San Antonio",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 29.42519,
      "job_longitude": -98.49459,
      "job_benefits": null,
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=UzcMt4Nb4qkAAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": "2023-06-30T09:39:37.000Z",
      "job_offer_expiration_timestamp": 1688117977,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": 24,
        "experience_mentioned": true,
        "experience_preferred": true
      },
      "job_required_skills": null,
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": true,
        "degree_mentioned": false,
        "degree_preferred": false,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "This position focuses on front end web and mobile app development and requires coding/programming skills necessary to build and solve assets both from scratch and from within multiple CMS environments",
          "2-4 years’ experience developing responsive, web-based applications",
          "2+ years’ experience using version control - Git, GitHub, etc",
          "Experience with front-end development languages and markups (JavaScript, CSS, HTML, etc.)",
          "Experience with UI CSS and/or JavaScript frameworks (Bootstrap, Materialize, Vue.JS, React, jQuery, etc.)",
          "Familiarity and knowledge of API, JSON, XML, and other common data frameworks",
          "Experience working in content management systems",
          "Ability to creatively problem solve, work independently and coordinate multiple tasks",
          "Strong teamwork and interpersonal skills to handle acute and confidential situations and information"
        ],
        "Responsibilities": [
          "This position will support and manage both app and website development across the Spurs Sports & Entertainment portfolio",
          "You will develop user-focused products, develop meaningful metrics and tracking them over time to establish a program of continuous innovation and improvement",
          "In addition to the above, this position will also be responsible for the development and maintenance of all websites in SS&E’s portfolio",
          "Write clean, reusable, and accessible client-side component code for web applications",
          "Understand product requirement documentation/functional specifications and develop application based upon specifications",
          "Collaborate with project partners to ensure all requirements are met",
          "Interact regularly with users to capture feedback, listen to their issues and concerns, recommend solutions",
          "Apply knowledge of modern web development to build and maintain responsive web pages",
          "Be responsible for quality assurance testing for all digital platforms",
          "Provide technical and developmental mentorship to junior developers",
          "Other duties as assigned"
        ]
      },
      "job_job_title": "Senior",
      "job_posting_language": "en",
      "job_onet_soc": "15113400",
      "job_onet_job_zone": "3",
      "job_naics_code": "541613",
      "job_naics_name": "Marketing Consulting Services"
    },
    {
      "employer_name": "Archetype Permanent Solutions",
      "employer_logo": null,
      "employer_website": null,
      "employer_company_type": null,
      "job_publisher": "Talent.com",
      "job_id": "JviQ_0mnlXoAAAAAAAAAAA==",
      "job_employment_type": "FULLTIME",
      "job_title": "Web developer",
      "job_apply_link": "https://www.talent.com/view?id=d9389c3c7cd3",
      "job_apply_is_direct": false,
      "job_apply_quality_score": 0.4979,
      "job_description": "Responsibilities :\n• Develop and maintain web applications using modern web technologies and programming languages\n• Work with cross-functional teams to understand business requirements and develop appropriate solutions\n• Write well-designed, testable, and efficient code using appropriate software development methodologies\n• Develop and maintain database schemas, queries, and stored procedures in SQL databases\n• Work with PLC logic and interface with web applications\n• Collaborate with front-end developers to integrate user-facing elements with server-side logic\n• Ensure the technical feasibility of UI / UX designs\n• Optimize web applications for maximum speed and scalability\n• Troubleshoot and debug web applications as necessary\n• Stay up-to-date with emerging trends and technologies in web development\n\nRequirements :\n• Bachelor's degree in Computer Science, Information Technology or related field\n• Proven experience in full stack web development with a focus on server-side technologies\n• Strong experience with Windows Server, SQL databases, and PLC logic\n• Proficient understanding of web markup, including HTML5, CSS3, and JavaScript frameworks (e.g. AngularJS, ReactJS)\n• Experience with web development frameworks such as ASP.NET , Node.js, Ruby on Rails, or Django\n• Knowledge of at least one server-side programming language such as C#, Java, or Python\n• Experience with version control systems such as Git\n• Strong analytical and problem-solving skills\n• Excellent communication and collaboration skills\n• Ability to work independently as well as in a team-oriented environment\n• Bilingual English and Korean\n\nIf you are an experienced Full Stack Web Developer with a passion for developing cutting-edge web applications and a desire to work with a dynamic team, please apply for this position.\n\nWe offer a competitive salary, benefits package, and opportunities for professional growth and advancement.\n\nPowered by JazzHR\n\nLast updated : 2023-06-01",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1685577600,
      "job_posted_at_datetime_utc": "2023-06-01T00:00:00.000Z",
      "job_city": "Austin",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 30.267153,
      "job_longitude": -97.74306,
      "job_benefits": null,
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=JviQ_0mnlXoAAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": "2023-09-02T00:00:00.000Z",
      "job_offer_expiration_timestamp": 1693612800,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": null,
        "experience_mentioned": true,
        "experience_preferred": false
      },
      "job_required_skills": null,
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": true,
        "degree_mentioned": true,
        "degree_preferred": true,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "Bachelor's degree in Computer Science, Information Technology or related field",
          "Proven experience in full stack web development with a focus on server-side technologies",
          "Strong experience with Windows Server, SQL databases, and PLC logic",
          "Proficient understanding of web markup, including HTML5, CSS3, and JavaScript frameworks (e.g",
          "AngularJS, ReactJS)",
          "Experience with web development frameworks such as ASP",
          "NET , Node.js, Ruby on Rails, or Django",
          "Knowledge of at least one server-side programming language such as C#, Java, or Python",
          "Experience with version control systems such as Git",
          "Strong analytical and problem-solving skills",
          "Excellent communication and collaboration skills",
          "Ability to work independently as well as in a team-oriented environment",
          "Bilingual English and Korean"
        ],
        "Responsibilities": [
          "Develop and maintain web applications using modern web technologies and programming languages",
          "Work with cross-functional teams to understand business requirements and develop appropriate solutions",
          "Write well-designed, testable, and efficient code using appropriate software development methodologies",
          "Develop and maintain database schemas, queries, and stored procedures in SQL databases",
          "Work with PLC logic and interface with web applications",
          "Collaborate with front-end developers to integrate user-facing elements with server-side logic",
          "Ensure the technical feasibility of UI / UX designs",
          "Optimize web applications for maximum speed and scalability",
          "Troubleshoot and debug web applications as necessary",
          "Stay up-to-date with emerging trends and technologies in web development"
        ],
        "Benefits": [
          "We offer a competitive salary, benefits package, and opportunities for professional growth and advancement"
        ]
      },
      "job_job_title": null,
      "job_posting_language": "en",
      "job_onet_soc": "15113400",
      "job_onet_job_zone": "3",
      "job_occupational_categories": ["15-1254.00"]
    },
    {
      "employer_name": "NextAfter",
      "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LtpFk_Qn5msyHfLis8HxKBBhhxla_ZNtS7bV&s=0",
      "employer_website": null,
      "employer_company_type": null,
      "job_publisher": "LinkedIn",
      "job_id": "DCi-37AXFUgAAAAAAAAAAA==",
      "job_employment_type": "FULLTIME",
      "job_title": "Front End Web Developer",
      "job_apply_link": "https://www.linkedin.com/jobs/view/front-end-web-developer-at-nextafter-3621796979",
      "job_apply_is_direct": false,
      "job_apply_quality_score": 0.5721,
      "job_description": "At NextAfter, web developers are critical in allowing our nonprofit clients to escape the shackles of poorly designed software. Out-of-the-box software solutions rarely allow nonprofits the flexibility necessary to track every donor action or to make design tweaks to improve donor conversion. That is where you come in.\n\nIn this role, you will be charged with helping organizations make websites do things they were never designed to do. You’ll apply your HTML, Javascript, and CSS skills toward crafting unique solutions to solve complex problems across a variety of different web platforms.\n\nBecause NextAfter works solely with nonprofits to help them raise money and awareness for their causes, it’s also essential that every member on our team desires to positively impact the world around them and cares about the people they’re serving alongside and those at the organizations we help.\n\nThe Front End Web Developer supports NextAfter’s efforts to discover what drives donors to give through setting up A/B experiments and optimizing the tracking of various advertising efforts.\n\nEssential Duties and Responsibilities include the following. Other duties may be assigned.\n• Setting up A/B experiments utilizing VWO, Optimizely, and similiar platforms. This will involve writing Javascript, HTML, and CSS to override existing page layout and design.\n• Implementing enhanced tracking to monitor the fundraising and marketing efforts. This is normally done with platforms such as Google Tag Manager, Google Analytics, Facebook, Google Ads, and other advertising platforms.\n• Configuring marketing software such as Mailchimp, Hubspot, and similar tools to serve the needs of the nonprofit clients that we work with. This involves setting up templates, implementing tracking, and making configuration changes based upon requirements.\n• Working with client service specialists to devise strategies and tactics that improve our clients’ performance.\n\nQualifications and Skills:\n• Advanced knowledge of Javascript (ability to code without relying on outside libraries such as Vue.js, jQuery, React.js, etc.)\n• Experience with HTML and CSS to craft web pages\n• Knowledge of marketing platforms such as Hubspot, MailChimp, and Pardot\n• Experience implementing digital analytics platforms such as Google Analytics and Facebook\n• Knowledge of A/B testing and the associated platforms such as VWO\n\nEducation and Experience\n• Bachelor’s degree (or comparable experience in a similar role)\n• Training in web development either from a Bachelor’s degree or coding bootcamp",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1685569007,
      "job_posted_at_datetime_utc": "2023-05-31T21:36:47.000Z",
      "job_city": "Plano",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 33.019844,
      "job_longitude": -96.69888,
      "job_benefits": null,
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=DCi-37AXFUgAAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": "2023-06-30T21:36:47.000Z",
      "job_offer_expiration_timestamp": 1688161007,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": null,
        "experience_mentioned": true,
        "experience_preferred": false
      },
      "job_required_skills": null,
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": true,
        "degree_mentioned": true,
        "degree_preferred": false,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": 60000,
      "job_max_salary": 70000,
      "job_salary_currency": "USD",
      "job_salary_period": "YEAR",
      "job_highlights": {
        "Qualifications": [
          "Advanced knowledge of Javascript (ability to code without relying on outside libraries such as Vue.js, jQuery, React.js, etc.)",
          "Experience with HTML and CSS to craft web pages",
          "Knowledge of marketing platforms such as Hubspot, MailChimp, and Pardot",
          "Experience implementing digital analytics platforms such as Google Analytics and Facebook",
          "Knowledge of A/B testing and the associated platforms such as VWO",
          "Bachelor’s degree (or comparable experience in a similar role)",
          "Training in web development either from a Bachelor’s degree or coding bootcamp"
        ],
        "Responsibilities": [
          "In this role, you will be charged with helping organizations make websites do things they were never designed to do",
          "You’ll apply your HTML, Javascript, and CSS skills toward crafting unique solutions to solve complex problems across a variety of different web platforms",
          "Setting up A/B experiments utilizing VWO, Optimizely, and similiar platforms",
          "This will involve writing Javascript, HTML, and CSS to override existing page layout and design",
          "Implementing enhanced tracking to monitor the fundraising and marketing efforts",
          "This is normally done with platforms such as Google Tag Manager, Google Analytics, Facebook, Google Ads, and other advertising platforms",
          "Configuring marketing software such as Mailchimp, Hubspot, and similar tools to serve the needs of the nonprofit clients that we work with",
          "This involves setting up templates, implementing tracking, and making configuration changes based upon requirements",
          "Working with client service specialists to devise strategies and tactics that improve our clients’ performance"
        ]
      },
      "job_job_title": null,
      "job_posting_language": "en",
      "job_onet_soc": "15113400",
      "job_onet_job_zone": "3"
    }
  ]



const fetchJobs = ({ setJobs }: fetchJobProps) => {
  setJobs(initialJobs)

}


export default fetchJobs;