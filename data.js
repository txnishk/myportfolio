/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "Tanishk",
  email: "tanishk10sharma@gmail.com",
  about:
    "Hey! I'm <b>Tanishk</b>, a 15 year old <b>Social Media</b> and <b>Thumbnail Designer</b> currently based in <b>India</b>.",

  // intro
  accomplishments: {
    name: "Recent Accomplishments",
    value: [
      "Learned HTML + CSS",
      "Started a side project",
      "Cooked meal for myself and choked to death",
    ],
  },
  socialLink: {
    name: "Social Links",
    value: [
      { name: "Twitter", link: "https://twitter.com/madebytanishk" },
      { name: "Behance", link: "https://www.behance.net/madebytanishk" },
    ],
  },
  currentProfession: {
    name: "Currently",
	  value: [
		  "Doing contract/freelance work",
		  "Available for new projects"
	  ],
  },

  // Footer
  contactDetails: {
    name: "Ways to contact me",
    value: [
      {
        name: "Gmail",
        value: "tanishk10sharma@gmail.com",
      },
      {
        name: "Twitter",
        value: "madebytanishk",
      },
    ],
  },
  currentStatus: {
    name: "What am I upto right now",
    value: [
      "Completing Commissions",
      "Grinding Whitelists in NFT Servers",
    ],
  },

  // work
  // image min-dimensions: 1640x600
  // image format: jpg, png, webp
  // if image is from an external source then add the domain in next.config.js
  workExperience: [
    {
      info: {
        "Company": ["Apple"],
        "Description": [
          "Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
        ],
	      "My Objectives": [
	        "User Testing",
	        "Accessibility improvements"
	      ],
      },

      link: "/",
      image: "/images/nysl.png",
    },
    {
      info: {
        "Company": ["Apple"],
        "Description": [
          "Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
        ],
        "My Objectives": [
          "User Testing",
          "Accessibility improvements"
        ],
      },

      link: "/",
      image: "/images/phantom-travis.png",
    },
    {
      info: {
        "Company": ["Apple"],
        "Description": [
          "Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
        ],
        "My Objectives": [
          "User Testing", 
          "Accessibility improvements"
        ],
      },

      link: "/",
      image: "/images/jez.png",
    },
  ],

  // available options:- light, dark, auto
  theme: "light",
};
