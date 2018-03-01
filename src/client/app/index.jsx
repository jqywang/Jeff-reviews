import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewList from './components/ReviewList.jsx';
import styles from './components/styling/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };
    this.fetch();
  }

  fetch() {
    let context = this;
    $.ajax({
      type: 'GET',
      url: '/listings/134/reviews',
      success: function(data) {
        console.log('success', data);
        context.setState({'reviews': data});
      },
      error: function(err) {
        console.log('error');
      }
    })
  }

  render () {
    return (
      <div className={styles.main}>
        <div className={styles.header}>
          <span className={styles.title}>Reviews</span>
          <span className={styles.counter}>{`(${this.state.reviews.length})`}</span>
          <a href='#'><button className={styles.button}>Write a Review</button></a>
        </div>
        <div>
          <ReviewList reviews={this.state.reviews} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

