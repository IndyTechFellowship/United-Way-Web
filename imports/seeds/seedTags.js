import moment from 'moment';

import { Tags } from '/imports/api/Tags';

const run = () => {
  const tags = [
    "Accuracy","Adaptable","Administrative","Advising","Analysis","Analytical","Assembling Apparatus","Being Artistic/Creative","Being Thorough","Budgeting","Business Storytelling","Calculations","Challenging Employees","Classifying Records","Coaching Individuals","Collaboration","Communication","Compiling Statistics","Computer","Conducting Meetings","Conflict Resolution","Confronting Others","Construction","Consultation","Counseling",
    "Creating Ideas","Creating Innovation","Creating New Solutions","Creating New Procedures","Creative Thinking","Critical Thinking","Customer Service","Decision Making","Defining Performance Standards","Defining Problems","Demonstrations","Detail Management","Dispensing Information","Displaying Ideas","Editing","Emotional Control","Encouragement","Entertainment","Equipment Operation","Evaluating","Expression of Feelings","Financial Report Auditing","Fundraising","Goal Setting","Handling Complaints",
    "Human Resources","Independent Action","Information Search","Innovation","Interpersonal","Interviews","Inventing New Ideas","Investigation","Involvement","Knowledge of Current Governmental Affairs","Language Translation","Leadership","Learning","Listening","Locating Missing Documents/Information","Logical Thinking","Maintaining High Levels of Activity","Maintenance","Management","Managing Finances","Measuring Boundaries","Medical Assistance","Meeting Deadlines","Microsoft Office","Monetary Collection",
    "Motivation","Multitasking","Negotiation","Networking","Nonverbal Communication","Numerical Analysis","Oration","Organizational","Organizational Management","Organizational Tasks","Overseeing Meetings","Overseeing Operation","Personal Interaction","Plan Development","Planning","Prediction","Preparing Written Documents","Principal Concept Knowledge","Prioritizing","Problem Solving","Promotions","Proposals","Proposal Writing","Publications","Public Relations",
    "Public Speaking","Questioning Others","Reading Volumes","Reasoning","Recommendations","Regulating Rules","Rehabilitating Others","Remembering Facts","Reporting","Report Writing","Responsibility","Service","Scheduling","Screening Calls","Sketching","Supervision","Technical Support","Team Building","Teamwork","Technical","Technology","Time Management","Toleration","Training","Transferable",
    "Updating Files","Organization Development","Persuasion","Plan Development","Planning","Policy Enforcement","Predicting","Presentation","Prioritization","Problem Solving","Productivity","Program Management","Project Management","Providing Feedback","Public Speaking","Research","Responsibility","Review","Scheduling","Situational Assessment","Strategic Planning ","Strategy Development","Structural Planning","Succession Planning","Taking Charge",
    "Task Analysis","Task Assessment","Task Resolution","Teaching","Team Building","Teamwork","Time Management","Training","Trends","Workflow Analysis","Workflow Management","Workforce Analysis","Working with Others","Writing"
  ]
  tags.forEach(function(tag) {
    Tags.insert({name:tag})
  })
}

export default run;
