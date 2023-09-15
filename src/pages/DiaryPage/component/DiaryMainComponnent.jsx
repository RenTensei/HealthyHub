import './DiaryMainComponnent.scss';
import PropTypes from 'prop-types';

const DiaryMainComponnent = ({
  name,
  srcImg,
  alt,
  buttonName,
  Carbonohidrates,
  Protein,
  Fat,
}) => {
  return (
    <div className="ContainerDiary">
      <div className="title">
        <img className="imgTitle" src={srcImg} alt={alt} />
        <h3 className="titleName">{name}</h3>
      </div>
      {!Carbonohidrates && !Protein && !Fat ? (
        <button className="button">{buttonName}</button>
      ) : (
        <div className='Calorie'>
          <p className='itetemsCalories'>Carbonohidrates: <span className='totalCalorie'>{Carbonohidrates}</span></p>
          <p className='itetemsCalories'>Protein: <span className='totalCalorie'>{Protein}</span></p>
          <p className='itetemsCalories'>Fat: <span className='totalCalorie'>{Fat}</span></p>
        </div>
      )}
    </div>
  );
};

export default DiaryMainComponnent

DiaryMainComponnent.propTypes = {
  name: PropTypes.string,
  srcImg: PropTypes.string,
  alt: PropTypes.string,
  buttonName: PropTypes.string,
  Carbonohidrates: PropTypes.string,
  Protein: PropTypes.string,
  Fat: PropTypes.string,
}