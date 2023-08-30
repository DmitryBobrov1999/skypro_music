import React from 'react';
import ContentLoader from 'react-content-loader';

const SidebarSkeleton = () => (
	<ContentLoader
		speed={2}
		width={250}
		height={150}
		viewBox='0 0 250 150'
		backgroundColor='#1f1f1f'
		foregroundColor='#ecebeb'
	>
		<rect x='0' y='0' rx='0' ry='0' width='250' height='150' />
	</ContentLoader>
);

const TracklistSkeleton = () => (
	<ContentLoader
		speed={2}
		width={112}
		height={51}
		viewBox='0 0 112 51'
		backgroundColor='#1f1f1f'
		foregroundColor='#ecebeb'
	>
		<rect x='63' y='7' rx='0' ry='0' width='59' height='15' />
		<rect x='63' y='29' rx='0' ry='0' width='59' height='15' />
		<rect x='0' y='0' rx='0' ry='0' width='51' height='51' />
	</ContentLoader>
);

const PlaylistItemSkeleton = () => (
	<ContentLoader
		speed={2}
		width={1107}
		height={51}
		viewBox='0 0 1107 51'
		backgroundColor='#1f1f1f'
		foregroundColor='#ecebeb'
	>
		<rect x='68' y='16' rx='0' ry='0' width='356' height='19' />
		<rect x='0' y='0' rx='0' ry='0' width='51' height='51' />
		<rect x='459' y='16' rx='0' ry='0' width='271' height='19' />
		<rect x='791' y='16' rx='0' ry='0' width='339' height='19' />
	</ContentLoader>
);

export { SidebarSkeleton, TracklistSkeleton, PlaylistItemSkeleton };
