import { Result } from '../../../Common/type/type';
import { TArticleTwo } from '../../../component/tree/molecule';
import { TSlideInformation } from '../../../component/tree/organism';
import { INFOS_PAGE_NETFLIX, PROTOTYPE } from '../../netflix/constant';
import { getNewPageNetFlix } from '../../netflix/dataManagment/reducer';
import { appendDataToArticleTwoNetflixData } from '../../netflix/logic/functions';
import { INFOS_PAGE_DEFAULT } from '../constant';

const completeArticleTwoWithDataReceived = (
	type: string,
	data: Result,
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
	console.log(totalOfSlides, 'total of slides');
	const slidesRemaining = totalOfSlides - slideInformation.slideSeen;
	console.log(slidesRemaining, 'slides remaining');
	const isUserSlideBack =
		slideInformation.oldSlide === slideInformation.slideSeen;
	const isEndOfPage = slidesRemaining === indiceToTriggerNextPage;
	console.log(isEndOfPage, 'is end of page');
	const result = isEndOfPage && !isUserSlideBack;
	return result;
};

const getPrototypeDuringPending = (type: string) => {
	switch (type) {
		case 'netflix':
			return PROTOTYPE.PAGE();
		default:
			return [];
	}
};
const getNewPage = async (type: string) => {
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
export {
	completeArticleTwoWithDataReceived,
	doWeRequireANewPage,
	getNewPage,
	getPrototypeDuringPending,
};
