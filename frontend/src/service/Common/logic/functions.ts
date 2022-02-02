import { TArticleTwo } from '../../../component/tree/molecule';
import { TSlideInformation } from '../../../component/tree/organism';
import { INFOS_PAGE_NETFLIX, PROTOTYPE } from '../../netflix/constant';
import { appendDataToArticleTwoNetflixData } from '../../netflix/logic/functions';
import { getVideoUrl } from '../../netflix/logic/getter';
import { INFOS_PAGE_DEFAULT } from '../constant';

const appendDataToArticleTwo = (
	type: string,
	data: [],
	articleTwo: TArticleTwo,
): any[] => {
	switch (type) {
		case 'netflix':
			return appendDataToArticleTwoNetflixData(data, articleTwo);
		default:
			return [];
	}
};
const doWeRequireANewPage = (
	type: string,
	slideInformation: TSlideInformation,
): boolean => {
	let indiceToTriggerNextPage: number;
	let numberOfItemsPerPage: number;
	switch (type) {
		case 'netflix':
			indiceToTriggerNextPage = INFOS_PAGE_NETFLIX.INDICE_TO_TRIGGER_NEW_PAGE;
			numberOfItemsPerPage = INFOS_PAGE_NETFLIX.NUMBER_OF_ITEMS_IN_PAGE;
			break;
		default:
			indiceToTriggerNextPage = INFOS_PAGE_DEFAULT.INDICE_TO_TRIGGER_NEW_PAGE;
			numberOfItemsPerPage = INFOS_PAGE_DEFAULT.NUMBER_OF_ITEMS_IN_PAGE;
	}
	const totalOfSlides = slideInformation.page * numberOfItemsPerPage;
	const slidesRemaining = totalOfSlides - slideInformation.slideSeen;
	const isUserSlideBack =
		slideInformation.oldSlide === slideInformation.slideSeen;
	const isEndOfPage = slidesRemaining === indiceToTriggerNextPage;
	const result = isEndOfPage && !isUserSlideBack;
	return result;
};
const getPrototypeDuringPending = (type: string): any => {
	switch (type) {
		case 'netflix':
			return PROTOTYPE.PAGE();
		default:
			return [];
	}
};
const getNewPage = async (type: string): Promise<any> => {
	try {
		switch (type) {
			case 'netflix':
				// getNewPageNetFlix();
				return '';
			default:
				return ' ';
		}
	} catch (error) {}
};
const getUrlForVideo = async (
	type: string | undefined,
	id: number | string,
): Promise<string> => {
	try {
		switch (type) {
			case 'netflix':
				const url = await getVideoUrl(id);
				return url;
			default:
				return ' ';
		}
	} catch (error) {
		console.log(
			'file: Common/logic/functions, method: getUrlForVideo, error: ',
			error,
		);
		return '';
	}
};

export {
	appendDataToArticleTwo,
	doWeRequireANewPage,
	getNewPage,
	getPrototypeDuringPending,
	getUrlForVideo,
};
