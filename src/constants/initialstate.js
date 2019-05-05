const initialstate = {
  auth : {
    username:'',
    email:'',
    password:'',
    currentUser:null,
    logged:false,
    loadstate:{
      loader:"noloader",
      container:"container-login100"
    },
  },
  post:{
    posts:[
      {
        postId:"1",
        imgSrc:"../../../../images/a-1.jpg",
        author:"Mike",
        title:"MVRD's Tianjin Binhai Library",
        date:"20/12/2017",
        favorited:false,
        num_fav:11,
        num_view:100,
        comments:[
          {
            name:"Jason",
            content:"nice work, the photograhy is great but the function of the building didnt reach the execptation.",
          },
        ]
      },
      {
        postId:"2",
        imgSrc:"../../../images/a-1.jpg",
        author:"Jason",
        title:"MVRD's Tianjin Binhai Library",
        date:"20/12/2017",
        favorited:false,
        num_fav:12,
        num_view:102,
        comments:[
          {
            name:"Jason",
            content:"nice work, the photograhy is great but the function of the building didnt reach the execptation.",
          },
        ]
      },
      {
        postId:"3",
        imgSrc:"../../../images/a-1.jpg",
        author:"Joe",
        title:"MVRD's Tianjin Binhai Library",
        date:"20/12/2017",
        favorited:false,
        num_fav:123,
        num_view:1012,
        comments:[
          {
            name:"Jason",
            content:"nice work, the photograhy is great but the function of the building didnt reach the execptation.",
          },
        ]
      },
      {
        postId:"4",
        imgSrc:"../../../../images/a-1.jpg",
        author:"author4",
        title:"MVRD's Tianjin Binhai Library",
        date:"20/12/2017",
        favorited:false,
        num_fav:412,
        num_view:12312,
        comments:[
          {
            name:"Jason",
            content:"nice work, the photograhy is great but the function of the building didnt reach the execptation.",
          },
        ]
      },
      {
        postId:"5",
        imgSrc:"../../../images/a-1.jpg",
        author:"author5",
        title:"MVRD's Tianjin Binhai Library",
        date:"20/12/2017",
        favorited:false,
        num_fav:301,
        num_view:2021,
        comments:null,
      },
      {
        postId:"6",
        imgSrc:"../../../images/a-1.jpg",
        author:"author6",
        title:"MVRD's Tianjin Binhai Library",
        date:"20/12/2017",
        favorited:false,
        num_fav:212,
        num_view:1232,
        comments:[
          {
            name:"Jason",
            content:"nice work, the photograhy is great but the function of the building didnt reach the execptation.",
          },
        ]
      }
    ],
    collections:[
      {
        postId:"1",
        imgSrc:"../../../../images/a-1.jpg",
        author:"author7",
        title:"MVRD's Tianjin Binhai Library",
        date:"20/12/2017",
        favorited:false,
        num_fav:212,
        num_view:1232,
        comments:null
      },
      {
        postId:"2",
        imgSrc:"../../../images/a-1.jpg",
        author:"author8",
        title:"MVRD's Tianjin Binhai Library",
        date:"20/12/2017",
        favorited:false,
        num_fav:212,
        num_view:1232,
        comments:null

      },
      {
        postId:"3",
        imgSrc:"../../../images/a-1.jpg",
        author:"author9",
        title:"MVRD's Tianjin Binhai Library",
        date:"20/12/2017",
        favorited:false,
        num_fav:212,
        num_view:1232,
        comments:null

      },
      {
        postId:"4",
        imgSrc:"../../../../images/a-1.jpg",
        author:"author10",
        title:"MVRD's Tianjin Binhai Library",
        date:"20/12/2017",
        favorited:false,
        num_fav:212,
        num_view:1232,
        comments:[
          {
            name:"Jason",
            content:"nice work, the photograhy is great but the function of the building didnt reach the execptation.",
          },
        ]
      },
      {
        postId:"5",
        imgSrc:"../../../images/a-1.jpg",
        author:"author11",
        title:"MVRD's Tianjin Binhai Library",
        date:"20/12/2017",
        favorited:false,
        num_fav:212,
        num_view:1232,
        comments:[
          {
            name:"Jason",
            content:"nice work, the photograhy is great but the function of the building didnt reach the execptation.",
          },
        ]
      }
    ]
  },
  profile:{
    sections:[
      {
        aboutMe:"this is about me",
      },
      {
        workExperience:[
          {
            date:"2015-2017",
            occupation:"junior designer"
          },
          {
            date:"2017-current",
            occupation:"senior designer"
          }
        ]
      },
      {
        webReference:[
          {
            title:"happy hackers",
            url:"www.happyhackers.com.au"
          }
        ]
      },
      {
        customSection:{
          title:"This is a custom section",
          content:"This is a custom content"
        }
      }

    ]
  }
};

export default initialstate;
