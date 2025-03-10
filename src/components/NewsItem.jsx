import defaultImg from "../assets/default.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-transparent text-white border-2 border-white mb-3 d-inline-block my-3 mx-3 py-2 px-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src?src:defaultImg}
        style={{ width: "325px" }}
        className="card-img-top"
        alt="News Image"
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Breaking news! Click to explore the full story and get the latest insights."}
        </p>
        <a href={url} className="btn btn-light">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
