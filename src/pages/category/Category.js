import { useParams } from 'react-router-dom';
import * as S from '../not-found/NotFound.styles';
import React from 'react';
import { CreateNavMenu } from '../../components/navMenu/NavMenu.js';
import { ErrorAudioPlayer } from '../../components/forError/ErrorAudioPlayer';
import { ErrorSidebar } from '../../components/forError/ErrorSidebar';
import { categoryMock } from './CategoryMock';
import { CategoryPlaylistItem } from '../../components/playlistItem/CategoryPlaylistitem';
import { playlistData } from '../../components/playlistItem/PlaylistData';

export const Category = (
) => {
	const params = useParams();

	const track = categoryMock.find(track => track.id === Number(params.id));

	return (
		<S.Wrapper>
			<S.Container>
				<S.Main>
					<CreateNavMenu

					/>

					<S.MainCenterBlock>
						<S.CenterblockSearch>
							<S.SearchSvg>
								<use xlinkHref='/img/icon/sprite.svg#icon-search' />
							</S.SearchSvg>
							<S.SearchText type='search' placeholder='Поиск' name='search' />
						</S.CenterblockSearch>
						<S.CenterblockH2>{track.category}</S.CenterblockH2>

						<S.CenterblockContent>
							<S.ContentTitle>
								<S.PlaylistTitleCol1>Трек</S.PlaylistTitleCol1>
								<S.PlaylistTitleCol2>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol2>
								<S.PlaylistTitleCol3>АЛЬБОМ</S.PlaylistTitleCol3>
								<S.PlaylistTitleCol4>
									<S.PlaylistTitleSvg alt='time'>
										<use xlinkHref='/img/icon/sprite.svg#icon-watch' />
									</S.PlaylistTitleSvg>
								</S.PlaylistTitleCol4>
							</S.ContentTitle>
							<S.ContentPlaylist>
								<CategoryPlaylistItem playlistData={playlistData} />
							</S.ContentPlaylist>
						</S.CenterblockContent>
					</S.MainCenterBlock>
					<ErrorSidebar />
				</S.Main>

				<ErrorAudioPlayer />
			</S.Container>
		</S.Wrapper>
	);
};
