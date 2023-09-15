import React from 'react';
import YourGoalsDiskt from '@/pages/SignUpPage/images/YourGoals-diskt.png';
// import YourGoalsDiskt2x from '../../images/YourGoals-diskt@2x.png';
// import styles from './YourGoalStyle.css'

// const small = 'YourGoals-mob.png';
// const medium = 'YourGoals-tab.png';
// const large = 'YourGoals-diskt.png';

const YourGoalComponent = () => {
  return (
    <div>
      <div>
        {/* <picture>
          <source
            media="(min-width: 700px)"
            srcSet="YourGoals-diskt.png 1x, YourGoals-diskt@2x.png 2x"
          />
          <source
            media="(min-width: 450px)"
            srcSet="YourGoals-tab.png 1x, YourGoals-tab@2x.png 2x"
          />
          <img
          loading="lazy"
            srcSet="YourGoals-mob.png 1x, YourGoals-mob@2x.png 2x"
            src="YourGoals-mob.png"
            alt="Your Goals"
          />
        </picture> */}
        <img 
        // srcSet="
        // YourGoals-diskt.png 444w,
        // YourGoals-diskt@2x.png 444w,
        // YourGoals-tab.png 380w,
        // YourGoals-tab@2x.png 380w,
        // YourGoals-mob.png 300w,
        // YourGoals-mob@2x.png 300w
        // "
        // src={small}
        // srcSet={`${small} 300w, ${medium} 380w, ${large} 444w`}
        sizes="(max-width: 320px) 300px,
            (max-width: 480px) 380px,
            444px"
        src={YourGoalsDiskt} 
        // src='YourGoals-diskt.png'
        alt='Your Goals'
        />
      </div>
      <div>
        <h1>Your goal</h1>
        <form>
          <p>Choose a goal so that we can help you effectively</p>
          <label>
            <input type="radio" name="check" value="Lose Fat" />
            Lose Fat
          </label>
          <label>
            <input type="radio" name="check" value="Maintain" checked />
            Maintain
          </label>
          <label>
            <input type="radio" name="check" value="Gail Muscle" />
            Gail Muscle
          </label>
        </form>
        <button>Next</button>
      </div>
    </div>
  );
};

export default YourGoalComponent;
