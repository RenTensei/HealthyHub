import { modalSvg } from '@/utils/renderSvgSet';
const RenderSvg = ({ imageSrc }) => {
  const { Breakfast, Lunch, Dinner, Snack } = modalSvg;
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
