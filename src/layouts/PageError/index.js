import React, { PropTypes } from "react"

import Page from "../Page"

import styles from "./index.css"

const PageError = ({ error, errorText }) => (
  <Page
    head={{
      // hero credit: https://www.flickr.com/photos/mypubliclands/16101654539/
      hero: "/assets/library.jpg",
    }}
  >
    <div className={ styles.container }>
      <div className={ styles.oops }>{ "[¬º-°]¬" }</div>
      <div className={ styles.text }>
        <p className={ styles.title }>
          <strong>{ error }</strong>
          { " " }
          { errorText }
        </p>
        {
          error === 404 &&
          <div>
            { "This page doesn't exist, don't hesitate to report this if you think it should. =]" }
          </div>
        }
      </div>
    </div>
  </Page>
)

PageError.propTypes = {
  error: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  errorText: PropTypes.string,
}

PageError.defaultProps = {
  error: 404,
  errorText: "Page Not Found",
}

export default PageError
