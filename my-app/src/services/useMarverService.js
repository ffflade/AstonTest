import { useHttp } from "../hooks/http.hook";
import { _apiKey } from "./marvelApiKey";
import { _apiBase } from './marvelApi';

const useMarvelService = () => {
	const {loading, request, error, clearError} = useHttp();

	const _baseOffset = 285;

	const getAllCharacters = async (offset = _baseOffset) => {
		const res = await request(`${_apiBase}characters?limit=12&offset=${offset}&${_apiKey}`);
		return res.data.results.map(_transformCharacter);
	}

	const getCharaactersStartWith = async (name) => {
		const res = await request(`${_apiBase}characters?limit=48&nameStartsWith=${name}&orderBy=-name&${_apiKey}`);
		return res.data.results.map(_transformCharacter);
	}

	const getCharacter = async (id) => {
		const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
		return _transformCharacter(res.data.results[0]);
	}

	const _transformCharacter = (char) => {
		return {
			id: char.id,
			name: char.name,
			description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
			thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].url,
			comics: char.comics.items
		}
	}



	return {loading, error, clearError, getAllCharacters, getCharaactersStartWith, getCharacter}
}

export default useMarvelService;