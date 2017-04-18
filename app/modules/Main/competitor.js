require('../../less/main.less');
'use strict';
import React from "react";
import ReactDOM from "react-dom";

export default class Competitor extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      data: props.data,
      sortedFollowers: this.sortByRanking(props.data.followers),
      sortedLeaders: this.sortByRanking(props.data.leaders),
      couples: []
    };
  }

  sortByRanking (list) {
    list.sort(function(a,b) {
      return a.rank - b.rank;
    });

    return list;
  }

  createCouples (followers, leaders) {
    var couple = {};

    var listOfCouples = [];

    var numberOfCouples = followers.length;

    for (var i = 0; i < numberOfCouples; i++) {
      couple['follower'] = followers[i];
      couple['leader'] = leaders[i];
      listOfCouples.push(couple);
      couple = {};
    }

    console.log(listOfCouples);

    return listOfCouples;
  }

  renderListOfPeople (type, people) {
    return <div>
      <h2>List of {type}</h2>
      <ol>
        {people.map(function (person) {
          return <li key={type + '_' + person.id}>{person.name} ({person.id})</li>
        })}
      </ol>
    </div>
  }

  renderListOfCouples () {
    var list = this.createCouples(this.state.sortedFollowers, this.state.sortedLeaders);

    return <div>
      <h2>List of couples</h2>
      <ol>
        {list.map(function (couple, index) {
          return <li key={'couple_' + index}>{couple.follower.name} - {couple.leader.name}</li>
        })}
      </ol>
    </div>
  }

  render() {
    return <div>
      {this.renderListOfPeople('followers', this.state.sortedFollowers)}
      {this.renderListOfPeople('leaders', this.state.sortedLeaders)}
      {this.renderListOfCouples()}
    </div>;
  }
}
