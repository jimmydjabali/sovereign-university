export enum Routes {
  Home = '/',
  UnderConstruction = '/under-construction',

  // About Us
  AboutUs = '/about-us',
  Manifesto = '/manifesto',
  NodeNetwork = '/node-network',
  Professors = '/professors',
  SponsorsAndContributors = '/sponsors-and-contributors',

  // Courses
  Courses = '/courses',
  Course = '/course/:courseId/:language?',
  CourseChapter = '/course/:courseId/:language?/chapter/:chapterIndex',

  // Resources
  Resources = '/resources',

  // Glossary
  Glossary = '/glossary',

  // Resource per type
  Books = '/resources/books',
  Book = '/resources/books/:bookId/:language',
  Podcasts = '/resources/podcasts',
  BET = '/resources/bet',
  Podcast = '/resources/podcast/:podcastId',
  Builders = '/resources/builders',
  Builder = '/resources/builder/:builderId/:language',

  // Tutorials
  Tutorials = '/tutorials',
  TutorialCategory = '/tutorials/$category',
  Tutorial = '/tutorials/:category/:tutorialId/:language?',

  TutorialsWallet = '/tutorials/wallet',
  TutorialsExchange = '/tutorials/exchange',
  TutorialsMerchant = '/tutorials/merchant',
  TutorialsMining = '/tutorials/mining',
  TutorialsPrivacy = '/tutorials/privacy',
  TutorialsNode = '/tutorials/node',

  // User
  Dashboard = '/dashboard',
  Profile = '/profile',

  /**
   * For later use
   */
  Newsletter = '/newletters',
  Articles = '/articles',
  Article = '/articles/:articleId',
  Interviews = '/interview',
  Interview = '/interview/:interviewId',
  Videos = '/videos',
  Video = '/videos/:videoId',
  Tools = '/tools',
  Tool = '/tools/:toolId',
  BIPs = '/bips',
  BIP = '/bips/:bipId',
  Conferences = '/conferences',
  Conference = '/conferences/:conferenceId',
  Calendar = '/calendar',
  Contact = '/contact',
}
