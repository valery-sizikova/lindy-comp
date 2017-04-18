require('../../less/main.less');
'use strict';
import React from "react";
import ReactDOM from "react-dom";
import Competitor from "./competitor";

var data = {
  followers: [
    {
      id: 1,
      name: 'Masha',
      rank: 6
    },
    {
      id: 2,
      name: 'Nina',
      rank: 1
    },
    {
      id: 3,
      name: 'Lisa',
      rank: 3
    },
    {
      id: 4,
      name: 'Yara',
      rank: 5
    },
    {
      id: 5,
      name: 'Miranda',
      rank: 2
    },
    {
      id: 6,
      name: 'Avital',
      rank: 4
    }
  ],
  leaders: [
    {
      id: 1,
      name: 'Larry',
      rank: 5
    },
    {
      id: 2,
      name: 'Pete',
      rank: 6
    },
    {
      id: 3,
      name: 'Mosha',
      rank: 2
    },
    {
      id: 4,
      name: 'Tom',
      rank: 4
    },
    {
      id: 5,
      name: 'Jerry',
      rank: 1
    },
    {
      id: 6,
      name: 'James',
      rank: 3
    }
  ]
};

ReactDOM.render(<Competitor data={data}/>, document.getElementById('content'));