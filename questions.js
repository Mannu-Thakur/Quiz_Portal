let questions = [
  {
    numb: 1,
    question: "Who is known as the 'Run Machine' in Indian cricket?",
    answer: "Virat Kohli",
    options: [
      "Sachin Tendulkar",
      "Rahul Dravid",
      "Virat Kohli",
      "Sourav Ganguly"
    ],
  },
  {
    numb: 2,
    question: "Which year did Virat Kohli make his international debut?",
    answer: "2008",
    options: [
      "2006",
      "2007",
      "2008",
      "2009"
    ],
  },
  {
    numb: 3,
    question: "What is Lionel Messi's full name?",
    answer: "Lionel Andrés Messi",
    options: [
      "Lionel Messi",
      "Lionel Andrés Messi",
      "Lionel Messi Jr.",
      "Lionel Messi Sr."
    ],
  },
  {
    numb: 4,
    question: "For which club did Lionel Messi play for the majority of his career?",
    answer: "FC Barcelona",
    options: [
      "Real Madrid",
      "FC Barcelona",
      "Paris Saint-Germain",
      "Manchester City"
    ],
  },
  {
    numb: 5,
    question: "How many runs did Virat Kohli score in his first ODI century?",
    answer: "122 runs",
    options: [
      "100 runs",
      "110 runs",
      "122 runs",
      "130 runs"
    ],
  },
  {
    numb: 6,
    question: "In which year did Lionel Messi win his first Ballon d'Or?",
    answer: "2009",
    options: [
      "2008",
      "2009",
      "2010",
      "2011"
    ],
  },
  {
    numb: 7,
    question: "What is the highest individual score by Virat Kohli in T20 internationals?",
    answer: "122 runs",
    options: [
      "100 runs",
      "110 runs",
      "122 runs",
      "130 runs"
    ],
  },
  {
    numb: 8,
    question: "How many goals has Lionel Messi scored in his career as of 2023?",
    answer: ">800 goals",
    options: [
      "<700 goals",
      "<800 goals",
      ">800 goals",
      ">900 goals"
    ],
  },
  {
    numb: 9,
    question: "Which team did Virat Kohli captain in the 2017 ICC Champions Trophy final?",
    answer: "India",
    options: [
      "India",
      "Australia",
      "England",
      "Pakistan"
    ],
  },
  {
    numb: 10,
    question: "What is Lionel Messi's jersey number at Paris Saint-Germain?",
    answer: "30",
    options: [
      "10",
      "30",
      "7",
      "11"
    ],
  },
  {
    numb: 11,
    question: "How many centuries has Virat Kohli scored in Test cricket as of 2023?",
    answer: ">27 centuries",
    options: [
      "<20 centuries",
      "<25 centuries",
      ">27 centuries",
      ">30 centuries"
    ],
  },
  {
    numb: 12,
    question: "In which year did Lionel Messi win the FIFA World Cup with Argentina?",
    answer: "2022",
    options: [
      "2014",
      "2018",
      "2022",
      "2026"
    ],
  },
  {
    numb: 13,
    question: "What is the highest score by Virat Kohli in an ODI match?",
    answer: "183 runs",
    options: [
      "150 runs",
      "160 runs",
      "183 runs",
      "200 runs"
    ],
  },
  {
    numb: 14,
    question: "How many assists has Lionel Messi provided in his career as of 2023?",
    answer: ">320 assists",
    options: [
      "<200 assists",
      "<300 assists",
      ">320 assists",
      ">400 assists"
    ],
  },
  {
    numb: 15,
    question: "Which IPL team did Virat Kohli play for since its inception?",
    answer: "Royal Challengers Bangalore (RCB)",
    options: [
      "Chennai Super Kings (CSK)",
      "Mumbai Indians (MI)",
      "Royal Challengers Bangalore (RCB)",
      "Delhi Capitals (DC)"
    ],
  },
  {
    numb: 16,
    question: "How many La Liga titles has Lionel Messi won with FC Barcelona?",
    answer: "10 titles",
    options: [
      "<5 titles",
      "8 titles",
      "10 titles",
      "12 titles"
    ],
  },
  {
    numb: 17,
    question: "What is the highest score by Virat Kohli in a Test match?",
    answer: "254 runs",
    options: [
      "200 runs",
      "220 runs",
      "254 runs",
      "300 runs"
    ],
  },
  {
    numb: 18,
    question: "How many UEFA Champions League titles has Lionel Messi won?",
    answer: "4 titles",
    options: [
      "2 titles",
      "3 titles",
      "4 titles",
      "5 titles"
    ],
  },
  {
    numb: 19,
    question: "In which year did Virat Kohli become the captain of the Indian cricket team?",
    answer: "2017",
    options: [
      "2015",
      "2016",
      "2017",
      "2018"
    ],
  },
  {
    numb: 20,
    question: "What is Lionel Messi's record for most goals in a calendar year?",
    answer: "91 goals in 2012",
    options: [
      "80 goals in 2010",
      "91 goals in 2012",
      "100 goals in 2013",
      "90 goals in 2014"
    ],
  },

  {
    numb: 21,
    question: "How many T20 international matches has Virat Kohli played as of 2023?",
    answer: "110 matches",
    options: [
      "90 matches",
      "100 matches",
      "110 matches",
      "120 matches"
    ],
  },
  {
    numb: 22,
    question: "What is Lionel Messi's record for most assists in a single La Liga season?",
    answer: "21 assists in 2011-12",
    options: [
      "15 assists in 2009-10",
      "21 assists in 2011-12",
      "25 assists in 2014-15",
      "20 assists in 2016-17"
    ],
  },
  {
    numb: 23,
    question: "How many centuries has Virat Kohli scored in T20 internationals as of 2023?",
    answer: "1 century",
    options: [
      "0 centuries",
      "1 century",
      "2 centuries",
      "3 centuries"
    ],
  },
  {
    numb: 24,
    question: "In which year did Lionel Messi win his first FIFA World Cup Golden Ball?",
    answer: "2014",
    options: [
      "2010",
      "2014",
      "2018",
      "2022"
    ],
  },
  {
    numb: 25,
    question: "What is the highest score by Virat Kohli in an IPL match?",
    answer: "122 runs",
    options: [
      "100 runs",
      "110 runs",
      "122 runs",
      "130 runs"
    ],
  },
  {
    numb: 26,
    question: "How many goals has Lionel Messi scored in the UEFA Champions League as of 2023?",
    answer: "129 goals",
    options: [
      "100 goals",
      "120 goals",
      "129 goals",
      "140 goals"
    ],
  },
  {
    numb: 27,
    question: "Which team did Virat Kohli score his first international century against?",
    answer: "Sri Lanka",
    options: [
      "Australia",
      "Pakistan",
      "Sri Lanka",
      "South Africa"
    ],
  },
  {
    numb: 28,
    question: "How many Copa America titles has Lionel Messi won with Argentina?",
    answer: "1 title",
    options: [
      "0 titles",
      "1 title",
      "2 titles",
      "3 titles"
    ],
  },
  {
    numb: 29,
    question: "What is the highest score by Virat Kohli in a T20 match?",
    answer: "122 runs",
    options: [
      "100 runs",
      "110 runs",
      "122 runs",
      "130 runs"
    ],
  },
  {
    numb: 30,
    question: "How many FIFA World Cup Golden Shoes has Lionel Messi won?",
    answer: "0",
    options: [
      "0",
      "1",
      "2",
      "3"
    ],
  },

  {
    numb: 31,
    question: "How many Test matches has Virat Kohli played as of 2023?",
    answer: "111 matches",
    options: [
      "90 matches",
      "100 matches",
      "111 matches",
      "120 matches"
    ],
  },
  {
    numb: 32,
    question: "What is Lionel Messi's record for most goals in a single La Liga season?",
    answer: "50 goals in 2011-12",
    options: [
      "40 goals in 2009-10",
      "50 goals in 2011-12",
      "60 goals in 2014-15",
      "45 goals in 2016-17"
    ],
  },
  {
    numb: 33,
    question: "How many ODI centuries has Virat Kohli scored as of 2023?",
    answer: "46 centuries",
    options: [
      "40 centuries",
      "43 centuries",
      "46 centuries",
      "50 centuries"
    ],
  },
  {
    numb: 34,
    question: "In which year did Lionel Messi win his first UEFA Champions League title?",
    answer: "2006",
    options: [
      "2005",
      "2006",
      "2009",
      "2011"
    ],
  },
  {
    numb: 35,
    question: "What is the highest score by Virat Kohli in an international match?",
    answer: "254 runs",
    options: [
      "200 runs",
      "220 runs",
      "254 runs",
      "300 runs"
    ],
  },
  {
    numb: 36,
    question: "How many assists has Lionel Messi provided in the UEFA Champions League as of 2023?",
    answer: "42 assists",
    options: [
      "30 assists",
      "40 assists",
      "42 assists",
      "50 assists"
    ],
  },
  {
    numb: 37,
    question: "Which IPL team does Virat Kohli captain as of 2023?",
    answer: "Royal Challengers Bangalore (RCB)",
    options: [
      "Mumbai Indians",
      "Chennai Super Kings",
      "Royal Challengers Bangalore",
      "Delhi Capitals"
    ],
  },
  {
    numb: 38,
    question: "How many Ballon d'Or awards has Lionel Messi won?",
    answer: "7",
    options: [
      "5",
      "6",
      "7",
      "8"
    ],
  },
  {
    numb: 39,
    question: "What is Virat Kohli's batting style?",
    answer: "Right-handed",
    options: [
      "Right-handed",
      "Left-handed",
      "Switch hitter",
      "Ambidextrous"
    ],
  },
  {
    numb: 40,
    question: "Which country is Lionel Messi originally from?",
    answer: "Argentina",
    options: [
      "Spain",
      "Brazil",
      "Argentina",
      "Portugal"
    ],
  },

  {
    numb: 41,
    question: "What is Virat Kohli's nickname in cricket?",
    answer: "King Kohli",
    options: [
      "Master Blaster",
      "King Kohli",
      "The Wall",
      "Captain Cool"
    ],
  },
  {
    numb: 42,
    question: "In which club did Lionel Messi start his professional football career?",
    answer: "Newell's Old Boys",
    options: [
      "River Plate",
      "Boca Juniors",
      "Newell's Old Boys",
      "FC Barcelona"
    ],
  },
  {
    numb: 43,
    question: "Which record did Virat Kohli break in the 2016 ICC World T20?",
    answer: "Fastest to 2000 T20 runs",
    options: [
      "Most sixes in T20",
      "Fastest to 2000 T20 runs",
      "Highest T20 average",
      "Most T20 centuries"
    ],
  },
  {
    numb: 44,
    question: "How many hat-tricks has Lionel Messi scored in his career?",
    answer: "6 hat-tricks",
    options: [
      "4 hat-tricks",
      "5 hat-tricks",
      "6 hat-tricks",
      "7 hat-tricks"
    ],
  },
  {
    numb: 45,
    question: "Which year did Virat Kohli score his maiden Test century?",
    answer: "2011",
    options: [
      "2010",
      "2011",
      "2012",
      "2013"
    ],
  },
  {
    numb: 46,
    question: "Which major football trophy did Messi win in 2021 with Argentina?",
    answer: "Copa America",
    options: [
      "World Cup",
      "Copa America",
      "Euro Cup",
      "Confederations Cup"
    ],
  },
  {
    numb: 47,
    question: "What is Virat Kohli’s height?",
    answer: "5 feet 9 inches",
    options: [
      "5 feet 7 inches",
      "5 feet 8 inches",
      "5 feet 9 inches",
      "6 feet"
    ],
  },
  {
    numb: 48,
    question: "Which year did Lionel Messi join Paris Saint-Germain (PSG)?",
    answer: "2021",
    options: [
      "2019",
      "2020",
      "2021",
      "2022"
    ],
  },
  {
    numb: 49,
    question: "How many double centuries has Virat Kohli scored in Tests?",
    answer: "7 double centuries",
    options: [
      "5 double centuries",
      "6 double centuries",
      "7 double centuries",
      "8 double centuries"
    ],
  },
  {
    numb: 50,
    question: "Which country hosted the 2022 FIFA World Cup where Messi won his first title?",
    answer: "Qatar",
    options: [
      "Brazil",
      "Russia",
      "Qatar",
      "Germany"
    ],
  },

  {
    numb: 51,
    question: "How many international centuries does Virat Kohli have across all formats combined?",
    answer: "71 centuries",
    options: [
      "60 centuries",
      "65 centuries",
      "71 centuries",
      "75 centuries"
    ],
  },
  {
    numb: 52,
    question: "Which youth club did Virat Kohli play for before joining the India U-19 team?",
    answer: "West Delhi Cricket Academy",
    options: [
      "East Delhi Cricket Academy",
      "West Delhi Cricket Academy",
      "South Delhi Cricket Club",
      "North Delhi Cricket Club"
    ],
  },
  {
    numb: 53,
    question: "In which city was Lionel Messi born?",
    answer: "Rosario",
    options: [
      "Buenos Aires",
      "Cordoba",
      "Rosario",
      "Mendoza"
    ],
  },
  {
    numb: 54,
    question: "What award did Virat Kohli receive from the ICC in 2017?",
    answer: "Sir Garfield Sobers Trophy (ICC Cricketer of the Year)",
    options: [
      "Sir Garfield Sobers Trophy (ICC Cricketer of the Year)",
      "ICC Emerging Player Award",
      "ICC Spirit of Cricket Award",
      "ICC ODI Player of the Year"
    ],
  },
  {
    numb: 55,
    question: "How many international caps has Virat Kohli earned as of 2023?",
    answer: "Over 350",
    options: [
      "Over 300",
      "Over 350",
      "Over 400",
      "Over 450"
    ],
  },
  {
    numb: 56,
    question: "Which record does Lionel Messi hold in the Copa America tournament?",
    answer: "Most assists in Copa America history",
    options: [
      "Most goals in Copa America history",
      "Most assists in Copa America history",
      "Most appearances in Copa America",
      "Most trophies won"
    ],
  },
  {
    numb: 57,
    question: "What is Virat Kohli's favorite cricket shot?",
    answer: "Cover drive",
    options: [
      "Pull shot",
      "Hook shot",
      "Cover drive",
      "Cut shot"
    ],
  },
  {
    numb: 58,
    question: "How many FIFA World Cup appearances has Lionel Messi made as of 2022?",
    answer: "5 World Cups",
    options: [
      "3 World Cups",
      "4 World Cups",
      "5 World Cups",
      "6 World Cups"
    ],
  },
  {
    numb: 59,
    question: "What is the name of the foundation started by Virat Kohli?",
    answer: "Virat Kohli Foundation",
    options: [
      "Virat Foundation",
      "Kohli Foundation",
      "Virat Kohli Foundation",
      "Run Machine Foundation"
    ],
  },
  {
    numb: 60,
    question: "Which club did Lionel Messi transfer from FC Barcelona to PSG?",
    answer: "Paris Saint-Germain (PSG)",
    options: [
      "Manchester United",
      "Real Madrid",
      "Paris Saint-Germain",
      "Juventus"
    ],
  },

  {
    numb: 61,
    question: "How many international wickets has Virat Kohli taken as of 2023?",
    answer: "4 wickets",
    options: [
      "2 wickets",
      "4 wickets",
      "6 wickets",
      "8 wickets"
    ],
  },
  {
    numb: 62,
    question: "How many times has Lionel Messi won the Golden Foot award?",
    answer: "1 time",
    options: [
      "0 times",
      "1 time",
      "2 times",
      "3 times"
    ],
  },
  {
    numb: 63,
    question: "What is Virat Kohli’s batting average in Test cricket as of 2023?",
    answer: "Over 50",
    options: [
      "Over 40",
      "Over 45",
      "Over 50",
      "Over 55"
    ],
  },
  {
    numb: 64,
    question: "In which year did Lionel Messi become FC Barcelona's all-time top scorer?",
    answer: "2014",
    options: [
      "2012",
      "2013",
      "2014",
      "2015"
    ],
  },
  {
    numb: 65,
    question: "Which tournament did Virat Kohli win as captain in 2018?",
    answer: "Asia Cup",
    options: [
      "ICC World Cup",
      "Asia Cup",
      "Champions Trophy",
      "T20 World Cup"
    ],
  },
  {
    numb: 66,
    question: "How many goals did Lionel Messi score in the 2014 FIFA World Cup?",
    answer: "4 goals",
    options: [
      "2 goals",
      "3 goals",
      "4 goals",
      "5 goals"
    ],
  },
  {
    numb: 67,
    question: "Which IPL team did Virat Kohli score his first century against?",
    answer: "Kolkata Knight Riders (KKR)",
    options: [
      "Mumbai Indians",
      "Chennai Super Kings",
      "Kolkata Knight Riders",
      "Delhi Capitals"
    ],
  },
  {
    numb: 68,
    question: "How many goals did Lionel Messi score in the 2022 FIFA World Cup?",
    answer: "7 goals",
    options: [
      "5 goals",
      "6 goals",
      "7 goals",
      "8 goals"
    ],
  },
  {
    numb: 69,
    question: "What year did Virat Kohli marry Bollywood actress Anushka Sharma?",
    answer: "2017",
    options: [
      "2016",
      "2017",
      "2018",
      "2019"
    ],
  },
  {
    numb: 70,
    question: "How many appearances did Lionel Messi make for Barcelona before transferring?",
    answer: "778 appearances",
    options: [
      "700 appearances",
      "750 appearances",
      "778 appearances",
      "800 appearances"
    ],
  },

  {
    numb: 71,
    question: "Which award did Virat Kohli win in the ICC ODI Player of the Year category in 2012?",
    answer: "ICC ODI Player of the Year",
    options: [
      "Emerging Player of the Year",
      "ODI Player of the Year",
      "Test Player of the Year",
      "Spirit of Cricket"
    ],
  },
  {
    numb: 72,
    question: "How many goals did Lionel Messi score in El Clasico matches against Real Madrid?",
    answer: "26 goals",
    options: [
      "20 goals",
      "22 goals",
      "26 goals",
      "30 goals"
    ],
  },
  {
    numb: 73,
    question: "What is Virat Kohli's record for most consecutive ODI 50+ scores?",
    answer: "8 consecutive 50+ scores",
    options: [
      "6 consecutive 50+ scores",
      "7 consecutive 50+ scores",
      "8 consecutive 50+ scores",
      "9 consecutive 50+ scores"
    ],
  },
  {
    numb: 74,
    question: "What is Lionel Messi's nickname among football fans?",
    answer: "La Pulga",
    options: [
      "La Pulga",
      "El Maestro",
      "El Pibe",
      "El Rey"
    ],
  },
  {
    numb: 75,
    question: "How many matches did Virat Kohli captain in Test cricket by 2023?",
    answer: "68 matches",
    options: [
      "60 matches",
      "65 matches",
      "68 matches",
      "70 matches"
    ],
  },
  {
    numb: 76,
    question: "Which trophy did Lionel Messi win with Argentina in 2008?",
    answer: "Olympic Gold Medal",
    options: [
      "Copa America",
      "Olympic Gold Medal",
      "FIFA U-20 World Cup",
      "Confederations Cup"
    ],
  },
  {
    numb: 77,
    question: "What is Virat Kohli’s preferred fitness routine component?",
    answer: "Functional training",
    options: [
      "Yoga",
      "Functional training",
      "Cardio",
      "Weightlifting"
    ],
  },
  {
    numb: 78,
    question: "In which city did Lionel Messi sign his first professional contract?",
    answer: "Barcelona",
    options: [
      "Rosario",
      "Madrid",
      "Barcelona",
      "Paris"
    ],
  },
  {
    numb: 79,
    question: "How many Player of the Match awards has Virat Kohli won in ODIs as of 2023?",
    answer: "43 awards",
    options: [
      "40 awards",
      "41 awards",
      "43 awards",
      "45 awards"
    ],
  },
  {
    numb: 80,
    question: "What is Lionel Messi's height?",
    answer: "5 feet 7 inches",
    options: [
      "5 feet 5 inches",
      "5 feet 6 inches",
      "5 feet 7 inches",
      "5 feet 8 inches"
    ],
  },

  {
    numb: 81,
    question: "Which cricket academy did Virat Kohli train at in his youth?",
    answer: "West Delhi Cricket Academy",
    options: [
      "East Delhi Cricket Academy",
      "South Delhi Cricket Academy",
      "West Delhi Cricket Academy",
      "North Delhi Cricket Academy"
    ],
  },
  {
    numb: 82,
    question: "What year did Lionel Messi win his first FIFA Ballon d'Or?",
    answer: "2009",
    options: [
      "2008",
      "2009",
      "2010",
      "2011"
    ],
  },
  {
    numb: 83,
    question: "How many runs did Virat Kohli score in IPL 2016 season?",
    answer: "973 runs",
    options: [
      "900 runs",
      "973 runs",
      "1000 runs",
      "1100 runs"
    ],
  },
  {
    numb: 84,
    question: "Which football position does Lionel Messi primarily play?",
    answer: "Forward",
    options: [
      "Midfielder",
      "Defender",
      "Forward",
      "Goalkeeper"
    ],
  },
  {
    numb: 85,
    question: "Which city is Virat Kohli originally from?",
    answer: "Delhi",
    options: [
      "Mumbai",
      "Chennai",
      "Delhi",
      "Kolkata"
    ],
  },
  {
    numb: 86,
    question: "How many assists did Lionel Messi provide in the 2019-20 La Liga season?",
    answer: "21 assists",
    options: [
      "18 assists",
      "20 assists",
      "21 assists",
      "23 assists"
    ],
  },
  {
    numb: 87,
    question: "What is Virat Kohli's highest ODI strike rate in an innings (min 50 balls)?",
    answer: "150+",
    options: [
      "120+",
      "130+",
      "140+",
      "150+"
    ],
  },
  {
    numb: 88,
    question: "Which major injury did Lionel Messi suffer in 2021?",
    answer: "Knee injury",
    options: [
      "Hamstring injury",
      "Ankle injury",
      "Knee injury",
      "Back injury"
    ],
  },
  {
    numb: 89,
    question: "What year did Virat Kohli become the fastest to 8000 ODI runs?",
    answer: "2016",
    options: [
      "2015",
      "2016",
      "2017",
      "2018"
    ],
  },
  {
    numb: 90,
    question: "How many goals did Lionel Messi score for Argentina's senior national team by 2023?",
    answer: "100+ goals",
    options: [
      "90+ goals",
      "95+ goals",
      "100+ goals",
      "110+ goals"
    ],
  },

  {
    numb: 91,
    question: "Which year did Virat Kohli win his first ICC Player of the Year award?",
    answer: "2012",
    options: [
      "2010",
      "2011",
      "2012",
      "2013"
    ],
  },
  {
    numb: 92,
    question: "What is Lionel Messi's preferred foot?",
    answer: "Left",
    options: [
      "Right",
      "Left",
      "Both",
      "Neither"
    ],
  },
  {
    numb: 93,
    question: "Which IPL franchise has Virat Kohli played for since the start of his IPL career?",
    answer: "Royal Challengers Bangalore",
    options: [
      "Mumbai Indians",
      "Chennai Super Kings",
      "Royal Challengers Bangalore",
      "Delhi Capitals"
    ],
  },
  {
    numb: 94,
    question: "How many FIFA World Cups has Lionel Messi participated in?",
    answer: "5",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
  },
  {
    numb: 95,
    question: "What year was Virat Kohli born?",
    answer: "1988",
    options: [
      "1987",
      "1988",
      "1989",
      "1990"
    ],
  },
  {
    numb: 96,
    question: "How many goals did Lionel Messi score in his debut season at PSG?",
    answer: "6 goals",
    options: [
      "4 goals",
      "5 goals",
      "6 goals",
      "7 goals"
    ],
  },
  {
    numb: 97,
    question: "What is Virat Kohli's jersey number in IPL?",
    answer: "18",
    options: [
      "7",
      "18",
      "27",
      "10"
    ],
  },
  {
    numb: 98,
    question: "Which youth team did Lionel Messi play for before joining Barcelona’s academy?",
    answer: "Newell's Old Boys",
    options: [
      "River Plate",
      "Boca Juniors",
      "Newell's Old Boys",
      "Independiente"
    ],
  },
  {
    numb: 99,
    question: "How many international centuries has Virat Kohli scored in ODIs as of 2023?",
    answer: "46 centuries",
    options: [
      "40 centuries",
      "43 centuries",
      "46 centuries",
      "50 centuries"
    ],
  },
  {
    numb: 100,
    question: "Which year did Lionel Messi win his last Ballon d'Or as of 2023?",
    answer: "2023",
    options: [
      "2021",
      "2022",
      "2023",
      "2024"
    ],
  },
];

 
