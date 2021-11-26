/* Doc:
 Example: getImg(banner, bannerPc.jpg ) return the right img.
*/

// import * as banner from './banner';

const img: any = {
	// banner,
};
const getImg = (category: string, name: string) => img[category][name];
export default getImg;
