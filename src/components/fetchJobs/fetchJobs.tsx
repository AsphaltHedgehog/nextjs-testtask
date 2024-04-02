import React from "react";

export interface IJob {
  employer_name: string;
  employer_logo: string;
  employer_website: string | null;
  employer_company_type: string;
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
  job_highlights: {
    Qualifications: string[];
    Responsibilities: string[];
    Benefits?: string[];
  };
  job_job_title: string | null;
  job_posting_language: string;
  job_onet_soc: string;
  job_onet_job_zone: string;
  job_naics_code: string;
  job_naics_name: string;
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
  ]



const fetchJobs = ({ setJobs }: fetchJobProps) => {
  setJobs(initialJobs)

}


export default fetchJobs;