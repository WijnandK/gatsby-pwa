import React from "react"
import { Card, Button } from "react-bootstrap"

const Post = props => {
  return (
    <div className="p-3">
      <Card style={{ width: "38rem" }}>
        <Card.Img
          variant="top"
          src={props.image}
          alt={props.alt || "Post-Image"}
        />
        <Card.Body>
          <Card.Title dangerouslySetInnerHTML={{ __html: props.title }} />
          <Card.Text dangerouslySetInnerHTML={{ __html: props.excerpt }} />
          <Button variant="warning" href={props.readMore}>
            Read more{" "}
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Post
