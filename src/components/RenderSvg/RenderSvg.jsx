import { ReactComponent as Breakfast } from '@/assets/svg/breakfast.svg';
import { ReactComponent as Lunch } from '@/assets/svg/lunch.svg';
import { ReactComponent as Dinner } from '@/assets/svg/dinner.svg';
import { ReactComponent as Snack } from '@/assets/svg/snack.svg';

const RenderSvg = ({ imageSrc }) => {
  switch (imageSrc) {
    case 'breakfast':
      return <Breakfast />;
    case 'lunch':
      return <Lunch />;
    case 'dinner':
      return <Dinner />;

    case 'snack':
      return <Snack />;

    default:
      return null;
  }
};
export default RenderSvg;
