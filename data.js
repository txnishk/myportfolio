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
      "Completed my assignments",
      "Got Whitelist in NFT Server",
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
        "Description": [
          "Practice Post for New York Subliners. Tried a more rustic theme to match their New York Vibe!",
        ],
	     
	     
      },

      link: "/",
      image: "/images/nysl.png",
    },
    {
      info: {
 
        "Description": [
          "Commissioned Twitter Header. Went for a different style for this one."
        ],
        
      },

      link: "/",
      image: "/images/phantom-travis.png",
    },
    {
      info: {
       
        "Description": [
          "Practice Post for Falcons Esports. Tried Rocket League designed for the First Time, designed the decal myself too!"
        ],
       
      },

      link: "/",
      image: "/images/falcons-rl-finalllll.png",
    },
  ],

  // available options:- light, dark, auto
  theme: "light",
};
