import mainImg from './assets/images/illustration-article.svg';
import profileImg from './assets/images/image-avatar.webp';

const Card = () => {
  return (
    <div className="card">
      <img src={mainImg} alt="card main image" className="card__img" />
      <div className="card__info">
        <span className="card__category">Learning</span>
        <h5>Published 21 Dec 2023</h5>
        <h2>HTML & CSS foundations</h2>
        <p>
          These languages are the backbone of every website, defining structure,
          content, and presentation
        </p>
        <div className="card__author">
          <img
            src={profileImg}
            alt="Greg Hooper profile image"
            className="card__author--img"
          />
          <h4 className="card__author--title">Greg Hooper</h4>
        </div>
      </div>
    </div>
  );
};
export default Card;
