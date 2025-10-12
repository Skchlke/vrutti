const formConfig = {
  sections: [
    {
      title: "Demographics",
      questions: [
        {
          text: "What is your percentage at School?",
          type: "text",
          options: [],
        },
        {
          text: "What is your Percentage at College?",
          type: "text",
          options: [],
        },

        {
          text: "Hours learning per day",
          type: "text",
          options: [],
        },
        {
          text: "Self-learning capability?",
          type: "text",
          options: [],
        },
        {
          text: "How to do prefer to interact socially?",
          type: "radio",
          options: ["Introvert", "Extrovert"],
        },

        {
          text: "Interested in extracurricular activities?",
          type: "radio",
          options: ["Yes","No"],
        },
       
      ],
    },
    {
      title: "Passion",
      questions: [
        {
          text: "What activities make you feel most fulfilled?",
          type: "radio",
          options: ["payroll processing","stage presence","Crop Management","patient monitoring","critical care","character animation","Modeling planetary systems","influencer partnerships", "Preparing project reports",
            "culinary creativity","cardiac rehabilitation", "dance composition", "Other"],
        },
        {
          text: "Which hobbies do you enjoy most?",
          type: "radio",
          options: ["Content creation", "Poetry", "Reading science fiction", "Creative writing","Yoga","Reading","Cooking","Gardening","Other"],
        },
        {
          text: "What is your strength?",
          type: "text",
          options: [],
        },
      ],
    },
    {
      title: "Profession",
      questions: [
        {
          text: "What type of work environment do you prefer?",
          type: "radio",
          options: ["Remote", "In-office", "Hybrid"],
        },
        {
          text: "What skills do you excel at?",
          type: "radio",
          options: ["troubleshooting systems", "Brand Development", "food styling", "programming","testing","SEO optimization","decision making","adaptability","Others"],
        },
        {
          text: "What are your professional goals for the next 5 years?",
          type: "text",
          options: [],
        },
      ],
    },
    {
      title: "Vocation",
      questions: [
        {
          text: "What services or solutions can you offer that the world needs?",
          type: "radio",
          options: ["Education", "Healthcare", "Technology", "Environment", "Other"],
        },
        {
          text: "What motivates you to contribute to society?",
          type: "text",
          options: [],
        },
        {
          text: "What industries or fields interest you the most?",
          type: "dropdown",
          options: ["Veterinary Medicine","Urban Planning","UX/UI Design","Travel","Fashion","Textiles","Business","Medicine","Surgery",
            "Sports","Logistics","Supply Chain","Software Development","Metalworking","Sculpture","Film/Television","Sales","Digital Marketing","Engineering","Construction","Research","Real Estate","Radiology","Radio","Quality Assurance","Transportation","Communications","Public Relations","Dance","Graphic Design","Education","Law","Maritime Studies","Podiatry","Plumbing",
            "Literature","Aviation","Physics","Photography","Pharmacy","Entomology","Culinary Arts","Fine Arts","Agriculture","Oceanography","Nutrition","Nursing","Journalism","Music","Animation","Meteorology","Finance","Interior Design","IT Support","Service","Human Resources","Geology","Forensic Science","Data Science","Environmental Science","Digital Media","Dentistry","Psychology",
            "Astronomy","Architecture"],
        },
      ],
    },
    {
      title: "Mission",
      questions: [
        {
          text: "What problems in the world do you feel most compelled to solve?",
          type: "text",
          options: [],
        },
        {
          text: "Which of these areas align with your mission?",
          type: "dropdown",
          options: ["Education", "Healthcare", "Sustainability", "Equality", "Technology and Innovation","Economic Development","Athletics","Community Development","Environmental Conservation","Human Rights","Cultural Preservation","Youth Empowerment"],
        },
        {
          text: "What legacy would you like to leave behind?",
          type: "text",
          options: [],
        },
      ],
    },
  ],
};

export default formConfig;