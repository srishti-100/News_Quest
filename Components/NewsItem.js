import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, author, date, source } = this.props;
    return (
      <div>
        <div className="card my-2" style={{ width: "18rem" }} >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success"  style={{left: '85%', zIndex:'1'}}>
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
           
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={url} target='_blank' rel="noreferrer" className="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
