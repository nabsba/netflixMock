/* Doc:
 Example: getImg(banner, bannerPc.jpg ) return the right img.
*/
import * as icons from './image/icons';
const img: any = {
	icons,
};
const getImg = (category: string, name: string) => img[category][name];
export default getImg;
